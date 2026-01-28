"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconDashboard,
  IconProjects,
  IconGroup,
  IconMeeting,
  IconReports,
  IconMasters,
  IconSettings,
  IconChevronRight,
} from "@/components/ui/Icons";
import styles from "./Sidebar.module.css";

export interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  group?: string;
}

export function getNavForRole(role: string): NavItem[] {
  const common = [
    { href: "/dashboard", label: "Dashboard", icon: <IconDashboard size={20} />, group: "Main" },
  ];
  if (role === "admin") {
    return [
      ...common,
      { href: "/masters", label: "Masters", icon: <IconMasters size={20} />, group: "Main" },
      { href: "/groups", label: "Project Groups", icon: <IconGroup size={20} />, group: "Projects" },
      { href: "/projects", label: "Projects", icon: <IconProjects size={20} />, group: "Projects" },
      { href: "/meetings", label: "Meetings", icon: <IconMeeting size={20} />, group: "Projects" },
      { href: "/reports", label: "Reports", icon: <IconReports size={20} />, group: "Reports" },
      { href: "/settings", label: "Settings", icon: <IconSettings size={20} />, group: "Main" },
    ];
  }
  if (role === "faculty") {
    return [
      ...common,
      { href: "/groups", label: "Project Groups", icon: <IconGroup size={20} />, group: "Projects" },
      { href: "/projects", label: "Projects", icon: <IconProjects size={20} />, group: "Projects" },
      { href: "/meetings", label: "Meetings", icon: <IconMeeting size={20} />, group: "Projects" },
      { href: "/reports", label: "Reports", icon: <IconReports size={20} />, group: "Reports" },
      { href: "/settings", label: "Settings", icon: <IconSettings size={20} />, group: "Main" },
    ];
  }
  // student
  return [
    ...common,
    { href: "/groups", label: "My Group", icon: <IconGroup size={20} />, group: "Projects" },
    { href: "/meetings", label: "Meetings", icon: <IconMeeting size={20} />, group: "Projects" },
    { href: "/settings", label: "Settings", icon: <IconSettings size={20} />, group: "Main" },
  ];
}

function groupItems(items: NavItem[]) {
  const g: Record<string, NavItem[]> = {};
  for (const it of items) {
    const k = it.group || "Main";
    if (!g[k]) g[k] = [];
    g[k].push(it);
  }
  return g;
}

interface SidebarProps {
  role: string;
  collapsed?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ role, collapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const items = getNavForRole(role);
  const groups = groupItems(items);

  return (
    <aside
      className={`${styles.sidebar} ${collapsed ? styles["sidebar--collapsed"] : styles["sidebar--expanded"]}`}
      role="navigation"
      aria-label="Main"
    >
      <div className={styles.brand}>
        <div className={styles.brandLogo} aria-hidden />
        <span className={styles.brandText}>SPMS</span>
      </div>
      <nav className={styles.nav}>
        {Object.entries(groups).map(([label, groupItems]) => (
          <div key={label} className={styles.navGroup}>
            <div className={styles.navGroupLabel}>{label}</div>
            {groupItems.map((it) => {
              const active = pathname === it.href || (it.href !== "/dashboard" && pathname.startsWith(it.href));
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={`${styles.navItem} ${active ? styles["navItem--active"] : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  <span className={styles.navItemIcon}>{it.icon}</span>
                  <span>{it.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
      <button
        type="button"
        className={styles.toggle}
        onClick={onToggle}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <span style={{ display: "inline-flex", transform: collapsed ? "none" : "rotate(180deg)" }}>
          <IconChevronRight size={20} />
        </span>
      </button>
    </aside>
  );
}
