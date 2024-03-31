// // import renderLinks from "../HighlightLinks";
// import { getMyNotes, findUser } from "../supabase/supaBae";
// import { createClient } from "../supabase/server";

// import Link from "next/link";
// // import SignOutBtn from "../components/SignOutBtn";

// type Notes = {
//   title: string;
//   content: string;
//   group_color: string;
//   id: number;
//   group_id: number;
// };

// export default async function AllNotes() {
//   const user = await findUser();

//   // console.log(JSON.stringify(user, null, 2))

//   //const myNotes = await getMyNotes();
//   //console.log(JSON.stringify(myNotes, null, 2))

//   // const wordCount = content.split(" ").filter(Boolean).length;

//   return user ? (
//     <section>
//       <span className="text-3xl font-extrabold">Hello {user.email}</span>

//       {/* <pre>{JSON.stringify(myNotes, null, 2)}</pre> */}
// {/*
//       <article>
//         {myNotes?.map((note) => (
//           <div className="m-8 p-4" key={note.id} style={{ backgroundColor: note.group_color! }}>
//             <Link href={`/notes/${note.id}`}>
//               <div className={`bg-[note.group_color]`}>
//                 <span className={`bg-${note.group_color}`}>{note.group_color}</span>

//                 <span style={{ backgroundColor: note.group_color! }}>GROUP ID{note.group_id}</span>
//                 <h1>Title{note.title}</h1>
//               </div>
//             </Link>

//             {/* <SignOutBtn /> */}
//           </div>
//         ))}
//       </article> */}

//       <div className="m-2 p-2 bg-[#eab308]">
//         <h1>hello what?</h1>
//       </div>
//     </section>
//   ) : (
//     <h1>Sign up or Sign in </h1>
//   );
// }
