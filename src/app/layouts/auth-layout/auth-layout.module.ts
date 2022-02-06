import { MatInputModule } from '@angular/material/input';
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
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { LoadingAnimationComponent } from '../../components/loading-animation/loading-animation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizationComponent } from 'src/app/components/localization/localization.component';
import { MatSelectModule } from '@angular/material/select'
import { MatProgressBarModule } from '@angular/material/progress-bar'

@NgModule({
  declarations: [
    AuthLayoutComponent,
    SidebarComponent,
    ProfileNavigationComponent,
    LeadCreationComponent,
    LeadsFilterComponent,
    LeadsComponent,
    LeadsListComponent,
    LeadDetailsComponent,
    NotesListComponent,
    ClientDetailsComponent,
    ModalComponent,
    LoadingAnimationComponent,
    LeadFormComponent,
    LocalizationComponent
  ],
  imports: [
    RouterModule.forChild(AuthLayoutRoutes),
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    NgbDropdownModule,
    NgbAccordionModule,
    TextareaAutosizeModule,
    TranslateModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  providers: [
    BreadcrumbService
  ],
  exports: [
    LocalizationComponent
  ]
})

export class AuthLayoutModule { }
