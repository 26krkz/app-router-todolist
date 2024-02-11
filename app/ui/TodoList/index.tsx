import { TodoItem } from "@/app/ui/TodoItem";
import styles from "./styles.module.css";
import { Todo } from "@/app/Type";

type Todos = Todo[];

export const TodoList = ({ todos }: { todos: Todos }) => {
  return <ul className={styles.listItems}>{todos.map((todo) => TodoItem(todo))}</ul>;
};
