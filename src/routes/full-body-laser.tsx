import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/offers/full-body-laser-hero.jpeg";
import offerPoster from "@/assets/offers/laser-hair-removal-offer.jpeg";
import imgUpperlips from "@/assets/offers/lhr-upperlips.jpg";
import imgChin from "@/assets/offers/lhr-chin.jpg";
import imgUnderarms from "@/assets/offers/lhr-underarms.jpg";
import logoSvg from "@/assets/logo-dtanique.svg";

export const Route = createFileRoute("/full-body-laser")({
  head: () => ({
    meta: [
      { title: "Full Body Laser Hair Removal — ₹39,999 | D'Tanique JP Nagar" },
      {
        name: "description",
        content:
          "Head-to-toe full body laser hair removal — 10 sessions at ₹39,999. First 50 patients only. Certified dermatologist Senior Dermatologist Team. D'Tanique JP Nagar, Bengaluru.",
      },
      { property: "og:title", content: "Full Body Laser Hair Removal — ₹39,999 | D'Tanique" },
      {
        property: "og:description",
        content:
          "10 sessions head-to-toe at ₹39,999. First 50 patients only. Diode 810nm laser, dermatologist-supervised.",
      },
      { property: "og:url", content: "https://dtaniquethedermaclinicjpnagar.com/full-body-laser" },
    ],
    links: [
      { rel: "canonical", href: "https://dtaniquethedermaclinicjpnagar.com/full-body-laser" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: FullBodyLaserPage,
});

const WA = "918884448906";
const TEL = "+918884448906";

const CSS = `
.lhr-root, .lhr-root *, .lhr-root *::before, .lhr-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
.lhr-root {
  --gold:#C4A882; --gold-light:#E8D8C3; --gold-pale:#E8D8C3;
  --cream:#F7F3EE; --dark:#1C1916; --dark-mid:#2A2520; --charcoal:#4A4541;
  --text:#1C1916; --text-light:#8C8480; --white:#FFFFFF;
  font-family:'DM Sans',sans-serif; background:var(--cream); color:var(--text);
}
.lhr-root .bar { background:var(--dark); color:var(--gold-light); text-align:center; padding:10px 20px; font-size:13px; letter-spacing:0.08em; font-weight:500; }
.lhr-root .bar span { color:var(--white); }

.lhr-root .hero { min-height:90vh; display:grid; grid-template-columns:1fr 1fr; position:relative; overflow:hidden; }
.lhr-root .hero-left { background:var(--dark); display:flex; flex-direction:column; justify-content:center; padding:80px 64px; position:relative; overflow:hidden; }
.lhr-root .hero-left::before { content:''; position:absolute; top:-100px; right:-100px; width:400px; height:400px; background:radial-gradient(circle, rgba(196,168,130,0.15) 0%, transparent 70%); border-radius:50%; }
.lhr-root .offer-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(196,168,130,0.15); border:1px solid rgba(196,168,130,0.4); color:var(--gold-light); padding:8px 16px; border-radius:2px; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; font-weight:500; margin-bottom:32px; width:fit-content; }
.lhr-root .offer-badge::before { content:''; width:6px; height:6px; background:var(--gold); border-radius:50%; animation:lhrPulse 1.5s ease infinite; }
@keyframes lhrPulse { 0%,100%{opacity:1; transform:scale(1);} 50%{opacity:0.5; transform:scale(1.4);} }
.lhr-root .hero-tag { font-family:'Cormorant Garamond',serif; font-size:13px; color:var(--gold); letter-spacing:0.15em; text-transform:uppercase; margin-bottom:16px; }
.lhr-root .hero-title { font-family:'Cormorant Garamond',serif; font-size:clamp(40px,4.5vw,64px); font-weight:300; color:var(--white); line-height:1.1; margin-bottom:8px; }
.lhr-root .hero-title em { font-style:italic; color:var(--gold-light); }
.lhr-root .hero-title strong { font-weight:600; display:block; }
.lhr-root .hero-sub { font-size:15px; color:rgba(255,255,255,0.6); line-height:1.7; margin:16px 0 36px; max-width:420px; }

.lhr-root .price-block { background:rgba(196,168,130,0.1); border:1px solid rgba(196,168,130,0.3); border-radius:4px; padding:24px 28px; margin-bottom:32px; position:relative; }
.lhr-root .price-label { font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--gold); margin-bottom:8px; }
.lhr-root .price-main { font-family:'Cormorant Garamond',serif; font-size:56px; font-weight:600; color:var(--white); line-height:1; margin-bottom:4px; }
.lhr-root .price-main span.sym { font-size:28px; vertical-align:top; margin-top:8px; display:inline-block; }
.lhr-root .price-sessions { background:var(--gold); color:var(--dark); display:inline-block; padding:5px 14px; font-size:12px; font-weight:600; letter-spacing:0.08em; border-radius:2px; margin-top:10px; }
.lhr-root .price-note { position:absolute; top:-12px; right:20px; background:#C0392B; color:white; font-size:11px; font-weight:600; letter-spacing:0.08em; padding:5px 14px; border-radius:2px; text-transform:uppercase; }

.lhr-root .hero-bullets { list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:32px; }
.lhr-root .hero-bullets li { font-size:13px; color:rgba(255,255,255,0.75); display:flex; align-items:center; gap:8px; }
.lhr-root .hero-bullets li::before { content:''; width:16px; height:16px; flex-shrink:0; background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='7' stroke='%23C9A84C' stroke-width='1' fill='none'/%3E%3Cpath d='M5 8l2 2 4-4' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") center/contain no-repeat; }

.lhr-root .hero-ctas { display:flex; gap:14px; flex-wrap:wrap; }
.lhr-root .btn-primary { background:var(--gold); color:var(--dark); padding:16px 32px; font-size:13px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; border:none; border-radius:2px; cursor:pointer; text-decoration:none; display:inline-block; transition:all 0.2s; }
.lhr-root .btn-primary:hover { background:var(--gold-light); transform:translateY(-2px); box-shadow:0 8px 24px rgba(196,168,130,0.3); }
.lhr-root .btn-secondary { background:transparent; color:var(--white); padding:16px 32px; font-size:13px; letter-spacing:0.06em; border:1px solid rgba(255,255,255,0.3); border-radius:2px; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:10px; transition:all 0.2s; }
.lhr-root .btn-secondary:hover { border-color:var(--gold); color:var(--gold); }

.lhr-root .hero-right { position:relative; overflow:hidden; background:#1C1916; }
.lhr-root .hero-right .hero-slide { position:absolute; inset:0; opacity:0; animation: lhrHeroFade 12s infinite; }
.lhr-root .hero-right .hero-slide.s1 { animation-delay: 0s; }
.lhr-root .hero-right .hero-slide.s2 { animation-delay: 6s; background:#F7EFD9; display:flex; align-items:center; justify-content:center; padding:24px; }
.lhr-root .hero-right .hero-slide img { width:100%; height:100%; object-fit:cover; object-position:top center; filter:brightness(0.92); }
.lhr-root .hero-right .hero-slide.s2 img { object-fit:contain; filter:none; box-shadow:0 20px 60px rgba(0,0,0,0.35); border-radius:6px; }
@keyframes lhrHeroFade { 0%,40%{opacity:1} 50%,90%{opacity:0} 100%{opacity:1} }
.lhr-root .hero-right-overlay { position:absolute; inset:0; background:linear-gradient(135deg, rgba(28,25,22,0.3) 0%, transparent 60%); pointer-events:none; z-index:3; }
.lhr-root .hero-ba-strip { position:absolute; left:24px; right:24px; bottom:24px; display:grid; grid-template-columns:repeat(4,1fr); gap:10px; z-index:2; }
.lhr-root .hero-ba-strip .ba-thumb { position:relative; aspect-ratio:1/1; overflow:hidden; border-radius:3px; border:1px solid rgba(196,168,130,0.4); box-shadow:0 8px 24px rgba(0,0,0,0.4); }
.lhr-root .hero-ba-strip .ba-thumb img { width:100%; height:100%; object-fit:cover; filter:none; }
.lhr-root .hero-ba-strip .ba-thumb span { position:absolute; left:6px; bottom:6px; background:rgba(28,25,22,0.85); color:var(--gold-light); font-size:9px; letter-spacing:0.1em; text-transform:uppercase; padding:3px 7px; border-radius:2px; }

.lhr-root .results-section { background:var(--cream); }
.lhr-root .results-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:24px; max-width:1100px; margin:0 auto; }
.lhr-root .ba-card { background:var(--white); border:1px solid rgba(196,168,130,0.2); border-radius:4px; overflow:hidden; transition:all 0.25s; }
.lhr-root .ba-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(196,168,130,0.18); border-color:var(--gold); }
.lhr-root .ba-image { width:100%; aspect-ratio:16/9; object-fit:contain; object-position:center; display:block; background:#FFFFFF; }
.lhr-root .ba-face { aspect-ratio:4/5; }
.lhr-root .ba-caption { padding:18px 22px; display:flex; align-items:center; justify-content:space-between; gap:12px; }
.lhr-root .ba-zone { font-family:'Cormorant Garamond',serif; font-size:20px; color:var(--dark); }
.lhr-root .ba-sessions { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--gold); }
.lhr-root .results-disclaimer { text-align:center; font-size:12px; color:var(--text-light); margin-top:32px; font-style:italic; }
@media (max-width:768px){ .lhr-root .results-grid { grid-template-columns:1fr; } .lhr-root .hero-ba-strip { grid-template-columns:repeat(4,1fr); left:12px; right:12px; bottom:12px; gap:6px; } }

.lhr-root .urgency { background:linear-gradient(90deg, var(--dark) 0%, var(--charcoal) 50%, var(--dark) 100%); padding:20px 48px; display:flex; align-items:center; justify-content:center; gap:48px; flex-wrap:wrap; }
.lhr-root .urgency-item { display:flex; align-items:center; gap:12px; color:var(--white); }
.lhr-root .urgency-item .icon { font-size:20px; }
.lhr-root .urgency-item .text { font-size:13px; line-height:1.4; }
.lhr-root .urgency-item .text strong { color:var(--gold-light); display:block; font-size:15px; }
.lhr-root .urgency-sep { width:1px; height:36px; background:rgba(196,168,130,0.25); }

.lhr-root section { padding:96px 48px; }
.lhr-root .section-tag { font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); margin-bottom:12px; }
.lhr-root .section-title { font-family:'Cormorant Garamond',serif; font-size:clamp(32px,3.6vw,48px); font-weight:300; line-height:1.15; color:var(--dark); margin-bottom:16px; }
.lhr-root .section-title em { font-style:italic; color:var(--gold); }
.lhr-root .section-lead { font-size:16px; color:var(--text-light); line-height:1.7; max-width:560px; margin-bottom:48px; }
.lhr-root .center { text-align:center; }
.lhr-root .center .section-lead { margin:0 auto 48px; }

.lhr-root .included { background:var(--dark); color:var(--white); }
.lhr-root .included-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:rgba(196,168,130,0.15); border:1px solid rgba(196,168,130,0.2); border-radius:4px; overflow:hidden; }
.lhr-root .included-card { background:var(--dark-mid); padding:32px 24px; text-align:center; transition:background 0.2s; }
.lhr-root .included-card:hover { background:var(--charcoal); }
.lhr-root .ic-icon { font-size:30px; margin-bottom:12px; }
.lhr-root .ic-title { font-family:'Cormorant Garamond',serif; font-size:20px; color:var(--white); margin-bottom:6px; }
.lhr-root .ic-sub { font-size:12px; color:rgba(255,255,255,0.45); }
.lhr-root .ic-check { display:inline-flex; gap:4px; color:var(--gold); font-size:11px; letter-spacing:0.06em; margin-top:10px; }

.lhr-root .timeline-section { background:var(--cream); }
.lhr-root .timeline { display:grid; grid-template-columns:repeat(5,1fr); gap:0; position:relative; }
.lhr-root .timeline::before { content:''; position:absolute; top:36px; left:5%; right:5%; height:1px; background:linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent); }
.lhr-root .timeline-step { display:flex; flex-direction:column; align-items:center; text-align:center; padding:0 12px; }
.lhr-root .ts-dot { width:72px; height:72px; border-radius:50%; background:var(--dark); border:2px solid var(--gold); display:flex; flex-direction:column; align-items:center; justify-content:center; margin-bottom:20px; position:relative; z-index:1; transition:all 0.2s; }
.lhr-root .timeline-step:hover .ts-dot { background:var(--gold); }
.lhr-root .ts-dot .session { font-size:9px; color:var(--gold); letter-spacing:0.08em; text-transform:uppercase; }
.lhr-root .timeline-step:hover .ts-dot .session { color:var(--dark); }
.lhr-root .ts-dot .num { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:600; color:var(--white); line-height:1; }
.lhr-root .timeline-step:hover .ts-dot .num { color:var(--dark); }
.lhr-root .ts-pct { font-family:'Cormorant Garamond',serif; font-size:28px; font-weight:600; color:var(--gold); margin-bottom:6px; }
.lhr-root .ts-desc { font-size:12px; color:var(--text-light); line-height:1.5; }

.lhr-root .offer-section { background:linear-gradient(135deg, var(--dark) 0%, var(--dark-mid) 100%); position:relative; overflow:hidden; }
.lhr-root .offer-section::before { content:''; position:absolute; top:-200px; right:-200px; width:600px; height:600px; background:radial-gradient(circle, rgba(196,168,130,0.12) 0%, transparent 65%); border-radius:50%; pointer-events:none; }
.lhr-root .offer-inner { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; position:relative; z-index:1; }
.lhr-root .offer-price-card { background:rgba(196,168,130,0.08); border:1px solid rgba(196,168,130,0.3); border-radius:4px; padding:36px; }
.lhr-root .opc-tag { font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); margin-bottom:20px; }
.lhr-root .opc-price { font-family:'Cormorant Garamond',serif; font-size:72px; font-weight:600; color:var(--white); line-height:1; margin-bottom:4px; }
.lhr-root .opc-price .sym { font-size:32px; vertical-align:top; margin-top:14px; display:inline-block; }
.lhr-root .opc-sessions-badge { display:inline-block; background:var(--gold); color:var(--dark); padding:8px 20px; font-size:13px; font-weight:600; letter-spacing:0.06em; border-radius:2px; margin-bottom:24px; }
.lhr-root .opc-list { list-style:none; margin-bottom:28px; }
.lhr-root .opc-list li { font-size:14px; color:rgba(255,255,255,0.75); padding:9px 0; border-bottom:1px solid rgba(196,168,130,0.12); display:flex; align-items:center; gap:10px; }
.lhr-root .opc-list li:last-child { border-bottom:none; }
.lhr-root .opc-list li::before { content:'✓'; color:var(--gold); font-size:14px; }
.lhr-root .opc-scarcity { background:rgba(192,57,43,0.15); border:1px solid rgba(192,57,43,0.4); border-radius:3px; padding:14px 20px; display:flex; align-items:center; gap:12px; margin-bottom:24px; }
.lhr-root .sc-dot { width:10px; height:10px; background:#E74C3C; border-radius:50%; flex-shrink:0; animation:lhrPulse 1.2s ease infinite; }
.lhr-root .sc-text { font-size:13px; color:rgba(255,255,255,0.8); }
.lhr-root .sc-text strong { color:#E74C3C; }
.lhr-root .opc-bullets { list-style:none; margin-bottom:32px; }
.lhr-root .opc-bullets li { display:flex; align-items:center; gap:12px; padding:12px 0; border-bottom:1px solid rgba(196,168,130,0.12); font-size:14px; color:rgba(255,255,255,0.75); }
.lhr-root .opc-bullets li:last-child { border-bottom:none; }
.lhr-root .opc-bullets li span { color:var(--gold); font-size:18px; }

.lhr-root .form-section { background:var(--cream); }
.lhr-root .form-wrap { max-width:640px; margin:0 auto; background:var(--white); border:1px solid rgba(196,168,130,0.2); border-radius:4px; padding:48px; box-shadow:0 24px 64px rgba(28,25,22,0.08); }
.lhr-root .offer-pill { display:inline-flex; gap:8px; background:var(--gold-pale); border:1px solid rgba(196,168,130,0.4); color:var(--dark); padding:8px 16px; border-radius:2px; font-size:12px; font-weight:600; letter-spacing:0.06em; margin-bottom:28px; }
.lhr-root .form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px; }
.lhr-root .form-group { margin-bottom:16px; }
.lhr-root .form-group label { display:block; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-light); margin-bottom:6px; font-weight:500; }
.lhr-root .form-group input, .lhr-root .form-group select { width:100%; padding:14px 16px; border:1px solid rgba(196,168,130,0.25); border-radius:2px; font-family:'DM Sans',sans-serif; font-size:14px; color:var(--dark); background:var(--cream); outline:none; transition:border-color 0.2s, box-shadow 0.2s; }
.lhr-root .form-group input:focus, .lhr-root .form-group select:focus { border-color:var(--gold); box-shadow:0 0 0 3px rgba(196,168,130,0.1); }
.lhr-root .form-submit { width:100%; background:var(--gold); color:var(--dark); padding:18px; font-size:14px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; border:none; border-radius:2px; cursor:pointer; transition:all 0.2s; margin-top:8px; }
.lhr-root .form-submit:hover { background:var(--gold-light); }
.lhr-root .form-privacy { text-align:center; font-size:12px; color:var(--text-light); margin-top:14px; }

.lhr-root .why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.lhr-root .why-card { background:var(--white); border:1px solid rgba(196,168,130,0.15); border-radius:4px; padding:36px 32px; transition:all 0.25s; }
.lhr-root .why-card:hover { border-color:var(--gold); transform:translateY(-4px); box-shadow:0 16px 40px rgba(196,168,130,0.12); }
.lhr-root .wc-icon { font-size:28px; margin-bottom:14px; }
.lhr-root .wc-title { font-family:'Cormorant Garamond',serif; font-size:22px; color:var(--dark); margin-bottom:8px; }
.lhr-root .wc-text { font-size:14px; color:var(--text-light); line-height:1.65; }

.lhr-root .testimonials { background:var(--dark); }
.lhr-root .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.lhr-root .testi-card { background:var(--dark-mid); border:1px solid rgba(196,168,130,0.15); border-radius:4px; padding:32px 28px; }
.lhr-root .testi-stars { color:var(--gold); font-size:14px; margin-bottom:14px; letter-spacing:2px; }
.lhr-root .testi-text { font-size:14px; color:rgba(255,255,255,0.7); line-height:1.7; margin-bottom:22px; font-style:italic; }
.lhr-root .testi-author { display:flex; align-items:center; gap:12px; }
.lhr-root .testi-avatar { width:40px; height:40px; border-radius:50%; background:var(--gold); color:var(--dark); display:flex; align-items:center; justify-content:center; font-family:'Cormorant Garamond',serif; font-size:16px; font-weight:600; }
.lhr-root .testi-name { font-size:14px; color:var(--white); font-weight:500; }
.lhr-root .testi-detail { font-size:12px; color:rgba(255,255,255,0.4); margin-top:2px; }

.lhr-root .faq-list { max-width:720px; margin:0 auto; }
.lhr-root .faq-item { border-bottom:1px solid rgba(196,168,130,0.15); }
.lhr-root .faq-q { width:100%; text-align:left; background:none; border:none; padding:22px 0; font-family:'DM Sans',sans-serif; font-size:15px; color:var(--dark); font-weight:500; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:16px; transition:color 0.2s; }
.lhr-root .faq-q:hover { color:var(--gold); }
.lhr-root .faq-icon { width:24px; height:24px; border-radius:50%; border:1px solid rgba(196,168,130,0.4); display:flex; align-items:center; justify-content:center; font-size:16px; color:var(--gold); flex-shrink:0; transition:all 0.2s; }
.lhr-root .faq-item.open .faq-icon { background:var(--gold); color:var(--dark); transform:rotate(45deg); }
.lhr-root .faq-a { font-size:14px; color:var(--text-light); line-height:1.7; max-height:0; overflow:hidden; transition:max-height 0.35s ease, padding-bottom 0.2s; padding-bottom:0; }
.lhr-root .faq-item.open .faq-a { max-height:320px; padding-bottom:22px; }

.lhr-root .final-cta { background:var(--dark); text-align:center; position:relative; overflow:hidden; }
.lhr-root .final-cta::before { content:''; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:600px; height:600px; background:radial-gradient(circle, rgba(196,168,130,0.1) 0%, transparent 60%); border-radius:50%; pointer-events:none; }
.lhr-root .final-cta-content { position:relative; z-index:1; }
.lhr-root .final-cta .section-title { color:var(--white); }
.lhr-root .final-cta .section-lead { color:rgba(255,255,255,0.6); margin:0 auto 40px; }
.lhr-root .cta-buttons { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; margin-bottom:24px; }
.lhr-root .btn-wa { background:#25D366; color:white; padding:16px 32px; font-size:13px; font-weight:600; letter-spacing:0.06em; border-radius:2px; text-decoration:none; display:inline-flex; align-items:center; gap:10px; transition:all 0.2s; }
.lhr-root .btn-wa:hover { background:#20BA5A; transform:translateY(-2px); }
.lhr-root .btn-call { background:transparent; color:var(--white); padding:16px 32px; font-size:13px; letter-spacing:0.06em; border:1px solid rgba(255,255,255,0.3); border-radius:2px; text-decoration:none; display:inline-flex; align-items:center; gap:10px; transition:all 0.2s; }
.lhr-root .btn-call:hover { border-color:var(--gold); color:var(--gold); }
.lhr-root .final-note { font-size:13px; color:rgba(255,255,255,0.35); }

.lhr-root .lhr-footer { background:#1C1916; padding:36px 48px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; color:rgba(255,255,255,0.5); }
.lhr-root .lhr-footer .footer-logo { display:block; height:32px; width:auto; filter:brightness(0) invert(1); opacity:0.9; }
.lhr-root .lhr-header { background:var(--cream); border-bottom:1px solid rgba(196,168,130,0.2); padding:14px 48px; display:flex; align-items:center; justify-content:space-between; }
.lhr-root .lhr-header .header-logo { height:36px; width:auto; display:block; }
.lhr-root .lhr-header .header-cta { font-size:12px; letter-spacing:0.06em; color:var(--dark); text-decoration:none; padding:9px 18px; border:1px solid var(--gold); border-radius:2px; transition:all 0.2s; }
.lhr-root .lhr-header .header-cta:hover { background:var(--gold); color:var(--white); }
@media (max-width:640px){ .lhr-root .lhr-header { padding:12px 20px; } .lhr-root .lhr-header .header-logo { height:28px; } }
.lhr-root .lhr-footer .footer-addr { font-size:12px; color:rgba(255,255,255,0.35); line-height:1.6; margin-top:6px; }
.lhr-root .lhr-footer .footer-copy { font-size:12px; color:rgba(255,255,255,0.25); }

@media (max-width: 1024px) {
  .lhr-root .hero { grid-template-columns:1fr; min-height:auto; }
  .lhr-root .hero-left { padding:56px 24px; }
  .lhr-root .hero-right { height:360px; }
  .lhr-root .included-grid { grid-template-columns:repeat(2,1fr); }
  .lhr-root .timeline { grid-template-columns:repeat(2,1fr); gap:32px; }
  .lhr-root .timeline::before { display:none; }
  .lhr-root .offer-inner { grid-template-columns:1fr; gap:36px; }
  .lhr-root .why-grid, .lhr-root .testi-grid { grid-template-columns:1fr; }
  .lhr-root section { padding:64px 24px; }
  .lhr-root .urgency { padding:20px 24px; gap:20px; }
  .lhr-root .urgency-sep { display:none; }
  .lhr-root .form-wrap { padding:32px 22px; }
  .lhr-root .form-row { grid-template-columns:1fr; }
  .lhr-root .lhr-footer { padding:28px 24px; }
}
`;

const included = [
  { i: "💆", t: "Face & Neck", s: "Upper lip, chin, jaw, sideburns" },
  { i: "🙋", t: "Underarms", s: "Complete underarm coverage" },
  { i: "💪", t: "Arms", s: "Full arms, hands & fingers" },
  { i: "🦵", t: "Legs", s: "Thighs, calves, feet & toes" },
  { i: "🔙", t: "Back & Chest", s: "Full back, chest & abdomen" },
  { i: "🩱", t: "Brazilian / Bikini", s: "Complete bikini zone" },
  { i: "⚡", t: "Diode 810nm", s: "Medical-grade, FDA-cleared laser" },
  { i: "🩺", t: "Dr. Consultation", s: "Each session supervised by Dr. Gandhi" },
];

const timeline = [
  { s: "1–2", p: "30%", d: "Initial reduction. Hair returns finer and slower." },
  { s: "3–4", p: "60%", d: "Visible thinning across all body zones." },
  { s: "5–6", p: "80%", d: "Major zones clear. Skin noticeably smoother." },
  { s: "7–8", p: "90%", d: "Near-permanent across all treated areas." },
  { s: "9–10", p: "95%+", d: "Permanent. Smooth, even skin head to toe." },
];

const faqs = [
  { q: "Why 10 sessions for full body?", a: "Hair grows in cycles — only actively growing hair can be treated in each session. Full body typically requires 8–10 sessions spaced 4–6 weeks apart to catch all follicles across their growth cycles and achieve 90–95% permanent reduction." },
  { q: "Is ₹39,999 the total price or per session?", a: "₹39,999 is the total package price for all 10 sessions of full body laser hair removal. This is an introductory offer exclusively for the first 50 patients. Once slots are filled, standard rates apply." },
  { q: "Does the full body package include facial hair?", a: "Yes — our head-to-toe full body package covers facial zones (upper lip, chin, jawline, sideburns), underarms, arms, legs, back, chest, abdomen and Brazilian/bikini area. Dr. Gandhi will confirm your specific treatment map at the free consultation." },
  { q: "Is it painful? Will it affect my skin tone?", a: "Our diode laser has integrated contact cooling that minimises discomfort — most patients describe it as far less painful than waxing. The laser targets only hair follicles and does not affect skin tone or complexion when performed correctly by a trained dermatologist." },
  { q: "Is it safe for South Asian / Indian skin?", a: "Absolutely. Diode 810nm is the safest wavelength for Indian and South Asian skin tones (Fitzpatrick III–VI). Dr. Gandhi has specialist expertise in treating Indian complexions safely. We adjust the laser parameters for each patient's exact skin tone." },
  { q: "How do I book? What happens after I fill the form?", a: "Fill in the consultation form above or WhatsApp/call us directly. Our team will call you within a few hours to confirm your slot. Your first visit is a free consultation with Dr. Gandhi — he'll assess your skin, confirm treatment zones and walk you through the full plan." },
];

const testimonials = [
  { initials: "SM", text: "Full body laser was something I always wanted but thought was too expensive. D-Tanique's package pricing made it accessible and the results after 6 sessions are incredible. Completely smooth, everywhere.", name: "Sneha M.", detail: "Full Body LHR · Jayanagar" },
  { initials: "AD", text: "I have dark skin and was worried about pigmentation risks. Dr. Gandhi was very reassuring — showed me exactly how the diode laser works for Type V skin. Zero side effects, fantastic results. 100% recommend.", name: "Ananya D.", detail: "Underarms & Brazilian · BTM Layout" },
  { initials: "PR", text: "I was terrified it would hurt — but honestly it was nothing compared to waxing. After 4 sessions, 70% of my facial hair is gone. Dr. Gandhi explained everything before starting. Best decision I made.", name: "Priya R.", detail: "Full Face LHR · JP Nagar" },
];

function FullBodyLaserPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const firstName = ((fd.get("firstName") as string) || "").trim();
    const lastName = ((fd.get("lastName") as string) || "").trim();
    const mobile = ((fd.get("mobile") as string) || "").trim();
    const area = ((fd.get("area") as string) || "Not specified").trim();
    const time = ((fd.get("time") as string) || "Any time").trim();
    const name = `${firstName} ${lastName}`.trim();

    await supabase.from("leads").insert({
      name,
      phone: mobile,
      concern: `Full Body LHR ₹39,999 · Area: ${area} · Preferred: ${time}`,
      source: "full-body-laser",
    });

    const message =
      `Hi D-Tanique! I'd like to claim the Full Body LHR ₹39,999 slot.%0A%0A` +
      `*Name:* ${name}%0A*Mobile:* ${mobile}%0A*Area:* ${area}%0A*Preferred Time:* ${time}`;

    setSubmitted(true);
    window.open(`https://wa.me/${WA}?text=${message}`, "_blank");
  };

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lhr-root">
      <style>{CSS}</style>

      <header className="lhr-header">
        <img src={logoSvg} alt="D'Tanique The Derma Clinic" className="header-logo" />
        <a href={`tel:${TEL}`} className="header-cta">📞 088844 48906</a>
      </header>

      <div className="bar">
        ⚡ <span>INTRODUCTORY OFFER:</span> Full Body Laser Hair Removal — ₹39,999 for 10 Sessions &nbsp;·&nbsp; First 50 Patients Only &nbsp;·&nbsp; <span>Slots Filling Fast</span>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <div className="offer-badge">Introductory Offer · First 50 Patients</div>
          <div className="hero-tag">D'Tanique · JP Nagar · Bengaluru</div>
          <h1 className="hero-title">
            Head to Toe<br />
            <strong>Full Body</strong>
            <em>Laser Hair</em><br />
            <strong>Reduction</strong>
          </h1>
          <p className="hero-sub">
            Permanent, pain-minimised diode laser by Senior Dermatologist Team. Safe for all Indian skin tones.
          </p>

          <div className="price-block">
            <div className="price-note">First 50 Only</div>
            <div className="price-label">Introductory Package Price</div>
            <div className="price-main"><span className="sym">₹</span>39,999</div>
            <div className="price-sessions">10 Sessions · Full Body Coverage</div>
          </div>

          <ul className="hero-bullets">
            <li>Full body coverage</li>
            <li>Long-lasting results</li>
            <li>Fewer ingrown hairs</li>
            <li>Smooth, even skin</li>
            <li>Certified Dermatologist</li>
            <li>Diode 810nm Laser</li>
            <li>All skin tones safe</li>
            <li>Zero downtime</li>
          </ul>

          <div className="hero-ctas">
            <a href="#consultation-form" className="btn-primary" onClick={scrollTo("consultation-form")}>Claim Your Slot →</a>
            <a href={`tel:${TEL}`} className="btn-secondary">📞 Call the Clinic</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-slide s1">
            <img src={heroImg} alt="D'Tanique Full Body Laser Hair Removal" />
          </div>
          <div className="hero-slide s2">
            <img src={offerPoster} alt="Laser Hair Removal Packages — Limited Time Offer" />
          </div>
          <div className="hero-right-overlay" />
        </div>
      </div>

      {/* URGENCY */}
      <div className="urgency">
        <div className="urgency-item"><div className="icon">🔥</div><div className="text"><strong>First 50 Patients Only</strong>Offer closes once slots fill</div></div>
        <div className="urgency-sep" />
        <div className="urgency-item"><div className="icon">💆</div><div className="text"><strong>Pain-Minimised</strong>Contact cooling technology</div></div>
        <div className="urgency-sep" />
        <div className="urgency-item"><div className="icon">🩺</div><div className="text"><strong>Certified Dermatologist</strong>Senior Dermatologist Team</div></div>
        <div className="urgency-sep" />
        <div className="urgency-item"><div className="icon">📍</div><div className="text"><strong>JP Nagar, Bengaluru</strong>547, 9th Cross Road, 3rd Phase</div></div>
      </div>

      {/* INCLUDED */}
      <section className="included" id="included">
        <div className="center">
          <div className="section-tag">The Package</div>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            Everything included. <em>Head to toe.</em>
          </h2>
          <p className="section-lead" style={{ color: "rgba(255,255,255,0.55)" }}>
            One price. Ten sessions. Every zone on your body treated by a certified dermatologist with medical-grade diode laser.
          </p>
        </div>
        <div className="included-grid">
          {included.map((c) => (
            <div key={c.t} className="included-card">
              <div className="ic-icon">{c.i}</div>
              <div className="ic-title">{c.t}</div>
              <div className="ic-sub">{c.s}</div>
              <div className="ic-check">✓ Included</div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section" id="timeline">
        <div className="center">
          <div className="section-tag">Session by Session</div>
          <h2 className="section-title">Watch hair <em>disappear.</em></h2>
          <p className="section-lead">
            Most patients see significant reduction from session 2. Here's what to expect across your 10-session full body course.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((t) => (
            <div key={t.s} className="timeline-step">
              <div className="ts-dot"><div className="session">Session</div><div className="num">{t.s}</div></div>
              <div className="ts-pct">{t.p}</div>
              <div className="ts-desc">{t.d}</div>
            </div>
          ))}
        </div>
      </section>


      {/* OFFER */}
      <section className="offer-section" id="offer">
        <div className="offer-inner">
          <div>
            <div className="section-tag">The Offer</div>
            <h2 className="section-title" style={{ color: "var(--white)" }}>
              Full body. <em>One price.</em><br />First 50 patients.
            </h2>
            <p className="section-lead" style={{ color: "rgba(255,255,255,0.55)", marginBottom: 32 }}>
              This introductory package is available to the first 50 patients only. Once slots are filled, pricing returns to standard rates. Book your free consultation to lock in your slot.
            </p>
            <div className="opc-scarcity">
              <div className="sc-dot" />
              <div className="sc-text"><strong>Limited Availability —</strong> First 50 patients only. Slots filling now.</div>
            </div>
            <ul className="opc-bullets">
              <li><span>⚡</span> Diode 810nm laser — international gold standard</li>
              <li><span>🩺</span> Every session supervised by Senior Dermatologist Team</li>
              <li><span>🌿</span> Safe for all Indian skin tones (Fitzpatrick III–VI)</li>
              <li><span>💆</span> Pain-minimised with contact cooling technology</li>
              <li><span>✅</span> Free consultation included — no obligation</li>
            </ul>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`tel:${TEL}`} className="btn-secondary">📞 088844 48906</a>
              <a href={`https://wa.me/${WA}?text=Hi%2C%20I'm%20interested%20in%20the%20Full%20Body%20LHR%20offer%20at%20%E2%82%B939%2C999`} target="_blank" rel="noreferrer" className="btn-wa">WhatsApp Us</a>
            </div>
          </div>

          <div className="offer-price-card">
            <div className="opc-tag">Full Body LHR Package</div>
            <div className="opc-price"><span className="sym">₹</span>39,999</div>
            <div className="opc-sessions-badge">10 Sessions · Head to Toe</div>
            <ul className="opc-list">
              <li>Full body coverage — all zones</li>
              <li>Long-lasting, permanent results</li>
              <li>Fewer ingrown hairs</li>
              <li>Smooth, even skin tone</li>
              <li>Medical-grade diode 810nm laser</li>
              <li>Dr. Gandhi supervises every session</li>
            </ul>
            <div className="opc-scarcity">
              <div className="sc-dot" />
              <div className="sc-text"><strong>First 50 patients only</strong> — lock in your slot today</div>
            </div>
            <a href="#consultation-form" onClick={scrollTo("consultation-form")} className="btn-primary" style={{ width: "100%", display: "block", textAlign: "center" }}>
              Book Free Consultation →
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGES — LASER HAIR REMOVAL OFFERS */}
      <section id="packages" style={{ background: "var(--cream)" }}>
        <div className="center" style={{ textAlign: "center", maxWidth: 1100, margin: "0 auto" }}>
          <div className="offer-badge" style={{ margin: "0 auto 20px", color: "var(--dark)", background: "rgba(196,168,130,0.18)", borderColor: "rgba(196,168,130,0.5)" }}>★ Limited Time Offer</div>
          <h2 className="section-title">Laser Hair Removal <em>Packages</em></h2>
          <p className="section-lead" style={{ margin: "0 auto 40px" }}>Smooth skin, long-lasting confidence. Individual sittings or save big with our 10-sitting packages and combos.</p>

          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 500, color: "var(--dark)", margin: "0 0 24px", textAlign: "left" }}>Individual Rates</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20, marginBottom: 48 }}>
            {[
              { img: imgUpperlips, n: "Upper Lips", p: "₹600", pkg: "₹6,000" },
              { img: imgChin, n: "Chin", p: "₹600", pkg: "₹6,000" },
              { img: imgUnderarms, n: "Underarms", p: "₹700", pkg: "₹7,000" },
            ].map((o) => (
              <div key={o.n} style={{ background: "var(--white)", border: "1px solid rgba(196,168,130,0.3)", borderRadius: 6, overflow: "hidden", textAlign: "left", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--gold-pale)" }}>
                  <img src={o.img} alt={`Laser hair removal — ${o.n}`} loading="lazy" width={768} height={768} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", top: 12, left: 12, background: "var(--dark)", color: "var(--gold-light)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 600, padding: "5px 10px", borderRadius: 2 }}>Limited Offer</div>
                </div>
                <div style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: "var(--dark)", fontSize: 18, marginBottom: 4, fontFamily: "'Cormorant Garamond',serif" }}>{o.n}</div>
                    <div style={{ fontSize: 13, color: "var(--text-light)" }}><strong style={{ color: "var(--gold)", fontSize: 16 }}>{o.p}</strong> per sitting</div>
                  </div>
                  <div style={{ background: "var(--gold)", color: "var(--dark)", padding: "10px 14px", borderRadius: 2, textAlign: "center", minWidth: 110 }}>
                    <div style={{ fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600 }}>10 Sittings</div>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700, lineHeight: 1.1 }}>{o.pkg}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 500, color: "var(--dark)", margin: "0 0 24px", textAlign: "left" }}>Combo Packages <span style={{ fontSize: 14, color: "var(--text-light)" }}>(10 Sittings)</span></h3>
          <div style={{ background: "var(--white)", border: "1px solid rgba(196,168,130,0.3)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 110px 110px", gap: 12, padding: "14px 20px", background: "var(--dark)", color: "var(--gold-light)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 600, textAlign: "left" }}>
              <div>#</div><div>Package</div><div style={{ opacity: .7 }}>Total</div><div>Price</div>
            </div>
            {[
              { n: "Upper Lips + Chin", t: "₹12,000", p: "₹6,000" },
              { n: "Underarms + Chin", t: "₹13,000", p: "₹7,000" },
              { n: "Underarms + Upper Lips", t: "₹13,000", p: "₹7,000" },
              { n: "Underarms + Upper Lips + Chin", t: "₹19,000", p: "₹12,000" },
            ].map((c, i) => (
              <div key={c.n} style={{ display: "grid", gridTemplateColumns: "40px 1fr 110px 110px", gap: 12, padding: "16px 20px", borderTop: "1px solid rgba(196,168,130,0.2)", alignItems: "center", textAlign: "left" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--gold)", color: "var(--dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>{i + 1}</div>
                <div style={{ fontWeight: 500, color: "var(--dark)", fontSize: 15 }}>{c.n}</div>
                <div style={{ color: "var(--text-light)", textDecoration: "line-through", fontSize: 14 }}>{c.t}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700, color: "var(--gold)" }}>{c.p}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#consultation-form" onClick={scrollTo("consultation-form")} className="btn-primary">Book Your Session Today →</a>
            <a href={`tel:${TEL}`} className="btn-secondary">📞 +91 88844 48906</a>
          </div>
        </div>
      </section>


      {/* FORM */}
      <section className="form-section" id="consultation-form">
        <div className="center" style={{ marginBottom: 0 }}>
          <div className="section-tag">Claim Your Slot</div>
          <h2 className="section-title">Book your free <em>consultation.</em></h2>
          <p className="section-lead">
            Share your details and we'll call to confirm your slot. Zero obligation — just a conversation with our team.
          </p>
        </div>
        <form className="form-wrap" onSubmit={onSubmit}>
          <div className="offer-pill">⚡ Full Body LHR · ₹39,999 · 10 Sessions · First 50 Patients</div>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input name="firstName" type="text" required placeholder="Priya" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input name="lastName" type="text" placeholder="Sharma" />
            </div>
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input name="mobile" type="tel" required placeholder="+91 98765 43210" />
          </div>
          <div className="form-group">
            <label>Your Area / Locality</label>
            <select name="area" defaultValue="">
              <option value="" disabled>Select your area</option>
              <option>JP Nagar</option>
              <option>Banashankari</option>
              <option>BTM Layout</option>
              <option>Jayanagar</option>
              <option>Koramangala</option>
              <option>HSR Layout</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Preferred Time</label>
            <select name="time" defaultValue="">
              <option value="">10 AM to 12 PM</option>
              <option>Afternoon (12pm – 4pm)</option>
              <option>Evening (4pm – 7pm)</option>
              <option>Weekends only</option>
            </select>
          </div>
          <button type="submit" className="form-submit" style={submitted ? { background: "#2D8A4E", color: "white" } : undefined}>
            {submitted ? "✓ We'll call you to confirm your slot" : "Claim My ₹39,999 Slot →"}
          </button>
          <div className="form-privacy">🔒 Your details are private and never shared</div>
        </form>
      </section>

      {/* WHY US */}
      <section style={{ background: "var(--cream)" }}>
        <div className="center">
          <div className="section-tag">Why D'Tanique</div>
          <h2 className="section-title">A clinic. <em>Not a salon.</em></h2>
          <p className="section-lead">
            The difference between a dermatologist-run laser clinic and a beauty parlour offering "laser" is everything — equipment, safety, results.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="wc-icon">🩺</div>
            <div className="wc-title">Senior Dermatologist Team</div>
            <div className="wc-text">MBBS-qualified Senior Dermatologist. Every session performed or directly supervised by a certified physician — not a beautician.</div>
          </div>
          <div className="why-card">
            <div className="wc-icon">⚡</div>
            <div className="wc-title">Medical-Grade Diode Laser</div>
            <div className="wc-text">FDA-cleared, CE-certified Diode 810nm laser — the international gold standard. Contact cooling minimises discomfort every session.</div>
          </div>
          <div className="why-card">
            <div className="wc-icon">🌿</div>
            <div className="wc-title">Safe for Indian Skin</div>
            <div className="wc-text">Calibrated specifically for Fitzpatrick types III–VI. Specialist expertise in South Asian skin tones. Zero pigmentation risk when done correctly.</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="center">
          <div className="section-tag">Patient Stories</div>
          <h2 className="section-title" style={{ color: "var(--white)" }}>Real patients. <em>Real results.</em></h2>
          <p className="section-lead" style={{ color: "rgba(255,255,255,0.5)" }}>Our community across South Bengaluru — their words.</p>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div key={t.initials} className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <div className="testi-text">"{t.text}"</div>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-detail">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--cream)" }} id="faq">
        <div className="center">
          <div className="section-tag">Common Questions</div>
          <h2 className="section-title">Every question <em>answered.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
              <button type="button" className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q}
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <div className="section-tag">Last Chance</div>
          <h2 className="section-title">50 slots. <em>First come,</em><br />first served.</h2>
          <p className="section-lead">
            Full body laser hair removal — 10 sessions, ₹39,999, head to toe. This price will not be available once the 50 introductory slots are filled.
          </p>
          <div className="cta-buttons">
            <a href="#consultation-form" onClick={scrollTo("consultation-form")} className="btn-primary" style={{ padding: "18px 40px", fontSize: 14 }}>
              Claim My Slot — ₹39,999 →
            </a>
            <a href={`https://wa.me/${WA}?text=Hi%2C%20I'm%20interested%20in%20the%20Full%20Body%20LHR%20offer%20at%20%E2%82%B939%2C999`} target="_blank" rel="noreferrer" className="btn-wa">WhatsApp</a>
            <a href={`tel:${TEL}`} className="btn-call">📞 088844 48906</a>
          </div>
          <div className="final-note">Free consultation · JP Nagar clinic · 547, 9th Cross, 3rd Phase · No credit card needed</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lhr-footer">
        <div>
          <img src={logoSvg} alt="D'Tanique The Derma Clinic" className="footer-logo" />
          <div className="footer-addr">
            547, Axis Thillai, Ground Floor, Behind IndusInd Bank<br />
            9th Cross Road, 3rd Phase, JP Nagar, Bengaluru 560078
          </div>
        </div>
        <div className="footer-copy">© 2026 D-Tanique · All rights reserved</div>
      </footer>
    </div>
  );
}
