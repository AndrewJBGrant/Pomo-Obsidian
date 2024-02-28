// import PostForm from "./posts/PostForm";
import AllPosts from "./posts/allPosts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <PostForm /> */}
      <AllPosts />
    </main>
  );
}
