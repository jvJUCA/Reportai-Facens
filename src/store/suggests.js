import SuggestsController from "@/controllers/SuggestsController";
import { auth, db } from "@/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import store from ".";

export default {
  state: {
    suggests: {},
  },
  getters: {
    suggests(state) {
      return state.suggests;
    },
  },
  mutations: {
    SET_SUGGESTS(state, payload) {
      state.suggests = payload;
    },
  },
  actions: {
    async getAllsuggests({ commit }) {
      try {
        const res = await SuggestsController.readAll();
        commit("SET_SUGGESTS", res);
      } catch (e) {
        console.error(e);
      }
    },

    async submitSuggest({ commit }, payload) {
      try {
        const userDocId = auth.currentUser.uid;
        const user = store.getters.user;
        const date = Date.now();
        const userDocRef = doc(db, "users", userDocId);

        const newSuggestRef = await addDoc(collection(db, "suggests"), {
          suggestAuthorId: userDocId,
          suggestAuthorName: user.name,
          suggestAuthorAvatar: user.userAvatar,
          suggestDescription: payload.suggestDescription,
          suggestPic: "",
          suggestVotes: 0,
          lastUpdate: date,
          type: "suggest",
        });

        const newSuggestId = newSuggestRef.id;

        await updateDoc(userDocRef, {
          mySuggests: {
            ...user.mySuggests,
            [newSuggestId]: {
              lastUpdate: date,
              suggestDescription: payload.suggestDescription,
              suggestPic: "",
            },
          },
        });
      } catch (err) {
        console.error("Error when creating suggest", err);
        commit("setError", err);
      }
    },
  },
};
