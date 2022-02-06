import { BaseUserModel } from './../models/baseUserModel';
import { UpdateUserModel } from './../models/updateUserModel';
import { catchError } from 'rxjs/operators';
import { SnackBarService } from './snackbar-service.service';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { authModel } from '../models/authModel';
import { RegisterUserModel } from '../models/registerUserModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {

  constructor(
    public http: HttpClient,
    private router: Router,
    public notifications: SnackBarService,
    @Inject(LOCAL_STORAGE) public storage: StorageService) {
      super(notifications)
     }

  public async Authenticate(userName: string, password: string) : Promise<authModel>{
    let response: authModel = new authModel();

    await new Promise((resolve, reject) => {
      this.http.post(`${env.apiUrl}/api/account/login`, {userName, password}, {observe: 'response'})
      .pipe(catchError(x => super.processError(x)))
        .subscribe(data =>{
          if(data.status == 200)
          {
            this.storage.set('auth_info', data.body as authModel);
            this.router.navigateByUrl("/dashboard");
          }else{
          }
        });
    })

    return response;
  }

  public async Register(userData: RegisterUserModel) : Promise<boolean>{
    let response: boolean = false;
    await new Promise((resolve, rejsect) => {
      this.http.post(`${this.baseUrl}/api/account/register`, userData, { observe: 'response' })
        .pipe(catchError(x => this.processError(x)))
        .subscribe(data => {
          if(data.status === 200){
            response = <boolean>data.body;
            resolve(response);
          }
        });
    });
    return response;
  }

  public async Update(userData: UpdateUserModel) : Promise<boolean>{
    let response: boolean = false;

    await new Promise((resolve, reject) => {
      this.http.put(`${this.baseUrl}/api/account/update`, userData, { observe: 'response' })
        .pipe(catchError(x => this.processError(x)))
        .subscribe(data => {
          response = <boolean>data.body;
          resolve(response);
        })
    })

    return response;
  }

  public async GetUserDetails(id: string) : Promise<BaseUserModel>
  {
    let result!: BaseUserModel;
    await new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}/api/account/getUserDetails/${id}`, { observe: 'response' })
        .pipe(catchError(x =>this.processError(x)))
        .subscribe(response => {
          result = <BaseUserModel>response.body;
          resolve(<BaseUserModel>response.body);
        });
    });

    return result;
  }

  public LogOut(){
    this.storage.remove('auth_info');
    this.router.navigateByUrl("/")
  }

}
