import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Group } from './models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private basePath = '/groups';

  groups: AngularFireList<Group> = null;
  group: AngularFireObject<Group> = null;

  constructor(private db: AngularFireDatabase) {
    this.groups = db.list('groups');
  }

  getGroupsList(query: any): AngularFireList<Group> {
    this.groups = this.db.list(this.basePath, ref => query);
    return this.groups;
  }

  getGroup(id: number): AngularFireObject<Group> {
    const itemPath = `${this.basePath}/${id}`;
    this.group = this.db.object(itemPath);

    return this.group;
  }

  getGroupByName(name: string): AngularFireObject<Group> {
    const itemPath = `${this.basePath}/${name}`;
    this.group = this.db.object(itemPath);

    return this.group;
  }

  createGroup(group: Group): void {
    this.groups.query.ref.child(group.id.toString()).set({
      name: group.name,
      created_by: group.created_by,
      created_on: group.created_on
    });

    this.groups.push(group)
      .catch(error => this.handleError(error));
  }

  updateGroup(key: string, value: any): void {
    this.groups.update(key, value)
      .catch(error => this.handleError(error));
  }

  deleteGroup(key: string): void {
    this.groups.remove(key)
      .catch(error => this.handleError(error));
  }

  deleteAll(): void {
    this.groups.remove()
      .catch(error => this.handleError(error));
  }

  private handleError(error) {
    throw error;
  }
}
