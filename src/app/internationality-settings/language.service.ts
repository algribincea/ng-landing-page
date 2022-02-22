import { Injectable, EventEmitter } from '@angular/core';
import { SsrService } from '../_services/ssr.service';


@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  LanguageEvent = new EventEmitter(true);
  // LanguageChenge = new EventEmitter();
  readonly LANGUAGES = {
    ru: 'ru',
    ro: 'ro',
    en: 'en'
  };

  langCurrent = this.LANGUAGES.ro;


  readonly dictionary = {
    home: {
      ro: 'Principală',
      ru: 'Главная',
      en: 'Home',
    },
    contacts: {
      ro: 'Contacte',
      ru: 'Контакты',
      en: 'Contacts',
    },
    about: {
      ro: 'Despre noi',
      ru: 'О нас',
      en: 'About us',
    },
    services: {
      ro: 'Services',
      ru: 'Услуги',
      en: 'Servicii',
    },
    products: {
      ro: 'Produse',
      ru: 'Товары',
      en: 'Products',
    },
    partners: {
      ro: 'Parteneri',
      ru: 'Партнеры',
      en: 'Partners',
    },
    facts: {
      ro: 'Fapte și cifre',
      ru: 'Факты и цифры',
      en: 'Facts and figures',
    },
    webSite: {
      ro: 'site-ul web',
      ru: 'веб-сайт',
      en: 'web site',
    },
    downloadPdf: {
      ro: 'catalog produse (PDF)',
      ru: 'каталог продукции (PDF)',
      en: 'product catalog (PDF)',
    },
  };

  constructor(
    private _ssr: SsrService
  ) {
    if (this._ssr.isBrowser && localStorage.getItem('vacumnordLang')) {
      this.langCurrent = localStorage.getItem('vacumnordLang')
    }
  }

  selectedLanguage(lng) {
    this.langCurrent = lng;
    if (this._ssr.isBrowser) {
      localStorage.setItem('vacumnordLang', this.langCurrent)
    }
    this.LanguageEvent.next(lng);
  }

  getLanguage(key) {
    return this.dictionary[key][this.langCurrent];
  }
}
