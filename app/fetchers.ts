import supabase from "./supabase";
import { unstable_noStore as noStore } from "next/cache";

export const fetchTodos = async () => {
  noStore();

  try {
    const { data, error } = await supabase.from("todos").select();
    return data;
  } catch (err) {
    throw err;
  }
};
