import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { LanguageService } from '../internationality-settings/language.service';
import { SsrService } from './ssr.service';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterLanguageService {
  url: string;
  activeLink = '';
  key = 'vacumnordLang'

  constructor(
    public router: Router,
    public location: Location,
    private _ssr: SsrService,
    private _lng: LanguageService
  ) { 
    this.getRouter()
  }

  getRouter() {
    this.router.events.subscribe((url: any) => {
      
      if (url.url) {
        this.url = url.url;
      }
      if (url instanceof ActivationEnd) {

        this.routeforLanguage(url);
      }

    });
  }

  routeforLanguage(url) {
    if (url && url.snapshot && url.snapshot.params && url.snapshot.params.lng) {
      
      // if (this.translate.getLangs().indexOf(url.snapshot.params.lng) >= 0) {
      //   this.translate.use(url.snapshot.params.lng)
      // }
      
      if (Object.keys(this._lng.LANGUAGES).indexOf(url.snapshot.params.lng) >= 0) {
        this._lng.selectedLanguage(url.snapshot.params.lng)
    }
      else {
        
        // this.translate.use('ro')
        this._lng.selectedLanguage(this._lng.LANGUAGES.ro)
        this.router.navigateByUrl('/' + this._lng.langCurrent)
      }

      // if(this._ssr.isBrowser) {
      //   localStorage.setItem(this.key, this._lng.langCurrent);
      // }


    }


  }


  switchLang(lng: string) {
    
    if (this.url == '/') {
      this.url = '/' + lng
    }
    

    if (this.url == '/' + this._lng.langCurrent) {
      this.url = '/' + lng
    }
    let x = this.url.replace('/' + this._lng.langCurrent + '/', '/' + lng + '/')
    this.activeLink = x
    this.router.navigateByUrl(x)
  }
}
