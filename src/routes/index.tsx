import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import heroTreatment from "@/assets/offers/full-body-laser-hero.jpeg";
import hydrafacialImg from "@/assets/hydrafacial.jpg";
import logo from "@/assets/logo-dtanique.svg";
import offerHydrafacial from "@/assets/offers/hydrafacial-offer.jpeg";
import offerIvDrip from "@/assets/offers/iv-drip-offer.jpeg";
import offerFullBodyLaser from "@/assets/offers/full-body-laser-offer.jpeg";
import offerUnderarmsUpperlips from "@/assets/offers/underarms-upperlips-offer.jpeg";
import offerLaserHairRemoval from "@/assets/offers/laser-hair-removal-offer.jpeg";
import lhrPoster from "@/assets/lhr-offer-poster.jpeg";
import hydraPoster from "@/assets/hydrafacial-offer-poster.jpeg";
import { supabase } from "@/integrations/supabase/client";

const currentHydrafacialOffer = `${offerHydrafacial}?v=20260601-current`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D-Tanique | Premium Dermatology & Aesthetics — J.P. Nagar, Bengaluru" },
      {
        name: "description",
        content:
          "Bengaluru's premium derma clinic in J.P. Nagar, near Jayanagar, BTM & Bannerghatta Road. Laser hair removal, acne, Korean glass skin & skin treatments by certified dermatologists. Book today.",
      },
      { property: "og:title", content: "D-Tanique | Premium Dermatology & Aesthetics — J.P. Nagar, Bengaluru" },
      {
        property: "og:description",
        content:
          "Bengaluru's premium derma clinic in J.P. Nagar, near Jayanagar, BTM & Bannerghatta Road. Laser hair removal, acne, Korean glass skin & skin treatments by certified dermatologists.",
      },
      { property: "og:url", content: "https://dtaniquethedermaclinicjpnagar.com/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "D-Tanique" },
    ],
    links: [
      { rel: "canonical", href: "https://dtaniquethedermaclinicjpnagar.com/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: "⚡",
    name: "Laser Hair Removal",
    desc: "Permanent, pain-minimized laser hair removal using advanced diode technology. Safe for all skin tones. Most popular treatment in South Bengaluru.",
    tags: ["Full Body", "Face", "Brazilian", "Underarms"],
    img: "https://www.dtanique.com/img/laser-hair-removal.jpeg",
  },
  {
    icon: "✨",
    name: "Acne Treatments",
    desc: "Targeted solutions for acne, pigmentation, tanning & dullness. Expert consultations with Senior Dermatologist Team and evidence-based protocols that deliver visible results.",
    tags: ["Acne", "Pigmentation", "Glass Skin", "Yellow Peel"],
    img: "https://www.dtanique.com/img/acne.jpeg",
  },
  {
    icon: "💫",
    name: "Korean Glass Skin",
    desc: "Achieve the trending porcelain-glow complexion with our bespoke multi-step Korean skin protocol. Hydration, brightening & a mirror-like finish.",
    tags: ["Glow Facial", "Hydration", "Brightening"],
    img: "https://www.dtanique.com/img/korean-glass.jpeg",
  },
  {
    icon: "🎨",
    name: "BB Glow Treatment",
    desc: "Semi-permanent foundation effect that evens skin tone, covers blemishes and delivers a natural glow — with results lasting up to months.",
    tags: ["Semi-Permanent", "Tone Evening", "Glow"],
    img: "https://www.dtanique.com/img/bb-glow.jpeg",
  },
  {
    icon: "👁️",
    name: "Eyebrow Microblading",
    desc: "Precision eyebrow microblading, lip blushing and cosmetic tattooing by expert artists. Wake up beautiful, every day.",
    tags: ["Microblading", "Lip Blushing", "Eyeliner"],
    img: "https://www.dtanique.com/img/eyebrow-microblading.jpeg",
  },
  {
    icon: "💉",
    name: "Face PRP",
    desc: "Platelet-rich plasma therapy for hair loss and skin rejuvenation. Also offering meso-therapy, anti-ageing treatments and bespoke skin booster injections.",
    tags: ["PRP", "Hair Loss", "Anti-Ageing"],
    img: "https://www.dtanique.com/img/face-prp.jpeg",
  },
  {
    icon: "🌟",
    name: "CO2 Laser",
    desc: "Fractional CO2 laser resurfacing for scars, wrinkles, and uneven texture. Stimulates collagen for firmer, smoother skin.",
    tags: ["Resurfacing", "Scars", "Anti-Ageing"],
    img: "https://www.dtanique.com/img/co2-laser.jpeg",
  },
  {
    icon: "💋",
    name: "Lip Blushing",
    desc: "Semi-permanent lip tinting that enhances natural color and shape for a soft, blushed pout that lasts.",
    tags: ["Semi-Permanent", "Lip Tint", "Definition"],
    img: "https://www.dtanique.com/img/lip-blushing.jpeg",
  },
  {
    icon: "🪡",
    name: "Micro Needling",
    desc: "Collagen-induction therapy that improves skin texture, fine lines, scars and overall radiance.",
    tags: ["Collagen", "Texture", "Glow"],
    img: "https://www.dtanique.com/img/micro-needling.jpeg",
  },
  {
    icon: "💧",
    name: "HydraFacial",
    desc: "A medical-grade 3-step facial that cleanses, exfoliates and deeply hydrates using patented vortex technology. Painless, no-downtime treatment that infuses antioxidants, peptides and hyaluronic acid for an instant red-carpet glow.",
    tags: ["Hydration", "Deep Cleanse", "Instant Glow", "No Downtime"],
    img: hydrafacialImg,
  },
  {
    icon: "🍋",
    name: "Yellow Peel",
    desc: "Advanced chemical peel that targets pigmentation, melasma and dullness for visibly brighter skin.",
    tags: ["Pigmentation", "Brightening", "Peel"],
    img: "https://www.dtanique.com/images/treatments/yellow-peel.jpeg",
  },
];

const whyItems = [
  {
    n: "01",
    title: "Expert Certified Dermatologist",
    desc: "Senior Dermatologist Team brings specialist dermatology expertise and a precise, personalized approach to every treatment plan.",
  },
  {
    n: "02",
    title: "Medical-Grade Technology",
    desc: "We invest in the latest laser and aesthetic devices — the same used in top clinics across Europe and Singapore.",
  },
  {
    n: "03",
    title: "Transparent, No-Pressure Experience",
    desc: "Your free consultation is a genuine conversation. No hidden charges, no upsells. Just an honest plan for your skin.",
  },
  {
    n: "04",
    title: "Conveniently Located in J.P. Nagar",
    desc: "Right in the heart of South Bengaluru, easily accessible from J.P. Nagar, Jayanagar, Bannerghatta Road & BTM Layout.",
  },
];

const steps = [
  { n: 1, title: "Book Online", desc: "Fill in the form below or call us. Choose a time that suits you — flexible slots available." },
  { n: 2, title: "Free Consultation", desc: "Meet Senior Dermatologist Team for a personalized skin assessment. Get your tailored treatment plan." },
  { n: 3, title: "Begin Treatment", desc: "Start your prescribed plan with expert care and the latest aesthetic technology." },
  { n: 4, title: "See the Results", desc: "Track your progress. Visible, lasting results that build your confidence every session." },
];

const testimonials = [
  { text: "The laser hair removal was painless and effective. Three sessions in and I'm already seeing 70% reduction. The staff is so warm and professional.", who: "Anjali M. · Laser Hair Removal" },
  { text: "Got the BB Glow done before my wedding — absolute game changer. My skin looked like a filter in real life. 100% recommend D-Tanique.", who: "Deepika S. · BB Glow Treatment" },
  { text: "Struggled with acne for years. Senior Dermatologist Team gave me a plan that actually worked in a few weeks. This clinic is the real deal — not just another salon.", who: "Rahul T. · Acne Treatment" },
];

const faqs = [
  { q: "Is the consultation really free?", a: "Yes, completely free. Your initial consultation with Senior Dermatologist Team includes a skin assessment and personalized treatment recommendation with no obligation to book any service." },
  { q: "Is laser hair removal painful?", a: "Modern laser systems are designed to minimize discomfort. Most patients describe it as a mild snapping sensation. We use cooling technology to keep you comfortable throughout the session." },
  { q: "How many sessions will I need?", a: "It varies by treatment and individual. Laser hair removal typically requires 6–8 sessions for optimal results. Skin treatments like acne protocols are usually 4–6 sessions. Senior Dermatologist Team will give you a personalized estimate during consultation." },
  { q: "Where is D-Tanique located?", a: "We are located in J.P. Nagar, Bengaluru — easily reachable from Jayanagar, Bannerghatta Road, BTM Layout, and Kanakapura Road. Our team can share the exact address when you book your appointment." },
  { q: "Are the treatments safe for Indian skin tones?", a: "Absolutely. Our equipment and protocols are specifically calibrated for South Asian skin tones. Senior Dermatologist Team has expertise in treating all Fitzpatrick skin types safely and effectively." },
];

const marqueeItems = [
  "Laser Hair Removal", "Korean Glass Skin", "Acne Treatments", "BB Glow",
  "Microblading", "Yellow Peel", "Lip Blushing", "PRP Therapy", "Dermatology Consultations",
];

function Index() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    const els = rootRef.current.querySelectorAll<HTMLElement>("[data-anim]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitError(null);
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const firstName = (fd.get("firstName") as string)?.trim() || "";
    const lastName = (fd.get("lastName") as string)?.trim() || "";
    const phone = (fd.get("mobile") as string)?.trim() || "";
    const email = ((fd.get("email") as string) || "").trim() || null;
    const treatment = (fd.get("treatment") as string)?.trim() || "";
    const time = (fd.get("time") as string)?.trim() || "";
    const concern = [treatment, time && `Preferred time: ${time}`].filter(Boolean).join(" · ");
    const name = `${firstName} ${lastName}`.trim();

    const { error } = await supabase.from("leads").insert({
      name,
      phone,
      email,
      concern: concern || null,
      source: "home",
    });
    setSubmitting(false);
    if (error) {
      setSubmitError("Sorry, we couldn't submit. Please try again or call us directly.");
      return;
    }
    setSubmitted(true);

    // Forward lead details to clinic WhatsApp
    const WHATSAPP_NUMBER = "918884448906";
    const message =
      `Hi D-Tanique! New consultation request:%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Mobile:* ${phone}%0A` +
      (email ? `*Email:* ${email}%0A` : "") +
      (treatment ? `*Treatment:* ${treatment}%0A` : "") +
      (time ? `*Preferred Time:* ${time}` : "");
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    const opened = window.open(waUrl, "_blank");
    if (!opened) {
      // Popup blocked — fall back to same-tab navigation so the message is still delivered
      window.location.href = waUrl;
    }

  };

  return (
    <div ref={rootRef}>
      <style>{styles}</style>

      <div className={`sticky-bar ${stickyVisible ? "visible" : ""}`}>
        <img src={logo} alt="D'tanique The Derma Clinic" className="sticky-logo" />
        <span>J.P. Nagar, Bengaluru · Premium Dermatology</span>
        <a href="#book">Book Free Consultation →</a>
      </div>

      

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="badge" data-anim>Now Open · J.P. Nagar, Bengaluru</div>
          <h1 data-anim data-anim-delay="1">
            Your skin's finest<br /><em>chapter</em> starts here.
          </h1>
          <p className="hero-sub" data-anim data-anim-delay="2">
            Premium dermatology & aesthetic care by certified dermatologists. Laser hair removal,
            glass skin, acne treatments, and advanced cosmetic procedures — all under one roof in J.P. Nagar.
          </p>
          <div className="hero-ctas" data-anim data-anim-delay="3">
            <a href="#book" className="btn-primary">Book Free Consultation</a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
          <div className="hero-trust" data-anim data-anim-delay="4">
            <div className="trust-item">
              <div className="trust-num">5★</div>
              <div className="trust-label">Google Rating</div>
            </div>
            <div className="trust-div" />
            <div className="trust-item">
              <div className="trust-num">Expert</div>
              <div className="trust-label">Senior Dermatologist Team</div>
            </div>
            <div className="trust-div" />
            <div className="trust-item">
              <div className="trust-num">Free</div>
              <div className="trust-label">First Consultation</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-slide s1">
            <img
              src={heroTreatment}
              alt="Woman enjoying a premium dermatology treatment at D-Tanique clinic"
              width={1280}
              height={1600}
            />
          </div>
          <div className="hero-slide s2">
            <img src={offerLaserHairRemoval} alt="Laser Hair Removal Packages — Limited Time Offer" />
          </div>
          <div className="hero-slide s3">
            <img src={currentHydrafacialOffer} alt="Hydra Facial — Instant Glass Skin — ₹1499 Limited Time Offer" />
          </div>
          <div className="hero-slide s4">
            <img src={offerUnderarmsUpperlips} alt="Underarms & Upper Lips Laser — Buy 1 Get 1 Free" />
          </div>
          <div className="hero-tag">
            <div className="tag-label">✦ Certified Clinic</div>
            <div className="tag-text">Advanced laser & aesthetic technology with medical-grade results.</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="services-strip">
        <div className="strip-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>
              {item} <span className="strip-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* PROOF */}
      <section className="proof">
        <div className="proof-item"><div className="proof-icon">✓</div><div><strong>Certified Dermatologists</strong><br />Medical-grade expertise</div></div>
        <div className="proof-item"><div className="proof-icon">★</div><div><strong>5-Star Rated</strong><br />On Google Reviews</div></div>
        <div className="proof-item"><div className="proof-icon">🔬</div><div><strong>Advanced Technology</strong><br />Latest laser & aesthetic devices</div></div>
        <div className="proof-item"><div className="proof-icon">📍</div><div><strong>J.P. Nagar, Bengaluru</strong><br />Easily accessible location</div></div>
        <div className="proof-item"><div className="proof-icon">🎁</div><div><strong>Free Consultation</strong><br />No obligation, personalized advice</div></div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-kicker" data-anim>Our Treatments</div>
        <h2 className="section-title" data-anim data-anim-delay="1">
          Every service you need,<br /><em>expertly</em> delivered.
        </h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i} data-anim data-anim-delay={String((i % 3) + 1)}>
              <div className="service-img-wrap">
                <img src={s.img} alt={s.name} loading="lazy" className="service-img" />
              </div>
              <span className="service-num">0{i + 1}</span>
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <div className="why-left">
          <div className="section-kicker" data-anim>Why Choose Us</div>
          <h2 className="section-title" data-anim data-anim-delay="1">
            Bengaluru's premium derma clinic,<br /><em>built differently.</em>
          </h2>
        </div>
        <div className="why-right">
          {whyItems.map((w, i) => (
            <div className="why-item" key={w.n} data-anim data-anim-delay={String(i + 1)}>
              <div className="why-num">{w.n}</div>
              <div className="why-text">
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section className="offer">
        <div className="offer-inner">
          <h2 data-anim>Your <em>first consultation</em> is on us.</h2>
          <p data-anim data-anim-delay="1">
            Book your free, no-obligation skin consultation with Senior Dermatologist Team. Walk away with a personalized treatment plan — whether or not you book a service.
          </p>
          <a href="#book" className="btn-primary">Claim Your Free Consultation →</a>
          <span className="offer-note">Limited slots available · J.P. Nagar clinic · No credit card required</span>
        </div>
      </section>

      {/* PROMO POSTERS */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(180deg,#fff 0%,#faf3ec 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b76e79", marginBottom: 12 }}>
              Limited Time
            </p>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 300, color: "#1a1a1a", margin: 0 }}>
              Current <em>Opening Offers</em>
            </h2>
            <p style={{ color: "#666", marginTop: 12, fontSize: 14 }}>
              Tap any offer to claim it on WhatsApp.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {[
              { src: currentHydrafacialOffer, alt: "Hydra Facial — Instant Glass Skin — ₹1499 limited time offer", msg: "Hi D'Tanique, I'd like to claim the Hydra Facial ₹1499 limited time offer." },
              { src: offerIvDrip, alt: "IV Drip wellness 50% off opening offer", msg: "Hi D'Tanique, I'd like to claim the IV Drip 50% off opening offer." },
              { src: offerFullBodyLaser, alt: "Full body laser hair reduction 50% off — 10 sessions", msg: "Hi D'Tanique, I'd like to claim the Full Body Laser 50% off (10 sessions) offer." },
              { src: offerUnderarmsUpperlips, alt: "Underarms / Upper lips laser — Buy 1 Get 1 Free", msg: "Hi D'Tanique, I'd like to claim the Underarms / Upper Lips Buy 1 Get 1 Free offer." },
              { src: offerLaserHairRemoval, alt: "Laser Hair Removal Packages — individual & combo limited time offer", msg: "Hi D'Tanique, I'd like to know more about the Laser Hair Removal packages offer." },
            ].map((o, i) => (
              <a
                key={i}
                href={`https://wa.me/918884448906?text=${encodeURIComponent(o.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", transition: "transform .3s ease, box-shadow .3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.14)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; }}
              >
              <img src={o.src} alt={o.alt} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="how">
        <div className="section-kicker" data-anim>Simple Process</div>
        <h2 className="section-title" data-anim data-anim-delay="1">
          From enquiry to<br /><em>glowing</em> results.
        </h2>
        <div className="how-steps">
          {steps.map((s, i) => (
            <div className="step" key={s.n} data-anim data-anim-delay={String(i + 1)}>
              <div className="step-dot">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* TESTIMONIAL */}
      <section className="testimonial">
        <div className="stars">★★★★★</div>
        <blockquote data-anim>
          "I finally found a clinic in J.P. Nagar that actually listens. Senior Dermatologist Team was thorough, the technology is clearly top-tier, and my skin has genuinely transformed."
        </blockquote>
        <cite>Priya R. · Laser Hair Removal & Glass Skin · J.P. Nagar</cite>
        <div className="t-grid">
          {testimonials.map((t, i) => (
            <div className="t-card" key={i} data-anim data-anim-delay={String(i + 1)}>
              <div className="t-card-stars">★★★★★</div>
              <p className="t-card-text">"{t.text}"</p>
              <div className="t-card-author">{t.who}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LEAD */}
      <section className="lead" id="book">
        <div className="lead-left">
          <div className="section-kicker">Book Now</div>
          <h2 className="section-title">
            Start your skin<br /><em>transformation</em> today.
          </h2>
          <p>Book your free, no-obligation skin consultation with our Senior Dermatologist Team. Walk away with a personalized treatment plan — whether or not you book a service.</p>
          <p>Fill in the form and our team will confirm your free consultation slot within a few hours. No obligation, no pressure — just great skin ahead.</p>
          <div className="perks">
            <div className="perk">Free, personalized skin consultation</div>
            <div className="perk">Expert advice from a certified dermatologist</div>
            <div className="perk">Transparent pricing, no surprise charges</div>
            <div className="perk">Flexible appointment slots, Mon–Sat</div>
            <div className="perk">J.P. Nagar clinic, easy parking available</div>
          </div>
        </div>
        <form className="lead-form" onSubmit={handleSubmit}>
          <div className="form-title">Book Your Free Consultation</div>
          <div className="form-sub">Takes less than 60 seconds · No card required</div>

          {submitted ? (
            <div style={{ padding: "2rem 0", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✓</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "var(--charcoal)" }}>
                Thank you! We'll call you shortly.
              </div>
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" required maxLength={50} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" required maxLength={50} />
                </div>
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" name="mobile" required placeholder="+91" maxLength={20} />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="you@email.com" maxLength={255} />
              </div>
              <div className="form-group">
                <label>I'm Interested In</label>
                <select name="treatment" required defaultValue="">
                  <option value="" disabled>Select a treatment...</option>
                  <option>Laser Hair Removal</option>
                  <option>Korean Glass Skin</option>
                  <option>Acne Treatment</option>
                  <option>BB Glow Treatment</option>
                  <option>Microblading / Lip Blushing</option>
                  <option>PRP Therapy</option>
                  <option>General Dermatology Consultation</option>
                  <option>Other / Not Sure Yet</option>
                </select>
              </div>
              <div className="form-group">
                <label>Preferred Time</label>
                <select name="time" defaultValue="">
                  <option value="">10 AM to 12 PM</option>
                  <option>Afternoon (12pm – 4pm)</option>
                  <option>Evening (4pm – 7pm)</option>
                  <option>Weekend only</option>
                </select>
              </div>
              <button type="submit" className="form-submit" disabled={submitting}>
                {submitting ? "Submitting…" : "Book My Free Consultation →"}
              </button>
              {submitError && (
                <div style={{ color: "#b00020", fontSize: "0.85rem", marginTop: "0.5rem" }}>{submitError}</div>
              )}
              <div className="form-privacy">🔒 Your details are private and never shared. We'll only contact you to confirm your appointment.</div>
            </>
          )}
        </form>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="section-kicker" data-anim>FAQ</div>
        <h2 className="section-title" data-anim data-anim-delay="1">
          Common questions<br /><em>answered.</em>
        </h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`faq-item ${openFaq === i ? "open" : ""}`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="faq-q">
                <h3>{f.q}</h3>
                <div className="faq-toggle">+</div>
              </div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="footer-cta">
        <div className="footer-cta-inner">
          <h2>Ready for your <em>best skin</em> ever?</h2>
          <p>Join Bengaluru's growing community of D-Tanique clients. Your free consultation is waiting.</p>
          <div className="footer-cta-btns">
            <a href="#book" className="btn-gold">Book Free Consultation →</a>
            <a href="tel:+918884448906" className="btn-outline-white">📞 Call Now</a>
          </div>
        </div>
      </section>

      <footer className="footer-bar">
        <img src={logo} alt="D'tanique The Derma Clinic" className="footer-logo" loading="lazy" />
        <div className="footer-bar-loc">📍 J.P. Nagar, Bengaluru, Karnataka</div>
        <a href="tel:+918884448906" className="footer-bar-phone">Call for Appointments</a>
      </footer>
    </div>
  );
}

const styles = `
  :root {
    --cream: #F7F3EE;
    --warm-white: #FDFAF7;
    --charcoal: #1C1916;
    --mid: #4A4541;
    --muted: #8C8480;
    --gold: #C4A882;
    --gold-light: #E8D8C3;
    --accent: #B8956B;
    --rose: #D4A5A5;
  }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--warm-white);
    color: var(--charcoal);
    overflow-x: hidden;
    margin: 0;
  }
  .sticky-bar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: var(--charcoal); color: #fff;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0.75rem 2rem; font-size: 0.8rem;
    letter-spacing: 0.06em; text-transform: uppercase;
    transform: translateY(-100%); transition: transform 0.4s ease;
  }
  .sticky-bar.visible { transform: translateY(0); }
  .sticky-bar span { opacity: 0.6; }
  .sticky-bar a {
    background: var(--gold); color: var(--charcoal); font-weight: 500;
    padding: 0.45rem 1.2rem; text-decoration: none; border-radius: 2px;
    font-size: 0.75rem; letter-spacing: 0.08em; transition: background 0.2s;
  }
  .sticky-bar a:hover { background: var(--accent); color: #fff; }

  .hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; position: relative; }
  .hero-left { display: flex; flex-direction: column; justify-content: center; padding: 6rem 4rem 4rem 5vw; position: relative; z-index: 2; }
  .badge { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 2rem; font-weight: 500; }
  .badge::before { content: ''; display: block; width: 24px; height: 1px; background: var(--accent); }
  .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.8rem, 5vw, 4.5rem); font-weight: 300; line-height: 1.12; color: var(--charcoal); margin-bottom: 1.5rem; }
  .hero h1 em { font-style: italic; color: var(--accent); }
  .hero-sub { font-size: 1rem; line-height: 1.7; color: var(--mid); max-width: 460px; margin-bottom: 2.5rem; font-weight: 300; }
  .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
  .btn-primary { background: var(--charcoal); color: #fff; padding: 0.9rem 2rem; text-decoration: none; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; border-radius: 2px; transition: background 0.25s, transform 0.2s; display: inline-block; }
  .btn-primary:hover { background: var(--accent); transform: translateY(-1px); }
  .btn-secondary { border: 1px solid var(--gold-light); color: var(--mid); padding: 0.9rem 2rem; text-decoration: none; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 400; border-radius: 2px; transition: border-color 0.25s, color 0.25s; display: inline-block; }
  .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
  .hero-trust { display: flex; gap: 2.5rem; align-items: center; }
  .trust-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 400; color: var(--charcoal); line-height: 1; }
  .trust-label { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-top: 0.2rem; }
  .trust-div { width: 1px; height: 40px; background: var(--gold-light); }

  .hero-right { position: relative; overflow: hidden; }
  .hero-right::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, var(--gold-light) 0%, #e8c9b0 50%, #d4a58a 100%); z-index: 0; }
  .hero-slide { position: absolute; inset: 0; opacity: 0; animation: heroFade 12s infinite; z-index: 1; }
  .hero-slide.s1 { animation-delay: 0s; }
  .hero-slide.s2 { animation-delay: 3s; background: #F7EFD9; display: flex; align-items: center; justify-content: center; padding: 1.5rem; }
  .hero-slide.s3 { animation-delay: 6s; background: #F7EFD9; display: flex; align-items: center; justify-content: center; padding: 1.5rem; }
  .hero-slide.s4 { animation-delay: 9s; background: #F7EFD9; display: flex; align-items: center; justify-content: center; padding: 1.5rem; }
  .hero-slide img { width: 100%; height: 100%; object-fit: cover; }
  .hero-slide.s2 img, .hero-slide.s3 img, .hero-slide.s4 img { object-fit: contain; box-shadow: 0 20px 60px rgba(0,0,0,0.3); border-radius: 6px; }
  @keyframes heroFade { 0%,20%{opacity:1} 25%,95%{opacity:0} 100%{opacity:1} }
  .hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }
  .hero-right::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(28,25,22,0) 60%, rgba(28,25,22,0.35) 100%); z-index: 2; }
  .hero-img-placeholder { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 1; }
  .glow-art { width: 320px; height: 420px; position: relative; }
  .glow-art .circle-1 { position: absolute; width: 280px; height: 280px; border-radius: 50%; background: rgba(255,255,255,0.25); top: 50%; left: 50%; transform: translate(-50%, -50%); animation: pulse 4s ease-in-out infinite; }
  .glow-art .circle-2 { position: absolute; width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.3); top: 50%; left: 50%; transform: translate(-50%, -50%); animation: pulse 4s ease-in-out infinite 0.5s; }
  .glow-art .face-silhouette { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: 'Cormorant Garamond', serif; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.9); text-align: center; z-index: 2; }
  .glow-art .face-silhouette .big-text { font-size: 5rem; font-weight: 300; font-style: italic; opacity: 0.3; display: block; line-height: 1; color: var(--charcoal); }
  .hero-tag { position: absolute; bottom: 2.5rem; left: 2rem; z-index: 3; background: rgba(28,25,22,0.85); backdrop-filter: blur(8px); color: #fff; padding: 1rem 1.5rem; border-radius: 4px; max-width: 240px; }
  .hero-tag .tag-label { font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.3rem; }
  .hero-tag .tag-text { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; font-weight: 300; line-height: 1.4; }
  @keyframes pulse { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 1; } 50% { transform: translate(-50%,-50%) scale(1.05); opacity: 0.8; } }

  .services-strip { background: var(--charcoal); color: #fff; overflow: hidden; padding: 1.2rem 0; position: relative; }
  .strip-track { display: flex; gap: 3rem; white-space: nowrap; animation: marquee 22s linear infinite; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-light); align-items: center; width: max-content; }
  .strip-track span { flex-shrink: 0; }
  .strip-dot { color: var(--gold); font-size: 1rem; flex-shrink: 0; }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  .proof { background: var(--cream); padding: 3rem 5vw; display: flex; align-items: center; gap: 3rem; flex-wrap: wrap; justify-content: center; border-top: 1px solid var(--gold-light); border-bottom: 1px solid var(--gold-light); }
  .proof-item { display: flex; align-items: center; gap: 0.75rem; font-size: 0.82rem; color: var(--mid); }
  .proof-icon { width: 32px; height: 32px; background: var(--gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0; }
  .proof-item strong { color: var(--charcoal); font-weight: 500; }

  .services { padding: 6rem 5vw; background: var(--warm-white); }
  .section-kicker { font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; font-weight: 500; display: flex; align-items: center; gap: 0.75rem; }
  .section-kicker::after { content: ''; display: block; width: 40px; height: 1px; background: var(--accent); }
  .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 300; line-height: 1.2; margin-bottom: 3.5rem; max-width: 560px; }
  .section-title em { font-style: italic; color: var(--accent); }

  .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: var(--gold-light); border: 1.5px solid var(--gold-light); }
  .service-card { background: var(--warm-white); padding: 2.5rem 2rem; position: relative; overflow: hidden; transition: background 0.3s; }
  .service-card:hover { background: var(--cream); }
  .service-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: var(--gold); transform: scaleX(0); transition: transform 0.3s ease; transform-origin: left; }
  .service-img-wrap { position: relative; margin: -2.5rem -2rem 1.5rem; overflow: hidden; aspect-ratio: 4 / 3; background: var(--cream); }
  .service-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; }
  .service-card:hover .service-img { transform: scale(1.05); }
  .service-card:hover::after { transform: scaleX(1); }
  .service-num { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 300; color: var(--gold-light); line-height: 1; margin-bottom: 1rem; display: block; }
  .service-icon { font-size: 1.6rem; margin-bottom: 0.75rem; display: block; }
  .service-name { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 400; color: var(--charcoal); margin-bottom: 0.6rem; }
  .service-desc { font-size: 0.82rem; line-height: 1.65; color: var(--mid); margin-bottom: 1.25rem; font-weight: 300; }
  .service-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .tag { font-size: 0.65rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); border: 1px solid var(--gold-light); padding: 0.2rem 0.6rem; border-radius: 2px; }

  .why { background: var(--charcoal); color: #fff; padding: 6rem 5vw; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
  .why-left .section-kicker { color: var(--gold); }
  .why-left .section-kicker::after { background: var(--gold); }
  .why-left .section-title { color: #fff; margin-bottom: 0; }
  .why-left .section-title em { color: var(--gold); }
  .why-right { display: flex; flex-direction: column; gap: 2rem; }
  .why-item { display: grid; grid-template-columns: 48px 1fr; gap: 1.25rem; align-items: start; }
  .why-num { width: 48px; height: 48px; border: 1px solid rgba(196,168,130,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--gold); flex-shrink: 0; }
  .why-text h3 { font-size: 0.9rem; font-weight: 500; color: #fff; margin-bottom: 0.3rem; letter-spacing: 0.02em; }
  .why-text p { font-size: 0.8rem; line-height: 1.65; color: rgba(255,255,255,0.55); font-weight: 300; }

  .offer { background: linear-gradient(135deg, #e8c9a8 0%, #d4a882 60%, #c49060 100%); padding: 4rem 5vw; text-align: center; position: relative; overflow: hidden; }
  .offer::before { content: 'FREE'; position: absolute; font-family: 'Cormorant Garamond', serif; font-size: 18rem; font-weight: 300; color: rgba(255,255,255,0.08); top: 50%; left: 50%; transform: translate(-50%, -50%); letter-spacing: -0.05em; pointer-events: none; white-space: nowrap; }
  .offer-inner { position: relative; z-index: 1; }
  .offer h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 300; color: var(--charcoal); margin-bottom: 0.75rem; line-height: 1.2; }
  .offer h2 em { font-style: italic; }
  .offer p { font-size: 0.9rem; color: rgba(28,25,22,0.7); margin-bottom: 2rem; font-weight: 300; max-width: 500px; margin-inline: auto; }
  .offer .btn-primary { background: var(--charcoal); color: #fff; padding: 1rem 2.5rem; font-size: 0.82rem; }
  .offer .btn-primary:hover { background: #000; }
  .offer-note { display: block; margin-top: 1rem; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(28,25,22,0.5); }

  .how { padding: 6rem 5vw; background: var(--cream); }
  .how-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 3.5rem; position: relative; }
  .how-steps::before { content: ''; position: absolute; top: 24px; left: 12.5%; right: 12.5%; height: 1px; background: var(--gold-light); z-index: 0; }
  .step { text-align: center; padding: 0 1.5rem; position: relative; z-index: 1; }
  .step-dot { width: 48px; height: 48px; border-radius: 50%; background: var(--warm-white); border: 1.5px solid var(--gold); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--accent); font-weight: 400; }
  .step h3 { font-size: 0.85rem; font-weight: 500; color: var(--charcoal); margin-bottom: 0.4rem; letter-spacing: 0.03em; }
  .step p { font-size: 0.78rem; line-height: 1.6; color: var(--muted); font-weight: 300; }


  .testimonial { padding: 5rem 5vw; background: var(--warm-white); display: flex; flex-direction: column; align-items: center; text-align: center; }
  .stars { font-size: 1.1rem; color: var(--gold); letter-spacing: 0.15em; margin-bottom: 2rem; }
  .testimonial blockquote { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.3rem, 2.5vw, 2rem); font-weight: 300; font-style: italic; line-height: 1.5; color: var(--charcoal); max-width: 720px; margin-bottom: 2rem; }
  .testimonial cite { font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); font-style: normal; }
  .t-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; width: 100%; max-width: 900px; }
  .t-card { background: var(--cream); padding: 1.75rem; border-radius: 4px; text-align: left; border: 1px solid var(--gold-light); }
  .t-card-stars { color: var(--gold); font-size: 0.8rem; margin-bottom: 0.75rem; }
  .t-card-text { font-size: 0.82rem; line-height: 1.65; color: var(--mid); margin-bottom: 1rem; font-weight: 300; font-style: italic; }
  .t-card-author { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }

  .lead { background: var(--charcoal); padding: 6rem 5vw; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
  .lead-left .section-kicker { color: var(--gold); }
  .lead-left .section-kicker::after { background: var(--gold); }
  .lead-left .section-title { color: #fff; }
  .lead-left .section-title em { color: var(--gold); }
  .lead-left p { font-size: 0.88rem; line-height: 1.7; color: rgba(255,255,255,0.55); font-weight: 300; margin-top: -2rem; margin-bottom: 2.5rem; }
  .perks { display: flex; flex-direction: column; gap: 0.75rem; }
  .perk { display: flex; align-items: center; gap: 0.75rem; font-size: 0.82rem; color: rgba(255,255,255,0.7); }
  .perk::before { content: '✓'; width: 20px; height: 20px; background: rgba(196,168,130,0.2); border: 1px solid var(--gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; color: var(--gold); flex-shrink: 0; }

  .lead-form { background: var(--warm-white); padding: 2.5rem; border-radius: 4px; }
  .form-title { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 400; color: var(--charcoal); margin-bottom: 0.3rem; }
  .form-sub { font-size: 0.78rem; color: var(--muted); margin-bottom: 1.75rem; letter-spacing: 0.02em; }
  .form-group { margin-bottom: 1rem; }
  .form-group label { display: block; font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.4rem; font-weight: 500; }
  .form-group input, .form-group select { width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--gold-light); border-radius: 2px; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; color: var(--charcoal); background: #fff; outline: none; transition: border-color 0.2s; appearance: none; }
  .form-group input:focus, .form-group select:focus { border-color: var(--gold); }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-submit { width: 100%; padding: 0.95rem; background: var(--charcoal); color: #fff; border: none; font-family: 'DM Sans', sans-serif; font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500; cursor: pointer; border-radius: 2px; margin-top: 1.25rem; transition: background 0.25s, transform 0.2s; }
  .form-submit:hover { background: var(--accent); transform: translateY(-1px); }
  .form-privacy { font-size: 0.65rem; color: var(--muted); text-align: center; margin-top: 0.75rem; line-height: 1.5; }

  .faq { padding: 5rem 5vw; background: var(--cream); max-width: 860px; margin: 0 auto; }
  .faq-list { margin-top: 3rem; }
  .faq-item { border-bottom: 1px solid var(--gold-light); padding: 1.5rem 0; cursor: pointer; }
  .faq-q { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
  .faq-q h3 { font-size: 0.9rem; font-weight: 400; color: var(--charcoal); letter-spacing: 0.02em; }
  .faq-toggle { width: 24px; height: 24px; border-radius: 50%; border: 1px solid var(--gold-light); display: flex; align-items: center; justify-content: center; font-size: 1rem; color: var(--accent); flex-shrink: 0; transition: transform 0.25s, background 0.25s; }
  .faq-item.open .faq-toggle { transform: rotate(45deg); background: var(--charcoal); color: #fff; border-color: var(--charcoal); }
  .faq-a { font-size: 0.82rem; line-height: 1.7; color: var(--mid); font-weight: 300; max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.25s; }
  .faq-item.open .faq-a { max-height: 300px; padding-top: 1rem; }

  .footer-cta { background: linear-gradient(160deg, var(--charcoal) 60%, #2d2520 100%); padding: 5rem 5vw; text-align: center; position: relative; overflow: hidden; }
  .footer-cta::before { content: 'D-TANIQUE'; position: absolute; font-family: 'Cormorant Garamond', serif; font-size: 14rem; font-weight: 300; color: rgba(196,168,130,0.05); top: 50%; left: 50%; transform: translate(-50%, -50%); white-space: nowrap; pointer-events: none; }
  .footer-cta-inner { position: relative; z-index: 1; }
  .footer-cta h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 300; color: #fff; margin-bottom: 1rem; line-height: 1.2; }
  .footer-cta h2 em { font-style: italic; color: var(--gold); }
  .footer-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.5); margin-bottom: 2.5rem; font-weight: 300; }
  .footer-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .btn-gold { background: var(--gold); color: var(--charcoal); padding: 0.95rem 2.2rem; text-decoration: none; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; border-radius: 2px; transition: background 0.25s, transform 0.2s; }
  .btn-gold:hover { background: var(--accent); color: #fff; transform: translateY(-1px); }
  .btn-outline-white { border: 1px solid rgba(255,255,255,0.25); color: rgba(255,255,255,0.7); padding: 0.95rem 2.2rem; text-decoration: none; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 2px; transition: border-color 0.25s, color 0.25s; }
  .btn-outline-white:hover { border-color: var(--gold); color: var(--gold); }

  .footer-bar { background: #0f0d0b; padding: 1.5rem 5vw; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; }
  .footer-bar-brand { font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: rgba(255,255,255,0.4); letter-spacing: 0.05em; }
  .footer-logo { height: 72px; width: auto; display: block; background: #fff; padding: 8px 14px; border-radius: 8px; }
  .sticky-logo { height: 36px; width: auto; display: block; background: #fff; padding: 4px 8px; border-radius: 4px; }
  .footer-bar-loc { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.3); }
  .footer-bar-phone { font-size: 0.78rem; color: var(--gold); text-decoration: none; letter-spacing: 0.05em; }

  .phone-float { position: fixed; bottom: 2rem; right: 2rem; z-index: 50; background: var(--gold); color: var(--charcoal); width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; box-shadow: 0 4px 20px rgba(0,0,0,0.2); text-decoration: none; animation: float 3s ease-in-out infinite; transition: background 0.2s; }
  .phone-float:hover { background: var(--accent); color: #fff; }
  @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }

  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; min-height: auto; }
    .hero-right { height: 300px; }
    .hero-left { padding: 5rem 1.5rem 3rem; }
    .services-grid { grid-template-columns: 1fr 1fr; }
    .why, .lead { grid-template-columns: 1fr; gap: 3rem; }
    .how-steps { grid-template-columns: 1fr 1fr; gap: 2rem; }
    .how-steps::before { display: none; }
    .t-grid { grid-template-columns: 1fr; }
    .proof { gap: 1.5rem; }
  }
  @media (max-width: 600px) {
    .services-grid { grid-template-columns: 1fr; }
    .hero-ctas { flex-direction: column; }
    .form-row { grid-template-columns: 1fr; }
    .how-steps { grid-template-columns: 1fr; }
  }

  [data-anim] { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  [data-anim].in { opacity: 1; transform: translateY(0); }
  [data-anim-delay="1"] { transition-delay: 0.1s; }
  [data-anim-delay="2"] { transition-delay: 0.2s; }
  [data-anim-delay="3"] { transition-delay: 0.3s; }
  [data-anim-delay="4"] { transition-delay: 0.4s; }
  [data-anim-delay="5"] { transition-delay: 0.5s; }
  [data-anim-delay="6"] { transition-delay: 0.6s; }
`;
