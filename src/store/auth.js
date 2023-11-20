import { auth } from "@/firebase";
import { doc, setDoc } from 'firebase/firestore';
import { db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getRandomAvatar } from '@/controllers/AvatarController.js';

/**
 * Auth Store Module
 * @module Auth
 */

//import AuthController
// import AuthController from "@/controllers/AuthController.js";
import UserController from "@/controllers/UserController";
import router from "@/router";

// const AuthCont = new AuthController();
//const UserCont = new UserController();

export default {
  state: {
    user: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    /**
     * This action register a User on the platform,
     * using the API and creates the observer for the User's metadata in the db
     *
     * @action signup
     * @param {object} payload - Data to create a new User
     * @param {string} payload.email - the User email
     * @param {string} payload.password - the User password
     * @returns {void}
     */

    async signup({ commit }, payload) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          payload.email,
          payload.password
        );

        const randomAvatarUrl = await getRandomAvatar(payload.email);

        const userDocRef = doc(db, 'users', userCredential.user.uid);
        await setDoc(userDocRef, {
          email: payload.email,
          name: payload.name,
          userDescription: '',
          RA: payload.RA,
          accessLevel: 1,
          myReports: {},
          mySuggests: {},
          userAvatar: randomAvatarUrl,
        });

        console.log('Document written with ID: ', userCredential.user.uid);
      } catch (err) {
        console.error('Error when creating user', err);
        commit('setError', err);
      }
    },

    async signin({ commit }, payload) {
      try {
        await signInWithEmailAndPassword(auth, payload.email, payload.password);
      } catch (err) {
        console.error(err);
        if (err.code === "auth/invalid-email") {
          alert("Este usuário não existe.");
        } else if (err.code === "auth/wrong-password") {
          alert("Senha incorreta.");
        } else {
          alert("Usuário ou senha incorretos.");
          commit("setError", err);
        }
      }
      router.push("/");
    },

    async logout({ commit }) {
      try {
        await signOut(auth);
        commit("SET_USER", null);
      } catch (err) {
        console.error(err);
      }
    },

    async autoSignIn({ commit }) {
      var user = auth.currentUser;
      if (user) {
        try {
          const dbUser = await new UserController().getById(user.uid);
          commit("SET_USER", dbUser);
        } catch (e) {
          console.error(e);
        }
      }
    },
  },
};
