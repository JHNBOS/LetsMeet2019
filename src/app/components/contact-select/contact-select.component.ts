import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ContactService } from 'src/app/services/contact.service';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { Contact } from 'src/app/services/models/contact';
import { User } from 'src/app/services/models/user';

@Component({
  selector: 'app-contact-select',
  templateUrl: './contact-select.component.html',
  styleUrls: ['./contact-select.component.scss'],
})
export class ContactSelectComponent implements OnInit {
  authUser: firebase.User = null;
  contacts: Contact[] = null;
  selected: Contact[] = [];

  @Input('contactsAlreadySelected') contactsAlreadySelected: User[];
  @Output() selectedContacts = new EventEmitter<Contact[]>();

  constructor(private router: Router, private contactService: ContactService, public _sanitizer: DomSanitizer,
    private authenticationService: AuthenticationService, private modal: ModalController) { }

  ngOnInit() {
    this.authUser = this.authenticationService.getUserAuth();
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts(this.authUser.uid).subscribe(
      (response) => {
        this.contacts = response;
        this.checkIfSelected();
      });
  }

  checkIfSelected() {
    if (this.contactsAlreadySelected) {
      for (let index = 0; index < this.contacts.length; index++) {
        const element = this.contacts[index];

        let foundIndex = this.contactsAlreadySelected.findIndex(f => f.uid == element.id);
        if (foundIndex != -1) {
          this.contacts.splice(index, 1);
        }
      }
    }
  }

  add(event: any, contact: Contact) {
    let index = this.selected.indexOf(contact);

    if (index == -1) {
      this.selected.push(contact);
      contact.selected = true;
    } else {
      this.selected.splice(index, 1);
      contact.selected = false;
    }

    this.selectedContacts.emit(this.selected);
  }

  dismiss() {
    this.modal.dismiss(this.selected);
  }
}
