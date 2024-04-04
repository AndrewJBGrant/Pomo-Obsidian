"use client";
import { useRef } from "react";
import { createNoteAction } from "../utils/actions";

export default function CreateNewNote() {
  // const noteFormRef = useRef<HTMLFormElement>(null);
  // async function noteAction(data: FormData) {
  // const title: Note = data.get("title");

  // await createNoteAction(title)
  // noteFormRef.current?.reset();

  // };

  return (
    <section className="page-layout">
<p>Here we will have the new note form</p>

      <form>
        <input type="text" name="title" />
        <button type="submit">NEW NOTE</button>
      </form>
    </section>
  );
}
