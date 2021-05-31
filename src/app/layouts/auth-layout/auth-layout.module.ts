import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutes } from './auth-layout.routing';
import { AuthLayoutComponent } from './auth-layout.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { ProfileNavigationComponent } from '../../components/profile-navigation/profile-navigation.component';
import { LeadFormComponent } from '../../components/lead-form/lead-form.component';
import { LeadCreationComponent } from '../../pages/lead-creation/lead-creation.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    SidebarComponent,
    ProfileNavigationComponent,
    LeadFormComponent,
    LeadCreationComponent
  ],
  imports: [
    RouterModule.forChild(AuthLayoutRoutes),
    CommonModule,
    NgbModule,
    NgbDropdownModule,
  ]
})

export class AuthLayoutModule { }
