import Link from "next/link";
import styles from "./style.module.css";
import { fetchTodos } from "@/app/actions";
import { notFound } from "next/navigation";
import { SideBarLink } from "./SideBarLink";

export default async function Sidebar() {
  const todos = await fetchTodos();
  if (!todos) notFound();
  return (
    <ul className={styles.list}>
      {todos.map((todo) => {
        return (
          <li className={styles.listItem} key={todo.todoId}>
            <SideBarLink todo={todo} />
          </li>
        );
      })}
    </ul>
  );
}
