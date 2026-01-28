"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { useToast } from "@/components/ui/Toast";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./ReportsView.module.css";

type ReportType = "projects-by-type" | "projects-by-guide" | "attendance-summary" | "group-members" | "progress-report";

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
    window.open(`/api/reports/export?type=${type}&format=${format}`, "_blank");
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
            { value: "group-members", label: "Group members" },
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

      {loading && <p className="text-muted">Loading…</p>}

      {!loading && (type === "projects-by-type" || type === "projects-by-guide") && chartData.length > 0 && (
        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="count" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {!loading && type === "attendance-summary" && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Group</th>
                <th>Meeting Date</th>
                <th>Total Students</th>
                <th>Present</th>
                <th>Attendance %</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r: any) => (
                <tr key={r.meetingId}>
                  <td>{r.groupName}</td>
                  <td>{new Date(r.date).toLocaleDateString()} {new Date(r.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                  <td>{r.total}</td>
                  <td>{r.present}</td>
                  <td>{r.total ? Math.round((r.present / r.total) * 100) : 0}%</td>
                </tr>
              ))}
              {data.length === 0 && <tr><td colSpan={5} className="text-muted text-center">No data</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {!loading && type === "group-members" && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Group</th>
                <th>Project</th>
                <th>Student Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r: any) => (
                <tr key={r.ProjectGroupMemberID}>
                  <td>{r.projectGroup?.ProjectGroupName}</td>
                  <td>{r.projectGroup?.ProjectTitle || "—"}</td>
                  <td>{r.student?.StudentName}</td>
                  <td>{r.student?.Email}</td>
                </tr>
              ))}
              {data.length === 0 && <tr><td colSpan={4} className="text-muted text-center">No data</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {!loading && type === "progress-report" && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Group</th>
                <th>Title</th>
                <th>Guide</th>
                <th>Status</th>
                <th>Meetings</th>
                <th>Docs</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r: any) => (
                <tr key={r.ProjectGroupID}>
                  <td>{r.ProjectGroupName}</td>
                  <td>{r.ProjectTitle || "—"}</td>
                  <td>{r.Guide}</td>
                  <td>{r.Status}</td>
                  <td>{r.MeetingsCount}</td>
                  <td>{r.DocumentsCount}</td>
                </tr>
              ))}
              {data.length === 0 && <tr><td colSpan={6} className="text-muted text-center">No data</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {!loading && data.length === 0 && (type === "projects-by-type" || type === "projects-by-guide") && <p className="text-muted">No data for this report.</p>}
    </div>
  );
}
