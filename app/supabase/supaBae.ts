// import { createClient } from "@supabase/supabase-js";
import { createClient } from "./server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

// export const supaBase = createClient(supabaseUrl, supabaseKey)
  const supabase = createClient();

export async function findUser() {
   const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) console.error('Logout failed:', error);
}


export async function getMyNotes() {
  const { data, error } = await supabase
  .from("notes")
  .select("*")
return data
}



// https://supabase.com/docs/guides/database/joins-and-nesting
// func to get a single blog by its Id
// export async function getBlogById(id: number) {
// const { data, error } = await supaBase
// .from('BlogTable')
// .select()
// .eq('id', id)
// .single()

// return data
// }
