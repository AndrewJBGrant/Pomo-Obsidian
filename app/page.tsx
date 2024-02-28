// import PostForm from "./posts/PostForm";
import AllPosts from "./posts/allPosts";

import TimerTest from "./Timer/TestPomo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <PostForm /> */}
      <AllPosts />

      <TimerTest />


    </main>
  );
}
