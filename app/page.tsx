import styles from "./styles.module.css";
import { Form } from "./ui/Form";
import { TodoList } from "./ui/TodoList";
import { fetchTodos } from "./fetchers";

export default async function Home() {
  const todos = await fetchTodos();
  if (!todos) {
    return <>データの取得に失敗しました</>;
  }
  return (
    <>
      <main className={styles.main}>
        <Form />
        <TodoList todos={todos} />
      </main>
    </>
  );
}
