"use client";
import { Button } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { createTodos } from "@/app/actions";

export const Form = () => {
  return (
    <form className={styles.form} action={createTodos}>
      <div className={styles.inputWrapper}>
        <input name="title" placeholder="TODOを追加する" className={styles.input}></input>
        <input name="memo" placeholder="メモを書く" className={styles.input}></input>
      </div>
      <Button className={styles.addBtn} type="submit">
        add
      </Button>
    </form>
  );
};
