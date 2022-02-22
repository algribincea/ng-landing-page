import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {
  
  urls = {
    home: environment.url + '/client/common-settings',
    seo: environment.url + '/client/seo'
  }


  constructor(
    private http: HttpClient
  ) { }

  getInfo() {
    return this.http.get(this.urls.home)
  }

  getSeo() {
    return this.http.get(this.urls.seo)
  }
}
