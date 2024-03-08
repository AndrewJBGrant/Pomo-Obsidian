
import renderLinks from "../HighlightLinks";
import { getAllGroups } from "../utils/supabase/supaBae";

import { createClient } from "../utils/supabase/server";

export default async function AllNotes() {

  const supabase = createClient();

const { data: { user },
} = await supabase.auth.getUser();

async function getMyNotes() {

  const { data, error } = await supabase
  .from("notes")
  .select("*")

return data

}


const myNotes = await getMyNotes();

// const notes = await getAllGroups()

  return user ? (
    <section className="mx-auto max-w-2xl px-5 py-12">
<span className="text-3xl font-extrabold">Hello {user.email}</span>


<pre>{JSON.stringify(myNotes, null, 2)}</pre>

    </section>
  ) : (

<h1>Sign up or Sign in </h1>
  )
}
