export type Todo = {
  id: string;
  title: string;
  memo: string | null;
  isCompleted: boolean;
};

export type Todos = Todo[];
