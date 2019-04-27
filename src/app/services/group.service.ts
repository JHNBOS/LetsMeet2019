import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
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
    this.groupCollection.ref.where('members', 'array-contains', uid)
      .get()
      .then((response) => {
        if (response.docs.length > 0) {
          response.docs.forEach(groupDoc => {
            let data = groupDoc.data();

            let newGroup = new Group();
            newGroup.id = data.id;
            newGroup.name = data.name;
            newGroup.createdOn = moment.unix(data.createdOn.seconds).toDate();;
            newGroup.createdBy = data.createdBy;
            newGroup.picture = data.picture;
            newGroup.members = data.members;

            groups.push(newGroup);
          });
        }
      }).catch((error) => {
        this.handleError(error);
        return null;
      });

    return of(groups);
  }

  getGroup(id: string): Observable<Group> {
    return this.groupCollection.doc(id).valueChanges().pipe(
      take(1),
      map((group: any) => {
        let newGroup = new Group();
        newGroup.id = group.id;
        newGroup.name = group.name;
        newGroup.createdOn = moment.unix(group.createdOn.seconds).toDate();
        newGroup.createdBy = group.createdBy;
        newGroup.picture = group.picture;
        newGroup.members = group.members;

        return newGroup
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
