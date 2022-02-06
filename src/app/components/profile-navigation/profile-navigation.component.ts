import { LoaderService } from './../../services/loader-service.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserModel } from 'src/app/models/currentUserModel';
import { AccountService } from 'src/app/services/account-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile-navigation',
  templateUrl: './profile-navigation.component.html',
  styleUrls: ['./profile-navigation.component.scss']
})
export class ProfileNavigationComponent implements OnInit {

  constructor(
    public router: Router,
    @Inject(DOCUMENT) private doc: Document,
    private userService: UserService,
    private accountService: AccountService,
    public loader: LoaderService
    ) { }

  profileJson: CurrentUserModel = new CurrentUserModel();

  ngOnInit(): void {
    this.profileJson = this.userService.GetCurrentUser();
  }

  public loginWithRedirect(): void {
    //this.auth.loginWithRedirect();
  }

  logout(): void {
    this.accountService.LogOut();
    this.doc.location.origin;
  }
}
