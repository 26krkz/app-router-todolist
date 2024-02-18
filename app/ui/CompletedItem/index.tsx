import { Todo } from "@/app/Type";
import { TodoAlertDialog } from "../RadixUI";
import styles from "./styles.module.css";
import { switchIsCompleted } from "@/app/actions";

export const CompletedItem = (todo: Todo) => {
  const { title, todoId, isCompleted } = todo;
  return (
    <li className={styles.listItem} key={todoId}>
      <TodoAlertDialog
        className={styles.alertDialogBtn}
        contents={{
          buttonColor: "crimson",
          triggerText: "元に戻す",
          title: "TODOを未完了を戻す",
          description: "TODOを完了状態から元に戻しても良いですか？",
          actionText: "元に戻す",
          handleClickAction: async () => {
            "use server";
            await switchIsCompleted({ todoId, isCompleted });
          },
        }}
      />
      <div className={styles.title}>{title}</div>
    </li>
  );
};
