import { Project } from "../../../types";
import {
  addDoc,
  deleteDoc,
  getAllDocs,
  getDoc,
  updateDoc,
} from "../general/docs";

export const getProject = (id: string) => getDoc("projects", id);
export const getAllProjects = () => getAllDocs("projects");
export const addProject = (data: Project) => addDoc("projects", data);
export const updateProject = (id: string, update = {}) =>
  updateDoc("projects", id, update);
export const deleteProject = (id: string) => deleteDoc("projects", id);
