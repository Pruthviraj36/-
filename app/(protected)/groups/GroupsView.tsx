"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Table, type Column } from "@/components/ui/Table";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { IconPlus } from "@/components/ui/Icons";
import { useToast } from "@/components/ui/Toast";
import styles from "./GroupsView.module.css";

interface Group {
  ProjectGroupID: number;
  ProjectGroupName: string;
  ProjectTitle: string | null;
  Status: string;
  projectType: { ProjectTypeName: string };
  guide: { StaffName: string };
}

export function GroupsView({ role }: { role: string }) {
  const [list, setList] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [projectTypes, setProjectTypes] = useState<{ value: string; label: string }[]>([]);
  const [staff, setStaff] = useState<{ value: string; label: string }[]>([]);
  const [form, setForm] = useState({ ProjectGroupName: "", ProjectTypeID: "", GuideStaffID: "", ProjectTitle: "" });
  const toast = useToast();

  const canEdit = role === "admin" || role === "faculty";

  useEffect(() => {
    (async () => {
      try {
        const [r, pt, st] = await Promise.all([
          fetch("/api/groups").then((x) => x.json()),
          fetch("/api/masters/project-types").then((x) => x.json()),
          fetch("/api/masters/staff").then((x) => x.json()),
        ]);
        setList(Array.isArray(r) ? r : []);
        setProjectTypes([{ value: "", label: "Select type" }, ...(pt || []).map((p: { ProjectTypeID: number; ProjectTypeName: string }) => ({ value: String(p.ProjectTypeID), label: p.ProjectTypeName }))]);
        setStaff([{ value: "", label: "Select guide" }, ...(st || []).map((s: { StaffID: number; StaffName: string }) => ({ value: String(s.StaffID), label: s.StaffName }))]);
      } catch (e) {
        toast.add("Failed to load groups", "error");
      } finally {
        setLoading(false);
      }
    })();
  }, [toast]);

  async function create() {
    if (!form.ProjectGroupName || !form.ProjectTypeID || !form.GuideStaffID) {
      toast.add("Name, type and guide required", "error");
      return;
    }
    try {
      const res = await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ProjectGroupName: form.ProjectGroupName,
          ProjectTypeID: Number(form.ProjectTypeID),
          GuideStaffID: Number(form.GuideStaffID),
          ProjectTitle: form.ProjectTitle || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setList((prev) => [data, ...prev]);
      setModal(false);
      setForm({ ProjectGroupName: "", ProjectTypeID: "", GuideStaffID: "", ProjectTitle: "" });
      toast.add("Group created", "success");
    } catch (e) {
      toast.add(e instanceof Error ? e.message : "Failed to create", "error");
    }
  }

  if (loading) return <p className="text-muted">Loading…</p>;

  const cols: Column<Group>[] = [
    { key: "ProjectGroupName", header: "Group", mobileLabel: "Group" },
    { key: "ProjectTitle", header: "Project", render: (r) => r.ProjectTitle || "—", mobileLabel: "Project" },
    { key: "projectType", header: "Type", render: (r) => r.projectType?.ProjectTypeName ?? "—", mobileLabel: "Type" },
    { key: "guide", header: "Guide", render: (r) => r.guide?.StaffName ?? "—", mobileLabel: "Guide" },
    { key: "Status", header: "Status", mobileLabel: "Status" },
  ];

  return (
    <div className={styles.wrap}>
      {canEdit && (
        <div className={styles.toolbar}>
          <Button variant="primary" icon={<IconPlus size={18} />} onClick={() => setModal(true)}>Add group</Button>
        </div>
      )}
      <Table<Group>
        columns={cols}
        data={list}
        keyField="ProjectGroupID"
        onRowClick={(r) => window.location.assign(`/groups/${r.ProjectGroupID}`)}
        emptyMessage="No groups"
      />
      <Modal open={modal} onClose={() => setModal(false)} title="New project group" footer={
        <>
          <Button variant="secondary" onClick={() => setModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={create}>Create</Button>
        </>
      }>
        <div className={styles.form}>
          <Input label="Group name" value={form.ProjectGroupName} onChange={(e) => setForm((f) => ({ ...f, ProjectGroupName: e.target.value }))} required />
          <Select label="Project type" options={projectTypes} value={form.ProjectTypeID} onChange={(e) => setForm((f) => ({ ...f, ProjectTypeID: e.target.value }))} />
          <Select label="Guide" options={staff} value={form.GuideStaffID} onChange={(e) => setForm((f) => ({ ...f, GuideStaffID: e.target.value }))} />
          <Input label="Project title" value={form.ProjectTitle} onChange={(e) => setForm((f) => ({ ...f, ProjectTitle: e.target.value }))} />
        </div>
      </Modal>
    </div>
  );
}
