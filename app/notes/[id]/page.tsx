import Link from "next/link";
import { supabase } from "@/app/supabase/supaBae";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";


// type note = {
//   title: string;
//   content: string;
//   group_color: string;
//   id: number;
//   group_id: number;
// };


export default async function singleNote({ params }: { params: { id: number } }) {
// const user = await findUser();
// console.log(user)



//  const { title, content, id } = await getNoteById(params.id);

//  async function getNoteById(id: number) {
//   const { data, error } = await supabase
//   .from("notes")
//   .select("*")
//   .eq('id', `${params.id}`)
//   .single()

//   return data
// }

const getSingleNote = async () => {
  const { data, error} = await supabase
  .from("notes")
  .select("*")
  .eq("id", `${params.id}`)
  .single()

console.log(data)
return data;
}


const { title, content } = await getSingleNote()


return (
<>
<h1>{title}</h1>
<p>{content}</p>
          <p>Word count:{content.split(" ").filter(Boolean).length}</p>
 <h4>
        Note not found <Link href={`/`}>Go Back</Link>
      </h4>
</>
)

}
