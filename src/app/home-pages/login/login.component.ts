import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  loginForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitForm(){
    if(this.loginForm.valid){
      var data = this.loginForm.value;
      this.accountService.Authenticate(data.userName, data.password);
    }
  }

  get userName() { return this.loginForm.get('userName') };
  get password() { return this.loginForm.get('userName') };

}
