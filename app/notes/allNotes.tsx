// import renderLinks from "../HighlightLinks";
import { getMyNotes, findUser } from "../supabase/supaBae";
import { createClient } from "../supabase/server";

import Link from "next/link";
// import SignOutBtn from "../components/SignOutBtn";

type Notes = {
  title: string;
  content: string;
  group_color: string;
  id: number;
  group_id: number;
};

export default async function AllNotes() {
  const user = await findUser();

  // console.log(JSON.stringify(user, null, 2))

  const myNotes = await getMyNotes();
  //console.log(JSON.stringify(myNotes, null, 2))

  return user ? (
    <section>
      <span className="text-3xl font-extrabold">Hello {user.email}</span>

      {/* <pre>{JSON.stringify(myNotes, null, 2)}</pre> */}

      <section>
        {myNotes?.map((note) => (
          <div key={note.id}>
            <Link href={`/notes/${note.id}`}>
              <div className={`bg-${note.group_color}`}>
                <span>{note.group_color}</span>
                <span>GROUP ID{note.group_id}</span>
                <h1>Title{note.title}</h1>
                <h2>{note.content}</h2>
              </div>
            </Link>

            {/* <SignOutBtn /> */}
          </div>
        ))}
      </section>
    </section>
  ) : (
    <h1>Sign up or Sign in </h1>
  );
}
