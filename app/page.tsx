import { Button } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { TodoItem } from "./ui/TodoItem";
import { todos } from "./Todos";
import { Form } from "./ui/Form";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>TODOLIST</h1>
      </header>
      <main className={styles.main}>
        <Form />
        <ul>{todos.map((todo) => TodoItem(todo))}</ul>
      </main>
    </>
  );
}
