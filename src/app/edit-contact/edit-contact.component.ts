import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CONTACTS } from '../data/contact-data';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit{
  id!: number;

  fname: string = '';
  lname: string = '';
  phoneNum: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.fname = CONTACTS[this.id].fName;
    this.lname = CONTACTS[this.id].lName;
    this.phoneNum = CONTACTS[this.id].phoneNum;
  }

  ContactsService = inject(ContactsService);

  UpdateContact(){
    this.ContactsService.updateContact(
      this.id, this.fname, this.lname, this.phoneNum
    );
  }
}
