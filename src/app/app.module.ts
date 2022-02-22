import { BrowserModule, HAMMER_LOADER } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PartnersComponent } from './partners/partners.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from './shared/shared.module';
import { CounterComponent } from './counter/counter.component';
// import 'hammerjs';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './_services/config.service';
import { InternationalityModule } from './internationality-settings/intertationality.module';
import { PreluaderComponent } from './preluader/preluader.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PartnersComponent,
    ProductsComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactsComponent,
    SliderComponent,
    CounterComponent,
    PreluaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    HammerModule, 
    HttpClientModule,
    InternationalityModule
  ],
  providers: [
    {
      provide: HAMMER_LOADER,
      useValue: async () => {
        return import('hammerjs/hammer');
      },
    },
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
