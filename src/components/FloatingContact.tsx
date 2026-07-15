const PHONE = "+918884448906";
const WHATSAPP = "918884448906";
const MESSAGE = encodeURIComponent(
  "Hi, I'd like to book a consultation at D'tanique The Derma Clinic, J.P. Nagar.",
);

export function FloatingContact() {
  return (
    <div
      style={{
        position: "fixed",
        right: "16px",
        bottom: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 9999,
      }}
    >
      <a
        href={`https://wa.me/${WHATSAPP}?text=${MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          const w = typeof window !== "undefined" ? (window as any) : null;
          if (w && typeof w.gtag_report_whatsapp_conversion === "function") {
            e.preventDefault();
            w.gtag_report_whatsapp_conversion(`https://wa.me/${WHATSAPP}?text=${MESSAGE}`);
          }
        }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#25D366",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(37,211,102,.45)",
          textDecoration: "none",
        }}
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.39-8.43ZM12.06 21.3h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.46 9.46 0 0 1-1.45-5.04c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.78a9.43 9.43 0 0 1 2.78 6.72c0 5.23-4.26 9.49-9.5 9.49Zm5.2-7.1c-.28-.14-1.69-.84-1.95-.93-.26-.1-.45-.14-.64.14-.19.28-.74.93-.9 1.12-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49l-.55-.01a1.06 1.06 0 0 0-.77.36c-.26.28-1 .98-1 2.39 0 1.41 1.02 2.78 1.16 2.97.14.19 2 3.06 4.85 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.78.12.54-.08 1.69-.69 1.93-1.36.24-.66.24-1.23.17-1.36-.07-.13-.26-.21-.54-.35Z" />
        </svg>
      </a>
      <a
        href={`tel:${PHONE}`}
        onClick={() => {
          const w = typeof window !== "undefined" ? (window as any) : null;
          if (w && typeof w.gtag_report_conversion === "function") {
            w.gtag_report_conversion(`tel:${PHONE}`);
            return false;
          }
        }}
        aria-label="Call us"
        title="Call us"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#0a7e3a",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(10,126,58,.45)",
          textDecoration: "none",
        }}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2Z" />
        </svg>
      </a>
    </div>
  );
}
