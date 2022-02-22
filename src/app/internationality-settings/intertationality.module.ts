import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LngDirective } from './lng.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LngDirective
  ],
  exports: [
    LngDirective
  ]
})
export class InternationalityModule {
}
