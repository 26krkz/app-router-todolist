import supabase from "./supabase";
import { unstable_noStore as noStore } from "next/cache";
import type { Todos } from "./Type";

export const fetchTodos = () => {
  return new Promise<Todos>((resolve, reject) => {
    setTimeout(async () => {
      noStore();

      try {
        const { data, error } = await supabase.from("todos").select().eq("isCompleted", false);
        if (!data) {
          resolve([]);
        } else {
          resolve(data);
        }
      } catch (err) {
        reject(err);
      }
    }, 1000);
  });
};

export const fetchCompletedTodos = () => {
  return new Promise<Todos>((resolve, reject) => {
    setTimeout(async () => {
      noStore();

      try {
        const { data, error } = await supabase.from("todos").select().eq("isCompleted", true);
        if (!data) {
          resolve([]);
        } else {
          resolve(data);
        }
      } catch (err) {
        reject(err);
      }
    }, 1000);
  });
};
