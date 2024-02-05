"use client";
import { Button } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { fetchTodos } from "@/app/api";

export const Form = () => {
  return (
    <form className={styles.form} action={fetchTodos}>
      <div className={styles.inputWrapper}>
        <input placeholder="TODOを追加する" className={styles.input}></input>
        <input placeholder="メモを書く" className={styles.input}></input>
      </div>
      <Button className={styles.addBtn}>add</Button>
    </form>
  );
};
