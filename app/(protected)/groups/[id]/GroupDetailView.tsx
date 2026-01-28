"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { FileUpload } from "@/components/ui/FileUpload";
import { useToast } from "@/components/ui/Toast";
import { IconEdit, IconTrash, IconFile } from "@/components/ui/Icons";
import styles from "./GroupDetailView.module.css";

interface G {
  ProjectGroupID: number;
  ProjectGroupName: string;
  ProjectTitle: string | null;
  ProjectArea: string | null;
  ProjectDescription: string | null;
  Status: string;
  projectType: { ProjectTypeName: string };
  guide: { StaffName: string };
  convener: { StaffName: string } | null;
  expert: { StaffName: string } | null;
  members: { student: { StudentID: number; StudentName: string; Email: string }; IsGroupLeader: boolean }[];
  documents: { ProjectDocumentID: number; FileName: string; FilePath: string; DocumentType: string }[];
}

export function GroupDetailView({ group: initialGroup, role }: { group: G; role: string }) {
  const router = useRouter();
  const [group, setGroup] = useState(initialGroup);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ProjectTitle: group.ProjectTitle ?? "", ProjectArea: group.ProjectArea ?? "", ProjectDescription: group.ProjectDescription ?? "", Status: group.Status });
  const [students, setStudents] = useState<{ StudentID: number; StudentName: string }[]>([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const toast = useToast();
  const canEdit = role === "admin" || role === "faculty";

  useEffect(() => {
    if (canEdit) {
      fetch("/api/students").then((r) => r.json()).then((d) => setStudents(Array.isArray(d) ? d : []));
    }
  }, [canEdit]);

  async function save() {
    try {
      const res = await fetch(`/api/groups/${group.ProjectGroupID}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setEditing(false);
      toast.add("Saved", "success");
      setGroup({ ...group, ...form });
    } catch {
      toast.add("Failed to save", "error");
    }
  }

  async function addMember() {
    if (!selectedStudent) return;
    try {
      const res = await fetch(`/api/groups/${group.ProjectGroupID}/members`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ StudentID: Number(selectedStudent), IsGroupLeader: group.members.length === 0 }),
      });
      const student = students.find(s => s.StudentID === Number(selectedStudent));
      if (student) {
        setGroup(prev => ({
          ...prev,
          members: [...prev.members, { student: { StudentID: student.StudentID, StudentName: student.StudentName, Email: (student as any).Email || "" }, IsGroupLeader: prev.members.length === 0 }]
        }));
      }
      toast.add("Member added", "success");
      setSelectedStudent("");
    } catch {
      toast.add("Failed to add member", "error");
    }
  }

  async function removeMember(sid: number) {
    if (!confirm("Remove this member?")) return;
    try {
      const res = await fetch(`/api/groups/${group.ProjectGroupID}/members?studentId=${sid}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      toast.add("Member removed", "success");
      setGroup({ ...group, members: group.members.filter(m => m.student.StudentID !== sid) });
    } catch {
      toast.add("Failed to remove", "error");
    }
  }

  async function setLeader(sid: number) {
    try {
      const res = await fetch(`/api/groups/${group.ProjectGroupID}/members`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ StudentID: sid, IsGroupLeader: true }),
      });
      if (!res.ok) throw new Error();
      toast.add("Leader updated", "success");
      setGroup({ ...group, members: group.members.map(m => ({ ...m, IsGroupLeader: m.student.StudentID === sid })) });
    } catch {
      toast.add("Failed to update leader", "error");
    }
  }

  async function onUpload(files: File[]) {
    const fd = new FormData();
    fd.append("file", files[0]);
    fd.append("projectGroupId", String(group.ProjectGroupID));
    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) throw new Error();
      toast.add("File uploaded", "success");
      window.location.reload();
    } catch {
      toast.add("Upload failed", "error");
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <Link href="/groups" className={styles.back}>← Groups</Link>
        <h1 className="h2">{group.ProjectGroupName}</h1>
        <p className="text-muted">{group.projectType?.ProjectTypeName} · Guide: {group.guide?.StaffName}</p>
      </div>

      <div className={styles.grid}>
        <section className={styles.section}>
          <h2 className="h4">Details</h2>
          {editing ? (
            <div className={styles.formContent}>
              <Input label="Project title" value={form.ProjectTitle} onChange={(e) => setForm((f) => ({ ...f, ProjectTitle: e.target.value }))} />
              <Input label="Project area" value={form.ProjectArea} onChange={(e) => setForm((f) => ({ ...f, ProjectArea: e.target.value }))} />
              <textarea className={styles.textarea} placeholder="Description" value={form.ProjectDescription} onChange={(e) => setForm((f) => ({ ...f, ProjectDescription: e.target.value }))} rows={3} />
              <Select label="Status" options={[{ value: "Draft", label: "Draft" }, { value: "Pending", label: "Pending" }, { value: "Approved", label: "Approved" }, { value: "Rejected", label: "Rejected" }]} value={form.Status} onChange={(e) => setForm((f) => ({ ...f, Status: e.target.value }))} />
              <div className={styles.groupActions}>
                <Button variant="secondary" size="sm" onClick={() => setEditing(false)}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={save}>Save</Button>
              </div>
            </div>
          ) : (
            <div className={styles.detailsView}>
              <p><strong>Title:</strong> {group.ProjectTitle || "—"}</p>
              <p><strong>Area:</strong> {group.ProjectArea || "—"}</p>
              <p><strong>Status:</strong> <span className={`${styles.status} ${styles[group.Status.toLowerCase()]}`}>{group.Status}</span></p>
              {group.ProjectDescription && <p><strong>Description:</strong> {group.ProjectDescription}</p>}
              {canEdit && <Button variant="secondary" size="sm" icon={<IconEdit size={16} />} onClick={() => setEditing(true)} style={{ marginTop: "1rem" }}>Edit Details</Button>}
            </div>
          )}
        </section>

        <section className={styles.section}>
          <h2 className="h4">Members</h2>
          <div className={styles.members}>
            <ul className={styles.memberList}>
              {group.members.map((m) => (
                <li key={m.student.StudentID} className={styles.memberItem}>
                  <div>
                    <strong>{m.student.StudentName}</strong>
                    <div className="text-small text-muted">{m.student.Email}</div>
                  </div>
                  <div className={styles.memberActions}>
                    {m.IsGroupLeader ? <span className={styles.badge}>Leader</span> : (
                      canEdit && <button type="button" className={styles.ghostBtn} onClick={() => setLeader(m.student.StudentID)}>Set Leader</button>
                    )}
                    {canEdit && <button type="button" className={styles.removeBtn} onClick={() => removeMember(m.student.StudentID)}><IconTrash size={14} /></button>}
                  </div>
                </li>
              ))}
            </ul>
            {canEdit && (
              <div className={styles.addMember} style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
                <Select
                  options={[{ value: "", label: "Add student..." }, ...students.filter(s => !group.members.some(m => m.student.StudentID === s.StudentID)).map(s => ({ value: String(s.StudentID), label: s.StudentName }))]}
                  value={selectedStudent}
                  onChange={(e) => setSelectedStudent(e.target.value)}
                />
                <Button variant="primary" size="sm" onClick={addMember} disabled={!selectedStudent}>Add</Button>
              </div>
            )}
          </div>
        </section>

        <section className={styles.section} style={{ gridColumn: "1 / -1" }}>
          <h2 className="h4">Documents</h2>
          {canEdit && (
            <div style={{ marginBottom: "1.5rem" }}>
              <FileUpload onSelect={onUpload} hint="Proposal, reports, etc." />
            </div>
          )}
          <div className={styles.docGrid}>
            {group.documents.length === 0 ? <p className="text-muted">No documents uploaded yet.</p> : group.documents.map((d) => (
              <a key={d.ProjectDocumentID} href={d.FilePath} target="_blank" rel="noreferrer" className={styles.docCard}>
                <IconFile size={24} />
                <span className={styles.docName}>{d.FileName}</span>
                <span className="text-small text-muted">{d.DocumentType}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
