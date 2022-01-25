import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { leadCreationModel } from 'src/app/models/leadCreationModel';
import { LeadService } from 'src/app/services/lead-service.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.scss']
})
export class LeadFormComponent implements OnInit {

  constructor(
    public leadService: LeadService
    ) { }

  public profilerForm: FormGroup = new FormGroup({});
  public model: leadCreationModel = new leadCreationModel('','','','');

  ngOnInit(): void {
    this.profilerForm = new FormGroup({
      products: new FormControl(this.model.leadProducts, Validators.required),
      phoneNumber: new FormControl(this.model.phoneNumber, [Validators.required, Validators.minLength(10)]),
      delivaryAddress: new FormControl(this.model.delivaryAddress, Validators.required),
      email: new FormControl(this.model.email, Validators.required)
    });
  }

  public CreateLead(){
      this.leadService.createLead(this.model);
  }

  get products() { return this.profilerForm.controls['products']; }
  get phoneNumber() {console.log(this.profilerForm.controls['phoneNumber']); return this.profilerForm.controls['phoneNumber']; }

}
