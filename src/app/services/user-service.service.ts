import { Inject, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { authModel } from "../models/authModel";
import { CurrentUserModel } from "../models/currentUserModel";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private router: Router){}

    private helperService: JwtHelperService = new JwtHelperService();

    public GetCurrentUser() : CurrentUserModel{
      let currentUser: CurrentUserModel = new CurrentUserModel();
      let userDetails = this.storage.get("auth_info") as authModel;

      if(userDetails !== undefined)
      {
        currentUser = this.helperService.decodeToken<CurrentUserModel>(userDetails.id_token);
      }

      return currentUser;
    }

    public IsAuthenticated() : boolean{
      let info = <authModel>this.storage.get("auth_info");
      if(info !== undefined && info.auth_token !== undefined){
        var decodedToken = this.helperService.getTokenExpirationDate(info.auth_token);
        var currentDate = new Date();

        if(decodedToken!.getDate() < currentDate.getDate())
        {
          this.storage.remove('auth_info');
          this.router.navigateByUrl("/login");
          return false;
        }
        else return true;
      }

      this.router.navigateByUrl("/login");
      return false;
    }
}
