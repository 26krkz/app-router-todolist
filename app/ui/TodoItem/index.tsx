import { Todo } from "@/app/Type";
import { TodoAlertDialog, TodoDialog } from "../RadixUI";
import Link from "next/link";
import styles from "./styles.module.css";
import { deleteTodos, switchIsCompleted } from "@/app/actions";

export const TodoItem = (todo: Todo) => {
  const { title, todoId, isCompleted } = todo;
  return (
    <li className={styles.listItem} key={todoId}>
      <TodoAlertDialog
        className={styles.alertDialogBtn}
        contents={{
          buttonColor: "cyan",
          triggerText: "完了",
          title: "TODOの完了",
          description: "TODOを完了状態にしてもよろしいですか？",
          actionText: "完了にする",
          handleClickAction: async () => {
            "use server";
            await switchIsCompleted({ todoId, isCompleted });
          },
        }}
      />
      <Link href={`/detail/${todoId}`} className={isCompleted ? styles.isCompletedTitle : styles.title}>
        {title}
      </Link>
      <TodoDialog className={styles.dialogBtn} todo={todo} />
      <TodoAlertDialog
        className={styles.alertDialogBtn}
        contents={{
          buttonColor: "crimson",
          triggerText: "削除",
          title: "TODOの削除",
          description: "TODOを削除してもよろしいですか？",
          actionText: "削除する",
          handleClickAction: async () => {
            "use server";
            await deleteTodos(todoId);
          },
        }}
      />
    </li>
  );
};
