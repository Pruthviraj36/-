"use client";

import { useState, useEffect } from "react";
import { Table, type Column } from "@/components/ui/Table";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { IconPlus, IconEdit, IconTrash } from "@/components/ui/Icons";
import { useToast } from "@/components/ui/Toast";
import styles from "./MastersView.module.css";

type Tab = "project-types" | "staff";

export function MastersView() {
  const [tab, setTab] = useState<Tab>("project-types");
  const [pt, setPt] = useState<{ ProjectTypeID: number; ProjectTypeName: string; Description: string | null }[]>([]);
  const [staff, setStaff] = useState<{ StaffID: number; StaffName: string; Email: string; Role: string }[]>([]);
  const [modal, setModal] = useState<"pt" | "staff" | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});
  const [editId, setEditId] = useState<number | null>(null);
  const toast = useToast();

  function load() {
    fetch("/api/masters/project-types").then((r) => r.json()).then(setPt);
    fetch("/api/masters/staff").then((r) => r.json()).then(setStaff);
  }

  useEffect(() => { load(); }, []);

  function openPt(id?: number) {
    const r = id ? pt.find((x) => x.ProjectTypeID === id) : null;
    setForm({ ProjectTypeName: r?.ProjectTypeName ?? "", Description: r?.Description ?? "" });
    setEditId(r?.ProjectTypeID ?? null);
    setModal("pt");
  }

  function openStaff(id?: number) {
    const r = id ? staff.find((x) => x.StaffID === id) : null;
    setForm({ StaffName: r?.StaffName ?? "", Email: r?.Email ?? "", Password: "", Role: r?.Role === "Admin" ? "Admin" : "Faculty" });
    setEditId(r?.StaffID ?? null);
    setModal("staff");
  }

  async function savePt() {
    try {
      if (editId) {
        await fetch(`/api/masters/project-types/${editId}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
        toast.add("Updated", "success");
      } else {
        await fetch("/api/masters/project-types", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
        toast.add("Created", "success");
      }
      setModal(null);
      load();
    } catch (e) {
      toast.add("Failed", "error");
    }
  }

  async function saveStaff() {
    try {
      const body: Record<string, string> = { StaffName: form.StaffName, Email: form.Email, Role: form.Role };
      if (form.Password) body.Password = form.Password;
      if (editId) {
        await fetch(`/api/masters/staff/${editId}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
        toast.add("Updated", "success");
      } else {
        if (!form.Password) { toast.add("Password required for new staff", "error"); return; }
        await fetch("/api/masters/staff", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, Password: form.Password }) });
        toast.add("Created", "success");
      }
      setModal(null);
      load();
    } catch (e) {
      toast.add("Failed", "error");
    }
  }

  async function deletePt(id: number) {
    if (!confirm("Delete?")) return;
    try {
      await fetch(`/api/masters/project-types/${id}`, { method: "DELETE" });
      toast.add("Deleted", "success");
      load();
    } catch {
      toast.add("Failed", "error");
    }
  }

  const ptCols: Column<{ ProjectTypeID: number; ProjectTypeName: string; Description: string | null }>[] = [
    { key: "ProjectTypeName", header: "Name", mobileLabel: "Name" },
    { key: "Description", header: "Description", render: (r) => r.Description || "—", mobileLabel: "Description" },
  ];

  const staffCols: Column<{ StaffID: number; StaffName: string; Email: string; Role: string }>[] = [
    { key: "StaffName", header: "Name", mobileLabel: "Name" },
    { key: "Email", header: "Email", mobileLabel: "Email" },
    { key: "Role", header: "Role", mobileLabel: "Role" },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.tabs}>
        <button type="button" className={tab === "project-types" ? styles.tabActive : styles.tab} onClick={() => setTab("project-types")}>Project types</button>
        <button type="button" className={tab === "staff" ? styles.tabActive : styles.tab} onClick={() => setTab("staff")}>Staff</button>
      </div>
      {tab === "project-types" && (
        <>
          <div className={styles.toolbar}><Button variant="primary" size="sm" icon={<IconPlus size={16} />} onClick={() => openPt()}>Add</Button></div>
          <Table<{ ProjectTypeID: number; ProjectTypeName: string; Description: string | null }> columns={ptCols} data={pt} keyField="ProjectTypeID" onRowClick={(r) => openPt(r.ProjectTypeID)} emptyMessage="No project types" />
        </>
      )}
      {tab === "staff" && (
        <>
          <div className={styles.toolbar}><Button variant="primary" size="sm" icon={<IconPlus size={16} />} onClick={() => openStaff()}>Add</Button></div>
          <Table<{ StaffID: number; StaffName: string; Email: string; Role: string }> columns={staffCols} data={staff} keyField="StaffID" onRowClick={(r) => openStaff(r.StaffID)} emptyMessage="No staff" />
        </>
      )}
      <Modal open={modal === "pt"} onClose={() => setModal(null)} title={editId ? "Edit project type" : "New project type"} footer={<><Button variant="secondary" onClick={() => setModal(null)}>Cancel</Button><Button variant="primary" onClick={savePt}>Save</Button></>}>
        <div className={styles.form}>
          <Input label="Name" value={form.ProjectTypeName} onChange={(e) => setForm((f) => ({ ...f, ProjectTypeName: e.target.value }))} />
          <Input label="Description" value={form.Description} onChange={(e) => setForm((f) => ({ ...f, Description: e.target.value }))} />
        </div>
      </Modal>
      <Modal open={modal === "staff"} onClose={() => setModal(null)} title={editId ? "Edit staff" : "New staff"} footer={<><Button variant="secondary" onClick={() => setModal(null)}>Cancel</Button><Button variant="primary" onClick={saveStaff}>Save</Button></>}>
        <div className={styles.form}>
          <Input label="Name" value={form.StaffName} onChange={(e) => setForm((f) => ({ ...f, StaffName: e.target.value }))} />
          <Input label="Email" type="email" value={form.Email} onChange={(e) => setForm((f) => ({ ...f, Email: e.target.value }))} />
          <Input label="Password" type="password" value={form.Password} onChange={(e) => setForm((f) => ({ ...f, Password: e.target.value }))} placeholder={editId ? "Leave blank to keep" : undefined} />
          <Select label="Role" options={[{ value: "Admin", label: "Admin" }, { value: "Faculty", label: "Faculty" }]} value={form.Role} onChange={(e) => setForm((f) => ({ ...f, Role: e.target.value }))} />
        </div>
      </Modal>
    </div>
  );
}
