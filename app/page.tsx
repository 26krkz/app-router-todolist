import styles from "./styles.module.css";
import { TodoItem } from "./ui/TodoItem";
import { todos } from "./Todos";
import { Form } from "./ui/Form";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Form />
        <ul>{todos.map((todo) => TodoItem(todo))}</ul>
      </main>
    </>
  );
}
