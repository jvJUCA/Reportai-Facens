import SuggestsController from "@/controllers/SuggestsController";
import { auth, db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

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
        const date = Date.now()

        await addDoc(collection(db, "suggests"), {
          suggestAuthorId: userDocId,
          suggestDescription: payload.suggestDescription,
          suggestPic: '',
          suggestVotes : 0,
          lastUpdate: date
        });
      } catch (err) {
        console.error("Error when creating suggest", err);
        commit("setError", err);
      }
    },
  },
};
