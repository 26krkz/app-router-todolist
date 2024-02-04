import { createClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("環境変数を設定してください");
}

const supabase = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default supabase;
