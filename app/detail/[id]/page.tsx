import Link from "next/link";

// todo: Todoの情報をidを使ってDBにfetchする。
export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Todo: {params.id}</h1>
      <Link href={"/"}>リストに戻る</Link>
    </>
  );
}
