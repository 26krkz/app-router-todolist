import { CompletedItem } from "../CompletedItem";
import styles from "./styles.module.css";
import { fetchCompletedTodos } from "@/app/fetchers";

export const CompletedList = async () => {
  const todos = await fetchCompletedTodos();
  const haveCompleted = todos.length !== 0;
  return (
    <>
      {haveCompleted && <div className={styles.completedTitle}>完了済み</div>}
      <ul className={styles.listItems}>{todos.map((todo) => CompletedItem(todo))}</ul>
    </>
  );
};
