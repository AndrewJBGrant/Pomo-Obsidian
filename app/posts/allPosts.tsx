import data from "../data.json";
import Link from 'next/link';


async function loadJson() {
const response = await fetch('/app/data.json')
console.log(response)
}



export default function AllPosts() {

return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
{data.posts.map((post) => (
<main key={post.id} className="hover:bg-neutral-500 border border-slate-600 m-2">
<Link href={`/posts/${post.id}`} key={post.id}>
<h2 className="font-extrabold">{post.title}</h2>
<h3 className="text-slate-600">{post.date_created}</h3>
<span>
{post.content}
</span>
</Link>
</main>
))}
    </section>
  );
}
