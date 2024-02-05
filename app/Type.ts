export type Todo = {
  id: number;
  title: string;
  memo: string | null;
  isCompleted: boolean;
};

export type Todos = Todo[];
