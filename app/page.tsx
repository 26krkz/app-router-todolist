import styles from "./styles.module.css";
import { TodoItem } from "./ui/TodoItem";
import { Form } from "./ui/Form";
import { fetchTodos } from "./api";

export default async function Home() {
  const todos = await fetchTodos();
  if (!todos) {
    return <>データの取得に失敗</>;
  }
  return (
    <>
      <main className={styles.main}>
        <Form />
        <ul className={styles.listItems}>{todos.map((todo) => TodoItem(todo))}</ul>
      </main>
    </>
  );
}
