import { Button } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { TodoItem } from "./ui/todoItem";
import { todos } from "./Todos";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>TODOLIST</h1>
      </header>
      <main>
        <form>
          <label>
            追加TODO
            <input></input>
          </label>
          <Button>add</Button>
        </form>
        <ul>{todos.map((todo) => TodoItem(todo))}</ul>
      </main>
    </>
  );
}
