

import Link from "next/link"
import AllNotes from "./notes/allNotes";


export default function Home() {
  return (
    <section className="flex min-h-screen flex-col container mx-auto px-24">



          <Link
            href="/login"
            className="font-bold hover:underline text-foreground/80"
          >
            Login
          </Link>{" "}



<AllNotes />



    </section>
  );
}
