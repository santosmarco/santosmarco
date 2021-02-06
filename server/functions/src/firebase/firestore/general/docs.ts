import { DocInfo } from "./../../../types";
import { getCollectionRef, getDocRef } from "./refs";

export const getDoc = (collection: string, docId: string): Promise<DocInfo> =>
  getDocRef(collection, docId)
    .get()
    .then((doc) => ({ id: doc.id, exists: doc.exists, data: doc.data() }));

export const getAllDocs = async (collection: string): Promise<DocInfo[]> =>
  getCollectionRef(collection)
    .get()
    .then((snapshot) =>
      Promise.all(snapshot.docs.map((doc) => getDoc(collection, doc.id)))
    );

export const addDoc = (
  collection: string,
  documentData: FirebaseFirestore.DocumentData
): Promise<DocInfo> =>
  getCollectionRef(collection)
    .add(documentData)
    .then((doc) => getDoc(collection, doc.id));

export const updateDoc = (
  collection: string,
  docId: string,
  updateData: FirebaseFirestore.UpdateData
): Promise<DocInfo> =>
  getDocRef(collection, docId)
    .update(updateData)
    .then(() => getDoc(collection, docId));

export const deleteDoc = (
  collection: string,
  docId: string
): Promise<DocInfo> =>
  getDocRef(collection, docId)
    .delete()
    .then(() => getDoc(collection, docId));
