import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeModel } from '../_models/home.model';
import { QueriesService } from './queries.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url = environment.url

  constructor() {
  }

  defaultImg(){
    return 'assets/images/noig.png'
  }

  returnImg(route) {
    return this.url + route
  }

 
}






