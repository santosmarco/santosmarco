import dotenv from "dotenv";
import admin from "firebase-admin";

dotenv.config();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export default admin;

export const firestore = admin.firestore();
