import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db, auth } from "./firebase";
function SignIn() {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}
export default SignIn;