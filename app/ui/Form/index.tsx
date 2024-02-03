import { Button } from "@radix-ui/themes";
import styles from "./styles.module.css";

export const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputWrapper}>
        <input placeholder="TODOを追加する" className={styles.input}></input>
        <input placeholder="メモを書く" className={styles.input}></input>
      </div>
      <Button className={styles.addBtn}>add</Button>
    </form>
  );
};
