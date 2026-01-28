"use client";

import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, id, className = "", ...rest }: InputProps) {
  const did = id || `input-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <div className={styles.inputWrap}>
      {label && (
        <label htmlFor={did} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={did}
        className={`${styles.input} ${error ? styles["input--error"] : ""} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${did}-err` : undefined}
        {...rest}
      />
      {error && (
        <span id={`${did}-err`} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
