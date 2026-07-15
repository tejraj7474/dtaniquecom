import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/leads")({
  head: () => ({
    meta: [{ title: "Lead Submissions | D-Tanique Admin" }, { name: "robots", content: "noindex,nofollow" }],
  }),
  component: AdminLeads,
});

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  concern: string | null;
  source: string | null;
  created_at: string;
};

function AdminLeads() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        navigate({ to: "/admin/login" });
        return;
      }
      setEmail(sess.session.user.email ?? "");

      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (!active) return;
      if (error) {
        setError(
          error.code === "42501" || error.message.toLowerCase().includes("permission")
            ? "Your account does not have admin access yet. Ask the site owner to grant you access."
            : error.message
        );
      } else {
        setLeads(data as Lead[]);
      }
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  };

  const exportCsv = () => {
    if (!leads || leads.length === 0) return;
    const header = ["Date", "Name", "Phone", "Email", "Interest / Notes", "Source"];
    const rows = leads.map((l) => [
      new Date(l.created_at).toLocaleString(),
      l.name,
      l.phone,
      l.email ?? "",
      l.concern ?? "",
      l.source ?? "",
    ]);
    const csv = [header, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dtanique-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={s.page}>
      <header style={s.header}>
        <div>
          <h1 style={s.title}>Lead Submissions</h1>
          <p style={s.sub}>Signed in as {email}</p>
        </div>
        <div style={{ display: "flex", gap: "0.6rem" }}>
          <button style={s.secondaryBtn} onClick={exportCsv} disabled={!leads || leads.length === 0}>
            Export CSV
          </button>
          <button style={s.signOut} onClick={signOut}>Sign out</button>
        </div>
      </header>

      {loading && <div style={s.muted}>Loading…</div>}
      {error && <div style={s.error}>{error}</div>}

      {leads && leads.length === 0 && (
        <div style={s.empty}>No submissions yet. They'll appear here as soon as someone fills out a form.</div>
      )}

      {leads && leads.length > 0 && (
        <div style={s.tableWrap}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Date</th>
                <th style={s.th}>Name</th>
                <th style={s.th}>Phone</th>
                <th style={s.th}>Email</th>
                <th style={s.th}>Interest / Notes</th>
                <th style={s.th}>Source</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id} style={s.tr}>
                  <td style={s.td}>{new Date(l.created_at).toLocaleString()}</td>
                  <td style={s.td}>{l.name}</td>
                  <td style={s.td}>
                    <a href={`tel:${l.phone}`} style={s.link}>{l.phone}</a>{" · "}
                    <a
                      href={`https://wa.me/${l.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      style={s.link}
                    >
                      WhatsApp
                    </a>
                  </td>
                  <td style={s.td}>{l.email ?? "—"}</td>
                  <td style={s.td}>{l.concern ?? "—"}</td>
                  <td style={s.td}>{l.source ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f7f4ee",
    padding: "2rem clamp(1rem, 4vw, 3rem)",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    color: "#2a2118",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    gap: "1rem",
  },
  title: { fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", margin: 0 },
  sub: { color: "#6b5e4d", margin: "0.3rem 0 0", fontSize: "0.85rem" },
  signOut: {
    padding: "0.5rem 1rem",
    background: "#2a2118",
    color: "#f5d68a",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: "0.85rem",
  },
  secondaryBtn: {
    padding: "0.5rem 1rem",
    background: "#fff",
    color: "#2a2118",
    border: "1px solid #d8cfc1",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: "0.85rem",
  },
  muted: { color: "#6b5e4d" },
  error: {
    background: "#fde8e8",
    color: "#9b1c1c",
    padding: "1rem",
    borderRadius: 8,
    fontSize: "0.9rem",
  },
  empty: {
    background: "#fff",
    padding: "3rem 1.5rem",
    textAlign: "center",
    borderRadius: 12,
    color: "#6b5e4d",
  },
  tableWrap: {
    background: "#fff",
    borderRadius: 12,
    overflow: "auto",
    boxShadow: "0 6px 24px rgba(0,0,0,0.05)",
  },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" },
  th: {
    textAlign: "left",
    padding: "0.85rem 1rem",
    background: "#f5f0e6",
    color: "#5a4a36",
    fontWeight: 500,
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    borderBottom: "1px solid #e8ddc8",
    whiteSpace: "nowrap",
  },
  tr: { borderBottom: "1px solid #f0eadf" },
  td: { padding: "0.85rem 1rem", verticalAlign: "top" },
  link: { color: "#7a6243", textDecoration: "none" },
};
