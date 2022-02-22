import { EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Component, HostListener, OnInit, Output } from '@angular/core';
import { LanguageService } from '../internationality-settings/language.service';
import { ContactsModel } from '../_models/contacts.model';
import { RouterLanguageService } from '../_services/router-language.service';
import { SsrService } from '../_services/ssr.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openLanguage = false;
  openMenu = false;
  public innerWidth: any;
  selectedMenuEl = 'home';
  @Output() selectedMenu = new EventEmitter();
  @Input('contacts') contacts: ContactsModel;
  @Input('changedMenu') changedMenu

  constructor(
    private _ssr: SsrService,
    public _lngRouter: RouterLanguageService,
    public _lng: LanguageService,
    
  ) { }

  ngOnInit(): void {
    this.onResize()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.changedMenu) {
      this.selectedMenuEl =  this.changedMenu
    }
    
  }



  showLanguage() {
    this.openLanguage = !this.openLanguage
  }

  @HostListener('window:resize', [])
  onResize() {
    if (this._ssr.isBrowser) {
      this.innerWidth = window.innerWidth;
      if (window.innerWidth <= 900) {
        this.openLanguage = true
      } else if (window.innerWidth > 900) {
        this.openLanguage = false
        this.openMenu = false
      }
    }
    
  }

  navigateTo(item) {
    this.selectedMenuEl = item
    this.selectedMenu.emit(item)
  }

  changeLanguage(lng) {
    this._lngRouter.switchLang(lng);
    // this.openLanguage = false;
    if (this.innerWidth <= 900) {
      this.openMenu = false
      this.openLanguage = true
    }
    else if (this.innerWidth > 900) {
      this.openLanguage = false
    }
  }

}
