"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { useToast } from "@/components/ui/Toast";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./ReportsView.module.css";

type ReportType = "projects-by-type" | "projects-by-guide" | "attendance-summary" | "progress-report";

export function ReportsView({ role }: { role: string }) {
  const [type, setType] = useState<ReportType>("projects-by-type");
  const [data, setData] = useState<{ type?: string; guide?: string; count?: number }[]>([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (role !== "admin" && role !== "faculty") return;
    setLoading(true);
    fetch(`/api/reports?type=${type}`)
      .then((r) => r.json())
      .then((d) => setData(Array.isArray(d) ? d : []))
      .catch(() => toast.add("Failed to load report", "error"))
      .finally(() => setLoading(false));
  }, [type, role, toast]);

  function exportFile(format: "excel" | "pdf") {
    window.open(`/api/reports/export?type=progress-report&format=${format}`, "_blank");
  }

  if (role !== "admin" && role !== "faculty") {
    return <p className="text-muted">Reports are available to Admin and Faculty only.</p>;
  }

  const chartData = (type === "projects-by-type" ? data.map((d) => ({ name: d.type, count: d.count })) : type === "projects-by-guide" ? data.map((d) => ({ name: d.guide, count: d.count })) : []);

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <Select
          label="Report"
          options={[
            { value: "projects-by-type", label: "Projects by type" },
            { value: "projects-by-guide", label: "Projects by guide" },
            { value: "attendance-summary", label: "Attendance summary" },
            { value: "progress-report", label: "Progress report" },
          ]}
          value={type}
          onChange={(e) => setType(e.target.value as ReportType)}
        />
        <div className={styles.export}>
          <span className="text-small text-muted">Export:</span>
          <Button variant="secondary" size="sm" onClick={() => exportFile("excel")}>Excel</Button>
          <Button variant="secondary" size="sm" onClick={() => exportFile("pdf")}>PDF</Button>
        </div>
      </div>
      <div className={styles.chart}>
        {loading && <p className="text-muted">Loading…</p>}
        {!loading && chartData.length > 0 && (
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="count" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
        {!loading && chartData.length === 0 && type !== "attendance-summary" && type !== "progress-report" && <p className="text-muted">No data for this report.</p>}
      </div>
    </div>
  );
}
