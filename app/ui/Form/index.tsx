"use client";
import { Button } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { fetchTodos } from "@/app/api";

export const Form = () => {
  const handleClickAddBtn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const todos = await fetchTodos();
    console.log(todos);
  };
  return (
    <form className={styles.form}>
      <div className={styles.inputWrapper}>
        <input placeholder="TODOを追加する" className={styles.input}></input>
        <input placeholder="メモを書く" className={styles.input}></input>
      </div>
      <Button className={styles.addBtn} onClick={(e) => handleClickAddBtn(e)}>
        add
      </Button>
    </form>
  );
};
