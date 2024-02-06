export type Todo = {
  title: string;
  memo: string | null;
  isCompleted: boolean;
  todoId: string;
};

export type Todos = Todo[];
