import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "../assets/saansa-productions-logo.png.asset.json";
import heroLarge from "../assets/hero-chennai-1280.mp4.asset.json";
import heroSmall from "../assets/hero-chennai-640.mp4.asset.json";
import heroPosterAsset from "../assets/hero-chennai-poster.jpg.asset.json";
import anthologyLarge from "../assets/slate-anthology-1280.mp4.asset.json";
import anthologySmall from "../assets/slate-anthology-640.mp4.asset.json";
import webseriesLarge from "../assets/slate-webseries-1280.mp4.asset.json";
import webseriesSmall from "../assets/slate-webseries-640.mp4.asset.json";
import featureLarge from "../assets/slate-feature-1280.mp4.asset.json";
import featureSmall from "../assets/slate-feature-640.mp4.asset.json";
import { useSmallScreen, useVideoEngagement } from "@/lib/video-analytics";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SAANSA Productions — Film Production & Anti-Leak Security Platform" },
      {
        name: "description",
        content:
          "SAANSA Productions is a Tamil Nadu-based film production house with a proprietary anti-leak security stack — SecureReel — protecting scripts, dailies, post and screeners end-to-end.",
      },
      { property: "og:title", content: "SAANSA Productions" },
      {
        property: "og:description",
        content:
          "A production house where leak-prevention is built in. Films, web series and SecureReel — our end-to-end chain-of-custody platform for film content.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Divisions", href: "#divisions" },
  { label: "SecureReel", href: "#securereel" },
  { label: "Slate", href: "#slate" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Divisions />
      <SecureReel />
      <Slate />
      <WhyUs />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-3 sm:px-5 md:px-6 h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-between gap-2 sm:gap-4">
        <a href="#home" className="flex items-center shrink-0" aria-label="SAANSA Productions home">
          <img
            src={logoAsset.url}
            alt="SAANSA Productions"
            className="logo-glow h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-[13px] tracking-[0.2em] uppercase text-foreground/75 hover:text-gold transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex btn-cinematic !py-2.5 !px-5 !text-[11px]"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const videoRef = useVideoEngagement("hero_tamilnadu_monuments");
  const small = useSmallScreen();
  return (
    <section
      id="home"
      className="film-grain vignette relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={small ? heroSmall.url : heroLarge.url}
        poster={heroPosterAsset.url}
        preload="none"
        loop
        muted
        playsInline
        aria-hidden="true"
      />


      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs tracking-[0.25em] text-gold uppercase">
              Based in Tamil Nadu · India
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-medium">
            Cinema, produced with
            <span className="italic text-gold"> zero-leak </span>
            precision.
          </h1>
          <p className="mt-8 text-lg text-foreground/80 max-w-2xl leading-relaxed">
            SAANSA Productions is a next-generation film production house — where every script,
            daily, and screener is protected by <span className="text-gold">SecureReel</span>, our
            proprietary end-to-end chain-of-custody platform for film content.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-cinematic">
              Start a Project <span aria-hidden>→</span>
            </a>
            <a href="#securereel" className="btn-ghost-gold">
              Explore SecureReel
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              { k: "Production", v: "Film & Web Series" },
              { k: "SecureReel", v: "6-Module Platform" },
              { k: "Zero", v: "Leak Guarantee" },
              { k: "24 hrs", v: "Proposal Turnaround" },
            ].map((s) => (
              <div key={s.k} className="border-l border-gold/40 pl-4">
                <div className="font-display text-2xl md:text-3xl text-gold">{s.k}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-muted-foreground uppercase z-10">
        Scroll
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Watermarking",
    "Encrypted Dailies",
    "AI Leak Detection",
    "Blockchain Audit",
    "OTT-Ready",
    "Tamil · Regional",
  ];
  return (
    <div className="border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        <span className="text-xs tracking-[0.3em] uppercase text-gold">Built-In Security</span>
        {items.map((i) => (
          <span key={i} className="text-sm text-foreground/70">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <span className="h-px w-10 bg-gold" />
      <span className="text-xs tracking-[0.35em] uppercase text-gold">{children}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel>About SAANSA Productions</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            A production house built on <span className="italic text-gold">trust</span>, engineered
            against leaks.
          </h2>
        </div>
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            SAANSA Productions is an India-based film and web-series production house solving one of
            the industry's most expensive problems — online leakage of scenes, dailies and
            screeners. Every project we produce runs through SecureReel, our in-house anti-leak
            chain-of-custody platform.
          </p>
          <p>
            We are both a <span className="text-gold">production company</span> making original
            regional films and series, and a <span className="text-gold">security-tech platform</span>{" "}
            we license to other producers. Every film we ship is a live case study for the tech.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              "Production House",
              "SecureReel Tech Platform",
              "Regional & OTT Content",
              "Chain-of-Custody Certified",
            ].map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Divisions() {
  const arms = [
    {
      tag: "Arm 01",
      title: "Production",
      desc: "Original films, web series and anthology content — starting from Tamil Nadu, distributed on OTT and cinema. Small-budget, high-craft, regionally rooted.",
      points: ["Feature films", "Web series & anthologies", "OTT-first distribution", "Regional-language originals"],
    },
    {
      tag: "Arm 02",
      title: "SecureReel Platform",
      desc: "Our proprietary anti-leak stack — the only end-to-end chain-of-custody platform covering script, dailies, post, distribution and theatrical. Battle-tested on our own films first.",
      points: ["Forensic watermarking", "Secure dailies cloud", "AI leak-detection crawler", "Blockchain audit trail"],
    },
  ];
  return (
    <section id="divisions" className="py-28 md:py-36 bg-card/30 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <SectionLabel>Two Arms · One Vision</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            We make the films. We built the tech that protects them.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {arms.map((a) => (
            <div
              key={a.title}
              className="group relative rounded-lg border border-border bg-background/60 p-10 hover:border-gold/60 transition-colors"
            >
              <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4">{a.tag}</div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{a.title}</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">{a.desc}</p>
              <ul className="space-y-2.5">
                {a.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="h-px w-6 bg-gold/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecureReel() {
  const modules = [
    {
      n: "01",
      t: "Forensic Watermarking",
      d: "Invisible, unique watermarks per copy — per screening, per reviewer, per device. Extract and trace any leaked frame back to its source.",
    },
    {
      n: "02",
      t: "AI Leak-Detection Crawler",
      d: "Bots continuously scan YouTube, Telegram, Instagram Reels, torrents and piracy sites, fingerprint-matching against unreleased footage. Auto-DMCA on match.",
    },
    {
      n: "03",
      t: "Secure Dailies Pipeline",
      d: "Encrypted, access-controlled cloud workspace for VFX, editing and color vendors. Watch-only streaming, role-based access, full session logging.",
    },
    {
      n: "04",
      t: "Script Access Control",
      d: "Watermarked, redacted scripts per actor and crew member — with access logs showing who viewed what, and when.",
    },
    {
      n: "05",
      t: "Anti-Camcording",
      d: "IR-based camcorder detection during theatrical screenings, in partnership with participating cinemas.",
    },
    {
      n: "06",
      t: "Blockchain Chain-of-Custody",
      d: "Immutable log of every file touch — evidence trail for legal action, insurance claims, and studio audits.",
    },
  ];
  return (
    <section id="securereel" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <SectionLabel>The SecureReel Platform</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Six modules. One continuous chain-of-custody.
            </h2>
          </div>
          <p className="text-foreground/70 leading-relaxed">
            Rather than picking a single wedge, SecureReel covers the full lifecycle of a film — pre-production
            to theatrical to legal audit — so no single stage is left exposed for leakers to exploit.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-lg overflow-hidden">
          {modules.map((m) => (
            <div
              key={m.n}
              className="bg-background p-8 hover:bg-card transition-colors group"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-4xl text-gold/70 group-hover:text-gold transition-colors">
                  {m.n}
                </span>
                <h3 className="font-display text-2xl">{m.t}</h3>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SlateCard({
  p,
}: {
  p: { id: string; tag: string; title: string; meta: string; desc: string; sm: string; lg: string };
}) {
  const videoRef = useVideoEngagement(p.id);
  const small = useSmallScreen();
  return (
    <article className="group rounded-lg border border-border bg-background/60 overflow-hidden hover:border-gold/50 transition-colors">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
          src={small ? p.sm : p.lg}
          preload="none"

          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase text-gold">
          {p.tag}
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="font-display text-2xl mb-1">{p.title}</h3>
          <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{p.meta}</div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
      </div>
    </article>
  );
}

function Slate() {
  const projects = [
    {
      id: "slate_anthology",
      tag: "Flagship · In Development",
      title: "Untitled Crime Anthology",
      meta: "Tamil · 6–8 Episodes · OTT",
      desc: "A four-story crime anthology — shot end-to-end under the SecureReel stack. Every script, daily and screener is watermarked and traced. Zero-leak by design.",
      lg: anthologyLarge.url,
      sm: anthologySmall.url,
    },
    {
      id: "slate_webseries",
      tag: "Web Series",
      title: "Regional Originals",
      meta: "Digital-First · Tamil Nadu",
      desc: "Tight, character-driven web series produced with lean crews, real locations, and full end-to-end SecureReel protection from script room to release.",
      lg: webseriesLarge.url,
      sm: webseriesSmall.url,
    },
    {
      id: "slate_feature",
      tag: "Feature Slate",
      title: "Small-Budget Cinema",
      meta: "Theatrical + OTT · Regional",
      desc: "A curated slate of small-budget regional features — thrillers and drama first. Every production is a live proof-of-concept for the SecureReel platform.",
      lg: featureLarge.url,
      sm: featureSmall.url,
    },
  ];

  return (
    <section id="slate" className="py-28 md:py-36 bg-card/30 border-y border-border/60">

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <SectionLabel>Our Slate</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Cinema that tests the tech that protects it.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <SlateCard key={p.title} p={p} />
          ))}
        </div>

      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { t: "Founder-Led Craft", d: "Technical + industry-embedded leadership. We built the tools; we produce the films." },
    { t: "Zero-Leak by Design", d: "Every project ships under SecureReel — script room to release. No add-ons, no gaps." },
    { t: "Dual Revenue Model", d: "Production revenue plus licensable tech — de-risked and self-validating." },
    { t: "Regional Roots", d: "Tamil Nadu-first: real relationships, lean crews, authentic stories." },
    { t: "OTT & Theatrical", d: "Distribution flexibility across streaming, cinema and international markets." },
    { t: "Investor-Ready", d: "Documentation, cap table and case studies structured for pre-seed and seed rounds." },
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <SectionLabel>Why SAANSA</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            The only production house that ships films <span className="italic text-gold">and</span>{" "}
            the platform that protects them.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.t} className="border-t border-gold/30 pt-6">
              <h3 className="font-display text-2xl mb-3">{i.t}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    "Concept",
    "Script Lock",
    "Pre-Production",
    "Secure Dailies",
    "Post & VFX",
    "Watermarked Master",
    "Release & Monitor",
    "Audit & Report",
  ];
  return (
    <section id="process" className="py-28 md:py-36 bg-card/30 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            From concept to release — 8 protected steps.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60">
          {steps.map((s, i) => (
            <div key={s} className="bg-background p-8">
              <div className="font-display text-3xl text-gold mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-sm tracking-wide">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionLabel>Get in Touch</SectionLabel>
        <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
          Ready to make something <span className="italic text-gold">leak-proof?</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you're pitching a project, licensing SecureReel, or exploring co-production —
          we'll get back with a proposal within 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="mailto:ceo@saansaproductions.com" className="btn-cinematic">
            ceo@saansaproductions.com
          </a>
          <a href="#slate" className="btn-ghost-gold">
            View Slate
          </a>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
          {[
            { k: "Production", v: "Films · Web Series · Anthologies" },
            { k: "Platform", v: "SecureReel Licensing · B2B" },
            { k: "Based In", v: "Tamil Nadu · India" },
          ].map((c) => (
            <div key={c.k} className="border-t border-gold/40 pt-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">{c.k}</div>
              <div className="text-sm text-foreground/80">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="flex items-center shrink-0" aria-label="SAANSA Productions home">
          <img
            src={logoAsset.url}
            alt="SAANSA Productions"
            className="logo-glow h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />
        </a>
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} SAANSA Productions. Films & SecureReel platform. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#securereel" className="hover:text-gold transition-colors">SecureReel</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
