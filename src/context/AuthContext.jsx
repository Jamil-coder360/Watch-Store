import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase.config"
import { toast } from "react-toastify";
const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

      useEffect(()=>{
      const unSubscribe = auth.onAuthStateChanged((currentUser)=>{
        setUser(currentUser);
      })
      return unSubscribe;
    },[])

 const signUpWithGoogle = () => {

const provider = new GoogleAuthProvider();
console.log("sign up with google");

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    toast.success("singup succesful")
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
};


  return (<AuthContext value={{ user ,signUpWithGoogle }}>
    {children}
    </AuthContext>)
};

export { AuthContext };
export default AuthProvider;
