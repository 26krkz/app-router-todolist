import { Todo } from "../Type";
import { TodoAlertDialog } from "./radixUI/AlertDialog";
import { TodoDialog } from "./radixUI/Dialog";

export const TodoItem = (todo: Todo) => {
  return (
    <li>
      <select>
        <option value="new">新規</option>
        <option value="progress">進行中</option>
        <option value="complete">完了</option>
      </select>
      {todo.title}
      <TodoDialog />
      <TodoAlertDialog />
    </li>
  );
};
