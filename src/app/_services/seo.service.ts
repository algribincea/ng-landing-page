import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LanguageService } from '../internationality-settings/language.service';
import { SeoModel } from '../_models/seo.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  // selectedSeo: SeoModel;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _lng: LanguageService,
  ) { }

  setSeo(selectedSeo) {
    if (selectedSeo) {
      for (let elem of Array.from(this.document.head.getElementsByClassName("seo"))) elem.remove();
      let meta = this.document.createElement("meta");
      meta.name = "description";
      meta.content = selectedSeo.description[this._lng.langCurrent];
      meta.classList.add("seo");
      this.document.head.appendChild(meta);

      meta = this.document.createElement("meta");
      meta.name = "keywords";
      meta.content = selectedSeo.keywords[this._lng.langCurrent];
      meta.classList.add("seo");
      this.document.head.appendChild(meta);

      meta = this.document.createElement("meta");
      meta.name = "og:title";
      meta.content = selectedSeo.openGraph.title[this._lng.langCurrent];
      meta.classList.add("seo");
      this.document.head.appendChild(meta);

      meta = this.document.createElement("meta");
      meta.name = "og:description";
      meta.content = selectedSeo.openGraph.description[this._lng.langCurrent];
      meta.classList.add("seo");
      this.document.head.appendChild(meta);

      meta = this.document.createElement("meta");
      meta.name = "og:image";
      meta.content = selectedSeo.openGraph.image ? environment.url + selectedSeo.openGraph.image : "assets/images/noimage.png";
      meta.classList.add("seo");
      this.document.head.appendChild(meta);

      meta = this.document.createElement("meta");
      meta.name = "og:image:type";
      meta.content = selectedSeo.openGraph.imageType;
      meta.classList.add("seo");
      this.document.head.appendChild(meta);

      meta = this.document.createElement("meta");
      meta.name = "og:image:width";
      meta.content = selectedSeo.openGraph.imageWidth + "";
      meta.classList.add("seo");
      this.document.head.appendChild(meta);

      meta = this.document.createElement("meta");
      meta.name = "og:image:height";
      meta.content = selectedSeo.openGraph.imageHeight + "";
      meta.classList.add("seo");
      this.document.head.appendChild(meta);

      meta = this.document.createElement("meta");
      meta.name = "robots";
      meta.content = `${selectedSeo.noindex ? "noindex" : "index"}, ${selectedSeo.nofollow ? "nofollow" : "follow"}`;
      meta.classList.add("seo");
      this.document.head.appendChild(meta);

      this.document.title = selectedSeo.title[this._lng.langCurrent];
    } 
    else {
      this.clearSeo(selectedSeo);
    }
  }

  clearSeo(selectedSeo) {
    selectedSeo = null;
    for (let elem of Array.from(this.document.head.getElementsByClassName("seo"))) elem.remove();
    let meta = this.document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, follow";
    meta.classList.add("seo");
    this.document.head.appendChild(meta);

    // if (this.commonData) this.document.title = this.commonData.defaultTitle[this._lng.langCurrent];
  }

  // getAndSetSeo(id: string) {
  //   this.httpClient.get(this._query.URL.seo, { params: { id } }).subscribe((seo: Seo) => {
  //     this.selectedSeo = seo;
  //     this.setSeo();
  //   });
  // }
}

