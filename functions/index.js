const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
require("dotenv").config();

admin.initializeApp();

exports.processSignUp = functions.auth.user().onCreate(async (user) => {
    try {
      await admin
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set({
          email: user.email,
          accessLevel: 1,
          myReports: {},
          mySuggests: {},
        });
    } catch (err) {
      console.error("Error to create user in database ", err);
    }
  });