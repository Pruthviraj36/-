"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { IconSearch, IconUser, IconLogout } from "@/components/ui/Icons";
import styles from "./Topbar.module.css";

interface TopbarProps {
  name: string;
  role: string;
  searchPlaceholder?: string;
  onSearch?: (q: string) => void;
}

export function Topbar({
  name,
  role,
  searchPlaceholder = "Search…",
  onSearch,
}: TopbarProps) {
  const [search, setSearch] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(search);
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const roleLabel =
    role === "admin" ? "Admin" : role === "faculty" ? "Faculty" : "Student";

  return (
    <header className={styles.topbar} role="banner">
      <form className={styles.searchWrap} onSubmit={handleSearch} role="search">
        <div className={styles.search}>
          <IconSearch size={18} className={styles.searchIcon} aria-hidden />
          <input
            type="search"
            className={styles.searchInput}
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
          />
        </div>
      </form>
      <div className={styles.actions}>
        <div className={styles.menuWrap}>
          <button
            type="button"
            className={styles.profile}
            onClick={() => setProfileOpen(!profileOpen)}
            aria-haspopup="true"
            aria-expanded={profileOpen}
            aria-label="Profile menu"
          >
            <div className={styles.avatar}>
              <span className={styles.avatarFallback}>{initials || "?"}</span>
            </div>
            <span className={styles.profileInfo}>
              <span className={styles.profileName}>{name}</span>
              <span className={styles.profileRole}>{roleLabel}</span>
            </span>
          </button>
          {profileOpen && (
            <>
              <div
                role="presentation"
                className={styles.menuBackdrop}
                onClick={() => setProfileOpen(false)}
                onKeyDown={(e) => e.key === "Escape" && setProfileOpen(false)}
              />
              <div role="menu" className={styles.menu}>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => setProfileOpen(false)}
                  className={styles.menuItem}
                >
                  <IconUser size={18} />
                  Profile
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className={`${styles.menuItem} ${styles.menuItemDanger}`}
                >
                  <IconLogout size={18} />
                  Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
