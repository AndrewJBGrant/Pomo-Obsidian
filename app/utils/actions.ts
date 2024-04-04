"use server";
import { createNote } from "../supabase/supaBae";

// Note actions
export async function createNoteAction(title: string) {
  await createNote(title);
  console.log("Coming from actions.ts");
}
