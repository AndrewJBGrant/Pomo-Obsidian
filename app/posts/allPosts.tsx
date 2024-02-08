import data from "../data";
import Link from "next/link";
import { formatDateToLocal } from "../lib/utils";


export default function AllPosts() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">



      {data.posts.map((post) => (
        <main
          key={post.id}
          className="hover:bg-neutral-500 border border-slate-600 m-2"
        >
          <Link href={`/posts/${post.id}`} key={post.id}>
            <h2 className="font-extrabold">{post.title}</h2>
            <h3 className="text-slate-600">{post.date_created}</h3>
             <p>{formatDateToLocal(post.date_created)}</p>
            <span>{post.content}</span>
          </Link>
        </main>
      ))}
    </section>
  );
}
