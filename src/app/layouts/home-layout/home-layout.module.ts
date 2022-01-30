import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from 'src/app/home-pages/login/login.component';
import { HomeLayoutComponent } from './home-layout.component';
import { RouterModule } from '@angular/router';
import { PresentationComponent } from 'src/app/pages/presentation/presentation.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeLayoutComponent,
    PresentationComponent
  ],
  imports: [
    HomeLayoutRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class HomeLayoutModule { }
