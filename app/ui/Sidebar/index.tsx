import Link from "next/link";
import styles from "./style.module.css";
import { fetchTodos } from "@/app/api";
import { notFound } from "next/navigation";

export default async function Sidebar() {
  const todos = await fetchTodos();
  if (!todos) notFound();
  return (
    <ul className={styles.list}>
      {todos.map((todo) => {
        return (
          <li className={styles.listItem} key={todo.todoId}>
            <Link className={styles.link} href={`/detail/${todo.todoId}`}>
              {todo.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
