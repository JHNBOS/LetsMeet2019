import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthenticationService } from './helpers/authentication.service';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: Observable<User[]>;
  private userCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, private authenticationService: AuthenticationService) {
    this.userCollection = this.afs.collection<User>('users');
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.users;
  }

  getUser(id: string): Observable<User> {
    return this.userCollection.doc<User>(id).valueChanges().pipe(
      take(1),
      map(user => user)
    );
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userCollection.ref.where('email', '==', email).get().then((response) => {
      let user: User = null;
      if (response.docs.length > 0) {
        let data = response.docs[0].data();
        user = new User();
        user.uid = data.uid;
        user.email = data.email;
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.color = data.color;
        user.avatar = data.avatar;
      }
      return user;
    }).catch((error) => {
      this.handleError(error);
      return null;
    });
  }

  addUser(user: User): Promise<boolean> {
    return this.userCollection.doc(user.uid)
      .set({
        uid: user.uid,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        color: user.color,
        avatar: user.avatar
      })
      .then(() => true)
      .catch((error) => {
        this.handleError(error);
        return false;
      });
  }

  updateUser(user: User): Promise<boolean> {
    return this.userCollection.doc(user.uid)
      .set({
        uid: user.uid,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        color: user.color,
        avatar: user.avatar
      })
      .then(() => true)
      .catch((error) => {
        this.handleError(error);
        return false;
      });
  }

  deleteUser(id: string): Promise<void> {
    return this.userCollection.doc(id).delete();
  }

  private handleError(error) {
    throw error;
  }
}
