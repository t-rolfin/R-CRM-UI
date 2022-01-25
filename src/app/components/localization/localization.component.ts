import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent implements OnInit {

  constructor(
    public languageService: TranslateService
  ) { }

  public languages = ['EN','RO']
  public selectLanguage: string = this.languageService.currentLang;

  ngOnInit(): void {
  }

  public setLanguage(){
    console.log(this.selectLanguage);
    this.languageService.use(this.selectLanguage)
  }

}
