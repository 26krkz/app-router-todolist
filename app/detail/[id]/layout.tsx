import styles from "./styles.module.css";
import Sidebar from "@/app/ui/Sidebar";

export default function detailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.detailWrapper}>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
