// imports

import { auth } from "@/firebase";
import db from "@/firebase/init";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default class AuthController {
  //Register new users

  async authSignUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return db.collection("users").doc(userCredential.user.uid).set({
          email: email,
          accessLevel: 1,
          myReports: {},
          mySuggests: {},
        });
      })
      .catch(console.error("Error in SignUp"));
  }

  //SignIn

  async authSignIn(email, password) {
    try {
      return signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          return user;
        }
      );
    } catch (e) {
      console.error(e);
    }
  }

  //Get Current User

  async authGetCurrentUser() {
    const user = auth.currentUser;
    if (user) {
      return user;
    } else {
      console.error("user is null");
    }
    return user;
  }

  //SignOut

  async authSignOut() {
    return signOut(auth).then(() => {});
  }
}
