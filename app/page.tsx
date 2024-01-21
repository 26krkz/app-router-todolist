import { Button } from "@radix-ui/themes";
import { TodoDialog } from "./ui/dialog";
import { TodoAlertDialog } from "./ui/alertDialog";

export default function Home() {
  return (
    <main>
      <form>
        <label>
          追加TODO
          <input></input>
        </label>
        <Button>add</Button>
      </form>
      <ul>
        <li>
          <select>
            <option value="new">新規</option>
            <option value="progress">進行中</option>
            <option value="complete">完了</option>
          </select>
          sample
          <TodoDialog />
          <TodoAlertDialog />
        </li>
      </ul>
    </main>
  );
}
