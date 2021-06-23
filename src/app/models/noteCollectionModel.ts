import { LinkModel } from "./linkModel";
import { NoteModel } from "./noteModel";

export class NoteCollectionModel{
  constructor() {
    this.links = new Array();
    this.notes = [];
  }

  public links: Array<LinkModel>;
  public notes: NoteModel[];
}
