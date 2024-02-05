import { Todo } from "@/app/Type";
import { TodoAlertDialog, TodoDialog, TodoSelelct } from "../RadixUI";
import Link from "next/link";
import styles from "./styles.module.css";

export const TodoItem = (todo: Todo) => {
  return (
    <li className={styles.listItem} key={todo.id}>
      <TodoSelelct />
      <Link href={`/detail/${todo.id}`} className={styles.title}>
        {todo.title}
      </Link>
      <TodoDialog className={styles.dialogBtn} />
      <TodoAlertDialog className={styles.alertDialogBtn} />
    </li>
  );
};
