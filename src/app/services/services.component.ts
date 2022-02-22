import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../internationality-settings/language.service';
import { ServiceModel } from '../_models/service.model';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input('services') services: ServiceModel[] = []

  activeService = 0
  
  constructor(
    public _lng: LanguageService,
    public _config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
