"use client";


import { posts } from "../data";
import Link from "next/link";



export default function AllPosts() {


  return (
    <section className="flex min-h-screen flex-col items-center justify-between">


<h1 className="">Recent Posts</h1>
      {posts.map((post) => (
        <article
          key={post.id}
          className="hover:bg-neutral-500 m-2 text-balance"
        >
          <Link href={`/posts/${post.id}`} key={post.id}>

<div className="flex justify-between items-center">
            <h2 className="font-extrabold">{post.title}</h2>
            <h3 className="text-slate-600 dark:text-slate-300">{post.date_created}</h3>

</div>

            <span>{post.content}</span>
          </Link>
        </article>
      ))}
    </section>
  );
}
