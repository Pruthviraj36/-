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
  projectGroup: { ProjectGroupName: string };
  guide: { StaffName: string };
}

export function MeetingsView({ role }: { role: string }) {
  const [list, setList] = useState<Meeting[]>([]);
  const [groups, setGroups] = useState<{ value: string; label: string }[]>([]);
  const [staff, setStaff] = useState<{ value: string; label: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ ProjectGroupID: "", GuideStaffID: "", MeetingDateTime: "", MeetingPurpose: "", MeetingLocation: "" });
  const toast = useToast();
  const canEdit = role === "admin" || role === "faculty";

  useEffect(() => {
    (async () => {
      try {
        const [m, g, s] = await Promise.all([
          fetch("/api/meetings").then((r) => r.json()),
          fetch("/api/groups").then((r) => r.json()),
          fetch("/api/masters/staff").then((r) => r.json()),
        ]);
        setList(Array.isArray(m) ? m : []);
        setGroups([{ value: "", label: "Select group" }, ...(Array.isArray(g) ? g : []).map((x: { ProjectGroupID: number; ProjectGroupName: string }) => ({ value: String(x.ProjectGroupID), label: x.ProjectGroupName }))]);
        setStaff([{ value: "", label: "Select guide" }, ...(Array.isArray(s) ? s : []).map((x: { StaffID: number; StaffName: string }) => ({ value: String(x.StaffID), label: x.StaffName }))]);
      } catch {
        toast.add("Failed to load meetings", "error");
      } finally {
        setLoading(false);
      }
    })();
  }, [toast]);

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
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setList((prev) => [data, ...prev]);
      setModal(false);
      setForm({ ProjectGroupID: "", GuideStaffID: "", MeetingDateTime: "", MeetingPurpose: "", MeetingLocation: "" });
      toast.add("Meeting created", "success");
    } catch (e) {
      toast.add(e instanceof Error ? e.message : "Failed", "error");
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
          <Button variant="primary" icon={<IconPlus size={18} />} onClick={() => setModal(true)}>Add meeting</Button>
        </div>
      )}
      <Table<Meeting> columns={cols} data={list} keyField="ProjectMeetingID" emptyMessage="No meetings" />
      <Modal open={modal} onClose={() => setModal(false)} title="New meeting" footer={<><Button variant="secondary" onClick={() => setModal(false)}>Cancel</Button><Button variant="primary" onClick={create}>Create</Button></>}>
        <div className={styles.form}>
          <Select label="Project group" options={groups} value={form.ProjectGroupID} onChange={(e) => setForm((f) => ({ ...f, ProjectGroupID: e.target.value }))} />
          <Select label="Guide" options={staff} value={form.GuideStaffID} onChange={(e) => setForm((f) => ({ ...f, GuideStaffID: e.target.value }))} />
          <Input label="Date & time" type="datetime-local" value={form.MeetingDateTime} onChange={(e) => setForm((f) => ({ ...f, MeetingDateTime: e.target.value }))} />
          <Input label="Purpose" value={form.MeetingPurpose} onChange={(e) => setForm((f) => ({ ...f, MeetingPurpose: e.target.value }))} />
          <Input label="Location" value={form.MeetingLocation} onChange={(e) => setForm((f) => ({ ...f, MeetingLocation: e.target.value }))} />
        </div>
      </Modal>
    </div>
  );
}
