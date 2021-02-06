import { firestore } from "../../admin";

export const getCollectionRef = (collection: string) =>
  firestore.collection(collection);

export const getDocRef = (collection: string, docId: string) =>
  getCollectionRef(collection).doc(docId);
