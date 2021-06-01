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
import { LeadsFilterComponent } from '../../components/leads-filter/leads-filter.component';
import { LeadsComponent } from '../../pages/leads/leads.component';
import { LeadsListComponent } from '../../components/leads-list/leads-list.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    SidebarComponent,
    ProfileNavigationComponent,
    LeadFormComponent,
    LeadCreationComponent,
    LeadsFilterComponent,
    LeadsComponent,
    LeadsListComponent
  ],
  imports: [
    RouterModule.forChild(AuthLayoutRoutes),
    CommonModule,
    NgbModule,
    NgbDropdownModule,
  ]
})

export class AuthLayoutModule { }
