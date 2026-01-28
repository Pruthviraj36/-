import { Suspense } from "react";
import { LoginForm } from "./LoginForm";
import styles from "./login.module.css";

function LoginFallback() {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <div className={styles.logo} />
          <h1 className={styles.title}>SPMS</h1>
          <p className={styles.sub}>Student Project Management System</p>
        </div>
        <p className={styles.sub} style={{ textAlign: "center", marginTop: "var(--space-lg)" }}>Loading…</p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginForm />
    </Suspense>
  );
}
