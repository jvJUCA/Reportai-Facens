// imports
import Controller from "./BaseController";
import { auth } from "@/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default class AuthController {
  //Register new users

  async authSignUp(email, password) {
    
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
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
