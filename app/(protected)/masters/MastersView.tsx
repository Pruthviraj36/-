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

type Tab = "project-types" | "staff" | "academic-years" | "departments" | "students";

export function MastersView() {
  const [tab, setTab] = useState<Tab>("project-types");
  const [pt, setPt] = useState<{ ProjectTypeID: number; ProjectTypeName: string; Description: string | null }[]>([]);
  const [staff, setStaff] = useState<{ StaffID: number; StaffName: string; Email: string; Role: string }[]>([]);
  const [ay, setAy] = useState<{ AcademicYearID: number; YearName: string; StartDate: string; EndDate: string; IsActive: boolean }[]>([]);
  const [depts, setDepts] = useState<{ DepartmentID: number; DepartmentName: string; AcademicYearID: number; academicYear?: { YearName: string } }[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [modal, setModal] = useState<"pt" | "staff" | "ay" | "dept" | "student" | null>(null);
  const [form, setForm] = useState<Record<string, any>>({});
  const [editId, setEditId] = useState<number | null>(null);
  const toast = useToast();

  function load() {
    fetch("/api/masters/project-types").then((r) => r.json()).then((d) => setPt(Array.isArray(d) ? d : []));
    fetch("/api/masters/staff").then((r) => r.json()).then((d) => setStaff(Array.isArray(d) ? d : []));
    fetch("/api/masters/academic-years").then((r) => r.json()).then((d) => setAy(Array.isArray(d) ? d : []));
    fetch("/api/masters/departments").then((r) => r.json()).then((d) => setDepts(Array.isArray(d) ? d : []));
    fetch("/api/masters/students").then((r) => r.json()).then((d) => setStudents(Array.isArray(d) ? d : []));
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

  function openAy(id?: number) {
    const r = id ? ay.find((x) => x.AcademicYearID === id) : null;
    setForm({
      YearName: r?.YearName ?? "",
      StartDate: r?.StartDate ? new Date(r.StartDate).toISOString().split("T")[0] : "",
      EndDate: r?.EndDate ? new Date(r.EndDate).toISOString().split("T")[0] : "",
      IsActive: r?.IsActive ?? false
    });
    setEditId(r?.AcademicYearID ?? null);
    setModal("ay");
  }

  function openDept(id?: number) {
    const r = id ? depts.find((x) => x.DepartmentID === id) : null;
    setForm({ DepartmentName: r?.DepartmentName ?? "", AcademicYearID: String(r?.AcademicYearID ?? ""), Description: "" });
    setEditId(r?.DepartmentID ?? null);
    setModal("dept");
  }

  function openStudent(id?: number) {
    const r = id ? students.find((x) => x.StudentID === id) : null;
    setForm({
      StudentName: r?.StudentName ?? "",
      Email: r?.Email ?? "",
      Phone: r?.Phone ?? "",
      Password: "",
      DepartmentID: String(r?.DepartmentID ?? ""),
      AcademicYearID: String(r?.AcademicYearID ?? ""),
      Description: r?.Description ?? ""
    });
    setEditId(r?.StudentID ?? null);
    setModal("student");
  }

  async function savePt() {
    try {
      const method = editId ? "PUT" : "POST";
      const url = editId ? `/api/masters/project-types/${editId}` : "/api/masters/project-types";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      toast.add(editId ? "Updated" : "Created", "success");
      setModal(null);
      load();
    } catch { toast.add("Failed", "error"); }
  }

  async function saveStaff() {
    try {
      const body: Record<string, any> = { StaffName: form.StaffName, Email: form.Email, Role: form.Role };
      if (form.Password) body.Password = form.Password;
      if (!editId && !form.Password) { toast.add("Password required", "error"); return; }
      const method = editId ? "PUT" : "POST";
      const url = editId ? `/api/masters/staff/${editId}` : "/api/masters/staff";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error();
      toast.add(editId ? "Updated" : "Created", "success");
      setModal(null);
      load();
    } catch { toast.add("Failed", "error"); }
  }

  async function saveAy() {
    try {
      const method = editId ? "PUT" : "POST";
      const url = editId ? `/api/masters/academic-years/${editId}` : "/api/masters/academic-years";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      toast.add(editId ? "Updated" : "Created", "success");
      setModal(null);
      load();
    } catch { toast.add("Failed", "error"); }
  }

  async function saveDept() {
    try {
      const method = editId ? "PUT" : "POST";
      const url = editId ? `/api/masters/departments/${editId}` : "/api/masters/departments";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, AcademicYearID: Number(form.AcademicYearID) }) });
      if (!res.ok) throw new Error();
      toast.add(editId ? "Updated" : "Created", "success");
      setModal(null);
      load();
    } catch { toast.add("Failed", "error"); }
  }

  async function saveStudent() {
    try {
      const body = { ...form, DepartmentID: Number(form.DepartmentID), AcademicYearID: Number(form.AcademicYearID) };
      if (!editId && !form.Password) { toast.add("Password required", "error"); return; }
      const method = editId ? "PUT" : "POST";
      const url = editId ? `/api/masters/students/${editId}` : "/api/masters/students";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error();
      toast.add(editId ? "Updated" : "Created", "success");
      setModal(null);
      load();
    } catch { toast.add("Failed", "error"); }
  }

  async function deleteItem(type: Tab, id: number) {
    if (!confirm("Are you sure you want to delete this item?")) return;
    try {
      const url = `/api/masters/${type}/${id}`;
      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) throw new Error();
      toast.add("Deleted", "success");
      load();
    } catch { toast.add("Failed to delete", "error"); }
  }

  const ptCols: Column<any>[] = [
    { key: "ProjectTypeName", header: "Name", mobileLabel: "Name" },
    { key: "Description", header: "Description", render: (r) => r.Description || "—", mobileLabel: "Desc" },
    { key: "actions", header: "", render: (r) => <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); deleteItem("project-types", r.ProjectTypeID); }}><IconTrash size={16} /></Button> }
  ];

  const staffCols: Column<any>[] = [
    { key: "StaffName", header: "Name", mobileLabel: "Name" },
    { key: "Email", header: "Email", mobileLabel: "Email" },
    { key: "Role", header: "Role", mobileLabel: "Role" },
    { key: "actions", header: "", render: (r) => <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); deleteItem("staff", r.StaffID); }}><IconTrash size={16} /></Button> }
  ];

  const ayCols: Column<any>[] = [
    { key: "YearName", header: "Year", mobileLabel: "Year" },
    { key: "StartDate", header: "Start", render: (r) => new Date(r.StartDate).toLocaleDateString(), mobileLabel: "Start" },
    { key: "EndDate", header: "End", render: (r) => new Date(r.EndDate).toLocaleDateString(), mobileLabel: "End" },
    { key: "IsActive", header: "Active", render: (r) => r.IsActive ? "Yes" : "No", mobileLabel: "Active" },
    { key: "actions", header: "", render: (r) => <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); deleteItem("academic-years", r.AcademicYearID); }}><IconTrash size={16} /></Button> }
  ];

  const deptCols: Column<any>[] = [
    { key: "DepartmentName", header: "Department", mobileLabel: "Dept" },
    { key: "YearName", header: "Year", render: (r) => r.academicYear?.YearName ?? "—", mobileLabel: "Year" },
    { key: "actions", header: "", render: (r) => <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); deleteItem("departments", r.DepartmentID); }}><IconTrash size={16} /></Button> }
  ];

  const studentCols: Column<any>[] = [
    { key: "StudentName", header: "Name", mobileLabel: "Name" },
    { key: "Email", header: "Email", mobileLabel: "Email" },
    { key: "Department", header: "Dept", render: (r) => depts.find(d => d.DepartmentID === r.DepartmentID)?.DepartmentName ?? "—", mobileLabel: "Dept" },
    { key: "Year", header: "Year", render: (r) => ay.find(y => y.AcademicYearID === r.AcademicYearID)?.YearName ?? "—", mobileLabel: "Year" },
    { key: "actions", header: "", render: (r) => <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); deleteItem("students", r.StudentID); }}><IconTrash size={16} /></Button> }
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.tabs}>
        <button type="button" className={tab === "project-types" ? styles.tabActive : styles.tab} onClick={() => setTab("project-types")}>Project types</button>
        <button type="button" className={tab === "staff" ? styles.tabActive : styles.tab} onClick={() => setTab("staff")}>Staff</button>
        <button type="button" className={tab === "academic-years" ? styles.tabActive : styles.tab} onClick={() => setTab("academic-years")}>Years</button>
        <button type="button" className={tab === "departments" ? styles.tabActive : styles.tab} onClick={() => setTab("departments")}>Departments</button>
        <button type="button" className={tab === "students" ? styles.tabActive : styles.tab} onClick={() => setTab("students")}>Students</button>
      </div>

      {tab === "project-types" && (
        <>
          <div className={styles.toolbar}><Button variant="primary" size="sm" icon={<IconPlus size={16} />} onClick={() => openPt()}>Add type</Button></div>
          <Table data={pt} columns={ptCols} keyField="ProjectTypeID" onRowClick={(r) => openPt(r.ProjectTypeID)} />
        </>
      )}
      {tab === "staff" && (
        <>
          <div className={styles.toolbar}><Button variant="primary" size="sm" icon={<IconPlus size={16} />} onClick={() => openStaff()}>Add staff</Button></div>
          <Table data={staff} columns={staffCols} keyField="StaffID" onRowClick={(r) => openStaff(r.StaffID)} />
        </>
      )}
      {tab === "academic-years" && (
        <>
          <div className={styles.toolbar}><Button variant="primary" size="sm" icon={<IconPlus size={16} />} onClick={() => openAy()}>Add year</Button></div>
          <Table data={ay} columns={ayCols} keyField="AcademicYearID" onRowClick={(r) => openAy(r.AcademicYearID)} />
        </>
      )}
      {tab === "departments" && (
        <>
          <div className={styles.toolbar}><Button variant="primary" size="sm" icon={<IconPlus size={16} />} onClick={() => openDept()}>Add department</Button></div>
          <Table data={depts} columns={deptCols} keyField="DepartmentID" onRowClick={(r) => openDept(r.DepartmentID)} />
        </>
      )}
      {tab === "students" && (
        <>
          <div className={styles.toolbar}><Button variant="primary" size="sm" icon={<IconPlus size={16} />} onClick={() => openStudent()}>Add student</Button></div>
          <Table data={students} columns={studentCols} keyField="StudentID" onRowClick={(r) => openStudent(r.StudentID)} />
        </>
      )}

      <Modal open={modal === "pt"} onClose={() => setModal(null)} title={editId ? "Edit project type" : "New project type"} footer={<><Button variant="secondary" onClick={() => setModal(null)}>Cancel</Button><Button variant="primary" onClick={savePt}>Save</Button></>}>
        <div className={styles.form}>
          <Input label="Name" value={form.ProjectTypeName} onChange={(e) => setForm({ ...form, ProjectTypeName: e.target.value })} />
          <Input label="Description" value={form.Description} onChange={(e) => setForm({ ...form, Description: e.target.value })} />
        </div>
      </Modal>

      <Modal open={modal === "staff"} onClose={() => setModal(null)} title={editId ? "Edit staff" : "New staff"} footer={<><Button variant="secondary" onClick={() => setModal(null)}>Cancel</Button><Button variant="primary" onClick={saveStaff}>Save</Button></>}>
        <div className={styles.form}>
          <Input label="Name" value={form.StaffName} onChange={(e) => setForm({ ...form, StaffName: e.target.value })} />
          <Input label="Email" type="email" value={form.Email} onChange={(e) => setForm({ ...form, Email: e.target.value })} />
          <Input label="Password" type="password" value={form.Password} onChange={(e) => setForm({ ...form, Password: e.target.value })} placeholder={editId ? "Leave blank to keep" : ""} />
          <Select label="Role" options={[{ value: "Admin", label: "Admin" }, { value: "Faculty", label: "Faculty" }]} value={form.Role} onChange={(e) => setForm({ ...form, Role: e.target.value })} />
        </div>
      </Modal>

      <Modal open={modal === "ay"} onClose={() => setModal(null)} title={editId ? "Edit year" : "New year"} footer={<><Button variant="secondary" onClick={() => setModal(null)}>Cancel</Button><Button variant="primary" onClick={saveAy}>Save</Button></>}>
        <div className={styles.form}>
          <Input label="Year name (e.g. 2024-25)" value={form.YearName} onChange={(e) => setForm({ ...form, YearName: e.target.value })} />
          <Input label="Start date" type="date" value={form.StartDate} onChange={(e) => setForm({ ...form, StartDate: e.target.value })} />
          <Input label="End date" type="date" value={form.EndDate} onChange={(e) => setForm({ ...form, EndDate: e.target.value })} />
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", marginTop: "var(--space-sm)" }}>
            <input type="checkbox" id="ay-active" checked={form.IsActive} onChange={(e) => setForm({ ...form, IsActive: e.target.checked })} />
            <label htmlFor="ay-active">Active Year</label>
          </div>
        </div>
      </Modal>

      <Modal open={modal === "dept"} onClose={() => setModal(null)} title={editId ? "Edit department" : "New department"} footer={<><Button variant="secondary" onClick={() => setModal(null)}>Cancel</Button><Button variant="primary" onClick={saveDept}>Save</Button></>}>
        <div className={styles.form}>
          <Input label="Department name" value={form.DepartmentName} onChange={(e) => setForm({ ...form, DepartmentName: e.target.value })} />
          <Select label="Academic year" options={ay.map(y => ({ value: String(y.AcademicYearID), label: y.YearName }))} value={form.AcademicYearID} onChange={(e) => setForm({ ...form, AcademicYearID: e.target.value })} />
        </div>
      </Modal>

      <Modal open={modal === "student"} onClose={() => setModal(null)} title={editId ? "Edit student" : "New student"} footer={<><Button variant="secondary" onClick={() => setModal(null)}>Cancel</Button><Button variant="primary" onClick={saveStudent}>Save</Button></>}>
        <div className={styles.form}>
          <Input label="Name" value={form.StudentName} onChange={(e) => setForm({ ...form, StudentName: e.target.value })} />
          <Input label="Email" type="email" value={form.Email} onChange={(e) => setForm({ ...form, Email: e.target.value })} />
          <Input label="Phone" value={form.Phone} onChange={(e) => setForm({ ...form, Phone: e.target.value })} />
          <Input label="Password" type="password" value={form.Password} onChange={(e) => setForm({ ...form, Password: e.target.value })} placeholder={editId ? "Leave blank to keep" : ""} />
          <Select label="Department" options={[{ value: "", label: "Select department" }, ...depts.map(d => ({ value: String(d.DepartmentID), label: d.DepartmentName }))]} value={form.DepartmentID} onChange={(e) => setForm({ ...form, DepartmentID: e.target.value })} />
          <Select label="Academic year" options={[{ value: "", label: "Select year" }, ...ay.map(y => ({ value: String(y.AcademicYearID), label: y.YearName }))]} value={form.AcademicYearID} onChange={(e) => setForm({ ...form, AcademicYearID: e.target.value })} />
        </div>
      </Modal>
    </div>
  );
}
