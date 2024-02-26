import { TodoItem } from "@/app/ui/TodoItem";
import styles from "./styles.module.css";
import { Todo } from "@/app/Type";
import { fetchTodos } from "@/app/fetchers";

type Todos = Todo[];

export const TodoList = async () => {
  const todos = await fetchTodos();
  if (todos.length === 0) {
    <>取得されたTODOは0件です。</>;
  }
  return <ul className={styles.listItems}>{todos.map((todo) => TodoItem(todo))}</ul>;
};
