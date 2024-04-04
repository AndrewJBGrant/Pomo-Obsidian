import Link from "next/link";
import NavIcons from "../../NavBar/NavIcons";

export default function NewNoteBtn() {
  return (
    <Link href="/Notes">
      <NavIcons title={"Notes"} text={"A new note"} />
    </Link>
  );
}
