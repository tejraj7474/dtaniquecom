import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [{ title: "Admin Login | D-Tanique" }, { name: "robots", content: "noindex,nofollow" }],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin/leads" });
    });
  }, [navigate]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/admin/leads" });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin/leads` },
        });
        if (error) throw error;
        setInfo(
          "Account created. Check your email to confirm, then ask the site owner to grant you admin access."
        );
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>D-Tanique Admin</h1>
        <p style={styles.sub}>{mode === "signin" ? "Sign in to view lead submissions" : "Create an admin account"}</p>

        <form onSubmit={onSubmit} style={styles.form}>
          <label style={styles.label}>
            Email
            <input
              style={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>
          <label style={styles.label}>
            Password
            <input
              style={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
            />
          </label>

          {error && <div style={styles.error}>{error}</div>}
          {info && <div style={styles.info}>{info}</div>}

          <button type="submit" style={styles.btn} disabled={loading}>
            {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <button
          type="button"
          style={styles.linkBtn}
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
            setInfo(null);
          }}
        >
          {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg,#f8f5f0,#ede7dd)",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    padding: "2rem 1rem",
  },
  card: {
    width: "100%",
    maxWidth: 420,
    background: "#fff",
    borderRadius: 18,
    padding: "2.5rem 2rem",
    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "2rem",
    margin: 0,
    color: "#2a2118",
  },
  sub: { color: "#6b5e4d", margin: "0.4rem 0 1.6rem", fontSize: "0.95rem" },
  form: { display: "flex", flexDirection: "column", gap: "1rem" },
  label: { display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.85rem", color: "#3a2f22" },
  input: {
    padding: "0.7rem 0.9rem",
    border: "1px solid #d8cfc1",
    borderRadius: 8,
    fontSize: "0.95rem",
    fontFamily: "inherit",
  },
  btn: {
    padding: "0.85rem 1rem",
    background: "#2a2118",
    color: "#f5d68a",
    border: "none",
    borderRadius: 8,
    fontSize: "0.95rem",
    fontWeight: 500,
    cursor: "pointer",
    letterSpacing: "0.02em",
  },
  linkBtn: {
    marginTop: "1rem",
    background: "none",
    border: "none",
    color: "#7a6243",
    cursor: "pointer",
    fontSize: "0.85rem",
    textDecoration: "underline",
    width: "100%",
  },
  error: {
    background: "#fde8e8",
    color: "#9b1c1c",
    padding: "0.6rem 0.8rem",
    borderRadius: 6,
    fontSize: "0.85rem",
  },
  info: {
    background: "#e8f4ec",
    color: "#1a6b3a",
    padding: "0.6rem 0.8rem",
    borderRadius: 6,
    fontSize: "0.85rem",
  },
};
