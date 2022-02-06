import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Lead } from 'src/app/models/leadModel';
import { LeadService } from 'src/app/services/lead-service.service';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {

  constructor(
    public leadService: LeadService
  ) { this.leads = [];  }

  public leads: Lead[];
  isLoading:boolean = false;

  @Output() onDetails: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.getLeads();
  }

  getLeads(){
    this.leadService.getAllLeads()
    .subscribe(leads => {
      this.leads = leads;
    })
  }

  expend(leadId: string){
    this.onDetails.emit(leadId);
  }

}
