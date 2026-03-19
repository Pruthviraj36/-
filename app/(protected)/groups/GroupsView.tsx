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
  const [search, setSearch] = useState("");
  const [projectTypes, setProjectTypes] = useState<
    { value: string; label: string }[]
  >([]);
  const [staff, setStaff] = useState<{ value: string; label: string }[]>([]);
  const [form, setForm] = useState({
    ProjectGroupName: "",
    ProjectTypeID: "",
    GuideStaffID: "",
    ProjectTitle: "",
  });
  const toast = useToast();

  const canEdit = role === "admin" || role === "faculty";

  useEffect(() => {
    (async () => {
      try {
        const promises: [
          Promise<unknown>,
          Promise<unknown>?,
          Promise<unknown>?,
        ] = [fetch("/api/groups").then((x) => x.json())];
        if (canEdit) {
          promises.push(
            fetch("/api/masters/project-types").then((x) => x.json()),
          );
          promises.push(fetch("/api/masters/staff").then((x) => x.json()));
        }

        const [r, pt, st] = await Promise.all(promises);
        setList(Array.isArray(r) ? r : []);
        if (canEdit) {
          const projectTypesData = Array.isArray(pt)
            ? (pt as { ProjectTypeID: number; ProjectTypeName: string }[])
            : [];
          const staffData = Array.isArray(st)
            ? (st as { StaffID: number; StaffName: string }[])
            : [];

          setProjectTypes([
            { value: "", label: "Select type" },
            ...projectTypesData.map((p) => ({
              value: String(p.ProjectTypeID),
              label: p.ProjectTypeName,
            })),
          ]);
          setStaff([
            { value: "", label: "Select guide" },
            ...staffData.map((s) => ({
              value: String(s.StaffID),
              label: s.StaffName,
            })),
          ]);
        }
      } catch {
        toast.add("Unable to load groups.", "error");
      } finally {
        setLoading(false);
      }
    })();
  }, [toast, canEdit]);

  async function create() {
    if (!form.ProjectGroupName || !form.ProjectTypeID || !form.GuideStaffID) {
      toast.add("Please provide group name, project type, and guide.", "error");
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
      setForm({
        ProjectGroupName: "",
        ProjectTypeID: "",
        GuideStaffID: "",
        ProjectTitle: "",
      });
      toast.add("Group created successfully.", "success");
    } catch (e) {
      toast.add(
        e instanceof Error ? e.message : "Unable to create group.",
        "error",
      );
    }
  }

  const q = search.trim().toLowerCase();
  const filtered = list.filter((g) => {
    if (!q) return true;
    return (
      (g.ProjectGroupName || "").toLowerCase().includes(q) ||
      (g.ProjectTitle || "").toLowerCase().includes(q) ||
      (g.projectType?.ProjectTypeName || "").toLowerCase().includes(q) ||
      (g.guide?.StaffName || "").toLowerCase().includes(q) ||
      (g.Status || "").toLowerCase().includes(q)
    );
  });

  const canCreate =
    !!form.ProjectGroupName && !!form.ProjectTypeID && !!form.GuideStaffID;

  function getStatusClass(status: string) {
    const value = status.trim().toLowerCase();
    if (value === "active" || value === "in progress")
      return styles.statusActive;
    if (value === "completed") return styles.statusCompleted;
    return styles.statusPlanned;
  }

  const cols: Column<Group>[] = [
    { key: "ProjectGroupName", header: "Group", mobileLabel: "Group" },
    {
      key: "ProjectTitle",
      header: "Project",
      render: (r) => r.ProjectTitle || "—",
      mobileLabel: "Project",
    },
    {
      key: "projectType",
      header: "Type",
      render: (r) => r.projectType?.ProjectTypeName ?? "—",
      mobileLabel: "Type",
    },
    {
      key: "guide",
      header: "Guide",
      render: (r) => r.guide?.StaffName ?? "—",
      mobileLabel: "Guide",
    },
    {
      key: "Status",
      header: "Status",
      mobileLabel: "Status",
      render: (r) => (
        <span
          className={`${styles.statusPill} ${getStatusClass(r.Status || "")}`}
        >
          {r.Status || "Planned"}
        </span>
      ),
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Manage Groups</h2>
          <p className={styles.subtitle}>
            Search and open any group to manage members, project details, and
            progress.
          </p>
        </div>
        <div className={styles.summaryPill}>
          {filtered.length} of {list.length} groups
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Input
            placeholder="Search by group, project, guide, type, or status"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={loading}
          />
        </div>
        {canEdit && (
          <Button
            variant="primary"
            icon={<IconPlus size={18} />}
            onClick={() => setModal(true)}
            disabled={loading}
          >
            Add group
          </Button>
        )}
      </div>

      <Table<Group>
        columns={cols}
        data={filtered}
        keyField="ProjectGroupID"
        onRowClick={(r) =>
          window.location.assign(`/groups/${r.ProjectGroupID}`)
        }
        loading={loading}
        loadingRows={6}
        loadingMessage="Loading groups..."
        emptyMessage={q ? "No groups match your search" : "No groups yet"}
      />
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        title="New project group"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={create} disabled={!canCreate}>
              Create
            </Button>
          </>
        }
      >
        <div className={styles.form}>
          <Input
            label="Group name"
            value={form.ProjectGroupName}
            onChange={(e) =>
              setForm((f) => ({ ...f, ProjectGroupName: e.target.value }))
            }
            required
          />
          <Select
            label="Project type"
            options={projectTypes}
            value={form.ProjectTypeID}
            onChange={(e) =>
              setForm((f) => ({ ...f, ProjectTypeID: e.target.value }))
            }
          />
          <Select
            label="Guide"
            options={staff}
            value={form.GuideStaffID}
            onChange={(e) =>
              setForm((f) => ({ ...f, GuideStaffID: e.target.value }))
            }
          />
          <Input
            label="Project title"
            value={form.ProjectTitle}
            onChange={(e) =>
              setForm((f) => ({ ...f, ProjectTitle: e.target.value }))
            }
          />
        </div>
      </Modal>
    </div>
  );
}
