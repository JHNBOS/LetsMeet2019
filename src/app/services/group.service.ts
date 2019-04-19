import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Group } from './models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groups: Observable<Group[]>;
  private groupCollection: AngularFirestoreCollection<Group>;

  constructor(private afs: AngularFirestore) {
    this.groupCollection = this.afs.collection<Group>('groups');
    this.groups = this.groupCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getGroups(): Observable<Group[]> {
    return this.groups;
  }

  getGroup(id: string): Observable<Group> {
    return this.groupCollection.doc<Group>(id).valueChanges().pipe(
      take(1),
      map(group => group)
    );
  }

  addGroup(group: Group): Promise<boolean> {
    group.id = group.name.replace(/\s+/g, '') + new Date().getTime();
    return this.groupCollection.doc(group.id)
      .set({
        id: group.id,
        name: group.name,
        createdBy: group.createdBy,
        createdOn: new Date()
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
        createdOn: group.createdOn
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
