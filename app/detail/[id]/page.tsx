import Link from "next/link";
import { todos } from "@/app/Todos";

// todo: Todoの情報をidを使ってDBにfetchする。
export default function Page({ params }: { params: { id: string } }) {
  const todo = todos.find((todo) => todo.id === params.id);
  if (!todo) throw new Error("error");

  return (
    <>
      <h1>{todo.title}</h1>
      <p>メモ: {todo.memo ?? todo.memo}</p>
      <Link href={"/"}>リストに戻る</Link>
    </>
  );
}
