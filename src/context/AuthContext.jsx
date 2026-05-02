import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider ,signOut, sendEmailVerification ,sendPasswordResetEmail  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import { toast } from "react-toastify";
const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unSubscribe;
  }, []);


const signUp= (email ,password)=>{
 
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    toast.success("singup succesful")
    sendEmailVerification(user).than(()=>
      alert("active")
    );
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.warning("please enter velid password avoid speacial charecters")
    // ..
  });
}


  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    console.log("sign up with google");

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        toast.success("singup succesful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };


  const signIn=(email,password)=>{


 return signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   navigate("/");
  //   toast.success("loging succes")
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   toast.warning("please enter the valid data")
  // });
  }

  const logOut = ()=>{


signOut(auth).then(() => {
  toast.success("logout successful")
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  }
  const reset = (email) => {
    if (!email) {
      toast.warning("Please enter your email first!");
      return;
    }

    return sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!check your email");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <AuthContext value={{ user, signUpWithGoogle ,signUp ,signIn,logOut,reset }}>{children}</AuthContext>
  );
};

export { AuthContext };
export default AuthProvider;
