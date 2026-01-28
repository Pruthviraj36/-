"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: React.ReactNode;
  name: string;
  role: string;
  title?: string;
  searchPlaceholder?: string;
  onSearch?: (q: string) => void;
}

export function AppShell({ children, name, role, title, searchPlaceholder, onSearch }: AppShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={styles.shell}>
      <a href="#main-content" className={styles.skip}>Skip to main content</a>
      <div className={styles.sidebarSlot}>
        <Sidebar role={role} collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      </div>
      <div className={styles.mainWrap}>
        <Topbar name={name} role={role} searchPlaceholder={searchPlaceholder} onSearch={onSearch} />
        <main className={styles.main} id="main-content">
          {title && (
            <h1 className="h2" style={{ marginBottom: "var(--space-lg)" }}>
              {title}
            </h1>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}

export { styles as appShellStyles };
