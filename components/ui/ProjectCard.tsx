"use client";

import { IconProgressRing } from "./Icons";
import { Button } from "./Button";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  guide: string;
  progress?: number;
  tags?: string[];
  status?: string;
  onView?: () => void;
  onEdit?: () => void;
}

export function ProjectCard({ title, guide, progress = 0, tags = [], status, onView, onEdit }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.progressWrap}>
          <IconProgressRing size={44} value={progress} max={100} />
        </div>
      </div>
      <div className={styles.guide}>Guide: {guide}</div>
      <div className={styles.tags}>
        {status && <span className={styles.tag}>{status}</span>}
        {tags.map((t) => (
          <span key={t} className={styles.tag}>
            {t}
          </span>
        ))}
      </div>
      <div className={styles.actions}>
        {onView && <Button variant="secondary" size="sm" onClick={onView}>View</Button>}
        {onEdit && <Button variant="ghost" size="sm" onClick={onEdit}>Edit</Button>}
      </div>
    </article>
  );
}
