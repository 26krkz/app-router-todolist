import { Todo } from "@/app/Type";
import { TodoAlertDialog, TodoDialog, TodoSelelct } from "../RadixUI";
import Link from "next/link";
import styles from "./styles.module.css";

export const TodoItem = (todo: Todo) => {
  return (
    <li className={styles.listItem} key={todo.todoId}>
      <TodoSelelct />
      <Link href={`/detail/${todo.todoId}`} className={styles.title}>
        {todo.title}
      </Link>
      <TodoDialog className={styles.dialogBtn} todo={todo} />
      <TodoAlertDialog className={styles.alertDialogBtn} todo={todo} />
    </li>
  );
};
