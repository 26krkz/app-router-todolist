import { createClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  throw new Error("環境変数を設定してください");
}

const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export default supabase;
