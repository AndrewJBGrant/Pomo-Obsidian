import PostForm from "./posts/PostForm";
import AllPosts from "./posts/allPosts";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<section>Here we go starting hard today on Note app 2.0</section>
<PostForm />
<AllPosts />
    </main>
  );
}
