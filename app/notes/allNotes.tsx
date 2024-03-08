// import renderLinks from "../HighlightLinks";
//import { getAllGroups } from "../utils/supabase/supaBae";
//import { createClient } from "../utils/supabase/server";

import Link from "next/link";


export default async function AllNotes() {
  return (
    <article>
      <h1>Here the users notes will be laid out</h1>

<Link href="/notes/1">
SEE NOTES
</Link>


    </article>
  );
}

//   const supabase = createClient();
// const { data: { user },
// } = await supabase.auth.getUser();
// async function getMyNotes() {
//   const { data, error } = await supabase
//   .from("notes")
//   .select("*")
// return data
// }
// const myNotes = await getMyNotes();
// // const notes = await getAllGroups()

//   return user ? (
//     <section>
// <span className="text-3xl font-extrabold">Hello {user.email}</span>

// <pre>{JSON.stringify(myNotes, null, 2)}</pre>

//     </section>
//   ) : (

// <h1>Sign up or Sign in </h1>
//   )
// }
