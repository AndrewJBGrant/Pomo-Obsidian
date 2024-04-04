import Link from "next/link";
import { findUser } from "../../supabase/supaBae";
import SignOutBtn from "./SignOutBtn";

export default async function AuthButton() {
  const user = await findUser();

  return user ? (
    <>
    {/* <SignOutBtn /> */}
    </>
  ) : (
    <>
      <Link href="/login" className="navbar-icon">
        IN
      </Link>
    </>
  );
}

// export default function SignOutBtn() {

// return (
// )
// }
