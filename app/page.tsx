"use client";

import TextInput from "./textEdits/TextInput";
import AllNotes from "./notes/allNotes";
import MarkdownTextarea from "./textEdits/testMark";
import { useTimeContext } from "./context/indexContext";


export default function Home() {

const { timeLeft } = useTimeContext();

  return (
    <section>
{/* <AllNotes /> */}
{/* <TextInput /> */}
{/* <MarkdownTextarea /> */}
<h1 className="mx-auto max-w-2xl px-5 py-12">{timeLeft}</h1>

    </section>
  );
}

    //className="flex min-h-screen flex-col container mx-auto px-24">
