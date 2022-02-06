import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { UpdateUserComponent } from './../../management-pages/update-user/update-user.component';
import { RegisterUserComponent } from './../../management-pages/register-user/register-user.component';
import { UserFormComponent } from './../../components/user-form/user-form.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ManagementLayoutComponent } from './management-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule  } from '@angular/material/slide-toggle';
import { MatMenuModule  } from '@angular/material/menu';

import { ManagementLayoutRoutingModule } from './management-layout-routing.module';
import { UsersComponentComponent } from './components/users-component/users-component.component';
import { RolesComponentComponent } from './components/roles-component/roles-component.component';


@NgModule({
  declarations: [
    ManagementLayoutComponent,
    UsersComponentComponent,
    RolesComponentComponent,
    UserFormComponent,
    RegisterUserComponent,
    UpdateUserComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ManagementLayoutRoutingModule,
    MatTabsModule,
    TranslateModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
  ]
})
export class ManagementLayoutModule { }
