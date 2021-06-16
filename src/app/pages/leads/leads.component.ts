import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Lead } from 'src/app/models/leadModel';
import { LeadService } from 'src/app/services/lead-service.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  @ViewChild('leaddetails') leaddetails!: ElementRef<HTMLInputElement>;

  constructor(
    private renderer: Renderer2,
    ) {}

  ngOnInit(): void {
  }

  expendElenent(leadId: string){
    console.log(leadId);

    this.renderer.setStyle(this.leaddetails.nativeElement, "width", "1200px");
    this.renderer.setStyle(this.leaddetails.nativeElement, "opacity", "1");
    this.renderer.setStyle(this.leaddetails.nativeElement, "marginLeft", "10px");
  }

  closeDetails(){
    this.renderer.setStyle(this.leaddetails.nativeElement, "width", "0px");
    this.renderer.setStyle(this.leaddetails.nativeElement, "opacity", "0");
    this.renderer.setStyle(this.leaddetails.nativeElement, "marginLeft", "0px");
  }

}
