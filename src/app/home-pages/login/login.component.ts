import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';
import { AccountService } from 'src/app/services/account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
   private accountService: AccountService,
   private router: Router
  ) { }

  model: LoginModel = new LoginModel('','')

  ngOnInit(): void {
  }

  submitForm(){
    this.accountService.Authenticate(this.model.userName, this.model.password);
  }

}
