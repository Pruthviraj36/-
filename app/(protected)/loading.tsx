import { Loader } from "@/components/ui/Loader";
import { Skeleton } from "@/components/ui/Skeleton";
import styles from "./loading.module.css";

export default function ProtectedLoading() {
  return (
    <div
      className={`${styles.wrap} fade-up-enter`}
      aria-live="polite"
      aria-busy="true"
    >
      <div className={styles.heading}>
        <Skeleton variant="title" className={styles.topLine} />
        <Skeleton variant="text" className={styles.subLine} />
      </div>

      <div className={styles.grid}>
        {Array.from({ length: 4 }).map((_, index) => (
          <article key={index} className={styles.card}>
            <Skeleton variant="text" width="42%" />
            <Skeleton variant="title" className={styles.value} />
            <Skeleton variant="text" className={styles.row} />
          </article>
        ))}
      </div>

      <div className={styles.footer}>
        <Loader size="sm" />
        Loading workspace data...
      </div>
    </div>
  );
}
