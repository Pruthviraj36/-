"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import styles from "./Toast.module.css";

type ToastType = "info" | "success" | "error" | "warning";

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastActions {
  add: (message: string, type?: ToastType) => void;
  remove: (id: string) => void;
}

const ToastStateContext = createContext<ToastItem[]>([]);
const ToastActionsContext = createContext<ToastActions | null>(null);

export function useToast() {
  const actions = useContext(ToastActionsContext);
  if (!actions) throw new Error("useToast must be used within ToastProvider");
  return actions;
}

export function useToasts() {
  return useContext(ToastStateContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const add = useCallback((message: string, type: ToastType = "info") => {
    const id = `t-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 4000);
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((p) => p.filter((t) => t.id !== id));
  }, []);

  const actions = useMemo(() => ({ add, remove }), [add, remove]);

  return (
    <ToastActionsContext.Provider value={actions}>
      <ToastStateContext.Provider value={toasts}>
        {children}
        <div className={styles.list} role="region" aria-label="Notifications">
          {toasts.map((t) => (
            <div
              key={t.id}
              className={`${styles.toast} ${styles[`toast--${t.type}`]}`}
              role="alert"
            >
              <p className={styles.message}>{t.message}</p>
              <button
                type="button"
                onClick={() => remove(t.id)}
                className={styles.close}
                aria-label="Dismiss"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </ToastStateContext.Provider>
    </ToastActionsContext.Provider>
  );
}
