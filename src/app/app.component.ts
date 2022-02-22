import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from './internationality-settings/language.service';
import { HomeModel } from './_models/home.model';
import { SeoModel } from './_models/seo.model';
import { QueriesService } from './_services/queries.service';
import { SeoService } from './_services/seo.service';
import { SsrService } from './_services/ssr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client-vacum';
  elementHeight = 0

  @ViewChild('aboutUs', { static: false, read: ElementRef }) aboutUs: ElementRef;
  @ViewChild('services', { static: false, read: ElementRef }) services: ElementRef;
  @ViewChild('products', { static: false, read: ElementRef }) products: ElementRef;
  @ViewChild('partners', { static: false, read: ElementRef }) partners: ElementRef;
  @ViewChild('contacts', { static: false, read: ElementRef }) contacts: ElementRef;
  @ViewChild('home', { static: false, read: ElementRef }) home: ElementRef;
  @ViewChild('slider', { static: false, read: ElementRef }) slider: ElementRef;

  configs: HomeModel = new HomeModel
  selectedSeo: SeoModel;
  changedMenu

  constructor(
    private _queries: QueriesService,
    private _seo: SeoService,
    private _lng: LanguageService,
    private _ssr: SsrService
  ) {
    this.getSeo()
  };

  ngOnInit(): void {
    this.getInfo();

    this._lng.LanguageEvent.subscribe(data => {
      this._seo.setSeo(this.selectedSeo)
    })



  };

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  gotoItem(item) {
    switch (item) {
      case 'about-us': {
        const pos = this.aboutUs.nativeElement.style.position;
        const top = this.aboutUs.nativeElement.style.top;
        this.aboutUs.nativeElement.style.position = 'relative';
        this.aboutUs.nativeElement.style.top = '-100px';
        this.aboutUs.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.aboutUs.nativeElement.style.top = top;
        this.aboutUs.nativeElement.style.position = pos;
        // this.aboutUs.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } break;
      case 'services': {
          const pos = this.services.nativeElement.style.position;
          const top = this.services.nativeElement.style.top;
          this.services.nativeElement.style.position = 'relative';
          this.services.nativeElement.style.top = '-100px';
          this.services.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          this.services.nativeElement.style.top = top;
          this.services.nativeElement.style.position = pos;
        // this.services.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } break;
      case 'products': {
        const pos = this.products.nativeElement.style.position;
        const top = this.products.nativeElement.style.top;
        this.products.nativeElement.style.position = 'relative';
        this.products.nativeElement.style.top = '-100px';
        this.products.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.products.nativeElement.style.top = top;
        this.products.nativeElement.style.position = pos;
        // this.products.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } break;
      case 'partners': {
         const pos = this.partners.nativeElement.style.position;
        const top = this.partners.nativeElement.style.top;
        this.partners.nativeElement.style.position = 'relative';
        this.partners.nativeElement.style.top = '-100px';
        this.partners.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.partners.nativeElement.style.top = top;
        this.partners.nativeElement.style.position = pos;
        // this.partners.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } break;
      case 'contacts': {
         const pos = this.contacts.nativeElement.style.position;
        const top = this.contacts.nativeElement.style.top;
        this.contacts.nativeElement.style.position = 'relative';
        this.contacts.nativeElement.style.top = '-100px';
        this.contacts.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.contacts.nativeElement.style.top = top;
        this.contacts.nativeElement.style.position = pos;
        // this.contacts.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } break;
      case 'home': {
        this.home.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } break;
    }
  }

  getInfo() {
    this._queries.getInfo().subscribe((data: HomeModel) => {
      this.configs = data
    })
  }

  getSeo() {
    this._queries.getSeo().subscribe((data: SeoModel) => {
      this.selectedSeo = data
      this._seo.setSeo(data)
    })
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this._ssr.isBrowser) {
      let windowHeight = window.innerHeight;
      if (this.slider && this.slider.nativeElement) {
        if (
          ((window.scrollY - this.slider.nativeElement.offsetTop + 100) >= 0) 
          && 
          ((window.scrollY) <= (this.slider.nativeElement.offsetTop + this.slider.nativeElement.clientHeight - 100))
          ) {
            this.changedMenu = 'home'
        }
      }
      if (this.aboutUs && this.aboutUs.nativeElement) {
        if (
          ((window.scrollY - this.aboutUs.nativeElement.offsetTop + 100) >= 0) 
          && 
          ((window.scrollY) <= (this.aboutUs.nativeElement.offsetTop + this.aboutUs.nativeElement.clientHeight - 100))
          ) {
            this.changedMenu = 'about-us'
        }
      }

      if (this.services && this.services.nativeElement) {
        if (
          ((window.scrollY - this.services.nativeElement.offsetTop + 100) >= 0)
          &&
          (window.scrollY <= (this.services.nativeElement.offsetTop + this.services.nativeElement.clientHeight - 100))
        ) {
          this.changedMenu = 'services'
        }
      }

      if (this.products && this.products.nativeElement) {
        if (
          ((window.scrollY - this.products.nativeElement.offsetTop + 100) >= 0)
          &&
          (window.scrollY <= (this.products.nativeElement.offsetTop + this.products.nativeElement.clientHeight - 100))
          ) {
            this.changedMenu = 'products'
        }
      }

      if (this.partners && this.partners.nativeElement) {
        if (
          ((window.scrollY - this.partners.nativeElement.offsetTop + 100) >= 0)
          &&
          (window.scrollY <= (this.partners.nativeElement.offsetTop + this.partners.nativeElement.clientHeight - 100))
          ) {
            this.changedMenu = 'partners'
        }
      }

      if (this.contacts && this.contacts.nativeElement) {
        if (
          ((window.scrollY - this.contacts.nativeElement.offsetTop + 100) >= 0)
          &&
          (window.scrollY <= (this.contacts.nativeElement.offsetTop + this.contacts.nativeElement.clientHeight - 100))
          ) {
            this.changedMenu = 'contacts'
        }
      }
    }

  };

}
