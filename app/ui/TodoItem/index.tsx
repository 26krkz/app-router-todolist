import { Todo } from "@/app/Type";
import TodoAlertDialog from "@/app/ui/RadixUI/AlertDialog";
import { TodoDialog } from "@/app/ui/RadixUI/Dialog";
import Link from "next/link";
import styles from "./styles.module.css";
import { TodoSelelct } from "@/app/ui/RadixUI/Select";

export const TodoItem = (todo: Todo) => {
  return (
    <li className={styles.listItem}>
      <TodoSelelct />
      <Link href={`/detail/${todo.id}`} className={styles.title}>
        {todo.title}
      </Link>
      <TodoDialog className={styles.dialogBtn} />
      <TodoAlertDialog className={styles.alertDialogBtn} />
    </li>
  );
};
