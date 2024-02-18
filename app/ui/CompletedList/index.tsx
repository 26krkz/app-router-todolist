import { CompletedItem } from "../CompletedItem";
import styles from "./styles.module.css";
import { Todo } from "@/app/Type";

type Todos = Todo[];

export const CompletedList = ({ todos }: { todos: Todos }) => {
  return <ul className={styles.listItems}>{todos.map((todo) => CompletedItem(todo))}</ul>;
};
