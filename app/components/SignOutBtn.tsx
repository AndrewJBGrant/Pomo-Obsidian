import Link from "next/link";
import { signOut, findUser } from "../supabase/supaBae"

export default async function AuthButton() {

  const user = await findUser();



return user ? (
<>
 {/* <button onClick={signOut()}>OUT</button> */}
OUT
</>
) : (
<>

      <Link
        href="/login"
        className="navbar-icon"
      >
        IN
      </Link>




</>
);
}




// export default function SignOutBtn() {


// return (
// )
// }
