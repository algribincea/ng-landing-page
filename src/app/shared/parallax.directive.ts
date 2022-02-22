import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { SsrService } from '../_services/ssr.service';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  initialTop: number = 200

  constructor(
    private eleRef: ElementRef,
    private _ssr: SsrService
    ) {
      if (this._ssr.isBrowser) {
        this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top + 100
      }
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    if (this._ssr.isBrowser) {
      this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
    }
    
  }

}
