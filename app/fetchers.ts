import supabase from "./supabase";
import { unstable_noStore as noStore } from "next/cache";

export const fetchTodos = async () => {
  noStore();

  try {
    const { data, error } = await supabase.from("todos").select().eq("isCompleted", false);
    return data;
  } catch (err) {
    throw err;
  }
};

export const fetchCompletedTodos = async () => {
  noStore();

  try {
    const { data, error } = await supabase.from("todos").select().eq("isCompleted", true);
    if (!data) {
      return [];
    }
    return data;
  } catch (err) {
    throw err;
  }
};
