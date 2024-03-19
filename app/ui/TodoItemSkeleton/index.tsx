import styles from "./styles.module.css";

export const TodoItemSkeleton = () => {
  return (
    <li className={styles.listItem}>
      <div className={styles.itemInner}></div>
    </li>
  );
};
