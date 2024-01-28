import { Todo } from "../../Type";
import { TodoAlertDialog } from "../RadixUI/AlertDialog";
import { TodoDialog } from "../RadixUI/Dialog";
import Link from "next/link";
import styles from "./styles.module.css";

export const TodoItem = (todo: Todo) => {
  return (
    <li className={styles.listItem}>
      <select>
        <option value="new">新規</option>
        <option value="progress">進行中</option>
        <option value="complete">完了</option>
      </select>
      <Link href={`/detail/${todo.id}`} className={styles.title}>
        {todo.title}
      </Link>
      <TodoDialog className={styles.dialogBtn} />
      <TodoAlertDialog className={styles.alertDialogBtn} />
    </li>
  );
};
