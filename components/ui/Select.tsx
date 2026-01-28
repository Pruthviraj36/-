"use client";

import styles from "./Select.module.css";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  error?: string;
  options: Option[];
}

export function Select({ label, error, options, id, className = "", ...rest }: SelectProps) {
  const did = id || `select-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <div className={styles.selectWrap}>
      {label && (
        <label htmlFor={did} className={styles.label}>
          {label}
        </label>
      )}
      <select
        id={did}
        className={`${styles.select} ${error ? styles["select--error"] : ""} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${did}-err` : undefined}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <span id={`${did}-err`} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
