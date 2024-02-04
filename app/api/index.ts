import supabase from "./supabase";

export const fetchTodos = async () => {
  try {
    const { data, error } = await supabase.from("todos").select();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
  }
};
