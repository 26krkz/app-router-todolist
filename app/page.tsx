import styles from "./styles.module.css";
import { Form } from "./ui/Form";
import { TodoList } from "./ui/TodoList";
import { TodoListSkeleton } from "./ui/TodoListSkelton";
import { CompletedList } from "./ui/CompletedList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <main className={styles.main}>
        <Form />
        <Suspense fallback={<TodoListSkeleton />}>
          <TodoList />
        </Suspense>
        <Suspense fallback={<TodoListSkeleton />}>
          <CompletedList />
        </Suspense>
      </main>
    </>
  );
}
