import Link from "next/link";
import { supabase } from "@/app/supabase/supaBae";

// type note = {
//   title: string;
//   content: string;
//   group_color: string;
//   id: number;
//   group_id: number;
// };

export default async function singleNote({
  params,
}: {
  params: { id: number };
}) {
  const getSingleNote = async () => {
    const { data, error } = await (await supabase)
      .from("notes")
      .select("*")
      .eq("id", `${params.id}`)
      .single();

    // console.log(data)
    return data;
  };

  const { title, content, group_id, group_color, group_name } = await getSingleNote();

let wordCount = content.split(" ").filter(Boolean).length

  return (
    <article className="page-layout">
      {/* <h1>{title}</h1> */}
      <Link href={`/groups/${group_id}`}>{group_name}</Link>
      <span className={`text-${group_color}`}>{group_color}</span>
      <p>{content}</p>
      <p>Word count:{wordCount}</p>

      <Link href={`/`}>Go Back</Link>
    </article>
  );
}
