import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutes } from './auth-layout.routing';
import { AuthLayoutComponent } from './auth-layout.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbDropdownModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { ProfileNavigationComponent } from '../../components/profile-navigation/profile-navigation.component';
import { LeadFormComponent } from '../../components/lead-form/lead-form.component';
import { LeadCreationComponent } from '../../pages/lead-creation/lead-creation.component';
import { LeadsFilterComponent } from '../../components/leads-filter/leads-filter.component';
import { LeadsComponent } from '../../pages/leads/leads.component';
import { LeadsListComponent } from '../../components/leads-list/leads-list.component';
import { LeadDetailsComponent } from '../../pages/lead-details/lead-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NotesListComponent } from 'src/app/components/notes-list/notes-list.component';
import { ClientDetailsComponent } from 'src/app/components/client-details/client-details.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    SidebarComponent,
    ProfileNavigationComponent,
    LeadFormComponent,
    LeadCreationComponent,
    LeadsFilterComponent,
    LeadsComponent,
    LeadsListComponent,
    LeadDetailsComponent,
    NotesListComponent,
    ClientDetailsComponent,
    ModalComponent
  ],
  imports: [
    RouterModule.forChild(AuthLayoutRoutes),
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    NgbDropdownModule,
    NgbAccordionModule
  ]
})

export class AuthLayoutModule { }
