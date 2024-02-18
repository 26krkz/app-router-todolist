import styles from "./styles.module.css";
import { Form } from "./ui/Form";
import { TodoList } from "./ui/TodoList";
import { fetchTodos, fetchCompletedTodos } from "./fetchers";
import { CompletedList } from "./ui/CompletedList";

export default async function Home() {
  const todos = await fetchTodos();
  const completedTodos = await fetchCompletedTodos();
  const haveCompleted = completedTodos.length !== 0;

  if (!todos) {
    return <>データの取得に失敗しました</>;
  }
  return (
    <>
      <main className={styles.main}>
        <Form />
        <TodoList todos={todos} />
        {haveCompleted && <div className={styles.completedTitle}>完了済み</div>}
        <CompletedList todos={completedTodos} />
      </main>
    </>
  );
}
