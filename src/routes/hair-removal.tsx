import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ClinicGallery from "@/components/ClinicGallery";
import imgUpperlips from "@/assets/offers/lhr-upperlips.jpg";
import imgChin from "@/assets/offers/lhr-chin.jpg";
import imgUnderarms from "@/assets/offers/lhr-underarms.jpg";

export const Route = createFileRoute("/hair-removal")({
  head: () => ({
    meta: [
      { title: "Laser Hair Removal Bangalore | Permanent & Painless | D-Tanique J.P. Nagar" },
      {
        name: "description",
        content:
          "Bengaluru's premier laser hair removal clinic. Permanent, painless diode laser for face, underarms & full body. Certified Senior Dermatologist Team. Free consultation — J.P. Nagar.",
      },
      {
        name: "keywords",
        content:
          "laser hair removal bangalore, permanent hair removal, laser hair removal J.P. Nagar, dermatologist laser hair removal, full body laser hair removal, facial hair removal bangalore, diode laser hair removal",
      },
      { property: "og:title", content: "Laser Hair Removal Bangalore | D-Tanique J.P. Nagar" },
      {
        property: "og:description",
        content:
          "Permanent, painless diode laser hair removal at D-Tanique J.P. Nagar. Free consultation with a certified dermatologist.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: HairRemovalPage,
});

const CSS = `
.hr-root *,.hr-root *::before,.hr-root *::after{box-sizing:border-box;margin:0;padding:0}
.hr-root{
  --ink:#12100A;--ink2:#1E1A10;--ink3:#2C2614;
  --gold:#B08D2A;--gold-l:#D4A940;--gold-pale:#FBF6E8;--gold-bg:#FDF9EE;
  --cream:#FEFDF9;--white:#FFFFFF;
  --border:rgba(176,141,42,0.18);--border-m:rgba(176,141,42,0.32);
  --text:#1E1A10;--muted:#6B5C38;--light:#B09868;
  --teal:#0B7B6E;--teal-bg:#E6F5F3;--teal-pale:#F0FAF9;
  --red:#C0310F;--red-bg:#FAECE7;--blue:#1550A0;--blue-bg:#E8F1FB;
  --sh:0 2px 16px rgba(18,16,10,0.07);--sh-lg:0 8px 40px rgba(18,16,10,0.13);
  font-family:'Inter',sans-serif;background:var(--cream);color:var(--text);line-height:1.6;font-size:16px;
}
.hr-root a{color:inherit;text-decoration:none}
.hr-root .ticker{background:var(--ink);padding:9px 0;overflow:hidden;white-space:nowrap;font-size:12px;letter-spacing:0.07em}
.hr-root .ticker-track{display:inline-block;animation:hr-tick 32s linear infinite}
.hr-root .ticker-track span{color:rgba(255,255,255,0.65);margin:0 2rem}
.hr-root .ticker-track span.g{color:#FFD580;font-weight:500}
@keyframes hr-tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.hr-root nav{background:rgba(254,253,249,0.97);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:.85rem 2rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.hr-root .nl{display:flex;align-items:center;gap:10px}
.hr-root .nl-mark{width:34px;height:34px;background:var(--ink);border-radius:9px;display:flex;align-items:center;justify-content:center;color:var(--gold-l);font-size:15px}
.hr-root .nl-name{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:600;color:var(--ink)}
.hr-root .nl-name span{color:var(--gold)}
.hr-root .nav-links{display:flex;gap:1.5rem}
.hr-root .nav-links a{font-size:13px;color:var(--muted);transition:color .2s;cursor:pointer}
.hr-root .nav-links a:hover{color:var(--gold)}
.hr-root .btn-nav{background:var(--ink);color:#fff;padding:9px 20px;border-radius:100px;font-size:13px;font-weight:500;border:none;cursor:pointer;font-family:'Inter',sans-serif;white-space:nowrap;transition:background .2s}
.hr-root .btn-nav:hover{background:var(--ink3)}
.hr-root .hero{background:var(--ink);min-height:90vh;display:flex;align-items:center;padding:5rem 2rem;position:relative;overflow:hidden}
.hr-root .hero::before{content:'';position:absolute;top:-150px;right:-150px;width:700px;height:700px;background:radial-gradient(circle,rgba(176,141,42,0.12) 0%,transparent 65%);pointer-events:none}
.hr-root .hero::after{content:'';position:absolute;bottom:-100px;left:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(11,123,110,0.1) 0%,transparent 65%);pointer-events:none}
.hr-root .hero-inner{max-width:1180px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 400px;gap:4rem;align-items:center;position:relative;z-index:1}
.hr-root .hero-eyebrow{display:inline-flex;align-items:center;gap:7px;background:rgba(176,141,42,0.15);border:1px solid rgba(176,141,42,0.3);color:#FFD580;font-size:11px;letter-spacing:.14em;text-transform:uppercase;padding:5px 15px;border-radius:100px;margin-bottom:1.5rem;font-weight:500}
.hr-root .hero-eyebrow::before{content:'●';font-size:7px;animation:hr-pulse 2s infinite}
@keyframes hr-pulse{0%,100%{opacity:1}50%{opacity:.3}}
.hr-root .hero h1{font-family:'Cormorant Garamond',serif;font-size:clamp(2.8rem,5vw,4.5rem);font-weight:700;color:#fff;line-height:1.07;letter-spacing:-.01em;margin-bottom:1.25rem}
.hr-root .hero h1 em{font-style:italic;color:#FFD580}
.hr-root .hero-sub{font-size:1rem;color:rgba(255,255,255,0.55);font-weight:300;line-height:1.8;max-width:520px;margin-bottom:2rem}
.hr-root .hero-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:2rem}
.hr-root .hero-chip{font-size:12px;padding:5px 13px;border-radius:100px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.7)}
.hr-root .hero-ctas{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.hr-root .btn-primary{background:#FFD580;color:var(--ink);padding:14px 30px;border-radius:100px;font-size:15px;font-weight:600;border:none;cursor:pointer;font-family:'Inter',sans-serif;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 24px rgba(255,213,128,.3);transition:transform .15s,box-shadow .15s}
.hr-root .btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(255,213,128,.4)}
.hr-root .btn-ghost{background:rgba(255,255,255,.07);color:rgba(255,255,255,.75);padding:14px 26px;border-radius:100px;font-size:14px;font-weight:400;border:1px solid rgba(255,255,255,.18);cursor:pointer;font-family:'Inter',sans-serif;display:inline-flex;align-items:center;gap:7px}
.hr-root .hero-trust{display:flex;gap:1.5rem;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,.1);padding-top:1.5rem}
.hr-root .trust-item{display:flex;align-items:center;gap:7px;font-size:12px;color:rgba(255,255,255,.45)}
.hr-root .trust-item strong{color:rgba(255,255,255,.85);font-weight:500}
.hr-root .t-dot{width:17px;height:17px;background:rgba(11,123,110,.25);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8px;color:#5DDDDB;flex-shrink:0}
.hr-root .hero-form{background:#fff;border-radius:18px;padding:1.75rem;box-shadow:var(--sh-lg)}
.hr-root .hf-badge{display:inline-block;background:var(--teal-bg);color:var(--teal);font-size:11px;font-weight:500;padding:4px 12px;border-radius:100px;margin-bottom:.85rem;letter-spacing:.04em}
.hr-root .hf-title{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;color:var(--ink);margin-bottom:.25rem;line-height:1.2}
.hr-root .hf-title em{font-style:italic;color:var(--gold)}
.hr-root .hf-sub{font-size:12px;color:var(--muted);font-weight:300;margin-bottom:1.1rem}
.hr-root .f-row{display:grid;grid-template-columns:1fr 1fr;gap:.7rem}
.hr-root .f-group{margin-bottom:.7rem}
.hr-root .f-group label{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);font-weight:500;margin-bottom:.35rem}
.hr-root .f-group input,.hr-root .f-group select{width:100%;border:1px solid var(--border-m);border-radius:9px;padding:10px 12px;font-size:14px;font-family:'Inter',sans-serif;color:var(--ink);background:var(--cream);outline:none;transition:border-color .2s}
.hr-root .f-group input:focus,.hr-root .f-group select:focus{border-color:var(--gold);background:#fff}
.hr-root .btn-submit{width:100%;background:var(--ink);color:#fff;padding:13px;border-radius:100px;font-size:15px;font-weight:500;border:none;cursor:pointer;font-family:'Inter',sans-serif;transition:background .2s;margin-top:.2rem}
.hr-root .btn-submit:hover{background:var(--ink3)}
.hr-root .f-note{font-size:11px;color:var(--light);text-align:center;margin-top:.6rem}
.hr-root .proof-band{background:var(--gold-pale);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:1.5rem 2rem;display:flex;justify-content:center;align-items:center;gap:3rem;flex-wrap:wrap}
.hr-root .pb-item{text-align:center}
.hr-root .pb-num{font-family:'Cormorant Garamond',serif;font-size:1.9rem;font-weight:700;color:var(--ink);display:block;line-height:1}
.hr-root .pb-label{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);font-weight:300;margin-top:3px}
.hr-root .pb-div{width:1px;height:36px;background:var(--border-m)}
.hr-root .section{max-width:1100px;margin:0 auto;padding:5rem 2rem}
.hr-root .section-eye{font-size:10px;text-transform:uppercase;letter-spacing:.2em;color:var(--gold);font-weight:500;margin-bottom:.5rem}
.hr-root .section-h{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,3vw,2.75rem);font-weight:600;color:var(--ink);line-height:1.15;margin-bottom:.75rem}
.hr-root .section-h em{font-style:italic;color:var(--gold)}
.hr-root .section-p{font-size:.975rem;color:var(--muted);font-weight:300;line-height:1.75;max-width:580px;margin-bottom:2.5rem}
.hr-root hr.div{border:none;border-top:1px solid var(--border);margin:0}
.hr-root .why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.1rem}
.hr-root .why-card{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:1.4rem;transition:transform .2s,box-shadow .2s}
.hr-root .why-card:hover{transform:translateY(-3px);box-shadow:var(--sh)}
.hr-root .wc-icon{font-size:1.6rem;margin-bottom:.7rem;display:block}
.hr-root .wc-title{font-weight:500;font-size:.95rem;color:var(--ink);margin-bottom:.35rem}
.hr-root .wc-desc{font-size:.85rem;color:var(--muted);font-weight:300;line-height:1.6}
.hr-root .zone-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1rem}
.hr-root .zone-card{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:1.25rem;text-align:center;cursor:pointer;transition:border-color .2s,transform .2s}
.hr-root .zone-card:hover{border-color:var(--gold);transform:translateY(-2px)}
.hr-root .zone-card.active{border:2px solid var(--gold);background:var(--gold-bg)}
.hr-root .zone-icon{font-size:2rem;display:block;margin-bottom:.6rem}
.hr-root .zone-name{font-weight:500;font-size:.9rem;color:var(--ink);margin-bottom:.3rem}
.hr-root .zone-sessions{font-size:12px;color:var(--muted);font-weight:300}
.hr-root .sessions-section{background:var(--ink);padding:5rem 2rem}
.hr-root .sessions-inner{max-width:1100px;margin:0 auto}
.hr-root .sessions-inner .section-eye{color:rgba(255,255,255,.4)}
.hr-root .sessions-inner .section-h{color:#fff}
.hr-root .sessions-inner .section-h em{color:#FFD580}
.hr-root .sessions-inner .section-p{color:rgba(255,255,255,.45)}
.hr-root .results-timeline{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0;position:relative}
.hr-root .results-timeline::before{content:'';position:absolute;top:26px;left:0;right:0;height:2px;background:rgba(255,255,255,.1)}
.hr-root .rt-item{padding:0 1rem 0;text-align:center;position:relative;z-index:1}
.hr-root .rt-bubble{width:52px;height:52px;border-radius:50%;border:2px solid rgba(255,255,255,.15);background:var(--ink2);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:600;color:#FFD580;position:relative;z-index:1}
.hr-root .rt-bubble.active{background:var(--gold);border-color:var(--gold);color:var(--ink)}
.hr-root .rt-session{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:.3rem}
.hr-root .rt-result{font-size:.85rem;color:rgba(255,255,255,.7);font-weight:300;line-height:1.4}
.hr-root .rt-pct{font-size:1.4rem;font-weight:600;font-family:'Cormorant Garamond',serif;color:#FFD580;display:block;margin-bottom:.2rem}
.hr-root .tech-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center}
.hr-root .tech-specs{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.hr-root .tech-spec-card{background:var(--white);border:1px solid var(--border);border-radius:12px;padding:1.1rem}
.hr-root .tsc-label{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);font-weight:500;margin-bottom:.3rem}
.hr-root .tsc-val{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:600;color:var(--ink)}
.hr-root .tsc-note{font-size:12px;color:var(--muted);font-weight:300;margin-top:.2rem}
.hr-root .tech-visual{background:var(--ink);border-radius:18px;padding:2.5rem;color:#fff;text-align:center}
.hr-root .tech-visual-icon{font-size:4rem;margin-bottom:1rem;display:block}
.hr-root .tech-visual h3{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:600;color:#FFD580;margin-bottom:.5rem}
.hr-root .tech-visual p{font-size:.875rem;color:rgba(255,255,255,.5);font-weight:300;line-height:1.7}
.hr-root .tech-badges{display:flex;flex-wrap:wrap;gap:7px;justify-content:center;margin-top:1.25rem}
.hr-root .tech-badge{font-size:11px;padding:4px 12px;border-radius:100px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.7)}
.hr-root .safety-section{background:var(--teal-pale);border-top:1px solid rgba(11,123,110,.15);border-bottom:1px solid rgba(11,123,110,.15)}
.hr-root .safety-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.1rem}
.hr-root .safety-card{background:#fff;border:1px solid rgba(11,123,110,.2);border-radius:14px;padding:1.4rem}
.hr-root .sc-num{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:700;color:var(--teal);line-height:1;display:block;margin-bottom:.3rem}
.hr-root .sc-q{font-weight:500;font-size:.95rem;color:var(--ink);margin-bottom:.4rem}
.hr-root .sc-a{font-size:.85rem;color:var(--muted);font-weight:300;line-height:1.6}
.hr-root .skintone-row{display:grid;grid-template-columns:repeat(6,1fr);gap:.75rem;margin-bottom:2rem}
.hr-root .st-card{border-radius:12px;padding:1rem .75rem;text-align:center;border:1px solid var(--border)}
.hr-root .st-swatch{width:40px;height:40px;border-radius:50%;margin:0 auto .6rem;border:2px solid rgba(0,0,0,.08)}
.hr-root .st-label{font-size:11px;color:var(--ink);font-weight:500}
.hr-root .st-safe{font-size:10px;color:var(--teal);font-weight:400;margin-top:2px}
.hr-root .provider-section{background:var(--gold-bg);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.hr-root .doc-card{background:#fff;border:1px solid var(--border);border-radius:18px;padding:2rem;display:grid;grid-template-columns:100px 1fr;gap:1.5rem;align-items:start;max-width:620px}
.hr-root .doc-avatar{width:100px;height:100px;border-radius:50%;background:var(--gold-pale);border:2px solid var(--border-m);display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:600;color:var(--gold);flex-shrink:0}
.hr-root .doc-name{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;color:var(--ink);margin-bottom:.2rem}
.hr-root .doc-title{font-size:13px;color:var(--muted);font-weight:300;margin-bottom:.9rem}
.hr-root .doc-creds{display:flex;flex-wrap:wrap;gap:6px}
.hr-root .doc-cred{font-size:11px;padding:3px 10px;border-radius:100px;background:var(--gold-pale);border:1px solid var(--border-m);color:var(--ink3);font-weight:400}
.hr-root .certs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:2rem}
.hr-root .cert-card{background:#fff;border:1px solid var(--border);border-radius:12px;padding:1.1rem;display:flex;align-items:flex-start;gap:.75rem}
.hr-root .cert-icon{font-size:1.25rem;flex-shrink:0;margin-top:2px}
.hr-root .cert-name{font-weight:500;font-size:.9rem;color:var(--ink);margin-bottom:.2rem}
.hr-root .cert-desc{font-size:12px;color:var(--muted);font-weight:300}
.hr-root .compare-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem}
.hr-root .compare-card{background:#fff;border:1px solid var(--border);border-radius:14px;overflow:hidden}
.hr-root .compare-card.best{border:2px solid var(--gold)}
.hr-root .cc-head{padding:1rem 1.25rem;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.hr-root .cc-method{font-weight:500;font-size:.9rem;color:var(--ink)}
.hr-root .cc-badge-best{font-size:10px;background:var(--gold-pale);color:var(--ink3);border:1px solid var(--border-m);padding:2px 9px;border-radius:100px;font-weight:500;letter-spacing:.05em}
.hr-root .cc-body{padding:1rem 1.25rem}
.hr-root .cc-row{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid var(--border);font-size:13px}
.hr-root .cc-row:last-child{border:none}
.hr-root .cc-attr{color:var(--muted);font-weight:300}
.hr-root .cc-val{font-weight:500;color:var(--ink)}
.hr-root .cc-val.good{color:var(--teal)}
.hr-root .cc-val.bad{color:var(--red)}
.hr-root .glow-section{background:var(--ink);padding:5rem 2rem}
.hr-root .glow-inner{max-width:1100px;margin:0 auto}
.hr-root .glow-inner .section-eye{color:rgba(255,255,255,.4)}
.hr-root .glow-inner .section-h{color:#fff}
.hr-root .glow-inner .section-p{color:rgba(255,255,255,.45)}
.hr-root .benefits-strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:0}
.hr-root .bs-card{padding:1.25rem;border:1px solid rgba(255,255,255,.08);border-radius:14px}
.hr-root .bs-icon{font-size:1.5rem;display:block;margin-bottom:.6rem}
.hr-root .bs-title{font-size:.9rem;font-weight:500;color:#fff;margin-bottom:.3rem}
.hr-root .bs-desc{font-size:.825rem;color:rgba(255,255,255,.45);font-weight:300;line-height:1.6}
.hr-root .testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:1.1rem}
.hr-root .testi-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.4rem}
.hr-root .tc-stars{color:var(--gold);font-size:13px;letter-spacing:2px;margin-bottom:.75rem}
.hr-root .tc-quote{font-size:.9rem;color:var(--text);font-weight:300;line-height:1.65;font-style:italic;margin-bottom:.9rem}
.hr-root .tc-author{display:flex;align-items:center;gap:10px}
.hr-root .tc-avatar{width:36px;height:36px;border-radius:50%;background:var(--gold-pale);border:1px solid var(--border-m);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:500;color:var(--gold)}
.hr-root .tc-name{font-weight:500;font-size:13px;color:var(--ink)}
.hr-root .tc-treatment{font-size:11px;color:var(--muted);font-weight:300}
.hr-root .faq-wrap{max-width:700px}
.hr-root .faq-item{border-bottom:1px solid var(--border);padding:1.2rem 0}
.hr-root .faq-q{font-weight:500;font-size:.975rem;color:var(--ink);cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:1rem;user-select:none}
.hr-root .faq-q::after{content:'+';font-size:1.25rem;color:var(--gold);font-weight:300;flex-shrink:0}
.hr-root .faq-q.open::after{content:'−'}
.hr-root .faq-a{font-size:.9rem;color:var(--muted);font-weight:300;line-height:1.7;margin-top:.7rem;display:none}
.hr-root .faq-a.show{display:block}
.hr-root .cta-section{background:var(--gold-bg);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:5rem 2rem;text-align:center}
.hr-root .cta-section .section-h{margin:0 auto .75rem}
.hr-root .cta-section .section-p{margin:0 auto 2rem}
.hr-root .cta-btns{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap}
.hr-root .btn-cta{background:var(--ink);color:#fff;padding:15px 34px;border-radius:100px;font-size:15px;font-weight:500;border:none;cursor:pointer;font-family:'Inter',sans-serif;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 20px rgba(18,16,10,.18);transition:transform .15s}
.hr-root .btn-cta:hover{transform:translateY(-2px)}
.hr-root .btn-cta-ol{background:transparent;color:var(--ink);border:1px solid var(--border-m);padding:15px 28px;border-radius:100px;font-size:14px;font-weight:400;cursor:pointer;font-family:'Inter',sans-serif;display:inline-flex;align-items:center;gap:7px}
.hr-root .cta-note{font-size:12px;color:var(--light);margin-top:1.25rem}
.hr-root footer{background:var(--ink);padding:3rem 2rem;text-align:center}
.hr-root .f-logo{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;color:#fff;margin-bottom:.4rem}
.hr-root .f-logo span{color:#FFD580}
.hr-root .f-addr{font-size:12px;color:rgba(255,255,255,.3);font-weight:300;margin-bottom:1.25rem}
.hr-root .f-links{display:flex;justify-content:center;gap:2rem;flex-wrap:wrap;margin-bottom:1rem}
.hr-root .f-links a{font-size:12px;color:rgba(255,255,255,.35)}
.hr-root .f-links a:hover{color:#FFD580}
.hr-root .f-copy{font-size:11px;color:rgba(255,255,255,.15)}
.hr-root .wa{position:fixed;bottom:24px;right:24px;width:54px;height:54px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 4px 16px rgba(37,211,102,.4);z-index:200;transition:transform .2s;text-decoration:none}
.hr-root .wa:hover{transform:scale(1.08)}
@media(max-width:900px){
  .hr-root .hero-inner{grid-template-columns:1fr}
  .hr-root .tech-grid{grid-template-columns:1fr}
  .hr-root .hero{padding:3rem 1.5rem;min-height:auto}
  .hr-root nav .nav-links{display:none}
}
@media(max-width:600px){
  .hr-root .section{padding:3rem 1rem}
  .hr-root .skintone-row{grid-template-columns:repeat(3,1fr)}
  .hr-root .results-timeline::before{display:none}
  .hr-root .f-row{grid-template-columns:1fr}
  .hr-root .tech-specs{grid-template-columns:1fr}
}
`;

const tickerItems = [
  { g: true, t: "⚡ Permanent Laser Hair Removal — J.P. Nagar" },
  { g: false, t: "Diode Laser · All Skin Tones · Certified Dermatologist" },
  { g: true, t: "Free Consultation · Book Today" },
  { g: false, t: "Full Body · Face · Underarms · Brazilian" },
  { g: true, t: "Pain-Minimised · Zero Regrowth · D-Tanique" },
  { g: false, t: "South Bengaluru's Premium Laser Clinic" },
];

const whyCards = [
  { i: "♾️", t: "Truly Permanent Results", d: "Laser destroys the follicle. 95% permanent hair reduction after a full course of 6–8 sessions. Safe, proven, lasting." },
  { i: "💸", t: "Saves Money Long-Term", d: "Add up years of waxing and threading costs. Laser pays for itself within 2 years — then it's free forever." },
  { i: "⏱", t: "Saves Hours Every Month", d: "The average woman spends 72 days of her life on hair removal. Laser gives you that time back — permanently." },
  { i: "🌹", t: "No Ingrown Hairs", d: "Waxing and shaving cause painful ingrown hairs. Laser eliminates the follicle entirely — smooth, bump-free skin always." },
  { i: "🧴", t: "Better Skin Texture", d: "Repeated waxing darkens and thickens skin. Laser leaves skin smoother, softer and visibly brighter over time." },
  { i: "🎯", t: "Precision Technology", d: "Targets only hair follicles — leaving surrounding skin completely unharmed. Safe, targeted, effective from session one." },
];

const zones = [
  { i: "👤", n: "Face", s: "6–8 sessions" },
  { i: "💋", n: "Upper Lip", s: "6–8 sessions" },
  { i: "🙋", n: "Underarms", s: "6–8 sessions" },
  { i: "💪", n: "Arms", s: "6–8 sessions" },
  { i: "🦵", n: "Legs", s: "6–8 sessions" },
  { i: "🩱", n: "Brazilian / Bikini", s: "6–8 sessions" },
  { i: "🔙", n: "Back & Chest", s: "8–10 sessions" },
  { i: "🌟", n: "Full Body", s: "8–10 sessions" },
];

const timeline = [
  { n: "1", s: "Session 1", p: "20–30%", r: "Initial reduction. Hair grows back finer and slower." },
  { n: "2", s: "Session 2", p: "40–50%", r: "Visible thinning. Most patients are impressed by session 2." },
  { n: "3", s: "Session 3", p: "55–65%", r: "Significant patches gone. Hair is finer, lighter, sparse.", active: true },
  { n: "4", s: "Session 4", p: "70–75%", r: "Majority of hair eliminated. Smooth skin most of the time." },
  { n: "6", s: "Session 6", p: "85–90%", r: "Near-permanent results. Only very fine strands remain." },
  { n: "8", s: "Session 8", p: "95%+", r: "Permanent. Occasional touch-up once a year at most.", active: true },
];

const techSpecs = [
  { l: "Laser Type", v: "Diode 810nm", n: "Gold standard for all skin tones" },
  { l: "Cooling System", v: "Contact", n: "Pain-minimised every session" },
  { l: "Skin Types", v: "I – VI", n: "Safe for all Indian skin tones" },
  { l: "Spot Size", v: "Large", n: "Faster treatment, full coverage" },
  { l: "Hair Types", v: "All", n: "Dark, coarse, fine — all treated" },
  { l: "FDA / CE", v: "Certified", n: "Medical-grade approval" },
];

const skintones = [
  { c: "#FDDBB4", l: "Type I–II" },
  { c: "#E8B88A", l: "Type III" },
  { c: "#C68642", l: "Type IV" },
  { c: "#8D5524", l: "Type V" },
  { c: "#4A2912", l: "Type VI" },
];

const safetyCards = [
  { n: "01", q: "Is laser hair removal safe?", a: "Yes — when performed by a certified dermatologist using FDA-cleared equipment. At D-Tanique, every session is supervised by Senior Dermatologist Team. Laser hair removal has a decades-long international safety record." },
  { n: "02", q: "Does it hurt?", a: "Our diode laser has an integrated contact cooling system that minimises discomfort. Most patients describe it as a mild snapping sensation — far less painful than waxing. Pain-free sessions are achievable." },
  { n: "03", q: "Is it safe for facial hair?", a: "Absolutely. Facial laser hair removal is one of our most popular treatments — upper lip, chin, jawline and sideburns. Our protocols are specifically calibrated for the delicate skin of the face." },
  { n: "04", q: "Will it affect my skin tone?", a: "No — when performed correctly by a trained dermatologist. Our diode laser bypasses the epidermis and targets only the melanin in the follicle. Skin tone, texture and complexion remain completely unaffected." },
];

const certs = [
  { i: "🏥", n: "Medical Dermatology Clinic", d: "Registered clinic — not a salon or spa. Full medical-grade environment and protocols." },
  { i: "🎓", n: "Certified Laser Professional", d: "Internationally certified laser operator trained in advanced aesthetic devices." },
  { i: "🌏", n: "South Asian Skin Expert", d: "Specialist expertise in Indian and South Asian skin tones — all Fitzpatrick types treated safely." },
  { i: "🔬", n: "Medical-Grade Equipment", d: "FDA-cleared, CE-certified diode laser. The same standard as top clinics internationally." },
];

const compare = [
  { m: "⚡ Laser (D-Tanique)", best: true, rows: [
    ["Permanence", "95%+ permanent", "good"], ["Pain", "Minimal", "good"], ["Skin damage", "None", "good"],
    ["Ingrown hairs", "Eliminated", "good"], ["Long-term cost", "Lowest", "good"], ["Time investment", "6–8 sessions, done", "good"],
  ]},
  { m: "🕯 Waxing", rows: [
    ["Permanence", "Temporary (3–4 wk)", "bad"], ["Pain", "Painful", "bad"], ["Skin damage", "Darkening over time", "bad"],
    ["Ingrown hairs", "Common", "bad"], ["Long-term cost", "Very high", "bad"], ["Time investment", "Forever, monthly", "bad"],
  ]},
  { m: "🧵 Threading", rows: [
    ["Permanence", "Temporary (2–3 wk)", "bad"], ["Pain", "Moderate", "bad"], ["Skin damage", "Irritation", "bad"],
    ["Ingrown hairs", "Possible", "bad"], ["Long-term cost", "High", "bad"], ["Time investment", "Ongoing", "bad"],
  ]},
  { m: "🪒 Shaving", rows: [
    ["Permanence", "1–3 days", "bad"], ["Pain", "Low (cuts possible)", ""], ["Skin damage", "Stubble, darkening", "bad"],
    ["Ingrown hairs", "Very common", "bad"], ["Long-term cost", "Moderate", ""], ["Time investment", "Daily", "bad"],
  ]},
];

const benefits = [
  { i: "✨", t: "Smoother Skin Texture", d: "Hair follicles shrink over time. Skin becomes silky smooth — visibly and to the touch." },
  { i: "🌟", t: "Brighter Complexion", d: "Post-waxing pigmentation fades. Underarms, legs and facial skin visibly lighten and even out." },
  { i: "💧", t: "Better Skincare Absorption", d: "Without hair and follicle blockage, your serums and moisturisers penetrate deeper and work better." },
  { i: "🛡", t: "No Folliculitis", d: "Razor bumps, folliculitis and ingrown inflammation disappear permanently. Calm, clean skin." },
  { i: "🎯", t: "Skin Rejuvenation Effect", d: "The laser energy mildly stimulates collagen — a bonus tightening and rejuvenation effect on treated areas." },
];

const testimonials = [
  { i: "PR", n: "Priya R.", t: "Full Face LHR · J.P. Nagar", q: "I was terrified it would hurt — but honestly it was nothing compared to waxing. After 4 sessions, 70% of my facial hair is gone. Senior Dermatologist Team explained everything before starting. Genuinely the best decision I made." },
  { i: "SM", n: "Sneha M.", t: "Full Body LHR · Jayanagar", q: "Full body laser was something I always wanted but thought was too expensive. D-Tanique's package pricing made it accessible and the results after 6 sessions are incredible. Completely smooth, everywhere." },
  { i: "AD", n: "Ananya D.", t: "Underarms & Brazilian · BTM Layout", q: "I have dark skin and was worried about pigmentation risks. Senior Dermatologist Team was very reassuring — showed me exactly how the diode laser works for Type V skin. Zero side effects, fantastic results. 100% recommend." },
  { i: "KS", n: "Kavitha S.", t: "Upper Lip LHR · Bannerghatta Rd", q: "My upper lip hair was a huge confidence issue. 3 sessions in and it's basically gone. The clinic is premium, hygienic and professional — feels like a medical facility, not a parlour. Totally worth it." },
];

const faqs = [
  { q: "How many sessions do I need for permanent laser hair removal?", a: "Most patients require 6–8 sessions spaced 4–6 weeks apart to achieve 90–95% permanent hair reduction. The exact number depends on your hair colour, hair thickness, skin tone and the body zone being treated. Senior Dermatologist Team will give you a personalised estimate at your free consultation." },
  { q: "Is laser hair removal permanent, or does hair come back?", a: "Laser hair removal delivers permanent hair reduction — up to 95% after a full course. The destroyed follicles do not regrow. However, hormonal changes (pregnancy, PCOS, thyroid) can occasionally stimulate new follicles. An annual touch-up session manages this. The vast majority of patients consider the results permanent." },
  { q: "Is laser hair removal safe for the face?", a: "Yes — facial laser hair removal is safe when performed by a qualified dermatologist. At D-Tanique, we treat the upper lip, chin, jawline, cheeks and sideburns routinely. Our protocols use lower energy settings calibrated for the sensitive facial skin, ensuring safety and efficacy." },
  { q: "Is laser hair removal safe for Asian and South Asian skin tones?", a: "Yes — diode laser at 810nm is the safest wavelength for Indian and South Asian skin tones (Fitzpatrick types III–VI). Older IPL or Nd:YAG technologies posed risks for darker skin; modern diode lasers do not. Senior Dermatologist Team has specialist expertise in treating South Asian complexions safely." },
  { q: "What results can I expect after 4, 6 or 8 sessions?", a: "After 4 sessions: typically 60–70% hair reduction. After 6 sessions: 80–90%. After 8 sessions: 90–95%+ permanent reduction. Results vary by individual but these are the benchmarks most D-Tanique patients achieve. Progress is tracked session by session." },
  { q: "How is a dermatologist laser clinic different from a salon?", a: "A dermatologist-run clinic uses FDA-cleared, medical-grade equipment — not lower-powered consumer IPL devices. Every session is supervised by a qualified physician who can adjust settings for your skin type, manage any reactions and ensure safety. Salons typically use IPL devices operated by beauticians without medical training." },
  { q: "What should I do before and after a laser session?", a: "Before: shave the area 24 hours prior, avoid sun exposure for 2 weeks, do not wax or thread (laser targets the follicle which must be intact). After: avoid sun exposure for 48 hours, apply SPF 50+, avoid heat (gym, sauna) for 24 hours. Senior Dermatologist Team will provide a full personalised care guide at your consultation." },
  { q: "How long does a session take?", a: "Session duration varies by treatment area: upper lip (5–10 min), underarms (10–15 min), full legs (45–60 min), full body (2–3 hours). Our large-spot diode handpiece treats areas faster than older technologies — minimising your time in the clinic." },
];

function HairRemovalPage() {
  const [activeZone, setActiveZone] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hr-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="ticker">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((s, i) => (
            <span key={i} className={s.g ? "g" : ""}>{s.t}</span>
          ))}
        </div>
      </div>

      <nav>
        <div className="nl">
          <div className="nl-mark">⚡</div>
          <div className="nl-name">D<span>·</span>Tanique</div>
        </div>
        <div className="nav-links">
          <a onClick={() => scrollTo("#zones")}>Body Zones</a>
          <a onClick={() => scrollTo("#sessions")}>Results</a>
          <a onClick={() => scrollTo("#technology")}>Technology</a>
          <a onClick={() => scrollTo("#safety")}>Safety</a>
          <a onClick={() => scrollTo("#faq")}>FAQ</a>
        </div>
        <button className="btn-nav" onClick={() => scrollTo("#hero-form")}>Book Free Consultation</button>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">J.P. Nagar · Bengaluru's Premium Laser Clinic</div>
            <h1>Permanent Laser<br />Hair Removal —<br /><em>Done Right.</em></h1>
            <p className="hero-sub">Advanced diode laser technology. Certified dermatologist. Safe for all Indian skin tones. Say goodbye to waxing, threading, and razors — permanently. South Bengaluru's most trusted laser hair removal clinic.</p>
            <div className="hero-chips">
              <span className="hero-chip">⚡ Diode Laser</span>
              <span className="hero-chip">🩺 Senior Dermatologist Team</span>
              <span className="hero-chip">💆 Pain-Minimised</span>
              <span className="hero-chip">🌿 All Skin Tones</span>
              <span className="hero-chip">✅ 6–8 Sessions</span>
              <span className="hero-chip">📍 J.P. Nagar</span>
            </div>
            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => scrollTo("#hero-form")}>Book Free Consultation →</button>
              <button className="btn-ghost" onClick={() => scrollTo("#sessions")}>See Results Timeline ↓</button>
            </div>
            <div className="hero-trust">
              <div className="trust-item"><div className="t-dot">✓</div><span><strong>5-Star</strong> Google Rating</span></div>
              <div className="trust-item"><div className="t-dot">✓</div><span><strong>Certified</strong> Dermatologist</span></div>
              <div className="trust-item"><div className="t-dot">✓</div><span><strong>Free</strong> First Consultation</span></div>
              <div className="trust-item"><div className="t-dot">✓</div><span><strong>Safe</strong> for Indian Skin</span></div>
            </div>
          </div>

          <div className="hero-form" id="hero-form">
            <div className="hf-badge">✓ Free · No Obligation · Slots Limited</div>
            <div className="hf-title">Book Your<br /><em>Free Consultation</em></div>
            <div className="hf-sub">Less than 60 seconds to fill · We'll call to confirm</div>
            <div className="f-row">
              <div className="f-group"><label>First Name</label><input type="text" placeholder="Priya" /></div>
              <div className="f-group"><label>Last Name</label><input type="text" placeholder="Sharma" /></div>
            </div>
            <div className="f-group"><label>Mobile Number</label><input type="tel" placeholder="+91 98765 43210" /></div>
            <div className="f-group">
              <label>Treatment Area</label>
              <select defaultValue="">
                <option value="">Select body zone...</option>
                <option>Full Body</option>
                <option>Face (Upper Lip, Chin, Jawline)</option>
                <option>Underarms</option>
                <option>Brazilian / Bikini</option>
                <option>Arms</option>
                <option>Legs</option>
                <option>Back / Chest</option>
                <option>Not sure — need consultation</option>
              </select>
            </div>
            <div className="f-group">
              <label>Preferred Time</label>
              <select defaultValue="10 AM to 12 PM">
                <option>10 AM to 12 PM</option>
                <option>Afternoon (12pm – 4pm)</option>
                <option>Evening (4pm – 7pm)</option>
                <option>Weekends only</option>
              </select>
            </div>
            <button
              className="btn-submit"
              disabled={submitted}
              style={submitted ? { background: "#0B7B6E" } : undefined}
              onClick={() => setSubmitted(true)}
            >
              {submitted ? "✓ Request Received! We'll call you within 2 hours." : "Book Free Laser Consultation →"}
            </button>
            <div className="f-note">🔒 Your details are private and never shared</div>
          </div>
        </div>
      </section>

      <div className="proof-band">
        <div className="pb-item"><span className="pb-num">5★</span><span className="pb-label">Google Rating</span></div>
        <div className="pb-div"></div>
        <div className="pb-item"><span className="pb-num">6–8</span><span className="pb-label">Sessions for Permanence</span></div>
        <div className="pb-div"></div>
        <div className="pb-item"><span className="pb-num">95%</span><span className="pb-label">Hair Reduction After Course</span></div>
        <div className="pb-div"></div>
        <div className="pb-item"><span className="pb-num">Free</span><span className="pb-label">First Consultation</span></div>
        <div className="pb-div"></div>
        <div className="pb-item"><span className="pb-num">All</span><span className="pb-label">Skin Tones Welcome</span></div>
      </div>

      <section>
        <div className="section">
          <div className="section-eye">Why Permanent Laser</div>
          <h2 className="section-h">Free yourself from hair<br /><em>permanently.</em></h2>
          <p className="section-p">Laser hair removal targets hair follicles at the root — preventing regrowth permanently. After completing your full course, you're free. No more waxing appointments, no more razors, no more ingrown hairs.</p>
          <div className="why-grid">
            {whyCards.map((c) => (
              <div className="why-card" key={c.t}>
                <span className="wc-icon">{c.i}</span>
                <div className="wc-title">{c.t}</div>
                <div className="wc-desc">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="div" />

      <section id="zones">
        <div className="section">
          <div className="section-eye">Treatment Areas</div>
          <h2 className="section-h">Every zone. <em>Every concern.</em></h2>
          <p className="section-p">From facial hair to full body — we treat every area with precision. Each zone has a tailored laser protocol, session count and aftercare plan.</p>
          <div className="zone-grid">
            {zones.map((z, i) => (
              <div
                key={z.n}
                className={`zone-card${activeZone === i ? " active" : ""}`}
                onClick={() => setActiveZone(i)}
              >
                <span className="zone-icon">{z.i}</span>
                <div className="zone-name">{z.n}</div>
                <div className="zone-sessions">{z.s}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem", background: "var(--gold-bg)", border: "1px solid var(--border-m)", borderRadius: "12px", padding: "1.1rem 1.4rem", fontSize: ".9rem", color: "var(--muted)", fontWeight: 300, lineHeight: 1.6 }}>
            💡 <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Not sure which areas to treat?</strong> Your free consultation with Senior Dermatologist Team includes a full assessment — he'll recommend the exact zones, session count and protocol for your hair type and skin tone.
          </div>
        </div>
      </section>

      <section id="offers" style={{ background: "var(--gold-bg)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="section">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ink)", color: "#FFD580", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", padding: "5px 15px", borderRadius: 100, marginBottom: "1rem", fontWeight: 500 }}>★ Limited Time Offer</div>
          <h2 className="section-h">Laser Hair Removal <em>Packages</em></h2>
          <p className="section-p">Smooth skin, long-lasting confidence. Choose individual sittings or save big with our 10-sitting packages and combos.</p>

          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 600, color: "var(--ink)", margin: "1rem 0 1.25rem" }}>Individual Rates</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {[
              { img: imgUpperlips, n: "Upper Lips", p: "₹600", pkg: "₹6,000" },
              { img: imgChin, n: "Chin", p: "₹600", pkg: "₹6,000" },
              { img: imgUnderarms, n: "Underarms", p: "₹700", pkg: "₹7,000" },
            ].map((o) => (
              <div key={o.n} style={{ background: "#fff", border: "1px solid var(--border-m)", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--gold-pale)" }}>
                  <img src={o.img} alt={`Laser hair removal — ${o.n}`} loading="lazy" width={768} height={768} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", top: 12, left: 12, background: "var(--ink)", color: "#FFD580", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 600, padding: "5px 10px", borderRadius: 100 }}>Limited Offer</div>
                </div>
                <div style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: "var(--ink)", fontSize: "1.15rem", marginBottom: 4, fontFamily: "'Cormorant Garamond',serif" }}>{o.n}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}><strong style={{ color: "var(--gold)", fontSize: 15 }}>{o.p}</strong> per sitting</div>
                  </div>
                  <div style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-l))", color: "#fff", padding: "10px 14px", borderRadius: 10, textAlign: "center", minWidth: 110 }}>
                    <div style={{ fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", opacity: .9 }}>10 Sittings</div>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.35rem", fontWeight: 700, lineHeight: 1 }}>{o.pkg}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 600, color: "var(--ink)", margin: "1rem 0 1.25rem" }}>Combo Packages <span style={{ fontSize: 14, color: "var(--muted)", fontWeight: 400 }}>(10 Sittings)</span></h3>
          <div style={{ background: "#fff", border: "1px solid var(--border-m)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto auto", gap: "1rem", padding: "1rem 1.25rem", background: "var(--ink)", color: "#FFD580", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 500 }}>
              <div>#</div><div>Package</div><div style={{ textDecoration: "line-through", opacity: .7 }}>Total</div><div>Price</div>
            </div>
            {[
              { n: "Upper Lips + Chin", t: "₹12,000", p: "₹6,000" },
              { n: "Underarms + Chin", t: "₹13,000", p: "₹7,000" },
              { n: "Underarms + Upper Lips", t: "₹13,000", p: "₹7,000" },
              { n: "Underarms + Upper Lips + Chin", t: "₹19,000", p: "₹12,000" },
            ].map((c, i) => (
              <div key={c.n} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto auto", gap: "1rem", padding: "1rem 1.25rem", borderTop: i === 0 ? "none" : "1px solid var(--border)", alignItems: "center" }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600 }}>{i + 1}</div>
                <div style={{ fontWeight: 500, color: "var(--ink)", fontSize: ".95rem" }}>{c.n}</div>
                <div style={{ color: "var(--muted)", textDecoration: "line-through", fontSize: ".9rem" }}>{c.t}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--gold)" }}>{c.p}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button className="btn-primary" onClick={() => scrollTo("#hero-form")} style={{ background: "var(--ink)", color: "#FFD580" }}>Book Your Session Today →</button>
            <a href="tel:+918884448906" className="btn-ghost" style={{ background: "#fff", color: "var(--ink)", border: "1px solid var(--border-m)" }}>📞 +91 88844 48906</a>
          </div>
        </div>
      </section>

      <section className="sessions-section" id="sessions">
        <div className="sessions-inner">
          <div className="section-eye">What to Expect</div>
          <h2 className="section-h">Session by session, <em>watch hair disappear.</em></h2>
          <p className="section-p">Most patients see dramatic reduction after just 2–3 sessions. Here's what to expect across your full course of treatment.</p>
          <div className="results-timeline">
            {timeline.map((t) => (
              <div className="rt-item" key={t.s}>
                <div className={`rt-bubble${t.active ? " active" : ""}`}>{t.n}</div>
                <div className="rt-session">{t.s}</div>
                <span className="rt-pct">{t.p}</span>
                <div className="rt-result">{t.r}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <button className="btn-primary" onClick={() => scrollTo("#hero-form")}>Start My Course — Free Consultation →</button>
          </div>
        </div>
      </section>

      <section id="technology">
        <div className="section">
          <div className="section-eye">Our Technology</div>
          <h2 className="section-h">Medical-grade technology.<br /><em>Not salon-grade.</em></h2>
          <p className="section-p">There is a fundamental difference between the laser used at a salon and a certified medical laser clinic. At D-Tanique, we use the same technology trusted by dermatology centres across Europe and Singapore.</p>
          <div className="tech-grid">
            <div>
              <div className="tech-specs">
                {techSpecs.map((s) => (
                  <div className="tech-spec-card" key={s.l}>
                    <div className="tsc-label">{s.l}</div>
                    <div className="tsc-val">{s.v}</div>
                    <div className="tsc-note">{s.n}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tech-visual">
              <span className="tech-visual-icon">⚡</span>
              <h3>Diode Laser Technology</h3>
              <p>The 810nm diode laser is the international gold standard for permanent hair removal. It targets melanin in the follicle precisely — destroying the root without affecting surrounding skin.</p>
              <div className="tech-badges">
                {["Medical-Grade", "FDA Cleared", "CE Certified", "Contact Cooling", "All Fitzpatrick Types", "Latest Generation"].map((b) => (
                  <span className="tech-badge" key={b}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="div" />

      <section className="safety-section" id="safety">
        <div className="section">
          <div className="section-eye">Safety & Skin Types</div>
          <h2 className="section-h">Safe for <em>every skin tone.</em></h2>
          <p className="section-p">Our diode laser is calibrated specifically for Indian skin tones — Fitzpatrick types III through VI. Every treatment is supervised by Senior Dermatologist Team, ensuring maximum safety and effectiveness regardless of your complexion.</p>
          <div className="skintone-row">
            {skintones.map((s) => (
              <div className="st-card" key={s.l}>
                <div className="st-swatch" style={{ background: s.c }}></div>
                <div className="st-label">{s.l}</div>
                <div className="st-safe">✓ Safe</div>
              </div>
            ))}
            <div className="st-card" style={{ background: "var(--gold-pale)", borderColor: "var(--border-m)" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: ".4rem" }}>🌿</div>
              <div className="st-label" style={{ color: "var(--gold)" }}>All Types</div>
              <div className="st-safe">D-Tanique</div>
            </div>
          </div>
          <div className="safety-grid">
            {safetyCards.map((c) => (
              <div className="safety-card" key={c.n}>
                <span className="sc-num">{c.n}</span>
                <div className="sc-q">{c.q}</div>
                <div className="sc-a">{c.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="provider-section">
        <div className="section">
          <div className="section-eye">Your Expert</div>
          <h2 className="section-h">Certified dermatologist.<br /><em>Not a beautician.</em></h2>
          <p className="section-p">Every laser session at D-Tanique is performed or directly supervised by Senior Dermatologist Team — a fully certified dermatologist. This is the difference between a medical clinic and a salon offering "laser".</p>
          <div className="doc-card">
            <div className="doc-avatar">GG</div>
            <div>
              <div className="doc-name">Senior Dermatologist Team</div>
              <div className="doc-title">Certified Dermatologist & Aesthetic Physician · D-Tanique J.P. Nagar</div>
              <div className="doc-creds">
                <span className="doc-cred">MBBS · Dermatology</span>
                <span className="doc-cred">Laser Certification</span>
                <span className="doc-cred">Aesthetic Medicine</span>
                <span className="doc-cred">Indian Skin Specialist</span>
              </div>
            </div>
          </div>
          <div className="certs-grid">
            {certs.map((c) => (
              <div className="cert-card" key={c.n}>
                <span className="cert-icon">{c.i}</span>
                <div>
                  <div className="cert-name">{c.n}</div>
                  <div className="cert-desc">{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section">
          <div className="section-eye">Why Laser vs Others</div>
          <h2 className="section-h">Stop the cycle.<br /><em>Choose permanent.</em></h2>
          <p className="section-p">Waxing, threading, shaving — they all come back. Compare laser hair removal against every other method.</p>
          <div className="compare-grid">
            {compare.map((c) => (
              <div className={`compare-card${c.best ? " best" : ""}`} key={c.m}>
                <div className="cc-head">
                  <span className="cc-method">{c.m}</span>
                  {c.best && <span className="cc-badge-best">Recommended</span>}
                </div>
                <div className="cc-body">
                  {c.rows.map(([attr, val, cls]) => (
                    <div className="cc-row" key={attr}>
                      <span className="cc-attr">{attr}</span>
                      <span className={`cc-val${cls ? " " + cls : ""}`}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glow-section">
        <div className="glow-inner">
          <div className="section-eye">Beyond Hair Removal</div>
          <h2 className="section-h">Laser doesn't just remove hair —<br /><em>it transforms your skin.</em></h2>
          <p className="section-p">Repeated waxing and shaving darkens and roughens the skin. Laser does the opposite — over your treatment course, skin becomes noticeably smoother, brighter and more even.</p>
          <div className="benefits-strip">
            {benefits.map((b) => (
              <div className="bs-card" key={b.t}>
                <span className="bs-icon">{b.i}</span>
                <div className="bs-title">{b.t}</div>
                <div className="bs-desc">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section">
          <div className="section-eye">Patient Stories</div>
          <h2 className="section-h">Real people. <em>Real results.</em></h2>
          <p className="section-p">D-Tanique's growing community of patients in South Bengaluru — their results, their words.</p>
          <div className="testi-grid">
            {testimonials.map((t) => (
              <div className="testi-card" key={t.n}>
                <div className="tc-stars">★★★★★</div>
                <div className="tc-quote">"{t.q}"</div>
                <div className="tc-author">
                  <div className="tc-avatar">{t.i}</div>
                  <div><div className="tc-name">{t.n}</div><div className="tc-treatment">{t.t}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="div" />

      <ClinicGallery />

      <section id="faq">
        <div className="section">
          <div className="section-eye">Common Questions</div>
          <h2 className="section-h">Every question answered —<br /><em>honestly.</em></h2>
          <div className="faq-wrap">
            {faqs.map((f, i) => (
              <div className="faq-item" key={f.q}>
                <div
                  className={`faq-q${openFaq === i ? " open" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {f.q}
                </div>
                <div className={`faq-a${openFaq === i ? " show" : ""}`}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div className="section-eye" style={{ marginBottom: ".5rem" }}>Ready to start?</div>
        <h2 className="section-h">Permanent smooth skin<br /><em>begins with one free call.</em></h2>
        <p className="section-p">Book your free consultation with Senior Dermatologist Team today. Walk away with a personalised laser plan, session count and pricing — with zero obligation to book.</p>
        <div className="cta-btns">
          <button className="btn-cta" onClick={() => scrollTo("#hero-form")}>Book Free Consultation →</button>
          <a href="tel:+918884448906" className="btn-cta-ol">📞 Call the Clinic</a>
        </div>
        <div className="cta-note">Free consultation · J.P. Nagar clinic · No credit card needed · Slots limited</div>
      </div>

      <footer>
        <div className="f-logo">D<span>·</span>Tanique</div>
        <div className="f-addr">Premium Dermatology & Laser Clinic · J.P. Nagar, Bengaluru, Karnataka</div>
        <div className="f-links">
          <a href="/">Home</a>
          <a onClick={() => scrollTo("#zones")}>Treatment Areas</a>
          <a onClick={() => scrollTo("#safety")}>Safety</a>
          <a onClick={() => scrollTo("#faq")}>FAQ</a>
          <a href="/hydrafacial">HydraFacial ₹699</a>
        </div>
        <div className="f-copy">© 2026 D-Tanique · All rights reserved · J.P. Nagar, Bengaluru</div>
      </footer>

      
    </div>
  );
}
