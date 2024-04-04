import Link from "next/link";
import NavIcons from "../../NavBar/NavIcons";

export default function GroupsBtn() {
  return (
    <Link href="/groups">
      <NavIcons title={"Groups"} text={"Store a collection of realted notes"} />
    </Link>
  );
}
