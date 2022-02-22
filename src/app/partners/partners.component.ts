import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../internationality-settings/language.service';
import { PartnerModel } from '../_models/partner.model';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  @Input('partners') partners: PartnerModel[] = []

  constructor(
    public _lng: LanguageService,
    public _config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
