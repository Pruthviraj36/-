"use client";

import { useCallback, useEffect, useState } from "react";
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
  attendances: {
    student: { StudentID: number; StudentName: string };
    IsPresent: boolean;
    AttendanceRemarks: string | null;
  }[];
  MeetingNotes: string | null;
}

interface GroupMember {
  student: { StudentID: number; StudentName: string };
}

interface GroupWithMembers {
  ProjectGroupID: number;
  ProjectGroupName: string;
  members: GroupMember[];
}

interface StaffMaster {
  StaffID: number;
  StaffName: string;
}

type AttendanceEntry = Meeting["attendances"][number];

export function MeetingsView({ role }: { role: string }) {
  const [list, setList] = useState<Meeting[]>([]);
  const [groups, setGroups] = useState<{ value: string; label: string }[]>([]);
  const [fullGroups, setFullGroups] = useState<GroupWithMembers[]>([]);
  const [staff, setStaff] = useState<{ value: string; label: string }[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<"create" | "detail" | "edit" | null>(null);
  const [selected, setSelected] = useState<Meeting | null>(null);
  const [form, setForm] = useState({
    ProjectGroupID: "",
    GuideStaffID: "",
    MeetingDateTime: "",
    MeetingPurpose: "",
    MeetingLocation: "",
  });
  const [editForm, setEditForm] = useState({
    ProjectGroupID: "",
    GuideStaffID: "",
    MeetingDateTime: "",
    MeetingPurpose: "",
    MeetingLocation: "",
  });
  const toast = useToast();
  const canEdit = role === "admin" || role === "faculty";

  const load = useCallback(async () => {
    try {
      const [m, g, s] = await Promise.all([
        fetch("/api/meetings").then((r) => r.json()),
        fetch("/api/groups").then((r) => r.json()),
        canEdit
          ? fetch("/api/masters/staff").then((r) => r.json())
          : Promise.resolve([]),
      ]);

      const meetingsData = Array.isArray(m) ? (m as Meeting[]) : [];
      const groupsData = Array.isArray(g) ? (g as GroupWithMembers[]) : [];
      const staffData = Array.isArray(s) ? (s as StaffMaster[]) : [];

      setList(meetingsData);
      setFullGroups(groupsData);
      setGroups([
        { value: "", label: "Select group" },
        ...groupsData.map((x) => ({
          value: String(x.ProjectGroupID),
          label: x.ProjectGroupName,
        })),
      ]);
      if (canEdit) {
        setStaff([
          { value: "", label: "Select guide" },
          ...staffData.map((x) => ({
            value: String(x.StaffID),
            label: x.StaffName,
          })),
        ]);
      }
    } catch {
      toast.add("Unable to load meetings.", "error");
    } finally {
      setLoading(false);
    }
  }, [canEdit, toast]);

  useEffect(() => {
    void load();
  }, [load]);

  async function create() {
    if (!form.ProjectGroupID || !form.GuideStaffID || !form.MeetingDateTime) {
      toast.add("Please provide group, guide, and date/time.", "error");
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
      toast.add("Meeting created successfully.", "success");
      setModal(null);
      load();
    } catch {
      toast.add("Unable to create meeting.", "error");
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
      toast.add("Notes saved successfully.", "success");
      load();
    } catch {
      toast.add("Unable to save notes.", "error");
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
      toast.add("Meeting status updated successfully.", "success");
      load();
      setModal(null);
    } catch {
      toast.add("Unable to update meeting status.", "error");
    }
  }

  async function saveDetails() {
    if (!selected) return;
    if (
      !editForm.ProjectGroupID ||
      !editForm.GuideStaffID ||
      !editForm.MeetingDateTime
    ) {
      toast.add("Please provide group, guide, and date/time.", "error");
      return;
    }
    try {
      const res = await fetch(`/api/meetings/${selected.ProjectMeetingID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ProjectGroupID: Number(editForm.ProjectGroupID),
          GuideStaffID: Number(editForm.GuideStaffID),
          MeetingDateTime: editForm.MeetingDateTime,
          MeetingPurpose: editForm.MeetingPurpose || null,
          MeetingLocation: editForm.MeetingLocation || null,
        }),
      });
      if (!res.ok) throw new Error();
      toast.add("Meeting updated successfully.", "success");
      setModal("detail");
      load();
      // Update selected with new values for better UI experience
      const updated = await res.json();
      setSelected(updated);
    } catch {
      toast.add("Unable to update meeting.", "error");
    }
  }

  async function deleteMeeting() {
    if (!selected) return;
    if (!window.confirm("Are you sure you want to delete this meeting?"))
      return;
    try {
      const res = await fetch(`/api/meetings/${selected.ProjectMeetingID}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      toast.add("Meeting deleted successfully.", "success");
      setModal(null);
      load();
    } catch {
      toast.add("Unable to delete meeting.", "error");
    }
  }

  async function updateAttendance(
    studentId: number,
    isPresent: boolean,
    remarks: string | null,
  ) {
    if (!selected) return;
    try {
      const res = await fetch(
        `/api/meetings/${selected.ProjectMeetingID}/attendance`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            StudentID: studentId,
            IsPresent: isPresent,
            AttendanceRemarks: remarks,
          }),
        },
      );
      if (!res.ok) throw new Error();
      toast.add("Attendance updated successfully.", "success");
      // Update local state for immediate feedback
      setList((prev) =>
        prev.map((m) => {
          if (m.ProjectMeetingID === selected.ProjectMeetingID) {
            const exists = m.attendances.find(
              (a) => a.student.StudentID === studentId,
            );
            let newAtt: Meeting["attendances"];
            if (exists) {
              newAtt = m.attendances.map((a) =>
                a.student.StudentID === studentId
                  ? { ...a, IsPresent: isPresent, AttendanceRemarks: remarks }
                  : a,
              );
            } else {
              const group = fullGroups.find(
                (g) => g.ProjectGroupID === m.ProjectGroupID,
              );
              const student = (group?.members ?? []).find(
                (mem) => mem.student.StudentID === studentId,
              )?.student;
              if (student) {
                newAtt = [
                  ...m.attendances,
                  {
                    student: {
                      StudentID: studentId,
                      StudentName: student.StudentName,
                    },
                    IsPresent: isPresent,
                    AttendanceRemarks: remarks,
                  },
                ];
              } else {
                newAtt = m.attendances;
              }
            }
            return { ...m, attendances: newAtt };
          }
          return m;
        }),
      );
      // Also update selected
      setSelected((prev) => {
        if (!prev) return null;
        const exists = prev.attendances.find(
          (a) => a.student.StudentID === studentId,
        );
        if (exists) {
          return {
            ...prev,
            attendances: prev.attendances.map((a) =>
              a.student.StudentID === studentId
                ? { ...a, IsPresent: isPresent, AttendanceRemarks: remarks }
                : a,
            ),
          };
        } else {
          const group = fullGroups.find(
            (g) => g.ProjectGroupID === prev.ProjectGroupID,
          );
          const student = (group?.members ?? []).find(
            (mem) => mem.student.StudentID === studentId,
          )?.student;
          if (!student) return prev;
          return {
            ...prev,
            attendances: [
              ...prev.attendances,
              {
                student: {
                  StudentID: studentId,
                  StudentName: student.StudentName,
                },
                IsPresent: isPresent,
                AttendanceRemarks: remarks,
              },
            ],
          };
        }
      });
    } catch {
      toast.add("Unable to update attendance.", "error");
    }
  }

  function updateLocalRemarks(studentId: number, remarks: string) {
    if (!selected) return;
    setSelected((prev) => {
      if (!prev) return null;
      const exists = prev.attendances.find(
        (a) => a.student.StudentID === studentId,
      );
      if (exists) {
        return {
          ...prev,
          attendances: prev.attendances.map((a) =>
            a.student.StudentID === studentId
              ? { ...a, AttendanceRemarks: remarks }
              : a,
          ),
        };
      } else {
        const group = fullGroups.find(
          (g) => g.ProjectGroupID === prev.ProjectGroupID,
        );
        const student = (group?.members ?? []).find(
          (mem) => mem.student.StudentID === studentId,
        )?.student;
        if (!student) return prev;
        return {
          ...prev,
          attendances: [
            ...prev.attendances,
            {
              student: {
                StudentID: studentId,
                StudentName: student.StudentName,
              },
              IsPresent: false,
              AttendanceRemarks: remarks,
            },
          ],
        };
      }
    });
  }

  const q = search.trim().toLowerCase();
  const filtered = list.filter((m) => {
    if (!q) return true;
    return (
      format(new Date(m.MeetingDateTime), "dd MMM yyyy, HH:mm")
        .toLowerCase()
        .includes(q) ||
      (m.projectGroup?.ProjectGroupName || "").toLowerCase().includes(q) ||
      (m.guide?.StaffName || "").toLowerCase().includes(q) ||
      (m.MeetingPurpose || "").toLowerCase().includes(q) ||
      (m.MeetingStatus || "").toLowerCase().includes(q)
    );
  });

  const canCreate =
    !!form.ProjectGroupID && !!form.GuideStaffID && !!form.MeetingDateTime;

  function getStatusClass(status: string) {
    const value = status.trim().toLowerCase();
    if (value === "completed") return styles.statusCompleted;
    if (value === "cancelled") return styles.statusCancelled;
    return styles.statusScheduled;
  }

  const cols: Column<Meeting>[] = [
    {
      key: "MeetingDateTime",
      header: "Date & time",
      render: (r) => format(new Date(r.MeetingDateTime), "dd MMM yyyy, HH:mm"),
      mobileLabel: "Date",
    },
    {
      key: "projectGroup",
      header: "Group",
      render: (r) => r.projectGroup?.ProjectGroupName ?? "—",
      mobileLabel: "Group",
    },
    {
      key: "guide",
      header: "Guide",
      render: (r) => r.guide?.StaffName ?? "—",
      mobileLabel: "Guide",
    },
    {
      key: "MeetingPurpose",
      header: "Purpose",
      render: (r) => r.MeetingPurpose || "—",
      mobileLabel: "Purpose",
    },
    {
      key: "MeetingStatus",
      header: "Status",
      mobileLabel: "Status",
      render: (r) => (
        <span
          className={`${styles.statusPill} ${getStatusClass(r.MeetingStatus || "")}`}
        >
          {r.MeetingStatus || "Scheduled"}
        </span>
      ),
    },
  ];

  // Merge group members with attendance
  const attendanceList = selected
    ? (() => {
        const group = fullGroups.find(
          (g) => g.ProjectGroupID === selected.ProjectGroupID,
        );
        if (!group) return selected.attendances;
        return group.members.map((m) => {
          const att = selected.attendances.find(
            (a) => a.student.StudentID === m.student.StudentID,
          );
          return (
            att || {
              student: m.student,
              IsPresent: false,
              AttendanceRemarks: null,
            }
          );
        });
      })()
    : [];

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Manage Meetings</h2>
          <p className={styles.subtitle}>
            Track schedules, update attendance, and keep notes in one place.
          </p>
        </div>
        <div className={styles.summaryPill}>
          {filtered.length} of {list.length} meetings
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Input
            placeholder="Search by group, guide, purpose, status, or date"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={loading}
          />
        </div>
        {canEdit && (
          <Button
            variant="primary"
            icon={<IconPlus size={18} />}
            onClick={() => setModal("create")}
            disabled={loading}
          >
            Add meeting
          </Button>
        )}
      </div>

      <Table<Meeting>
        columns={cols}
        data={filtered}
        keyField="ProjectMeetingID"
        emptyMessage={q ? "No meetings match your search" : "No meetings yet"}
        loading={loading}
        loadingRows={6}
        loadingMessage="Loading meetings..."
        onRowClick={(r) => {
          setSelected(r);
          setModal("detail");
        }}
      />

      <Modal
        open={modal === "create"}
        onClose={() => setModal(null)}
        title="New meeting"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModal(null)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={create} disabled={!canCreate}>
              Create
            </Button>
          </>
        }
      >
        <div className={styles.form}>
          <Select
            label="Project group"
            options={groups}
            value={form.ProjectGroupID}
            onChange={(e) =>
              setForm((f) => ({ ...f, ProjectGroupID: e.target.value }))
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
            label="Date & time"
            type="datetime-local"
            value={form.MeetingDateTime}
            onChange={(e) =>
              setForm((f) => ({ ...f, MeetingDateTime: e.target.value }))
            }
          />
          <Input
            label="Purpose"
            value={form.MeetingPurpose}
            onChange={(e) =>
              setForm((f) => ({ ...f, MeetingPurpose: e.target.value }))
            }
          />
          <Input
            label="Location"
            value={form.MeetingLocation}
            onChange={(e) =>
              setForm((f) => ({ ...f, MeetingLocation: e.target.value }))
            }
          />
        </div>
      </Modal>

      <Modal
        open={modal === "detail" && !!selected}
        onClose={() => setModal(null)}
        title="Meeting Details"
        footer={
          <Button variant="secondary" onClick={() => setModal(null)}>
            Close
          </Button>
        }
      >
        {selected && (
          <div className={styles.detail}>
            <p>
              <strong>Group:</strong> {selected.projectGroup.ProjectGroupName}
            </p>
            <p>
              <strong>Guide:</strong> {selected.guide.StaffName}
            </p>
            <p>
              <strong>Time:</strong>{" "}
              {format(new Date(selected.MeetingDateTime), "dd MMM yyyy, HH:mm")}
            </p>
            <p>
              <strong>Purpose:</strong> {selected.MeetingPurpose || "—"}
            </p>
            <p>
              <strong>Status:</strong> {selected.MeetingStatus}
            </p>

            <div className={styles.notesSection}>
              <label className={styles.sectionLabel}>Meeting Notes</label>
              {canEdit ? (
                <div className={styles.notesEditor}>
                  <textarea
                    className={styles.textarea}
                    value={selected.MeetingNotes || ""}
                    onChange={(e) =>
                      setSelected((prev) =>
                        prev ? { ...prev, MeetingNotes: e.target.value } : null,
                      )
                    }
                    placeholder="Add notes..."
                  />
                  <Button
                    variant="secondary"
                    onClick={saveNotes}
                    className={styles.notesSaveButton}
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <p className={styles.notesReadOnly}>
                  {selected.MeetingNotes || "No notes."}
                </p>
              )}
            </div>

            {canEdit && (
              <div className={styles.actions}>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setEditForm({
                      ProjectGroupID: String(selected.ProjectGroupID),
                      GuideStaffID: String(selected.GuideStaffID),
                      MeetingDateTime: format(
                        new Date(selected.MeetingDateTime),
                        "yyyy-MM-dd'T'HH:mm",
                      ),
                      MeetingPurpose: selected.MeetingPurpose || "",
                      MeetingLocation: selected.MeetingLocation || "",
                    });
                    setModal("edit");
                  }}
                >
                  Edit Details
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => updateStatus("Completed")}
                >
                  Mark Completed
                </Button>
                <Button variant="danger" size="sm" onClick={deleteMeeting}>
                  Delete Meeting
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => updateStatus("Cancelled")}
                >
                  Cancel Meeting
                </Button>
              </div>
            )}

            <div className={styles.attendance}>
              <h3 className="h4">Attendance</h3>
              {attendanceList.length === 0 ? (
                <p className="text-small text-muted">No members in group.</p>
              ) : (
                <ul className={styles.attList}>
                  {attendanceList.map((a: AttendanceEntry) => (
                    <li key={a.student.StudentID} className={styles.attItem}>
                      <div className={styles.attTop}>
                        <span>{a.student.StudentName}</span>
                        {canEdit ? (
                          <button
                            type="button"
                            onClick={() =>
                              updateAttendance(
                                a.student.StudentID,
                                !a.IsPresent,
                                a.AttendanceRemarks,
                              )
                            }
                            className={`${styles.attToggle} ${a.IsPresent ? styles.attTogglePresent : ""}`}
                          >
                            {a.IsPresent ? "Present" : "Absent"}
                          </button>
                        ) : (
                          <span
                            className={`${styles.attStatus} ${a.IsPresent ? styles.attStatusPresent : styles.attStatusAbsent}`}
                          >
                            {a.IsPresent ? "Present" : "Absent"}
                          </span>
                        )}
                      </div>
                      {canEdit ? (
                        <input
                          type="text"
                          placeholder="Remarks..."
                          value={a.AttendanceRemarks || ""}
                          onChange={(e) =>
                            updateLocalRemarks(
                              a.student.StudentID,
                              e.target.value,
                            )
                          }
                          onBlur={(e) =>
                            updateAttendance(
                              a.student.StudentID,
                              a.IsPresent,
                              e.target.value,
                            )
                          }
                          className={styles.remarksInput}
                        />
                      ) : (
                        a.AttendanceRemarks && (
                          <span className={`${styles.remarksText} text-muted`}>
                            {a.AttendanceRemarks}
                          </span>
                        )
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </Modal>
      <Modal
        open={modal === "edit" && !!selected}
        onClose={() => setModal("detail")}
        title="Edit Meeting"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModal("detail")}>
              Cancel
            </Button>
            <Button variant="primary" onClick={saveDetails}>
              Save changes
            </Button>
          </>
        }
      >
        <div className={styles.form}>
          <Select
            label="Project group"
            options={groups}
            value={editForm.ProjectGroupID}
            onChange={(e) =>
              setEditForm((f) => ({ ...f, ProjectGroupID: e.target.value }))
            }
          />
          <Select
            label="Guide"
            options={staff}
            value={editForm.GuideStaffID}
            onChange={(e) =>
              setEditForm((f) => ({ ...f, GuideStaffID: e.target.value }))
            }
          />
          <Input
            label="Date & time"
            type="datetime-local"
            value={editForm.MeetingDateTime}
            onChange={(e) =>
              setEditForm((f) => ({ ...f, MeetingDateTime: e.target.value }))
            }
          />
          <Input
            label="Purpose"
            value={editForm.MeetingPurpose}
            onChange={(e) =>
              setEditForm((f) => ({ ...f, MeetingPurpose: e.target.value }))
            }
          />
          <Input
            label="Location"
            value={editForm.MeetingLocation}
            onChange={(e) =>
              setEditForm((f) => ({ ...f, MeetingLocation: e.target.value }))
            }
          />
        </div>
      </Modal>
    </div>
  );
}
