import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from './../../services/snackbar-service.service';
import { UpdateUserModel } from './../../models/updateUserModel';
import { FormType } from './../../enums/formType.enum';
import { RegisterUserModel } from './../../models/registerUserModel';
import { AccountService } from 'src/app/services/account-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef, Input } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private notification: SnackBarService,
    private translate: TranslateService
  ) { }

  @Input() public formType!: FormType;
  @Input() public userId!: string;

  @ViewChild('slide', { read: ViewContainerRef }) generatePasswordSlide!: ViewContainerRef;
  @ViewChild('passwordField', { read: TemplateRef }) passwordField!: TemplateRef<any>;
  public generatePassword: boolean = true;
  public form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
    });

    if(this.formType === FormType.Create)
      this.form = this.getRegisterForm();
    else
      this.getUpdateForm();
  }

  passwordSlideChange(event: any){
    if(!event.checked){
      this.form.get('generatePassword')?.setValue(false);
      this.form.addControl('password', new FormControl('', [Validators.required]));
      this.generatePasswordSlide.createEmbeddedView(this.passwordField);
    }
    else{
      this.form.get('generatePassword')?.setValue(true);
      this.form.removeControl('password');
      this.generatePasswordSlide.remove();
    }
  }

  registerUser(){
    if(this.form.valid && this.formType === FormType.Create){
      let data = <RegisterUserModel>this.form.value;
      this.accountService.Register(data)
        .then(x =>{
          if(x){
            this.notification.showSuccessMessage(
              this.translate.instant('user.registerUserSuccess')
            )
          }else{
            this.notification.showErrorMessage(
              this.translate.instant('user.registerUserError')
            )
          }
        });
    }else{
      let data = <UpdateUserModel>this.form.value;
      this.accountService.Update(data)
        .then(x =>{
          if(x){
            this.notification.showSuccessMessage(
              this.translate.instant('updateUser.success')
            )
          }else{
            this.notification.showErrorMessage(
              this.translate.instant('updateUser.error')
            )
          }
        })
    }
  }

  getRegisterForm(){
    return new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      generatePassword: new FormControl(this.generatePassword, [Validators.required])
    });
  }

  getUpdateForm(){
    this.accountService.GetUserDetails(this.userId)
      .then(result => {
        this.form = new FormGroup({
          firstName: new FormControl(result.firstName, [Validators.required]),
          lastName: new FormControl(result.lastName, [Validators.required]),
          email: new FormControl(result.email, [Validators.required, Validators.email]),
          phoneNumber: new FormControl(result.phoneNumber, [Validators.required]),
        });
      });
  }
}
