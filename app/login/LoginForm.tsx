"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import styles from "./login.module.css";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const sp = useSearchParams();
  const callback = sp.get("callbackUrl") || "/dashboard";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await signIn("credentials", { email, password, role, redirect: false });
      if (res?.error) {
        setError("Invalid email, password, or role.");
        return;
      }
      window.location.href = callback;
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <div className={styles.logo} />
          <h1 className={styles.title}>SPMS</h1>
          <p className={styles.sub}>Student Project Management System</p>
        </div>
        <form onSubmit={onSubmit} className={styles.form}>
          <Select
            label="Sign in as"
            options={[
              { value: "admin", label: "Admin" },
              { value: "faculty", label: "Faculty" },
              { value: "student", label: "Student" },
            ]}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          {error && <p className={styles.error} role="alert">{error}</p>}
          <Button type="submit" variant="primary" size="lg" className={styles.btn} disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}
