import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: Observable<User[]>;
  private userCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore) {
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

  addUser(user: User): Promise<boolean> {
    return this.userCollection.doc(user.uid)
      .set({
        uid: user.uid,
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
