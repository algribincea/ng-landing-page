import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LanguageService } from '../internationality-settings/language.service';
import { SliderModel } from '../_models/slider.model';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slideIndex = 1;
  @Input('slider') slider: SliderModel[] = []
  @ViewChildren('slide') slide: QueryList<any>;
  @Output() selectedMenu = new EventEmitter();


  constructor(
    public config: ConfigService,
    public _lng: LanguageService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.slide.changes.subscribe(() => {
      if ((this.slide.toArray().length > 0)) {
        this.showDivs(this.slideIndex);
      }
    })

    if ((this.slide.toArray().length > 0)) {
      this.showDivs(this.slideIndex);
    }
  }

  plusDivs(n) {
    
    this.showDivs(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showDivs(this.slideIndex = n);
  }


  showDivs(n) {
    if (n > this.slide.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = this.slide.length }
    this.slide.forEach((child) => {
      child.nativeElement.style.display = "none";
    });
    this.slide.toArray()[this.slideIndex - 1].nativeElement.style.display = "flex";
  }

  navigate() {
    this.selectedMenu.next('about-us')
  }

}
