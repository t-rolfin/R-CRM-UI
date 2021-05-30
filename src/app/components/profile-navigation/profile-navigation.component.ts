import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-navigation',
  templateUrl: './profile-navigation.component.html',
  styleUrls: ['./profile-navigation.component.scss']
})
export class ProfileNavigationComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router,
    @Inject(DOCUMENT) private doc: Document
    ) { }

  profileJson: string = '';

  ngOnInit(): void {
    this.auth.user$.subscribe(x => this.profileJson = JSON.stringify(x));
  }

  public loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
