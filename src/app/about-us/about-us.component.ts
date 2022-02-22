import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../internationality-settings/language.service';
import { AboutModel } from '../_models/about.model';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  @Input('about') about: AboutModel =  new AboutModel;

  constructor(
    public config: ConfigService,
    public _lng: LanguageService
  ) { }

  ngOnInit(): void {
  }

}
