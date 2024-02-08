"use client";
import Link from "next/link";
import styles from "./style.module.css";
import { Todo } from "@/app/Type";
import { usePathname } from "next/navigation";

export const SideBarLink = ({ todo }: { todo: Todo }) => {
  const pathName = usePathname();
  // ページのidとtodoのidが同じ場合活性状態にする
  const disabled = `/detail/${todo.todoId}` === pathName;
  return (
    <Link className={disabled ? styles.disabledLink : styles.link} href={`/detail/${todo.todoId}`}>
      {todo.title}
    </Link>
  );
};
