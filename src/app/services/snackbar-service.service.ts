import { TranslateService } from '@ngx-translate/core';
import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  private errorOptions: MatSnackBarConfig = {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: 3000,
    panelClass: ['error']
  }

  private successOptions: MatSnackBarConfig = {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: 3000,
    //panelClass: ['error']
  }

  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService
  ){}

  showErrorMessage(message: string){
    this.snackBar.open(message, '', this.errorOptions);
  }

  showServerError(){
    let errorMessage = this.translate.instant('errors.serverNotResponse')
    this.snackBar.open(
      errorMessage,
      '',
      this.errorOptions
    )
  }

  showSuccessMessage(message: string){
    this.snackBar.open(
      message,
      '',
      this.successOptions
    )
  }
}
