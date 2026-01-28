"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import styles from "./SettingsView.module.css";

export function SettingsView() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    fetch("/api/profile")
      .then((r) => r.json())
      .then((d) => setForm((f) => ({ ...f, name: d.name ?? "", email: d.email ?? "", phone: d.phone ?? "" })))
      .catch(() => toast.add("Failed to load profile", "error"))
      .finally(() => setLoading(false));
  }, [toast]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    try {
      const body: Record<string, string> = { name: form.name, email: form.email, phone: form.phone };
      if (form.password) body.password = form.password;
      const res = await fetch("/api/profile", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error("Failed");
      setForm((f) => ({ ...f, password: "" }));
      toast.add("Profile updated", "success");
    } catch {
      toast.add("Failed to update", "error");
    }
  }

  if (loading) return <p className="text-muted">Loading…</p>;

  return (
    <form onSubmit={save} className={styles.form}>
      <Input label="Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
      <Input label="Email" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
      <Input label="Phone" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
      <Input label="New password" type="password" value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} placeholder="Leave blank to keep" />
      <Button type="submit" variant="primary">Save</Button>
    </form>
  );
}
