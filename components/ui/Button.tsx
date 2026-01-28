"use client";

import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", children, icon, className = "", ...rest }: ButtonProps) {
  return (
    <button
      type={rest.type ?? "button"}
      className={`${styles.btn} ${styles[`btn--${variant}`]} ${size !== "md" ? styles[`btn--${size}`] : ""} ${className}`}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
