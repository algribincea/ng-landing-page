import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SsrService {

  isBrowser: boolean;
  // static isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID) private platformId,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    // SsrService.isBrowser = isPlatformBrowser(this.platformId);
  }
}
