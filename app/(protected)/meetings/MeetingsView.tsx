"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Table, type Column } from "@/components/ui/Table";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { IconPlus } from "@/components/ui/Icons";
import { useToast } from "@/components/ui/Toast";
import { format } from "date-fns";
import styles from "./MeetingsView.module.css";

interface Meeting {
  ProjectMeetingID: number;
  MeetingDateTime: string;
  MeetingPurpose: string | null;
  MeetingLocation: string | null;
  MeetingStatus: string;
  ProjectGroupID: number;
  GuideStaffID: number;
  projectGroup: { ProjectGroupName: string };
  guide: { StaffName: string };
  attendances: { student: { StudentID: number; StudentName: string }; IsPresent: boolean; AttendanceRemarks: string | null }[];
  MeetingNotes: string | null;
}

export function MeetingsView({ role }: { role: string }) {
  const [list, setList] = useState<Meeting[]>([]);
  const [groups, setGroups] = useState<{ value: string; label: string }[]>([]);
  const [staff, setStaff] = useState<{ value: string; label: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<"create" | "detail" | null>(null);
  const [selected, setSelected] = useState<Meeting | null>(null);
  const [form, setForm] = useState({ ProjectGroupID: "", GuideStaffID: "", MeetingDateTime: "", MeetingPurpose: "", MeetingLocation: "" });
  const toast = useToast();
  const canEdit = role === "admin" || role === "faculty";

  function load() {
    (async () => {
      try {
        const [m, g, s] = await Promise.all([
          fetch("/api/meetings").then((r) => r.json()),
          canEdit ? fetch("/api/groups").then((r) => r.json()) : Promise.resolve([]),
          canEdit ? fetch("/api/masters/staff").then((r) => r.json()) : Promise.resolve([]),
        ]);
        setList(Array.isArray(m) ? m : []);
        if (canEdit) {
          setGroups([{ value: "", label: "Select group" }, ...(Array.isArray(g) ? g : []).map((x: any) => ({ value: String(x.ProjectGroupID), label: x.ProjectGroupName }))]);
          setStaff([{ value: "", label: "Select guide" }, ...(Array.isArray(s) ? s : []).map((x: any) => ({ value: String(x.StaffID), label: x.StaffName }))]);
        }
      } catch {
        toast.add("Failed to load meetings", "error");
      } finally {
        setLoading(false);
      }
    })();
  }

  useEffect(() => { load(); }, [toast, canEdit]);

  async function create() {
    if (!form.ProjectGroupID || !form.GuideStaffID || !form.MeetingDateTime) {
      toast.add("Group, guide and date/time required", "error");
      return;
    }
    try {
      const res = await fetch("/api/meetings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ProjectGroupID: Number(form.ProjectGroupID),
          GuideStaffID: Number(form.GuideStaffID),
          MeetingDateTime: form.MeetingDateTime,
          MeetingPurpose: form.MeetingPurpose || null,
          MeetingLocation: form.MeetingLocation || null,
        }),
      });
      if (!res.ok) throw new Error();
      toast.add("Meeting created", "success");
      setModal(null);
      load();
    } catch {
      toast.add("Failed to create", "error");
    }
  }

  async function saveNotes() {
    if (!selected) return;
    try {
      const res = await fetch(`/api/meetings/${selected.ProjectMeetingID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ MeetingNotes: selected.MeetingNotes }),
      });
      if (!res.ok) throw new Error();
      toast.add("Notes saved", "success");
      load();
    } catch {
      toast.add("Failed to save notes", "error");
    }
  }

  async function updateStatus(status: string) {
    if (!selected) return;
    try {
      const res = await fetch(`/api/meetings/${selected.ProjectMeetingID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ MeetingStatus: status }),
      });
      if (!res.ok) throw new Error();
      toast.add("Status updated", "success");
      load();
      setModal(null);
    } catch {
      toast.add("Failed to update status", "error");
    }
  }

  async function toggleAttendance(studentId: number, current: boolean) {
    if (!selected) return;
    try {
      const res = await fetch(`/api/meetings/${selected.ProjectMeetingID}/attendance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ StudentID: studentId, IsPresent: !current }),
      });
      if (!res.ok) throw new Error();
      toast.add("Attendance updated", "success");
      // Update local state for immediate feedback
      setList(prev => prev.map(m => {
        if (m.ProjectMeetingID === selected.ProjectMeetingID) {
          const newAtt = m.attendances.map(a => a.student.StudentID === studentId ? { ...a, IsPresent: !current } : a);
          return { ...m, attendances: newAtt };
        }
        return m;
      }));
      setSelected(prev => prev ? { ...prev, attendances: prev.attendances.map(a => a.student.StudentID === studentId ? { ...a, IsPresent: !current } : a) } : null);
    } catch {
      toast.add("Failed to update attendance", "error");
    }
  }

  if (loading) return <p className="text-muted">Loading…</p>;

  const cols: Column<Meeting>[] = [
    { key: "MeetingDateTime", header: "Date & time", render: (r) => format(new Date(r.MeetingDateTime), "dd MMM yyyy, HH:mm"), mobileLabel: "Date" },
    { key: "projectGroup", header: "Group", render: (r) => r.projectGroup?.ProjectGroupName ?? "—", mobileLabel: "Group" },
    { key: "guide", header: "Guide", render: (r) => r.guide?.StaffName ?? "—", mobileLabel: "Guide" },
    { key: "MeetingPurpose", header: "Purpose", render: (r) => r.MeetingPurpose || "—", mobileLabel: "Purpose" },
    { key: "MeetingStatus", header: "Status", mobileLabel: "Status" },
  ];

  return (
    <div className={styles.wrap}>
      {canEdit && (
        <div className={styles.toolbar}>
          <Button variant="primary" icon={<IconPlus size={18} />} onClick={() => setModal("create")}>Add meeting</Button>
        </div>
      )}
      <Table<Meeting> columns={cols} data={list} keyField="ProjectMeetingID" emptyMessage="No meetings" onRowClick={(r) => { setSelected(r); setModal("detail"); }} />

      <Modal open={modal === "create"} onClose={() => setModal(null)} title="New meeting" footer={<><Button variant="secondary" onClick={() => setModal(null)}>Cancel</Button><Button variant="primary" onClick={create}>Create</Button></>}>
        <div className={styles.form}>
          <Select label="Project group" options={groups} value={form.ProjectGroupID} onChange={(e) => setForm((f) => ({ ...f, ProjectGroupID: e.target.value }))} />
          <Select label="Guide" options={staff} value={form.GuideStaffID} onChange={(e) => setForm((f) => ({ ...f, GuideStaffID: e.target.value }))} />
          <Input label="Date & time" type="datetime-local" value={form.MeetingDateTime} onChange={(e) => setForm((f) => ({ ...f, MeetingDateTime: e.target.value }))} />
          <Input label="Purpose" value={form.MeetingPurpose} onChange={(e) => setForm((f) => ({ ...f, MeetingPurpose: e.target.value }))} />
          <Input label="Location" value={form.MeetingLocation} onChange={(e) => setForm((f) => ({ ...f, MeetingLocation: e.target.value }))} />
        </div>
      </Modal>

      <Modal open={modal === "detail" && !!selected} onClose={() => setModal(null)} title="Meeting Details" footer={<Button variant="secondary" onClick={() => setModal(null)}>Close</Button>}>
        {selected && (
          <div className={styles.detail}>
            <p><strong>Group:</strong> {selected.projectGroup.ProjectGroupName}</p>
            <p><strong>Guide:</strong> {selected.guide.StaffName}</p>
            <p><strong>Time:</strong> {format(new Date(selected.MeetingDateTime), "dd MMM yyyy, HH:mm")}</p>
            <p><strong>Purpose:</strong> {selected.MeetingPurpose || "—"}</p>
            <p><strong>Status:</strong> {selected.MeetingStatus}</p>

            <div style={{ marginTop: "var(--space-md)" }}>
              <label style={{ display: "block", marginBottom: "var(--space-xs)", fontWeight: 500, fontSize: "var(--font-size-sm)" }}>Meeting Notes</label>
              {canEdit ? (
                <div style={{ display: "flex", gap: "var(--space-xs)" }}>
                  <textarea
                    className={styles.textarea} // utilizing existing class or I might need to add one, but inline for now is safer if class doesn't exist in module for generic input
                    style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid var(--color-border)", minHeight: "80px", font: "inherit" }}
                    value={selected.MeetingNotes || ""}
                    onChange={(e) => setSelected(prev => prev ? { ...prev, MeetingNotes: e.target.value } : null)}
                    placeholder="Add notes..."
                  />
                  <Button variant="secondary" onClick={saveNotes} style={{ height: "fit-content" }}>Save</Button>
                </div>
              ) : (
                <p style={{ whiteSpace: "pre-wrap", color: "var(--color-text-muted)" }}>{selected.MeetingNotes || "No notes."}</p>
              )}
            </div>

            {canEdit && (
              <div className={styles.actions} style={{ marginTop: "var(--space-md)", display: "flex", gap: "var(--space-sm)" }}>
                <Button variant="secondary" size="sm" onClick={() => updateStatus("Completed")}>Mark Completed</Button>
                <Button variant="danger" size="sm" onClick={() => updateStatus("Cancelled")}>Cancel Meeting</Button>
              </div>
            )}

            <div className={styles.attendance} style={{ marginTop: "var(--space-lg)" }}>
              <h3 className="h4">Attendance</h3>
              {selected.attendances.length === 0 ? <p className="text-small text-muted">No attendance records.</p> : (
                <ul className={styles.attList} style={{ listStyle: "none", padding: 0, marginTop: "var(--space-sm)" }}>
                  {selected.attendances.map(a => (
                    <li key={a.student.StudentID} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-xs) 0", borderBottom: "1px solid var(--color-border)" }}>
                      <span>{a.student.StudentName}</span>
                      {canEdit ? (
                        <button
                          type="button"
                          onClick={() => toggleAttendance(a.student.StudentID, a.IsPresent)}
                          style={{
                            padding: "4px 8px",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid var(--color-border)",
                            background: a.IsPresent ? "var(--color-success)" : "var(--color-surface)",
                            color: a.IsPresent ? "#white" : "inherit",
                            fontSize: "var(--font-size-xs)",
                            cursor: "pointer"
                          }}
                        >
                          {a.IsPresent ? "Present" : "Absent"}
                        </button>
                      ) : (
                        <span style={{ color: a.IsPresent ? "var(--color-success)" : "var(--color-danger)" }}>
                          {a.IsPresent ? "Present" : "Absent"}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
