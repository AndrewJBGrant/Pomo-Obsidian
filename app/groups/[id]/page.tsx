import Link from "next/link";
import { supabase } from "@/app/supabase/supaBae";




export default async function singleNote({ params }: { params: { id: number } }) {





//  const { title, content, id } = await getNoteById(params.id);

//  async function getNoteById(id: number) {
//   const { data, error } = await supabase
//   .from("notes")
//   .select("*")
//   .eq('id', `${params.id}`)
//   .single()

//   return data
// }

const getSingleGroup = async () => {
  const { data, error} = await (await supabase)
  .from("groups")
  .select("*")
  .eq("id", `${params.id}`)
  .single()

// console.log(data)
return data;
}


const { title, color } = await getSingleGroup()


return (
<>
<h1>{title}</h1>
<p> Color:{color}</p>
          {/* <p>Word count:{content.split(" ").filter(Boolean).length}</p> */}
 <h4>
        Note not found <Link href={`/`}>Go Back</Link>
      </h4>
</>
)

}
