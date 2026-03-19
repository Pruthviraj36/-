"use client";

import styles from "./Table.module.css";
import { Skeleton } from "./Skeleton";

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
  loading?: boolean;
  loadingRows?: number;
  loadingMessage?: string;
}

export function Table<T extends object>({
  columns,
  data,
  keyField,
  onRowClick,
  selectedKeys,
  emptyMessage = "No data",
  loading = false,
  loadingRows = 6,
  loadingMessage = "Loading data...",
}: TableProps<T>) {
  const getKey = (row: T) =>
    String((row as Record<string, unknown>)[keyField as string]);
  const isInteractive = typeof onRowClick === "function";

  const skeletonRows = Array.from({ length: loadingRows });

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
          {loading ? (
            skeletonRows.map((_, rowIndex) => (
              <tr
                key={`loading-${rowIndex}`}
                className={`${styles.tr} ${styles["tr--loading"]}`}
              >
                {columns.map((col, colIndex) => (
                  <td key={`${col.key}-${colIndex}`} className={styles.td}>
                    <Skeleton
                      variant="text"
                      width={
                        colIndex === 0
                          ? "70%"
                          : colIndex === columns.length - 1
                            ? "45%"
                            : "58%"
                      }
                    />
                  </td>
                ))}
              </tr>
            ))
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={`${styles.td} ${styles.empty}`}
              >
                <div className={styles.emptyInner}>
                  <span className={styles.emptyTitle}>{emptyMessage}</span>
                </div>
              </td>
            </tr>
          ) : (
            data.map((row) => {
              const k = getKey(row);
              const sel = selectedKeys?.has(k);
              return (
                <tr
                  key={k}
                  className={`${styles.tr} ${sel ? styles["tr--selected"] : ""} ${isInteractive ? styles["tr--interactive"] : ""}`}
                  onClick={() => onRowClick?.(row)}
                  role={isInteractive ? "button" : undefined}
                  tabIndex={isInteractive ? 0 : undefined}
                  onKeyDown={
                    isInteractive
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onRowClick?.(row);
                          }
                        }
                      : undefined
                  }
                >
                  {columns.map((col) => (
                    <td key={col.key} className={styles.td}>
                      {col.render
                        ? col.render(row)
                        : ((row as Record<string, unknown>)[
                            col.key
                          ] as React.ReactNode)}
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
        {loading ? (
          skeletonRows.map((_, index) => (
            <div
              key={`mobile-loading-${index}`}
              className={`${styles.cardItem} ${styles.cardItemLoading}`}
            >
              {columns.slice(0, 3).map((col, colIndex) => (
                <div
                  key={`${col.key}-${colIndex}`}
                  className={styles.cardItem__row}
                >
                  <span className={styles.cardItem__label}>
                    {col.mobileLabel || col.header}
                  </span>
                  <span className={styles.cardItem__value}>
                    <Skeleton
                      variant="text"
                      width={colIndex === 0 ? "110px" : "92px"}
                    />
                  </span>
                </div>
              ))}
            </div>
          ))
        ) : data.length === 0 ? (
          <div className={`${styles.cardItem} ${styles.emptyCard}`}>
            <span className={styles.emptyTitle}>{emptyMessage}</span>
          </div>
        ) : (
          data.map((row) => (
            <div
              key={getKey(row)}
              className={`${styles.cardItem} ${isInteractive ? styles.cardItemInteractive : ""}`}
              onClick={() => onRowClick?.(row)}
              role={isInteractive ? "button" : undefined}
              tabIndex={isInteractive ? 0 : undefined}
              onKeyDown={
                isInteractive
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onRowClick?.(row);
                      }
                    }
                  : undefined
              }
            >
              {columns.map((col) => (
                <div key={col.key} className={styles.cardItem__row}>
                  <span className={styles.cardItem__label}>
                    {col.mobileLabel || col.header}
                  </span>
                  <span className={styles.cardItem__value}>
                    {col.render
                      ? col.render(row)
                      : ((row as Record<string, unknown>)[
                          col.key
                        ] as React.ReactNode)}
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
      {loading && <p className={styles.loadingText}>{loadingMessage}</p>}
    </div>
  );
}
