import { BaseDbModel } from "../../utils";

export interface ProjectEvent extends BaseDbModel {
  role: BaseDbModel;
  position: BaseDbModel;
}
