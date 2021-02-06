import { BaseDbModel } from "../utils";
import { BaseProject } from "./helpers/BaseProject";
import { ProjectEvent } from "./helpers/ProjectEvent";
import { ProjectLinks } from "./helpers/ProjectLinks";

export interface ProfessionalProject extends BaseProject {
  company: BaseDbModel;
  links: Pick<ProjectLinks, "project" | "repo">;
}

export interface AcademicalProject extends BaseProject {
  school: BaseDbModel;
  links: Pick<ProjectLinks, "project" | "repo">;
}

export interface EventProject extends BaseProject {
  event: ProjectEvent;
  links: Pick<ProjectLinks, "ppt"> & Partial<Omit<ProjectLinks, "ppt">>;
}

export interface HobbyProject extends BaseProject {
  links: Pick<ProjectLinks, "project" | "repo">;
}

export type Project =
  | ProfessionalProject
  | AcademicalProject
  | EventProject
  | HobbyProject;
