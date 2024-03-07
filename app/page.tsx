// import PostForm from "./posts/PostForm";
// import AllPosts from "./posts/allPosts";
import Link from "next/link"


export default function Home() {
  return (
    <section className="flex min-h-screen flex-col container mx-auto px-24">
      {/* <PostForm /> */}
      {/* <AllPosts /> */}

          <Link
            href="/login"
            className="font-bold hover:underline text-foreground/80"
          >
            Login
          </Link>{" "}




    </section>
  );
}
