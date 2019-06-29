import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import * as moment from 'moment';
import { of } from 'rxjs';
import { Observable } from 'rxjs/observable';
import { map, take } from 'rxjs/operators';

import { Group } from './models/group';


@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupCollection: AngularFirestoreCollection<Group>;

  constructor(private afs: AngularFirestore) {
    this.groupCollection = this.afs.collection<Group>('groups');
  }

  getGroups(uid: string): Observable<Group[]> {
    let groups: Group[] = [];

    this.groupCollection.ref.where('members', 'array-contains', uid).get()
      .then((response) => {
        response.docs.forEach(doc => {
          let data = doc.data();
          groups.push(new Group(data));
        });
      }, (error) => {
        this.handleError(error);
        return null;
      });

    return of(groups);
  }

  getGroup(id: string): Observable<Group> {
    return this.groupCollection.doc(id).valueChanges().pipe(
      take(1),
      map((data) => {
        return new Group(data);
      })
    );
  }

  addGroup(group: Group): Promise<any> {
    group.id = group.name.replace(/\s+/g, '') + new Date().getTime();
    return this.groupCollection.doc(group.id)
      .set({
        id: group.id,
        name: group.name,
        createdBy: group.createdBy,
        createdOn: new Date(),
        members: [],
        picture: group.picture
      })
      .then(() => group)
      .catch((error) => {
        this.handleError(error);
        return false;
      });
  }

  addMember(id: string, uid: string): Promise<boolean> {
    return this.groupCollection.doc(id)
      .update({
        members: firebase.firestore.FieldValue.arrayUnion(uid)
      })
      .then(() => true)
      .catch((error) => {
        this.handleError(error);
        return false;
      });
  }

  checkIfUserisCreator(id: string, uid: string): boolean {
    let userIsCreator = false;
    this.groupCollection.ref.where('createdBy', '==', uid).get().then((response) => userIsCreator = !response.empty);
    return userIsCreator;
  }

  removeMember(id: string, uid: string): Promise<boolean> {
    return this.groupCollection.doc(id)
      .update({
        members: firebase.firestore.FieldValue.arrayRemove(uid)
      })
      .then(() => true)
      .catch((error) => {
        this.handleError(error);
        return false;
      });
  }

  assignNewCreator(group: Group): Promise<boolean> {
    group.members.splice(group.members.findIndex(x => x == group.createdBy), 1);
    group.createdBy = group.members[group.members.length - 1];
    return this.updateGroup(group).then((response) => response);
  }

  updateGroup(group: Group): Promise<boolean> {
    return this.groupCollection.doc(group.id)
      .set({
        id: group.id,
        name: group.name,
        createdBy: group.createdBy,
        createdOn: group.createdOn,
        members: group.members,
        picture: group.picture
      })
      .then(() => true)
      .catch((error) => {
        this.handleError(error);
        return false;
      });
  }

  deleteGroup(id: string): Promise<void> {
    return this.groupCollection.doc(id).delete();
  }

  private handleError(error) {
    throw error;
  }
}
