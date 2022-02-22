import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../internationality-settings/language.service';
import { ContactsModel } from '../_models/contacts.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input('contacts') contacts: ContactsModel[] = []

  constructor(
    public _lng: LanguageService
  ) { }

  ngOnInit(): void {
  }

}
