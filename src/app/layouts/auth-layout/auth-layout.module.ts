import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutes } from './auth-layout.routing';
import { AuthLayoutComponent } from './auth-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    RouterModule.forChild(AuthLayoutRoutes),
    CommonModule
  ]
})
export class AuthLayoutModule { }
