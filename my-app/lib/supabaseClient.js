import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hqqvtakmyvucbyjdoulf.supabase.co";
const supabaseAnonKey = "sb_publishable_EemflC_wOjJDw1MDD5Wicg_N9akN1eY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);