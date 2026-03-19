"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import styles from "./SettingsView.module.css";

export function SettingsView() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  useEffect(() => {
    fetch("/api/profile")
      .then((r) => r.json())
      .then((d) =>
        setForm((f) => ({
          ...f,
          name: d.name ?? "",
          email: d.email ?? "",
          phone: d.phone ?? "",
        })),
      )
      .catch(() => toast.add("Unable to load profile.", "error"))
      .finally(() => setLoading(false));
  }, [toast]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.add("Please provide name and email.", "error");
      return;
    }

    try {
      setSaving(true);
      const body: Record<string, string> = {
        name: form.name,
        email: form.email,
        phone: form.phone,
      };
      if (form.password) body.password = form.password;
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed");
      setForm((f) => ({ ...f, password: "" }));
      toast.add("Profile updated successfully.", "success");
    } catch {
      toast.add("Unable to update profile.", "error");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="text-muted">Loading...</p>;

  const canSave = !!form.name.trim() && !!form.email.trim() && !saving;

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>Profile Settings</h2>
        <p className={styles.subtitle}>
          Update your contact details and optionally set a new password.
        </p>
      </div>

      <form onSubmit={save} className={styles.formCard}>
        <div className={styles.gridTwo}>
          <Input
            label="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
          />
          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            required
          />
        </div>
        <Input
          label="Phone"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
        />
        <Input
          label="New password"
          type="password"
          value={form.password}
          onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
          placeholder="Leave blank to keep current password"
        />
        <p className={styles.hint}>
          Your password only changes if you enter a new value.
        </p>

        <div className={styles.actions}>
          <Button type="submit" variant="primary" disabled={!canSave}>
            {saving ? "Saving..." : "Save changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}
