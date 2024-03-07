
import { notes } from "../data";
// import Link from "next/link";
import renderLinks from "../HighlightLinks";
import { getAllGroups } from "../utils/supabase/supaBae";

export default async function AllNotes() {

const groups = await getAllGroups()

  return (
    <section className="flex min-h-screen flex-col max-w-2xl">
      <h1 className="text-3xl">Groups!!</h1>
{groups?.map(group => (
  <div key={group.id}>
<span>{group.title}</span>
<p>{group.color}</p>



  </div>
))}
    </section>
  );
}

      // {/* {notes.map((post) => (
      //   <article
      //     key={post.id}
      //     className="bg-neutral-100 dark:bg-zinc-700 m-2 text-balance p-6 rounded-md shadow-md leading-relaxed"
      //   >
      //     {/* <Link href={`/posts/${post.id}`} key={post.id}> */}
      //       <div className="flex justify-between items-center">
      //         <h2 className="text-balance pb-2">{post.title}</h2>
      //         <h3 className="text-slate-600 dark:text-slate-300">
      //           {post.date_created}
      //         </h3>
      //       </div>

      //       <p
      //         className="font-medium line-clamp-4"
      //         dangerouslySetInnerHTML={{ __html: renderLinks(post.content) }}
      //       ></p> */}
      //     {/* </Link> */}
      //   </article>
