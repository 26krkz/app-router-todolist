import { todos } from "@/app/Todos";
import Link from "next/link";
import styles from "./style.module.css";

export const Sidebar = () => {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => {
        return (
          <li className={styles.listItem} key={todo.id}>
            <Link className={styles.link} href={`/detail/${todo.id}`}>
              {todo.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
