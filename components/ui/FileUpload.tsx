"use client";

import { useRef, useState } from "react";
import { IconUpload } from "./Icons";
import styles from "./FileUpload.module.css";

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  onSelect: (files: File[]) => void | Promise<void>;
  disabled?: boolean;
  hint?: string;
}

export function FileUpload({ accept, multiple, onSelect, disabled, hint }: FileUploadProps) {
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [names, setNames] = useState<string[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setProgress(20);
    setNames(files.map((f) => f.name));
    try {
      await onSelect(files);
      setProgress(100);
    } catch {
      setProgress(0);
      setNames([]);
    }
    setTimeout(() => {
      setProgress(0);
      setNames([]);
      if (ref.current) ref.current.value = "";
    }, 600);
  };

  return (
    <div
      className={`${styles.dropZone} ${active ? styles["dropZone--active"] : ""} ${disabled ? styles["dropZone--disabled"] : ""}`}
      onDragOver={(e) => { e.preventDefault(); if (!disabled) setActive(true); }}
      onDragLeave={() => setActive(false)}
      onDrop={(e) => {
        e.preventDefault();
        setActive(false);
        if (disabled) return;
        const files = Array.from(e.dataTransfer.files);
        if (files.length) onSelect(files);
      }}
      onClick={() => !disabled && ref.current?.click()}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => e.key === "Enter" && !disabled && ref.current?.click()}
      aria-label="Upload files"
    >
      <input
        ref={ref}
        type="file"
        className={styles.input}
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        disabled={disabled}
        aria-hidden
      />
      <span style={{ margin: "0 auto var(--space-sm)", display: "block", color: "var(--color-muted)" }}>
        <IconUpload size={32} />
      </span>
      <span>Drop files here or click to browse</span>
      {hint && <div className={styles.hint}>{hint}</div>}
      {progress > 0 && (
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        </div>
      )}
      {names.length > 0 && <div className={styles.fileList}>{names.join(", ")}</div>}
    </div>
  );
}
