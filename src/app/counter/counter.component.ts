import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../internationality-settings/language.service';
import { CounterModel } from '../_models/counter.model';
import { SsrService } from '../_services/ssr.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input('counter') counter: CounterModel[] = [];

  @ViewChild('showCounter', { static: true, read: ElementRef }) showCounter: ElementRef;
  animationDuration = 2000;
  frameDuration = 1000 / 60;
  totalFrames = Math.round(this.animationDuration / this.frameDuration);
  activeNr = 0
  // elementHeight = this.showCounter.nativeElement.clientHeight;
  elementHeight = 0
  easeOutQuad = t => t * (2 - t);

  animateCountUp = el => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);
    const counter = setInterval(() => {
      frame++;
      const progress = this.easeOutQuad(frame / this.totalFrames);
      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }

      if (frame === this.totalFrames) {
        clearInterval(counter);
      }
    }, this.frameDuration);
  };


  constructor(
    private _ssr: SsrService,
    public _lng: LanguageService
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this._ssr.isBrowser) {
      let windowHeight = window.innerHeight;
      if (this.showCounter && this.showCounter.nativeElement) {
        this.elementHeight = this.showCounter.nativeElement.clientHeight;
        var scrollY = window.scrollY || window.pageYOffset;

        let scrollPosition = scrollY + windowHeight;

        let elementPosition = this.showCounter.nativeElement.getBoundingClientRect().top + scrollY + this.elementHeight;


        if (scrollPosition > elementPosition - 100) {
          if (this.activeNr == 0) {
            this.startAnimation()
            this.activeNr++;
          }

        }
      }
    }

  };

  startAnimation() {
    if (this._ssr.isBrowser) {
      const countupEls = document.querySelectorAll('.counter__number');
      countupEls.forEach(this.animateCountUp);
    }

  }




}