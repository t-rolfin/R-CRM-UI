import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@fortawesome/fontawesome-svg-core';
import { Guid } from 'guid-typescript';
import { Lead } from 'src/app/models/leadModel';
import { LeadService } from 'src/app/services/lead-service.service';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {

  constructor(
    public leadService: LeadService,
    public router: Router
  ) { this.leads = [];  }

  public leads: Lead[];
  isLoading:boolean = false;

  @Output() onDetails: EventEmitter<Guid> = new EventEmitter();

  ngOnInit(): void {
    this.getLeads();
  }

  getLeads(){
    this.leadService.getAllLeads()
    .subscribe(leads => {
      this.leads = leads;
      console.log(leads);
    })
  }

  expend(leadId: Guid){
    this.router.navigate([], {queryParams: { leadId }})
    this.onDetails.emit(leadId);
  }

}
