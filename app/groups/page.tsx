// import { createClient } from "../utils/supabase/server";

export default async function AllGroups() {


return (
  <div>
    Here all groups will go!
  </div>
)

};



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
