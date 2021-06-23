import { LinkModel } from "./linkModel";

export interface NoteModel {
  id: string;
  content: string;
  links: Array<LinkModel>;
}
