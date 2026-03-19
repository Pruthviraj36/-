"use client";

import styles from "./Button.module.css";
import { Loader } from "./Loader";

type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  loading = false,
  disabled,
  className = "",
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={rest.type ?? "button"}
      className={`${styles.btn} ${styles[`btn--${variant}`]} ${size !== "md" ? styles[`btn--${size}`] : ""} ${loading ? styles["btn--loading"] : ""} ${className}`}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      {loading && (
        <Loader
          size={size === "lg" ? "md" : "sm"}
          tone={
            variant === "primary" || variant === "danger" ? "light" : "default"
          }
          className={styles.btnLoader}
        />
      )}
      {!loading && icon && <span className={styles.btnIcon}>{icon}</span>}
      <span className={styles.btnLabel}>{children}</span>
    </button>
  );
}
