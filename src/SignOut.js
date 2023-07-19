import { signOut } from "firebase/auth";
import { db, auth } from "./firebase";

function SignOut() {
  return (
    auth.currentUser && (
      <button onClick={() => signOut(auth)}>Sign out</button>
    )
  );
}
export default SignOut;