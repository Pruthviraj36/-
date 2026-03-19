"use client";

import styles from "./Skeleton.module.css";

type SkeletonVariant = "text" | "title" | "block";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: SkeletonVariant;
  className?: string;
}

export function Skeleton({
  width,
  height,
  variant = "text",
  className = "",
}: SkeletonProps) {
  const style: React.CSSProperties = {
    width,
    height,
  };

  return (
    <span
      aria-hidden
      className={`${styles.skeleton} ${styles[`skeleton--${variant}`]} ${className}`}
      style={style}
    />
  );
}
