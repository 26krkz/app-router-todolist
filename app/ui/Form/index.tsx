import { Button } from "@radix-ui/themes";
import styles from "./styles.module.css";

export const Form = () => {
  return (
    <form className={styles.form}>
      <input placeholder="TODOを追加する" className={styles.input}></input>
      <Button className={styles.addBtn}>add</Button>
    </form>
  );
};
