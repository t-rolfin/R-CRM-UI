import { ManagementService } from './../../../../services/management-service.service';
import { UsersModel, UserModel } from './../../../../models/usersModels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.scss']
})
export class UsersComponentComponent implements OnInit {

  constructor(
    private managementService: ManagementService
  ) { }

  displayedColumns: string[] = ['actions', 'name', 'email', 'phoneNumber', 'roles', 'createdBy'];

  public users: UserModel[] = [];

  ngOnInit(): void {
    this.managementService.GetUsers()
      .subscribe(x => this.users = x.users);
  }

}
