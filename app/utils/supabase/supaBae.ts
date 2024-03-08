import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supaBase = createClient(supabaseUrl, supabaseKey)


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

// func to get all blog posts and sort
export async function getAllGroups() {
  const { data, error } = await supaBase
  .from('notes')
  .select("*")


  console.log("Data here:", data)
  return data

}
