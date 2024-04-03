// import { createClient } from "../utils/supabase/server";

import BackBtn from "../components/BackBtn";
import SideBarBtn from "../components/SideBarBtn";
import { findUser, getMyGroups } from "../supabase/supaBae";
import Link from "next/link";

export default async function AllGroups() {

const user = await findUser();

const myGroups = await getMyGroups();



  return user ? (

    <div className="mx-auto max-w-2xl px-5 py-12">
      <header className="mb-14 flex flex-row place-content-between">
        <span>
          <BackBtn />
        </span>
        <span>New Group?</span>
      </header>

      <h2>Hello {user.email}</h2>
      {myGroups?.map((group) => (
<div key={group.id}>
  <h1>{group.id}</h1>
   <Link href={`/groups/${group.id}`}>Go To Group</Link>
  <span>{group.color}</span>
  <span>{group.title}</span>
</div>
      )
      )}
    </div>
  ) : (
    <h4>Make SOME Groups</h4>
  )
}

//   const supabase = createClient();
// const { data: { user },
// } = await supabase.auth.getUser();
// async function getMyGroups() {
//   const { data, error } = await supabase
//   .from("groups")
//   .select("*")
// return data
// }
// const myGroups = await getMyGroups();
// const notes = await getAllGroups()
// user ?

// return user ? (
//     <section className="mx-auto max-w-2xl px-5 py-12">
// <span className="text-3xl font-extrabold">Hello {user.email}</span>
// <pre>{JSON.stringify(myGroups, null, 2)}</pre>
//     </section>
//   )   : (
// <h1>Sign up or Sign in </h1>
// )
// };
