"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { IconGroup, IconUser } from "@/components/ui/Icons";
import { useToast } from "@/components/ui/Toast";
import styles from "./ProjectsView.module.css";

interface Project {
  ProjectGroupID: number;
  ProjectGroupName: string;
  ProjectTitle: string | null;
  ProjectArea: string | null;
  Status: string;
  projectType: { ProjectTypeName: string };
  guide: { StaffName: string };
}

export function ProjectsView() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const toast = useToast();

  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        toast.add("Unable to load projects.", "error");
        setLoading(false);
      });
  }, [toast]);

  const filtered = projects.filter((p) => {
    const q = search.toLowerCase();
    return (
      (p.ProjectTitle || "").toLowerCase().includes(q) ||
      (p.ProjectArea || "").toLowerCase().includes(q) ||
      (p.ProjectGroupName || "").toLowerCase().includes(q) ||
      (p.guide?.StaffName || "").toLowerCase().includes(q) ||
      (p.Status || "").toLowerCase().includes(q)
    );
  });

  function getStatusClass(status: string) {
    const value = status.trim().toLowerCase();
    if (value === "completed") return styles.statusCompleted;
    if (value === "active" || value === "in progress")
      return styles.statusActive;
    return styles.statusPlanned;
  }

  if (loading) return <p className="text-muted">Loading...</p>;

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.titleMain}>Explore Projects</h2>
          <p className={styles.subtitle}>
            Browse project ideas and open a group to view details and progress.
          </p>
        </div>
        <div className={styles.summaryPill}>
          {filtered.length} of {projects.length} projects
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Input
            placeholder="Search by title, area, group, guide, or status"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted">No projects match your search.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((p) => (
            <Link
              key={p.ProjectGroupID}
              href={`/groups/${p.ProjectGroupID}`}
              className={styles.card}
            >
              <div className={styles.cardHead}>
                <span className={styles.type}>
                  {p.projectType?.ProjectTypeName}
                </span>
                <span
                  className={`${styles.statusPill} ${getStatusClass(p.Status || "")}`}
                >
                  {p.Status || "Planned"}
                </span>
              </div>
              <h3 className={styles.title}>
                {p.ProjectTitle || "Untitled Project"}
              </h3>
              <div className={styles.area}>
                <span>Area: {p.ProjectArea || "Not specified"}</span>
              </div>
              <div className={styles.footer}>
                <div className={styles.guide}>
                  <IconUser size={14} className={styles.iconShift} />
                  {p.guide?.StaffName}
                </div>
                <div className={styles.group}>
                  <IconGroup size={14} className={styles.iconShift} />
                  {p.ProjectGroupName}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
