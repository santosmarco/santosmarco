import { BaseDbModel, MultilingualText } from "../../utils";
import { ProjectLinks } from "./ProjectLinks";

export interface BaseProject extends BaseDbModel {
  description: MultilingualText;
  contextDescription: MultilingualText;
  solutionDescription: MultilingualText;
  category: BaseDbModel;
  tech: BaseDbModel[];
  links: Partial<ProjectLinks>;
}
