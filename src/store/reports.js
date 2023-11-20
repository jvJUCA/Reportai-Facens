import ReportsController from "@/controllers/ReportsController";
import { auth, db } from "@/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import store from ".";

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
        const user = store.getters.user;
        const date = Date.now();
        const userDocRef = doc(db, "users", userDocId);

        const newReportRef = await addDoc(collection(db, "reports"), {
          reportAuthorId: userDocId,
          reportAuthorName: user.name,
          reportAuthorAvatar: user.userAvatar,
          reportDescription: payload.reportDescription,
          reportPic: "",
          reportVotes: 0,
          lastUpdate: date,
          type: "report",
        });

        const newReportId = newReportRef.id;

        await updateDoc(userDocRef, {
          myReports: {
            ...user.myReports,
            [newReportId]: {
              lastUpdate: date,
              reportDescription: payload.reportDescription,
              reportPic: ''
            },
          },
        });
      } catch (err) {
        console.error("Error when creating report", err);
        commit("setError", err);
      }
    },
  },
};
