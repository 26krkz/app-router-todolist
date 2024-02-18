export type Todo = {
  title: string;
  memo: string | null;
  isCompleted: boolean;
  todoId: string;
};

export type Todos = Todo[];

export type ButtonColor =
  | "ruby"
  | "tomato"
  | "red"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "brown"
  | "orange"
  | "sky"
  | "mint"
  | "lime"
  | "yellow"
  | "amber"
  | "gold"
  | "bronze"
  | "gray"
  | undefined;
