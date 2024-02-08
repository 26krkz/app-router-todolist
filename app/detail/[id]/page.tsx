import Link from "next/link";
import { fetchTodos } from "@/app/actions";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const todos = await fetchTodos();
  if (!todos) notFound();
  const todo = todos.find((todo) => todo.todoId === params.id);
  if (!todo) {
    return <h1>Todoリストに存在しないTodoの詳細を参照している可能性があります。</h1>;
  }

  return (
    <>
      <h1>{todo.title}</h1>
      <p>メモ: {todo.memo ?? todo.memo}</p>
      <Link href={"/"}>リストに戻る</Link>
    </>
  );
}
