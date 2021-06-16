import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {

  constructor() { }

  isLoading:boolean = false;

  @Output() onDetails: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  expend(leadId: string){
    this.onDetails.emit(leadId);
  }

}
