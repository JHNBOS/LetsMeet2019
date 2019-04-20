import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthenticationService } from './helpers/authentication.service';
import { Contact } from './models/contact';
import { User } from './models/user';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private authUser: firebase.User;

  private contacts: Observable<Contact[]>;
  private contactCollection: AngularFirestoreCollection<Contact>;

  constructor(private afs: AngularFirestore, private authenticationService: AuthenticationService,
    private userService: UserService) {
    this.authUser = this.authenticationService.getUserAuth();

    this.contactCollection = this.afs.collection<Contact>('users').doc(this.authUser.uid).collection('contacts');
    this.contacts = this.contactCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getContacts(): Observable<Contact[]> {
    return this.contacts;
  }

  getContact(id: string): Observable<Contact> {
    return this.contactCollection.doc<Contact>(id).valueChanges().pipe(
      take(1),
      map(contact => contact)
    );
  }

  addContact(contact: Contact): Promise<any> {
    return this.contactCollection.doc(contact.id)
      .set({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        avatar: contact.avatar
      })
      .then(() => true)
      .catch((error) => {
        this.handleError(error);
        return false;
      });
  }

  addContactByEmail(email: string): Promise<boolean> {
    return this.userService.getUserByEmail(email).then(
      (response) => {
        if (response != null) {
          let contactUser = response;
          let contact = new Contact();

          // Set properties
          contact.email = email;
          contact.avatar = contactUser.avatar;
          contact.name = contactUser.firstName + ' ' + contactUser.lastName;
          contact.id = contactUser.uid;

          return this.contactCollection.doc(contact.id)
            .set({
              id: contact.id,
              name: contact.name,
              email: contact.email,
              avatar: contact.avatar
            })
            .then(() => true);
        }

        return false;
      }
    ).catch((error) => {
      this.handleError(error);
      return false;
    });
  }

  updateContact(contact: Contact): Promise<boolean> {
    return this.contactCollection.doc(contact.id)
      .set({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        avatar: contact.avatar
      })
      .then(() => true)
      .catch((error) => {
        this.handleError(error);
        return false;
      });
  }

  deleteContact(id: string): Promise<void> {
    return this.contactCollection.doc(id).delete();
  }

  private handleError(error) {
    throw error;
  }
}
