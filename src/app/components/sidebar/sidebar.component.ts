import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  profileJson: string = '';

  ngOnInit(): void {
    this.auth.user$.subscribe(x => this.profileJson = JSON.stringify(x));
  }

}