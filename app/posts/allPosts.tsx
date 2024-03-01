"use client";

import { posts } from "../data";
// import Link from "next/link";
import renderLinks from "../HighlightLinks";

export default function AllPosts() {

  return (
    <section className="flex min-h-screen flex-col items-center justify-between">








<h1 className="">Recent Posts</h1>
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-neutral-100 dark:bg-zinc-700 m-2 text-balance p-6 rounded-md shadow-md leading-relaxed"
        >
          {/* <Link href={`/posts/${post.id}`} key={post.id}> */}

<div className="flex justify-between items-center">
            <h2 className="text-balance pb-2">{post.title}</h2>
            <h3 className="text-slate-600 dark:text-slate-300">{post.date_created}</h3>

</div>

            <p className="font-mono font-medium line-clamp-4" dangerouslySetInnerHTML={{__html: renderLinks(post.content)}}></p>
          {/* </Link> */}
        </article>
      ))}
    </section>
  );
}
