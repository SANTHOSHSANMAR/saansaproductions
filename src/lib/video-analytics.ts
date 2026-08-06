import { useEffect, useRef, useState } from "react";

type VideoEvent = "video_view" | "video_play" | "video_pause" | "video_progress";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a video engagement event to any analytics layer present (gtag / dataLayer). */
export function trackVideoEvent(
  event: VideoEvent,
  payload: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  const data = { event, ...payload, ts: Date.now() };
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(data);
  }
  if (import.meta.env.DEV) console.debug("[video-analytics]", data);
}

/** true once the viewport is a small screen (or the user asked to save data). */
export function useSmallScreen() {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () => setSmall(mql.matches || conn?.saveData === true);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return small;
}

/**
 * Plays a video only while it is in the viewport, and reports
 * view / play / pause / progress engagement events.
 */
export function useVideoEngagement(videoId: string) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let viewed = false;
    const quartiles = new Set<number>();

    const onPlay = () => trackVideoEvent("video_play", { video_id: videoId });
    const onPause = () =>
      trackVideoEvent("video_pause", {
        video_id: videoId,
        seconds_played: Math.round(el.currentTime),
      });
    const onTimeUpdate = () => {
      if (!el.duration || !isFinite(el.duration)) return;
      const pct = Math.floor((el.currentTime / el.duration) * 4) * 25;
      if (pct > 0 && pct <= 100 && !quartiles.has(pct)) {
        quartiles.add(pct);
        trackVideoEvent("video_progress", { video_id: videoId, percent: pct });
      }
    };
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("timeupdate", onTimeUpdate);

    let io: IntersectionObserver | undefined;
    if (typeof IntersectionObserver === "undefined") {
      void el.play().catch(() => {});
    } else {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            if (!viewed) {
              viewed = true;
              trackVideoEvent("video_view", { video_id: videoId });
            }
            void el.play().catch(() => {});
          } else if (!el.paused) {
            el.pause();
          }
        },
        { threshold: 0.2 },
      );
      io.observe(el);
    }

    return () => {
      io?.disconnect();
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [videoId]);

  return ref;
}
