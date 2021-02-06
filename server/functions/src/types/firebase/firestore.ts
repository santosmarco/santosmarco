export type DocInfo = {
  id: string;
  exists: boolean;
  data?: FirebaseFirestore.DocumentData;
};
