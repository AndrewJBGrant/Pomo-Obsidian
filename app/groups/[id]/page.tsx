import Link from "next/link";
import { supabase } from "@/app/supabase/supaBae";




export default async function singleGroup({ params }: { params: { id: number } }) {





// const { title, content, id } = await getNoteById(NoteId);

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

const { title, color, id } = await getSingleGroup()


const groupsNotes = async () => {
const { data, error } = await (await supabase)
  .from('notes')
      .select('*')
      .eq('group_id', id);

      // console.log(data)
      return data

}

const myNotes = await groupsNotes()

return (
<section className="page-layout">
<h1 className="bg-[color]">{title}</h1>
<p> Color:{color}</p>
          {/* <p>Word count:{content.split(" ").filter(Boolean).length}</p> */}
 <h4>
         <Link href={`/`}>Go Back</Link>
      </h4>

     {myNotes?.map((note) => (
          <div className="m-8 p-4" key={note.id}>
            <Link href={`/notes/${note.id}`}>
              <div className={`bg-[note.group_color]`}>
                <span>{note.group_color}</span>

                <span>GROUP ID{note.group_id}</span>
                <h1>Title{note.title}</h1>
              </div>
            </Link>

            {/* <SignOutBtn /> */}
          </div>
        ))}


</section>
)

}
