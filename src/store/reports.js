import ReportsController from "@/controllers/ReportsController";
import { auth, db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

export default {
  state: {
    reports: {},
  },
  getters: {
    reports(state) {
      return state.reports;
    },
  },
  mutations: {
    SET_REPORTS(state, payload) {
      state.reports = payload;
    },
  },
  actions: {
    async getAllReports({ commit }) {
      try {
        const res = await ReportsController.readAll();
        commit("SET_REPORTS", res);
      } catch (e) {
        console.error(e);
      }
    },

    async submitReport({ commit }, payload) {
      try {
        const userDocId = auth.currentUser.uid;
        const date = Date.now()

        await addDoc(collection(db, "reports"), {
          reportAuthorId: userDocId,
          reportDescription: payload.reportDescription,
          reportPic: '',
          reportVotes : 0,
          lastUpdate: date
        });
      } catch (err) {
        console.error("Error when creating report", err);
        commit("setError", err);
      }
    },
  },
};
