"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { useToast } from "@/components/ui/Toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styles from "./ReportsView.module.css";

type ReportType =
  | "projects-by-type"
  | "projects-by-guide"
  | "attendance-summary"
  | "group-members"
  | "progress-report";

interface ProjectTypeReportRow {
  type?: string;
  count?: number;
}

interface ProjectGuideReportRow {
  guide?: string;
  count?: number;
}

interface AttendanceSummaryRow {
  meetingId: number;
  groupName: string;
  date: string;
  total: number;
  present: number;
}

interface GroupMemberRow {
  ProjectGroupMemberID: number;
  projectGroup?: { ProjectGroupName?: string; ProjectTitle?: string | null };
  student?: { StudentName?: string; Email?: string };
}

interface ProgressReportRow {
  ProjectGroupID: number;
  ProjectGroupName: string;
  ProjectTitle: string | null;
  Guide: string;
  Status: string;
  MeetingsCount: number;
  DocumentsCount: number;
}

const REPORT_OPTIONS: {
  value: ReportType;
  label: string;
  description: string;
}[] = [
  {
    value: "projects-by-type",
    label: "Projects by type",
    description: "Compare project counts across project types.",
  },
  {
    value: "projects-by-guide",
    label: "Projects by guide",
    description: "Compare guide-wise project distribution.",
  },
  {
    value: "attendance-summary",
    label: "Attendance summary",
    description: "Review meeting attendance percentages by group.",
  },
  {
    value: "group-members",
    label: "Group members",
    description: "Inspect member lists and student contacts.",
  },
  {
    value: "progress-report",
    label: "Progress report",
    description: "Track group status with meetings and documents.",
  },
];

export function ReportsView({ role }: { role: string }) {
  const [type, setType] = useState<ReportType>("projects-by-type");
  const [data, setData] = useState<unknown[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    if (role !== "admin" && role !== "faculty") return;
    fetch(`/api/reports?type=${type}`)
      .then((r) => r.json())
      .then((d) => setData(Array.isArray(d) ? d : []))
      .catch(() => toast.add("Unable to load report data.", "error"))
      .finally(() => setLoading(false));
  }, [type, role, toast]);

  function exportFile(format: "excel" | "pdf") {
    window.open(`/api/reports/export?type=${type}&format=${format}`, "_blank");
  }

  if (role !== "admin" && role !== "faculty") {
    return (
      <p className="text-muted">
        Reports are available to Admin and Faculty only.
      </p>
    );
  }

  const currentReport =
    REPORT_OPTIONS.find((r) => r.value === type) ?? REPORT_OPTIONS[0];
  const query = search.trim().toLowerCase();

  const chartData =
    type === "projects-by-type"
      ? (data as ProjectTypeReportRow[])
          .map((d) => ({ name: d.type ?? "Unknown", count: d.count ?? 0 }))
          .filter((d) => !query || d.name.toLowerCase().includes(query))
      : type === "projects-by-guide"
        ? (data as ProjectGuideReportRow[])
            .map((d) => ({ name: d.guide ?? "Unknown", count: d.count ?? 0 }))
            .filter((d) => !query || d.name.toLowerCase().includes(query))
        : [];

  const attendanceData = (data as AttendanceSummaryRow[]).filter(
    (r) =>
      !query ||
      r.groupName.toLowerCase().includes(query) ||
      new Date(r.date).toLocaleDateString().toLowerCase().includes(query),
  );

  const groupMemberData = (data as GroupMemberRow[]).filter(
    (r) =>
      !query ||
      (r.projectGroup?.ProjectGroupName ?? "").toLowerCase().includes(query) ||
      (r.student?.StudentName ?? "").toLowerCase().includes(query) ||
      (r.student?.Email ?? "").toLowerCase().includes(query),
  );

  const progressData = (data as ProgressReportRow[]).filter(
    (r) =>
      !query ||
      r.ProjectGroupName.toLowerCase().includes(query) ||
      (r.ProjectTitle ?? "").toLowerCase().includes(query) ||
      r.Guide.toLowerCase().includes(query) ||
      r.Status.toLowerCase().includes(query),
  );

  const filteredCount =
    type === "projects-by-type" || type === "projects-by-guide"
      ? chartData.length
      : type === "attendance-summary"
        ? attendanceData.length
        : type === "group-members"
          ? groupMemberData.length
          : progressData.length;

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Reports</h2>
          <p className={styles.subtitle}>{currentReport.description}</p>
        </div>
        <div className={styles.summaryPill}>{filteredCount} records</div>
      </div>

      <div className={styles.controls}>
        <div className={styles.controlsLeft}>
          <Select
            label="Report"
            options={REPORT_OPTIONS.map((o) => ({
              value: o.value,
              label: o.label,
            }))}
            value={type}
            onChange={(e) => {
              setLoading(true);
              setType(e.target.value as ReportType);
            }}
          />
          <Input
            label="Search"
            placeholder="Filter current report"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.export}>
          <span className="text-small text-muted">Export:</span>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => exportFile("excel")}
          >
            Excel
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => exportFile("pdf")}
          >
            PDF
          </Button>
        </div>
      </div>

      {loading && <p className="text-muted">Loading...</p>}

      {!loading &&
        (type === "projects-by-type" || type === "projects-by-guide") &&
        chartData.length > 0 && (
          <div className={styles.chart}>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={chartData}
                margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
              >
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="var(--color-primary)"
                  radius={[4, 4, 0, 0]}
                />
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
              {attendanceData.map((r) => (
                <tr key={r.meetingId}>
                  <td>{r.groupName}</td>
                  <td>
                    {new Date(r.date).toLocaleDateString()}{" "}
                    {new Date(r.date).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td>{r.total}</td>
                  <td>{r.present}</td>
                  <td>
                    {r.total ? Math.round((r.present / r.total) * 100) : 0}%
                  </td>
                </tr>
              ))}
              {attendanceData.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-muted text-center">
                    No matching attendance records
                  </td>
                </tr>
              )}
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
              {groupMemberData.map((r) => (
                <tr key={r.ProjectGroupMemberID}>
                  <td>{r.projectGroup?.ProjectGroupName}</td>
                  <td>{r.projectGroup?.ProjectTitle || "—"}</td>
                  <td>{r.student?.StudentName}</td>
                  <td>{r.student?.Email}</td>
                </tr>
              ))}
              {groupMemberData.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-muted text-center">
                    No matching members
                  </td>
                </tr>
              )}
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
              {progressData.map((r) => (
                <tr key={r.ProjectGroupID}>
                  <td>{r.ProjectGroupName}</td>
                  <td>{r.ProjectTitle || "—"}</td>
                  <td>{r.Guide}</td>
                  <td>{r.Status}</td>
                  <td>{r.MeetingsCount}</td>
                  <td>{r.DocumentsCount}</td>
                </tr>
              ))}
              {progressData.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-muted text-center">
                    No matching progress records
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {!loading && data.length === 0 && (
        <p className="text-muted">No data available for this report.</p>
      )}

      {!loading && data.length > 0 && filteredCount === 0 && (
        <p className="text-muted">No records match your filter.</p>
      )}
    </div>
  );
}
