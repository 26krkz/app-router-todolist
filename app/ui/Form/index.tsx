"use client";
import { Button } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { createTodos } from "@/app/actions";
import { useForm } from "./useForm";

export const Form = () => {
  const { title, memo, handleSubmit, handleChangeTitle, handleChangeMemo } = useForm();

  return (
    <form className={styles.form} action={createTodos} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input value={title} onChange={(e) => handleChangeTitle(e)} name="title" placeholder="TODOを追加する" className={styles.input}></input>
        <input value={memo} onChange={(e) => handleChangeMemo(e)} name="memo" placeholder="メモを書く" className={styles.input}></input>
      </div>
      <Button className={styles.addBtn} type="submit">
        add
      </Button>
    </form>
  );
};
