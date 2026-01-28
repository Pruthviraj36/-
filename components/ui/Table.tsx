"use client";

import styles from "./Table.module.css";

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
  mobileLabel?: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
  onRowClick?: (row: T) => void;
  selectedKeys?: Set<string>;
  emptyMessage?: string;
}

export function Table<T extends object>({
  columns,
  data,
  keyField,
  onRowClick,
  selectedKeys,
  emptyMessage = "No data",
}: TableProps<T>) {
  const getKey = (row: T) => String((row as Record<string, unknown>)[keyField as string]);

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={styles.th}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className={styles.td} style={{ textAlign: "center", color: "var(--color-muted)" }}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => {
              const k = getKey(row);
              const sel = selectedKeys?.has(k);
              return (
                <tr
                  key={k}
                  className={`${styles.tr} ${sel ? styles["tr--selected"] : ""}`}
                  onClick={() => onRowClick?.(row)}
                  style={onRowClick ? { cursor: "pointer" } : undefined}
                >
                  {columns.map((col) => (
                    <td key={col.key} className={styles.td}>
                      {col.render ? col.render(row) : ((row as Record<string, unknown>)[col.key] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {/* Mobile card list */}
      <div className={styles.cardList}>
        {data.length === 0 ? (
          <div className={styles.cardItem} style={{ textAlign: "center", color: "var(--color-muted)" }}>
            {emptyMessage}
          </div>
        ) : (
          data.map((row) => (
            <div
              key={getKey(row)}
              className={styles.cardItem}
              onClick={() => onRowClick?.(row)}
              style={onRowClick ? { cursor: "pointer" } : undefined}
              role={onRowClick ? "button" : undefined}
              tabIndex={onRowClick ? 0 : undefined}
              onKeyDown={onRowClick ? (e) => e.key === "Enter" && onRowClick(row) : undefined}
            >
              {columns.map((col) => (
                <div key={col.key} className={styles.cardItem__row}>
                  <span className={styles.cardItem__label}>{col.mobileLabel || col.header}</span>
                  <span className={styles.cardItem__value}>
                    {col.render ? col.render(row) : ((row as Record<string, unknown>)[col.key] as React.ReactNode)}
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
