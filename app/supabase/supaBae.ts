 //import { createClient } from "@supabase/supabase-js";
import { createClient } from "./server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

// export const supabase = createClient(supabaseUrl, supabaseKey)
 export const supabase = createClient();

export async function findUser() {
   const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return user;
}

export async function signOut() {
  const { error } = await (await supabase).auth.signOut();
  if (error) console.error('Logout failed:', error);
}


export async function getMyNotes() {
  const { data, error } = await (await supabase)
  .from("notes")
  .select("*")
return data
}


export async function getMyGroups() {
  const { data, error } = await (await supabase)
  .from("groups")
  .select("*")
return data
}

// export async function getNoteById(id: number) {
//   const { data, error } = await supabase
//   .from("notes")
//   .select("*")
//   .eq('id', `${params.id}`)
//   .single()

//   return data
// }



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
