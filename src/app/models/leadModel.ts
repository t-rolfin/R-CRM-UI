import { Guid } from "guid-typescript";

export class  Lead{

  constructor(id: Guid, phoneNumber: string, leadStage: string, catchLead: Date){
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.leadStage = leadStage;
    this.catchLead = catchLead;
  }

  public id: Guid;
  public phoneNumber: string;
  public leadStage: string;
  public catchLead : Date
}
