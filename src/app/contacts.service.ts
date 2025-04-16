import { Injectable } from '@angular/core';
import { CONTACTS } from './data/contact-data';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  addContact(fName: string, lName: string, phoneNum: string){
    CONTACTS.push({fName, lName, phoneNum});
  }

  updateContact(
    index: number,
    fName: string,
    lName: string,
    phoneNum: string
  ) {
    CONTACTS[index] = {fName, lName, phoneNum};
  }

  deleteContact(id: number){
    CONTACTS.splice(id, 1);
  }
}
