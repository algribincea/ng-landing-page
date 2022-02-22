import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../internationality-settings/language.service';
import { ProductModel } from '../_models/product.model';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input('products') products: ProductModel[] = []

  activeService = 0

  constructor(
    public _lng: LanguageService,
    public _config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
