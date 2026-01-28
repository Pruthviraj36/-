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
  members: { student: { StudentName: string; Email: string }; IsGroupLeader: boolean }[];
  documents: { ProjectDocumentID: number; FileName: string; FilePath: string; DocumentType: string }[];
}

export function GroupDetailView({ group, role }: { group: G; role: string }) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ProjectTitle: group.ProjectTitle ?? "", ProjectArea: group.ProjectArea ?? "", ProjectDescription: group.ProjectDescription ?? "", Status: group.Status });
  const [staff, setStaff] = useState<{ value: string; label: string }[]>([]);
  const toast = useToast();
  const canEdit = role === "admin" || role === "faculty";

  useEffect(() => {
    if (canEdit) fetch("/api/masters/staff").then((r) => r.json()).then((arr) => setStaff((arr || []).map((s: { StaffID: number; StaffName: string }) => ({ value: String(s.StaffID), label: s.StaffName }))));
  }, [canEdit]);

  async function save() {
    try {
      const res = await fetch(`/api/groups/${group.ProjectGroupID}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error((await res.json()).error);
      setEditing(false);
      toast.add("Saved", "success");
      router.refresh();
    } catch (e) {
      toast.add(e instanceof Error ? e.message : "Failed", "error");
    }
  }

  async function onUpload(files: File[]) {
    const fd = new FormData();
    fd.append("file", files[0]);
    fd.append("projectGroupId", String(group.ProjectGroupID));
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    if (!res.ok) throw new Error("Upload failed");
    toast.add("File uploaded", "success");
    router.refresh();
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <Link href="/groups" className={styles.back}>← Groups</Link>
        <h1 className="h2">{group.ProjectGroupName}</h1>
        <p className="text-muted">{group.projectType?.ProjectTypeName} · Guide: {group.guide?.StaffName}</p>
      </div>

      <section className={styles.section}>
        <h2 className="h4">Details</h2>
        {editing ? (
          <div className={styles.form}>
            <Input label="Project title" value={form.ProjectTitle} onChange={(e) => setForm((f) => ({ ...f, ProjectTitle: e.target.value }))} />
            <Input label="Project area" value={form.ProjectArea} onChange={(e) => setForm((f) => ({ ...f, ProjectArea: e.target.value }))} />
            <textarea className={styles.textarea} placeholder="Description" value={form.ProjectDescription} onChange={(e) => setForm((f) => ({ ...f, ProjectDescription: e.target.value }))} rows={3} />
            <Select label="Status" options={[{ value: "Draft", label: "Draft" }, { value: "Pending", label: "Pending" }, { value: "Approved", label: "Approved" }, { value: "Rejected", label: "Rejected" }]} value={form.Status} onChange={(e) => setForm((f) => ({ ...f, Status: e.target.value }))} />
            <div className={styles.actions}>
              <Button variant="secondary" onClick={() => setEditing(false)}>Cancel</Button>
              <Button variant="primary" onClick={save}>Save</Button>
            </div>
          </div>
        ) : (
          <>
            <p><strong>Title:</strong> {group.ProjectTitle || "—"}</p>
            <p><strong>Area:</strong> {group.ProjectArea || "—"}</p>
            <p><strong>Status:</strong> {group.Status}</p>
            {group.ProjectDescription && <p><strong>Description:</strong> {group.ProjectDescription}</p>}
            {canEdit && <Button variant="secondary" size="sm" icon={<IconEdit size={16} />} onClick={() => setEditing(true)}>Edit</Button>}
          </>
        )}
      </section>

      <section className={styles.section}>
        <h2 className="h4">Members</h2>
        <ul className={styles.list}>
          {group.members.map((m) => (
            <li key={m.student.Email}>{m.student.StudentName} {m.IsGroupLeader && <span className={styles.badge}>Leader</span>}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className="h4">Documents</h2>
        {canEdit && <FileUpload onSelect={onUpload} hint="Proposal, reports, etc." />}
        <ul className={styles.docList}>
          {group.documents.map((d) => (
            <li key={d.ProjectDocumentID}>
              <a href={d.FilePath} target="_blank" rel="noreferrer"><IconFile size={16} /> {d.FileName}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
