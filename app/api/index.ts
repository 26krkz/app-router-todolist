"use server";
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

export const createTodos = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const memo = formData.get("memo") as string | null;
  try {
    const { error } = await supabase.from("todos").insert({ title: title, isCompleted: false, memo: memo });
    if (error) console.log(error);
  } catch (err) {
    throw err;
  }
};
