"use client";

import styles from "./DashboardCard.module.css";

interface DashboardCardProps {
  label: string;
  value: string | number;
  sparkline?: React.ReactNode;
  /** Accent for header stripe: primary (default), success, danger */
  accent?: "primary" | "success" | "danger";
}

export function DashboardCard({ label, value, sparkline, accent = "primary" }: DashboardCardProps) {
  const headerClass = accent === "success" ? "var(--color-success)" : accent === "danger" ? "var(--color-danger)" : "var(--color-primary)";
  return (
    <article className={styles.card}>
      <div className={styles.header} style={{ background: `linear-gradient(90deg, ${headerClass} 0%, var(--color-accent) 100%)` }} />
      <div className={styles.body}>
        <div className={styles.label}>{label}</div>
        <div className={styles.value}>{value}</div>
        {sparkline && <div className={styles.sparkline}>{sparkline}</div>}
      </div>
    </article>
  );
}
