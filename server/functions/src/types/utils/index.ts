export type MultilingualText = {
  pt: string;
  en: string;
};

export interface BaseDbModel {
  id: string;
  name: MultilingualText;
}
