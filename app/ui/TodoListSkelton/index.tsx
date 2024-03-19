import { TodoItemSkeleton } from "../TodoItemSkeleton";
import styles from "./styles.module.css";

export const TodoListSkeleton = () => {
  return (
    <ul className={styles.listItems}>
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
    </ul>
  );
};
