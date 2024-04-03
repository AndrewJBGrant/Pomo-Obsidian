import { redirect } from "next/navigation";

import { createClient } from "../supabase/server";
import { getMyNotes } from "../supabase/supaBae";

import { cookies } from 'next/headers'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await (await supabase).auth.getUser()
  if (error || !data?.user) {
    redirect('/app/error')
  }

    // const myNotes = await getMyNotes();

      const cookieStore = cookies()
  return cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>

      <h1>Hello {data.user.email}</h1>
    </div>
  ))



}


//   return(
// <section className="mx-auto max-w-2xl px-5 py-12">

//   <p>Hello {data.user.email}!!!</p>

//     <pre>{JSON.stringify(myNotes, null, 2)}</pre>

// </section>
//   )
