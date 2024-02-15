"use server";
import supabase from "./supabase";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";

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
  const todoId = nanoid();

  try {
    const { error } = await supabase.from("todos").insert({ title, isCompleted: false, memo, todoId });
    console.log("Todoの追加に成功しました。");
  } catch (err) {
    throw err;
  }

  revalidatePath("/");
  redirect("/");
};

export const editTodos = async (todoId: string, formData: FormData) => {
  const title = formData.get("title") as string;
  const memo = formData.get("memo") as string | null;

  try {
    const { data, error } = await supabase.from("todos").update({ title, memo }).eq("todoId", todoId).select();
    if (error) {
      console.error(error);
    } else {
      console.log("Todoが編集できました。");
    }
  } catch (err) {
    throw err;
  }

  revalidatePath("/");
  redirect("/");
};

export const deleteTodos = async (todoId: string) => {
  try {
    const { error } = await supabase.from("todos").delete().eq("todoId", todoId);
    if (error) {
      console.log(error);
    } else {
      console.log("正常にTodoを削除できました。");
    }
  } catch (err) {
    throw err;
  }

  revalidatePath("/");
  redirect("/");
};
