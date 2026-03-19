"use client";

import styles from "./Loader.module.css";

type LoaderSize = "sm" | "md" | "lg";

type LoaderTone = "default" | "light";

interface LoaderProps {
  size?: LoaderSize;
  tone?: LoaderTone;
  label?: string;
  className?: string;
}

export function Loader({
  size = "md",
  tone = "default",
  label = "Loading",
  className = "",
}: LoaderProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={`${styles.loader} ${styles[`loader--${size}`]} ${tone === "light" ? styles["loader--light"] : ""} ${className}`}
    />
  );
}
