import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hydrafacialImg from "@/assets/hydrafacial.jpg";
import heroLadyImg from "@/assets/hydrafacial-hero-lady.jpg";
import logo from "@/assets/logo.png";
import ClinicGallery from "@/components/ClinicGallery";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/hydrafacial")({
  head: () => ({
    meta: [
      { title: "HydraFacial Bangalore @ ₹1499 | D-Tanique J.P. Nagar — Premium Skin Clinic" },
      {
        name: "description",
        content:
          "Bengaluru's best HydraFacial deal — just ₹1499. Deep cleanse, exfoliate, hydrate & glow. Certified dermatologists at D-Tanique J.P. Nagar. Book your free consultation today.",
      },
      { property: "og:title", content: "HydraFacial Bangalore @ ₹1499 | D-Tanique J.P. Nagar" },
      {
        property: "og:description",
        content: "Medical-grade HydraFacial in J.P. Nagar — deep cleanse, exfoliate, hydrate & glow in 45 minutes. Just ₹1499.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: HydraFacialPage,
});

const benefits = [
  { icon: "💧", title: "Deep Hydration", desc: "Hyaluronic acid infusion replenishes moisture at the cellular level — skin plumps visibly in one session." },
  { icon: "✨", title: "Instant Radiance", desc: "Say goodbye to dull skin. Walk out glowing — youthful radiance is visible immediately after treatment." },
  { icon: "🧹", title: "Detox & Deep Cleanse", desc: "Vortex suction extracts blackheads, excess sebum, and impurities without any pain or redness." },
  { icon: "⏱", title: "Zero Downtime", desc: "45 minutes. No redness, no peeling, no recovery. Return to your day — or your event — looking perfect." },
  { icon: "🩺", title: "Medically Supervised", desc: "Every session administered by certified dermatologist Senior Dermatologist Team using medical-grade patented technology." },
  { icon: "🌿", title: "All Skin Types", desc: "Tailored for every skin — oily, dry, sensitive, acne-prone, or combination. Calibrated for Indian skin tones." },
];

const treatments = [
  { num: "01", name: "HydraFacial Signature Treatment", desc: "The classic 4-step HydraFacial experience. Cleanse, exfoliate, extract and hydrate for an instant glow. Perfect first session.", tags: ["45 mins", "All Skin Types", "₹1499 Offer"], featured: true },
  { num: "02", name: "Deluxe HydraFacial Experience", desc: "Signature treatment enhanced with a targeted booster serum and lymphatic drainage — next-level radiance.", tags: ["60 mins", "Booster Included"] },
  { num: "03", name: "HydraFacial with Booster Serums", desc: "Supercharge your results with specialty boosters — Dermabuilder, Britenol or CTGF — targeting specific concerns.", tags: ["Customizable", "Targeted"] },
  { num: "04", name: "Anti-Aging HydraFacial Therapy", desc: "Peptide-enriched protocol that firms, plumps and reduces the appearance of fine lines. Ageless beauty awaits.", tags: ["Anti-Ageing", "Firming", "Collagen"] },
  { num: "05", name: "Brightening & Clarifying HydraFacial", desc: "Vitamin C and kojic acid boosters target pigmentation, dark spots and uneven tone. Glow like never before.", tags: ["Brightening", "Pigmentation", "Vitamin C"] },
  { num: "06", name: "Acne Defense HydraFacial Treatment", desc: "Salicylic acid-heavy protocol with blue LED therapy targets active acne, clears congestion and calms inflammation.", tags: ["Acne", "LED Therapy", "Oil Control"] },
  { num: "07", name: "Sensitive Skin HydraFacial Solution", desc: "Ultra-gentle formula with calming actives — perfect for rosacea-prone, reactive, or post-procedure skin.", tags: ["Sensitive", "Rosacea-Safe", "Calming"] },
  { num: "08", name: "Ultimate Glow HydraFacial Package", desc: "Our premium multi-step package — signature + booster + neck & décolleté treatment for full radiance.", tags: ["Premium", "Full Treatment", "90 mins"] },
  { num: "09", name: "HydraFacial Eye & Lip Perfection", desc: "Targeted peri-orbital and lip treatment to reduce dark circles, puffiness and lip lines — precision where it matters.", tags: ["Eye Area", "Lip", "Dark Circles"] },
  { num: "10", name: "Express HydraFacial for Radiant Skin", desc: "Our 30-minute express protocol — cleanse, extract, hydrate. Maximum results, minimum time. Perfect pre-event glow.", tags: ["30 mins", "Pre-Event", "Quick Glow"] },
];

const steps = [
  { n: 1, t: "Deep Cleanse", d: "Vortex suction clears impurities, oil and debris from every pore." },
  { n: 2, t: "Exfoliate & Peel", d: "Gentle glycolic + salicylic acid loosens dead skin cells painlessly." },
  { n: 3, t: "Extract & Hydrate", d: "Painless extraction followed by hyaluronic acid and antioxidant infusion." },
  { n: 4, t: "Instant Glow", d: "Walk out with visibly plumper, brighter, smoother skin — zero recovery." },
];

const testimonials = [
  { stars: "★★★★★", text: "My skin literally glowed after the first HydraFacial. I walked in with congested, dull skin and walked out looking like I had a filter on. The ₹1499 price is unreal for this quality.", name: "Ananya S.", treatment: "HydraFacial Signature · J.P. Nagar" },
  { stars: "★★★★★", text: "Got the brightening HydraFacial before my sister's wedding. Everyone kept asking what I'd done differently. Zero downtime — I was out shopping 30 minutes after the session!", name: "Meera R.", treatment: "Brightening HydraFacial · Jayanagar" },
  { stars: "★★★★★", text: "I have sensitive skin and was nervous — but Senior Dermatologist Team customised everything perfectly. No redness, no irritation, just incredibly soft skin. Best ₹1499 I've ever spent.", name: "Ritu P.", treatment: "Sensitive Skin HydraFacial · BTM Layout" },
  { stars: "★★★★★", text: "The anti-aging HydraFacial is my monthly ritual now. Fine lines are visibly reduced and my skin is firmer. Senior Dermatologist Team is genuinely skilled. The clinic is premium but the prices are accessible.", name: "Lakshmi V.", treatment: "Anti-Aging HydraFacial · Bannerghatta Rd" },
];

const headlines = [
  "Experience Radiant Skin", "Unlock Your Skin's Potential", "Revitalize with Hydra Facials",
  "Glow Like Never Before", "Confidence Begins with Care", "Your Journey to Brighter Skin",
  "Flawless Skin, Flawless You", "Ageless Beauty Awaits", "Youthful Skin in Every Season",
  "Hydration Meets Innovation",
];

const faqs = [
  { q: "What is a HydraFacial and how does it work?", a: "HydraFacial is a medical-grade, patented 3-step treatment that uses a unique vortex-fusion delivery system. Step 1 deep cleanses and exfoliates using gentle glycolic and salicylic acids. Step 2 uses painless suction to extract impurities. Step 3 infuses antioxidants, peptides and hyaluronic acid deep into the skin. The result is cleaner, plumper, brighter skin — immediately visible." },
  { q: "Is the ₹1499 offer really the lowest price in Bangalore?", a: "Yes — comparable clinics in Bangalore charge ₹3,000–₹6,000 for the same HydraFacial protocol. Our ₹1499 introductory offer is designed to make medical-grade skin care accessible to everyone in South Bengaluru. The treatment quality is identical — certified dermatologist, medical-grade machine, same patented protocol." },
  { q: "Is HydraFacial suitable for Indian skin tones?", a: "Absolutely. HydraFacial was designed to work on all Fitzpatrick skin types. At D-Tanique, our protocols are specifically calibrated for South Asian skin tones by Senior Dermatologist Team, who has specialist expertise in treating Indian complexions. It is safe for dark, medium and light skin tones alike." },
  { q: "Is there any downtime or side effects?", a: "None. HydraFacial is one of the very few clinical skin treatments with truly zero downtime. You may notice a slight flush immediately after, which typically resolves within minutes. You can return to work, apply makeup, or attend an event immediately after your session." },
  { q: "How many sessions do I need?", a: "Many patients see dramatic improvement after a single session. For ongoing maintenance and cumulative results — especially for anti-aging, brightening, or acne-prone skin — we recommend one session per month. Senior Dermatologist Team will advise the optimal frequency for your skin during your free consultation." },
  { q: "Can I combine HydraFacial with other treatments?", a: "Yes — HydraFacial pairs beautifully with other D-Tanique services like PRP therapy, BB Glow, or LED treatments. Senior Dermatologist Team will design a combined protocol during your consultation based on your specific skincare goals." },
  { q: "How long does a HydraFacial session take?", a: "The Signature HydraFacial takes approximately 45 minutes. The Express version takes 30 minutes. The Deluxe or Ultimate packages extend to 60–90 minutes with additional boosters and steps. You can choose your session length based on your schedule." },
];

const tickerItems = [
  "🔥 HydraFacial @ ₹1499 Only", "Bengaluru's Lowest Price",
  "💧 Deep Cleanse · Exfoliate · Hydrate · Glow", "Certified Dermatologist · Senior Dermatologist Team",
  "📍 J.P. Nagar, Bengaluru", "No Downtime · Instant Results",
];

function HydraFacialPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = "918884448906";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const firstName = (fd.get("firstName") as string)?.trim() || "";
    const lastName = (fd.get("lastName") as string)?.trim() || "";
    const mobile = (fd.get("mobile") as string)?.trim() || "";
    const concern = (fd.get("concern") as string)?.trim() || "Not specified";
    const time = (fd.get("time") as string)?.trim() || "Any time";
    const name = `${firstName} ${lastName}`.trim();

    // Save lead to backend (don't block WhatsApp on errors)
    await supabase.from("leads").insert({
      name,
      phone: mobile,
      concern: `HydraFacial ₹1499 · ${concern} · Preferred: ${time}`,
      source: "hydrafacial",
    });

    const message =
      `Hi D-Tanique! I'd like to book the ₹1499 HydraFacial.%0A%0A` +
      `*Name:* ${firstName} ${lastName}%0A` +
      `*Mobile:* ${mobile}%0A` +
      `*Skin Concern:* ${concern}%0A` +
      `*Preferred Time:* ${time}`;

    setSubmitted(true);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const scrollTo = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hf-root">
      <style>{HF_CSS}</style>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className={t.includes("₹1499") || t.includes("Lowest") ? "gold" : ""}>{t}</span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav>
        <Link to="/" className="nav-logo">
          <img src={logo} alt="D'tanique The Derma Clinic" className="nav-logo-img" width={1536} height={1024} />
        </Link>
        <div className="nav-links">
          <a onClick={scrollTo("treatments")} style={{ cursor: "pointer" }}>Treatments</a>
          <a onClick={scrollTo("how")} style={{ cursor: "pointer" }}>How It Works</a>
          <a onClick={scrollTo("offer")} style={{ cursor: "pointer" }}>₹1499 Offer</a>
          <a onClick={scrollTo("faq")} style={{ cursor: "pointer" }}>FAQ</a>
          <a href="tel:+918884448906" className="btn-book-nav" style={{ textDecoration: "none" }}>📞 Call Now</a>
          <button className="btn-book-nav" onClick={scrollTo("book")}>Book ₹1499 HydraFacial</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-circles" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">Best Hydrafacial Service in J.P. Nagar</div>
            <h1>
              Radiant Skin,<br />
              <em>Unfiltered.</em><br />
              <span className="price-callout">₹1499 Only</span>
            </h1>
            <p className="hero-sub">
              Uncover your natural glow with D-Tanique's rejuvenating HydraFacial treatments. Medical-grade deep cleanse, exfoliation and hyaluronic acid infusion — in one 45-minute session. No downtime. Instant results.
            </p>
            <div className="hero-price-row">
              <span className="price-was">₹3,500</span>
              <span className="price-now">₹1499</span>
              <span className="price-label">Per session · All inclusive · J.P. Nagar</span>
            </div>
            <div className="hero-ctas">
              <button className="btn-hero-primary" onClick={scrollTo("book")}>Claim ₹1499 Slot Now →</button>
              <button className="btn-hero-secondary" onClick={scrollTo("treatments")}>View All Treatments ↓</button>
            </div>
            <div className="hero-trust-row">
              <div className="trust-chip"><span className="trust-dot">✓</span><strong>5-Star</strong> Rated on Google</div>
              <div className="trust-chip"><span className="trust-dot">✓</span><strong>Senior Dermatologist Team</strong> · Certified Dermatologist</div>
              <div className="trust-chip"><span className="trust-dot">✓</span><strong>Zero</strong> Downtime</div>
              <div className="trust-chip"><span className="trust-dot">✓</span><strong>Instant</strong> Glow</div>
            </div>
          </div>

          {/* RESULT IMAGE + FORM */}
          <div className="hero-right-col">
            <figure className="hero-result-card">
              <img src={heroLadyImg} alt="Glowing radiant skin after a HydraFacial session at D-Tanique J.P. Nagar" width={1024} height={1024} />
              <figcaption>
                <span className="hrc-tag">Real Glow</span>
                <span className="hrc-text">After one HydraFacial session</span>
              </figcaption>
            </figure>
          <div className="hero-form-panel" id="book">
            <span className="hfp-badge">✓ Free · No Obligation</span>
            <h3 className="hfp-title">Book Your <em>₹1499 HydraFacial</em></h3>
            <p className="hfp-sub">Takes under 60 seconds · Slots filling fast</p>
            <div className="hfp-price-strip">
              <div>
                <div className="was">Usual price ₹3,500</div>
                <div className="now">₹1499</div>
              </div>
              <div className="save">SAVE 80%</div>
            </div>
            {submitted ? (
              <div style={{ padding: "1.5rem", textAlign: "center", background: "var(--aqua-pale)", borderRadius: 10, color: "var(--aqua)" }}>
                <strong>Thank you!</strong><br />Opening WhatsApp to confirm your booking…
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="field-row">
                  <div className="field-group">
                    <label className="field-label">First Name</label>
                    <input className="field" name="firstName" required />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Last Name</label>
                    <input className="field" name="lastName" required />
                  </div>
                </div>
                <div className="field-group">
                  <label className="field-label">Mobile Number</label>
                  <input className="field" name="mobile" type="tel" required />
                </div>
                <div className="field-group">
                  <label className="field-label">Skin Concern (optional)</label>
                  <select className="field" name="concern" defaultValue="">
                    <option value="">Select your concern...</option>
                    <option>Dull / Dry Skin</option>
                    <option>Oily / Acne-Prone Skin</option>
                    <option>Pigmentation / Uneven Tone</option>
                    <option>Anti-Ageing / Fine Lines</option>
                    <option>Sensitive Skin</option>
                    <option>Pre-Event Glow</option>
                    <option>General Skin Health</option>
                  </select>
                </div>
                <div className="field-group">
                  <label className="field-label">Preferred Time</label>
                  <select className="field" name="time" defaultValue="">
                    <option value="">10 AM to 12 PM</option>
                    <option>Afternoon (12pm – 4pm)</option>
                    <option>Evening (4pm – 7pm)</option>
                    <option>Weekend only</option>
                  </select>
                </div>
                <button className="btn-submit" type="submit">Book on WhatsApp →</button>
                <p className="form-note">🔒 Private · Sent directly to our clinic on WhatsApp</p>
              </form>
            )}
          </div>
          </div>
        </div>
      </section>

      {/* STEPS BAND */}
      <div className="steps-band" id="how">
        <div className="steps-inner">
          {steps.map((s) => (
            <div className="step-item" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div>
                <div className="step-title">{s.t}</div>
                <div className="step-desc">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY HYDRAFACIAL */}
      <section className="section">
        <div className="section-eyebrow">Why HydraFacial</div>
        <h2 className="section-h">Hydration meets <em>innovation.</em></h2>
        <p className="section-p">
          Advanced facial treatments that redefine hydration and skin vitality. Enjoy the benefits of improved skin texture, detoxification, and youthful radiance with our professional facial services.
        </p>
        <div className="benefits-grid">
          {benefits.map((b) => (
            <div className="benefit-card" key={b.title}>
              <span className="benefit-icon">{b.icon}</span>
              <div className="benefit-title">{b.title}</div>
              <div className="benefit-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* TREATMENTS */}
      <section className="section" id="treatments">
        <div className="section-eyebrow">HydraFacial Menu</div>
        <h2 className="section-h">Tailor-made solutions for <em>every skin need.</em></h2>
        <p className="section-p">
          Choose your treatment — all include the core 4-step HydraFacial protocol, enhanced with targeted boosters for your specific concern.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <img src={hydrafacialImg} alt="HydraFacial treatment at D-Tanique J.P. Nagar" style={{ width: "100%", maxHeight: 360, objectFit: "cover", borderRadius: 16 }} />
        </div>
        <div className="treatments-grid">
          {treatments.map((t) => (
            <div className={`treatment-card ${t.featured ? "featured" : ""}`} key={t.num}>
              {t.featured && <span className="featured-pill">Most Popular</span>}
              <div className="tc-num">{t.num}</div>
              <div>
                <div className="tc-name">{t.name}</div>
                <div className="tc-desc">{t.desc}</div>
                <div className="tc-tags">
                  {t.tags.map((tag) => <span className="tc-tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HEADLINE WALL */}
      <div className="headline-wall">
        <div className="headline-wall-inner">
          <div className="hw-label">What Our HydraFacial Stands For</div>
          <div className="hw-grid">
            {headlines.map((h, i) => (
              <span className={`hw-pill ${i === 0 ? "featured-pill-hw" : ""}`} key={h}>{h}</span>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="result-band">
        <div className="result-band-inner">
          <div className="section-eyebrow" style={{ color: "#C4A882" }}>Real Results</div>
          <h2 className="section-h" style={{ color: "white" }}>
            Skin stories that <em style={{ color: "#C4A882" }}>speak for themselves.</em>
          </h2>
          <div className="result-quotes">
            {testimonials.map((t) => (
              <div className="rq-card" key={t.name}>
                <div className="rq-stars">{t.stars}</div>
                <div className="rq-text">"{t.text}"</div>
                <div className="rq-name">{t.name}</div>
                <div className="rq-treatment">{t.treatment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="about-cols">
          <div className="about-text-block">
            <div className="section-eyebrow">About D-Tanique</div>
            <h2 className="section-h">Passion for skin.<br /><em>Precision in care.</em></h2>
            <p>At the heart of our clinic is a passion for transforming skin health and boosting your self-confidence. Our specialised HydraFacial treatments leave your skin feeling revitalised, hydrated, and with a natural glow.</p>
            <p>We are dedicated to helping you achieve your skincare goals. Enhance your beauty regimen with our state-of-the-art HydraFacial technology.</p>
            <p>Our mission is to provide personalised skincare experiences that cater to your unique facial needs. With the latest in skincare innovation, our HydraFacials are a perfect blend of technology and beauty.</p>
            <button className="btn-cta-aq" onClick={scrollTo("book")} style={{ marginTop: "1rem" }}>Book Free Consultation →</button>
          </div>
          <div className="about-stats">
            <div className="astat"><span className="astat-num">5★</span><div className="astat-label">Google Rating</div></div>
            <div className="astat"><span className="astat-num">₹1499</span><div className="astat-label">Best Price in Bangalore</div></div>
            <div className="astat"><span className="astat-num">10+</span><div className="astat-label">HydraFacial Variants</div></div>
            <div className="astat"><span className="astat-num">0</span><div className="astat-label">Downtime. Ever.</div></div>
          </div>
        </div>
      </section>

      {/* OFFER STRIP */}
      <div className="offer-strip" id="offer">
        <div className="offer-strip-inner">
          <span className="os-badge">🏆 Bengaluru's Best Deal · Limited Slots</span>
          <h2 className="os-title">HydraFacial at <em>Bengaluru's Lowest Price</em></h2>
          <p className="os-sub">Revitalise your skin — reserve your appointment. Don't wait for glowing skin.</p>
          <div className="os-price-row">
            <span className="os-was">₹3,500</span>
            <span className="os-now">₹1499</span>
            <div className="os-desc">Per session<br />All inclusive</div>
          </div>
          <div className="os-tags">
            {["💧 Deep Cleanse", "✨ Exfoliation", "💎 Hyaluronic Acid Infusion", "⚡ Instant Glow", "🩺 Certified Dermatologist", "⏱ 45 Minutes", "0️⃣ Zero Downtime"].map((t) => (
              <span className="os-tag" key={t}>{t}</span>
            ))}
          </div>
          <button className="btn-offer" onClick={scrollTo("book")}>Claim My ₹1499 HydraFacial →</button>
          <p className="os-note">⏳ Limited slots available · J.P. Nagar clinic only · Offer subject to availability</p>
        </div>
      </div>

      <ClinicGallery />

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="section-eyebrow">Common Questions</div>
        <h2 className="section-h">Everything you need to <em>know before booking.</em></h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <div className={`faq-q ${openFaq === i ? "open" : ""}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q}
              </div>
              <div className={`faq-a ${openFaq === i ? "show" : ""}`}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="final-cta">
        <div className="section-eyebrow" style={{ color: "#C4A882" }}>Ready to glow?</div>
        <h2 className="section-h">Your best skin is <em>one session away.</em></h2>
        <p className="section-p" style={{ textAlign: "center" }}>
          Book your transformative HydraFacial now. Discover your best skin today — schedule a session.
        </p>
        <div className="cta-btn-row">
          <button className="btn-cta-aq" onClick={scrollTo("book")}>Book ₹1499 HydraFacial →</button>
          <a href="tel:+918884448906" className="btn-cta-outline">📞 Call Now: 088844 48906</a>
        </div>
        <p className="final-cta-note">Limited slots available · J.P. Nagar clinic · No credit card required</p>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">D·<span>Tanique</span></div>
        <div className="footer-addr">Premium Dermatology & Aesthetics · J.P. Nagar, Bengaluru, Karnataka</div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <a onClick={scrollTo("treatments")} style={{ cursor: "pointer" }}>Treatments</a>
          <a onClick={scrollTo("offer")} style={{ cursor: "pointer" }}>₹1499 Offer</a>
          <a onClick={scrollTo("faq")} style={{ cursor: "pointer" }}>FAQ</a>
        </div>
        <div className="footer-bottom">© 2026 D-Tanique · All rights reserved · HydraFacial® is a registered trademark of BeautyHealth</div>
      </footer>

    </div>
  );
}

const HF_CSS = `
.hf-root { font-family:'DM Sans',sans-serif; color:#1C1916; line-height:1.6; }
.hf-root *,.hf-root *::before,.hf-root *::after { box-sizing:border-box; }
.hf-root {
  /* Mapped to home page palette: charcoal + warm cream + gold/accent */
  --aqua:#B8956B;        /* primary accent (was teal) */
  --aqua-light:#C4A882;  /* hover/lighter accent */
  --aqua-pale:#F7F3EE;   /* soft cream surface */
  --aqua-bg:#FDFAF7;     /* warm white surface */
  --navy:#1C1916;        /* charcoal dark sections */
  --white:#FDFAF7;       /* warm white card */
  --cream:#F7F3EE;       /* page cream */
  --muted:#4A4541;
  --light:#8C8480;
  --border:rgba(196,168,130,0.35);
  --border-mid:rgba(196,168,130,0.55);
  --gold:#C4A882;
  --gold-pale:#FDF6EC;
  --red-offer:#B8956B;   /* offer strip uses gold gradient now */
  background:var(--cream);
}
.hf-root a { color:inherit; text-decoration:none; }
.hf-root img { max-width:100%; display:block; }

.hf-root .ticker { background:var(--navy); overflow:hidden; white-space:nowrap; padding:9px 0; font-size:12px; letter-spacing:0.08em; color:rgba(255,255,255,0.6); }
.hf-root .ticker-inner { display:inline-block; animation:hfticker 28s linear infinite; }
.hf-root .ticker-inner span { margin:0 2.5rem; color:rgba(255,255,255,0.9); }
.hf-root .ticker-inner span.gold { color:#E8D8C3; font-weight:600; }
@keyframes hfticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }

.hf-root nav { background:rgba(250,252,253,0.96); backdrop-filter:blur(12px); border-bottom:1px solid var(--border); padding:0.9rem 2rem; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:100; }
.hf-root .nav-logo { display:flex; align-items:center; gap:10px; }
.hf-root .nav-logo-img { height:64px; width:auto; display:block; }
.hf-root .nav-logo-mark { width:36px; height:36px; background:var(--aqua); border-radius:10px; display:flex; align-items:center; justify-content:center; color:white; font-size:17px; }
.hf-root .nav-brand { font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:600; color:var(--navy); }
.hf-root .nav-brand span { color:var(--aqua); }
.hf-root .nav-links { display:flex; align-items:center; gap:1.75rem; }
.hf-root .nav-links a { font-size:13px; color:var(--muted); font-weight:400; transition:color 0.2s; }
.hf-root .nav-links a:hover { color:var(--aqua); }
.hf-root .btn-book-nav { background:var(--aqua); color:white; padding:9px 20px; border-radius:100px; font-size:13px; font-weight:500; border:none; cursor:pointer; font-family:inherit; }
.hf-root .btn-book-nav:hover { background:var(--aqua-light); }

.hf-root .hero { background:var(--navy); position:relative; overflow:hidden; padding:5rem 2rem 0; min-height:88vh; display:flex; align-items:flex-end; }
.hf-root .hero-bg-circles { position:absolute; inset:0; pointer-events:none; }
.hf-root .hero-bg-circles::before { content:''; position:absolute; top:-120px; right:-100px; width:600px; height:600px; background:radial-gradient(circle, rgba(196,168,130,0.22) 0%, transparent 65%); border-radius:50%; }
.hf-root .hero-bg-circles::after { content:''; position:absolute; bottom:-80px; left:-80px; width:400px; height:400px; background:radial-gradient(circle, rgba(200,150,42,0.12) 0%, transparent 65%); border-radius:50%; }
.hf-root .hero-inner { max-width:1200px; margin:0 auto; width:100%; display:grid; grid-template-columns:1fr 420px; gap:4rem; align-items:flex-end; position:relative; z-index:1; }
.hf-root .hero-content { padding-bottom:4rem; }
.hf-root .hero-eyebrow { display:inline-flex; align-items:center; gap:8px; background:rgba(196,168,130,0.2); border:1px solid rgba(196,168,130,0.4); color:#C4A882; font-size:11px; letter-spacing:0.15em; text-transform:uppercase; padding:5px 15px; border-radius:100px; margin-bottom:1.5rem; font-weight:500; }
.hf-root .hero-eyebrow::before { content:'●'; font-size:7px; animation:hfpulse 2s infinite; }
@keyframes hfpulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
.hf-root .hero h1 { font-family:'Cormorant Garamond',serif; font-size:clamp(2.8rem,5.5vw,5rem); font-weight:700; color:#fff; line-height:1.05; margin-bottom:1rem; letter-spacing:-0.01em; }
.hf-root .hero h1 em { font-style:italic; color:#C4A882; }
.hf-root .price-callout { display:inline-block; background:var(--gold); color:#fff; font-style:normal; padding:0 14px; border-radius:8px; line-height:1.2; font-size:0.85em; }
.hf-root .hero-sub { font-size:1.05rem; color:rgba(255,255,255,0.58); font-weight:300; max-width:520px; line-height:1.75; margin-bottom:2rem; }
.hf-root .hero-price-row { display:flex; align-items:center; gap:1.25rem; margin-bottom:2rem; flex-wrap:wrap; }
.hf-root .price-was { font-size:15px; color:rgba(255,255,255,0.35); text-decoration:line-through; }
.hf-root .price-now { font-family:'Cormorant Garamond',serif; font-size:4rem; font-weight:700; color:#E8D8C3; line-height:1; }
.hf-root .price-label { font-size:12px; color:rgba(255,255,255,0.45); font-weight:300; line-height:1.4; max-width:90px; }
.hf-root .hero-ctas { display:flex; gap:1rem; flex-wrap:wrap; margin-bottom:2.5rem; }
.hf-root .btn-hero-primary { background:#E8D8C3; color:var(--navy); padding:15px 32px; border-radius:100px; font-size:15px; font-weight:600; border:none; cursor:pointer; font-family:inherit; display:inline-flex; align-items:center; gap:8px; box-shadow:0 6px 28px rgba(196,168,130,0.35); transition:transform 0.15s, box-shadow 0.15s; }
.hf-root .btn-hero-primary:hover { transform:translateY(-2px); box-shadow:0 10px 36px rgba(196,168,130,0.45); }
.hf-root .btn-hero-secondary { background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.8); padding:15px 28px; border-radius:100px; font-size:14px; font-weight:400; border:1px solid rgba(255,255,255,0.2); cursor:pointer; font-family:inherit; }
.hf-root .hero-trust-row { display:flex; gap:1.5rem; flex-wrap:wrap; padding-top:1.5rem; border-top:1px solid rgba(255,255,255,0.1); }
.hf-root .trust-chip { display:flex; align-items:center; gap:7px; font-size:12px; color:rgba(255,255,255,0.5); font-weight:300; }
.hf-root .trust-chip strong { color:rgba(255,255,255,0.85); font-weight:500; }
.hf-root .trust-dot { width:16px; height:16px; background:rgba(196,168,130,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:8px; color:#C4A882; flex-shrink:0; }

.hf-root .hero-right-col { display:flex; flex-direction:column; gap:1.25rem; align-self:flex-end; }
.hf-root .hero-result-card { position:relative; border-radius:20px; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,0.45); border:1px solid rgba(196,168,130,0.3); margin:0; }
.hf-root .hero-result-card img { width:100%; height:280px; object-fit:cover; object-position:center top; display:block; }
.hf-root .hero-result-card figcaption { position:absolute; left:0; right:0; bottom:0; padding:0.85rem 1rem; background:linear-gradient(to top, rgba(15,13,11,0.85), rgba(15,13,11,0)); display:flex; align-items:center; gap:0.65rem; }
.hf-root .hrc-tag { background:#C4A882; color:var(--navy); font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; padding:4px 10px; border-radius:100px; }
.hf-root .hrc-text { color:rgba(255,255,255,0.92); font-size:13px; font-weight:400; }
.hf-root .hero-form-panel { background:var(--white); border-radius:20px 20px 0 0; padding:2rem 1.75rem 2.5rem; box-shadow:0 -8px 48px rgba(10,37,64,0.25); align-self:flex-end; }
.hf-root .hfp-badge { display:inline-block; background:var(--aqua-pale); color:var(--aqua); font-size:11px; font-weight:500; padding:4px 12px; border-radius:100px; margin-bottom:0.9rem; letter-spacing:0.04em; }
.hf-root .hfp-title { font-family:'Cormorant Garamond',serif; font-size:1.55rem; font-weight:600; color:var(--navy); line-height:1.2; margin-bottom:0.35rem; }
.hf-root .hfp-title em { font-style:italic; color:var(--aqua); }
.hf-root .hfp-sub { font-size:12px; color:var(--muted); font-weight:300; margin-bottom:1.25rem; }
.hf-root .hfp-price-strip { background:var(--gold-pale); border:1px solid rgba(200,150,42,0.25); border-radius:10px; padding:10px 14px; display:flex; align-items:center; justify-content:space-between; margin-bottom:1.25rem; }
.hf-root .hfp-price-strip .was { font-size:12px; color:#aaa; text-decoration:line-through; }
.hf-root .hfp-price-strip .now { font-family:'Cormorant Garamond',serif; font-size:2rem; font-weight:700; color:var(--gold); }
.hf-root .hfp-price-strip .save { font-size:11px; background:var(--red-offer); color:white; padding:3px 9px; border-radius:100px; font-weight:600; }
.hf-root .field-label { display:block; font-size:10px; text-transform:uppercase; letter-spacing:0.12em; color:var(--muted); font-weight:500; margin-bottom:0.35rem; }
.hf-root .field-group { margin-bottom:0.8rem; }
.hf-root .field-row { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; }
.hf-root .field { width:100%; border:1px solid var(--border-mid); border-radius:9px; padding:10px 12px; font-size:14px; font-family:inherit; color:var(--navy); background:var(--cream); outline:none; }
.hf-root .field:focus { border-color:var(--aqua); background:white; }
.hf-root .btn-submit { width:100%; background:var(--aqua); color:white; padding:13px; border-radius:100px; font-size:15px; font-weight:500; border:none; cursor:pointer; font-family:inherit; margin-top:0.25rem; }
.hf-root .btn-submit:hover { background:var(--aqua-light); }
.hf-root .form-note { font-size:11px; color:var(--light); text-align:center; margin-top:0.65rem; }

.hf-root .steps-band { background:var(--white); border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:2rem; }
.hf-root .steps-inner { max-width:1100px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:0; }
.hf-root .step-item { display:flex; align-items:flex-start; gap:12px; padding:0 1.5rem; border-right:1px solid var(--border); }
.hf-root .step-item:first-child { padding-left:0; }
.hf-root .step-item:last-child { border-right:none; }
.hf-root .step-num { width:38px; height:38px; flex-shrink:0; background:var(--aqua-pale); border:1px solid var(--border-mid); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Cormorant Garamond',serif; font-size:1.1rem; font-weight:600; color:var(--aqua); }
.hf-root .step-title { font-size:0.9rem; font-weight:500; color:var(--navy); margin-bottom:3px; }
.hf-root .step-desc { font-size:12px; color:var(--muted); font-weight:300; line-height:1.5; }

.hf-root .section { max-width:1100px; margin:0 auto; padding:5rem 2rem; }
.hf-root .section-eyebrow { font-size:10px; text-transform:uppercase; letter-spacing:0.2em; color:var(--aqua); font-weight:500; margin-bottom:0.5rem; }
.hf-root .section-h { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.75rem); font-weight:600; color:var(--navy); line-height:1.15; margin-bottom:0.75rem; }
.hf-root .section-h em { font-style:italic; color:var(--aqua); }
.hf-root .section-p { font-size:0.975rem; color:var(--muted); font-weight:300; line-height:1.75; max-width:580px; margin-bottom:2.5rem; }
.hf-root .divider { border:none; border-top:1px solid var(--border); margin:0; }

.hf-root .benefits-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.25rem; }
.hf-root .benefit-card { background:var(--white); border:1px solid var(--border); border-radius:16px; padding:1.5rem; transition:transform 0.2s, box-shadow 0.2s; }
.hf-root .benefit-card:hover { transform:translateY(-3px); box-shadow:0 4px 24px rgba(10,37,64,0.09); }
.hf-root .benefit-icon { font-size:1.75rem; margin-bottom:0.75rem; display:block; }
.hf-root .benefit-title { font-weight:500; font-size:0.975rem; color:var(--navy); margin-bottom:0.4rem; }
.hf-root .benefit-desc { font-size:0.85rem; color:var(--muted); font-weight:300; line-height:1.6; }

.hf-root .treatments-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:1.25rem; }
.hf-root .treatment-card { background:var(--white); border:1px solid var(--border); border-radius:16px; padding:1.5rem; display:flex; align-items:flex-start; gap:1rem; transition:border-color 0.2s, transform 0.2s; cursor:pointer; position:relative; }
.hf-root .treatment-card:hover { border-color:var(--aqua); transform:translateY(-2px); }
.hf-root .treatment-card.featured { border:2px solid var(--aqua); background:var(--aqua-bg); }
.hf-root .featured-pill { position:absolute; top:-1px; right:14px; background:var(--aqua); color:white; font-size:10px; font-weight:600; padding:3px 10px; border-radius:0 0 8px 8px; letter-spacing:0.06em; text-transform:uppercase; }
.hf-root .tc-num { width:42px; height:42px; flex-shrink:0; background:var(--aqua-pale); border:1px solid var(--border-mid); border-radius:12px; display:flex; align-items:center; justify-content:center; font-family:'Cormorant Garamond',serif; font-size:1.1rem; font-weight:600; color:var(--aqua); }
.hf-root .tc-name { font-weight:500; font-size:0.975rem; color:var(--navy); margin-bottom:0.35rem; }
.hf-root .tc-desc { font-size:12px; color:var(--muted); font-weight:300; line-height:1.5; }
.hf-root .tc-tags { display:flex; flex-wrap:wrap; gap:5px; margin-top:0.6rem; }
.hf-root .tc-tag { font-size:10px; padding:2px 9px; background:var(--aqua-pale); border:1px solid var(--border); border-radius:100px; color:var(--aqua); font-weight:400; }

.hf-root .result-band { background:var(--navy); padding:4rem 2rem; overflow:hidden; }
.hf-root .result-band-inner { max-width:1100px; margin:0 auto; }
.hf-root .result-quotes { display:flex; gap:1.5rem; margin-top:2rem; overflow-x:auto; padding-bottom:1rem; }
.hf-root .rq-card { flex-shrink:0; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:1.5rem; min-width:280px; max-width:300px; }
.hf-root .rq-stars { color:#E8D8C3; font-size:12px; letter-spacing:2px; margin-bottom:0.75rem; }
.hf-root .rq-text { font-size:0.875rem; color:rgba(255,255,255,0.65); font-weight:300; font-style:italic; line-height:1.6; margin-bottom:1rem; }
.hf-root .rq-name { font-size:13px; color:rgba(255,255,255,0.9); font-weight:500; }
.hf-root .rq-treatment { font-size:11px; color:rgba(255,255,255,0.35); font-weight:300; }

.hf-root .headline-wall { padding:3rem 2rem; background:var(--aqua-bg); border-top:1px solid var(--border); border-bottom:1px solid var(--border); text-align:center; }
.hf-root .headline-wall-inner { max-width:900px; margin:0 auto; }
.hf-root .hw-label { font-size:10px; text-transform:uppercase; letter-spacing:0.2em; color:var(--aqua); font-weight:500; margin-bottom:1.25rem; }
.hf-root .hw-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; }
.hf-root .hw-pill { font-family:'Cormorant Garamond',serif; font-size:clamp(0.9rem,1.8vw,1.15rem); font-weight:400; font-style:italic; color:var(--navy); background:var(--white); border:1px solid var(--border); padding:8px 18px; border-radius:100px; }
.hf-root .hw-pill:hover { background:var(--aqua); color:white; border-color:var(--aqua); }
.hf-root .hw-pill.featured-pill-hw { background:var(--aqua); color:white; border-color:var(--aqua); }

.hf-root .offer-strip { background:linear-gradient(135deg,#e8c9a8 0%,#d4a882 60%,#c49060 100%); padding:3rem 2rem; text-align:center; position:relative; overflow:hidden; }
.hf-root .offer-strip::before { content:''; position:absolute; top:-80px; right:-80px; width:300px; height:300px; background:rgba(255,255,255,0.18); border-radius:50%; }
.hf-root .offer-strip-inner { max-width:700px; margin:0 auto; position:relative; z-index:1; }
.hf-root .os-badge { display:inline-block; background:rgba(28,25,22,0.12); border:1px solid rgba(28,25,22,0.18); color:var(--navy); font-size:11px; padding:4px 14px; border-radius:100px; margin-bottom:1rem; letter-spacing:0.1em; text-transform:uppercase; font-weight:500; }
.hf-root .os-title { font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,5vw,3.5rem); font-weight:500; color:var(--navy); line-height:1.1; margin-bottom:0.75rem; }
.hf-root .os-title em { font-style:italic; color:#FDFAF7; }
.hf-root .os-sub { font-size:1rem; color:rgba(28,25,22,0.7); font-weight:300; margin-bottom:1.75rem; }
.hf-root .os-price-row { display:flex; align-items:center; justify-content:center; gap:1.5rem; margin-bottom:1.75rem; flex-wrap:wrap; }
.hf-root .os-was { font-size:16px; color:rgba(28,25,22,0.45); text-decoration:line-through; }
.hf-root .os-now { font-family:'Cormorant Garamond',serif; font-size:5rem; font-weight:600; color:var(--navy); line-height:1; }
.hf-root .os-desc { font-size:13px; color:rgba(28,25,22,0.6); font-weight:300; }
.hf-root .os-tags { display:flex; justify-content:center; flex-wrap:wrap; gap:8px; margin-bottom:1.75rem; }
.hf-root .os-tag { background:rgba(255,255,255,0.4); border:1px solid rgba(28,25,22,0.12); color:var(--navy); font-size:12px; padding:5px 14px; border-radius:100px; }
.hf-root .btn-offer { background:var(--navy); color:#FDFAF7; padding:16px 40px; border-radius:100px; font-size:16px; font-weight:600; border:none; cursor:pointer; font-family:inherit; box-shadow:0 8px 32px rgba(28,25,22,0.3); display:inline-flex; align-items:center; gap:8px; }
.hf-root .btn-offer:hover { transform:scale(1.03); }
.hf-root .os-note { font-size:11px; color:rgba(255,255,255,0.3); margin-top:1rem; }

.hf-root .faq-list { max-width:700px; }
.hf-root .faq-item { border-bottom:1px solid var(--border); padding:1.25rem 0; }
.hf-root .faq-q { font-weight:500; font-size:0.975rem; color:var(--navy); cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:1rem; user-select:none; }
.hf-root .faq-q::after { content:'+'; font-size:1.3rem; color:var(--aqua); font-weight:300; flex-shrink:0; }
.hf-root .faq-q.open::after { content:'−'; }
.hf-root .faq-a { font-size:0.9rem; color:var(--muted); font-weight:300; line-height:1.7; margin-top:0.75rem; display:none; }
.hf-root .faq-a.show { display:block; }

.hf-root .about-cols { display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:center; }
.hf-root .about-text-block p { font-size:0.95rem; color:var(--muted); font-weight:300; line-height:1.8; margin-bottom:1rem; }
.hf-root .about-stats { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
.hf-root .astat { background:var(--white); border:1px solid var(--border); border-radius:12px; padding:1.25rem; text-align:center; }
.hf-root .astat-num { font-family:'Cormorant Garamond',serif; font-size:2.2rem; font-weight:700; color:var(--aqua); display:block; line-height:1; margin-bottom:0.3rem; }
.hf-root .astat-label { font-size:11px; color:var(--muted); font-weight:300; text-transform:uppercase; letter-spacing:0.1em; }

.hf-root .final-cta { background:var(--navy); padding:5rem 2rem; text-align:center; }
.hf-root .final-cta .section-h { color:white; }
.hf-root .final-cta .section-h em { color:#C4A882; }
.hf-root .final-cta .section-p { color:rgba(255,255,255,0.45); margin:0 auto 2rem; }
.hf-root .cta-btn-row { display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; }
.hf-root .btn-cta-aq { background:var(--aqua); color:white; padding:15px 34px; border-radius:100px; font-size:15px; font-weight:500; border:none; cursor:pointer; font-family:inherit; display:inline-flex; align-items:center; gap:8px; box-shadow:0 6px 24px rgba(196,168,130,0.4); }
.hf-root .btn-cta-aq:hover { background:var(--aqua-light); transform:translateY(-2px); }
.hf-root .btn-cta-outline { background:transparent; color:rgba(255,255,255,0.7); padding:15px 28px; border-radius:100px; font-size:14px; font-weight:400; border:1px solid rgba(255,255,255,0.2); cursor:pointer; font-family:inherit; display:inline-flex; align-items:center; gap:8px; }
.hf-root .final-cta-note { font-size:12px; color:rgba(255,255,255,0.25); margin-top:1.25rem; }

.hf-root footer { background:#0F0D0B; padding:2.5rem 2rem; text-align:center; }
.hf-root .footer-logo { font-family:'Cormorant Garamond',serif; font-size:1.4rem; font-weight:600; color:white; margin-bottom:0.4rem; }
.hf-root .footer-logo span { color:#C4A882; }
.hf-root .footer-addr { font-size:12px; color:rgba(255,255,255,0.3); font-weight:300; margin-bottom:1rem; }
.hf-root .footer-links { display:flex; justify-content:center; gap:1.75rem; margin-bottom:1rem; }
.hf-root .footer-links a { font-size:12px; color:rgba(255,255,255,0.35); }
.hf-root .footer-links a:hover { color:#C4A882; }
.hf-root .footer-bottom { font-size:11px; color:rgba(255,255,255,0.15); }

.hf-root .wa-float { position:fixed; bottom:24px; right:24px; width:54px; height:54px; border-radius:50%; background:#25D366; display:flex; align-items:center; justify-content:center; font-size:26px; z-index:200; box-shadow:0 4px 16px rgba(37,211,102,0.4); }
.hf-root .wa-float:hover { transform:scale(1.08); }

@media(max-width:900px) {
  .hf-root .hero-inner { grid-template-columns:1fr; }
  .hf-root .hero { padding:3rem 1.5rem 0; min-height:auto; align-items:flex-start; }
  .hf-root .hero-form-panel { border-radius:16px; margin-top:2rem; margin-bottom:2rem; }
  .hf-root .steps-inner { grid-template-columns:1fr 1fr; gap:1.5rem; }
  .hf-root .step-item { border-right:none; padding:0; }
  .hf-root .about-cols { grid-template-columns:1fr; }
  .hf-root nav .nav-links { display:none; }
}
@media(max-width:600px) {
  .hf-root .steps-inner { grid-template-columns:1fr; }
  .hf-root .section { padding:3rem 1rem; }
  .hf-root .field-row { grid-template-columns:1fr; }
}
`;
