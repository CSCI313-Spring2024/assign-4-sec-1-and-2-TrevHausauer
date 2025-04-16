import { Component, inject, Input } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() contact!: Contact;
  @Input() id!: number;

  contactsService = inject(ContactsService);

  deleteContact(){
    this.contactsService.deleteContact(this.id);
  }
}
