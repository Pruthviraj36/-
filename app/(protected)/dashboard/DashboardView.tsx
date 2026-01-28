"use client";

import { DashboardCard } from "@/components/ui/DashboardCard";
import styles from "./DashboardView.module.css";

interface Card { label: string; value: string | number; accent?: "primary" | "success" | "danger" }

export function DashboardView({ cards, role }: { cards: Card[]; role: string }) {
  return (
    <div className={styles.grid}>
      {cards.map((c) => (
        <DashboardCard key={c.label} label={c.label} value={c.value} accent={c.accent || "primary"} />
      ))}
    </div>
  );
}
