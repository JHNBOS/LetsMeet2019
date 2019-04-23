import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Event } from './models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventCollection: AngularFirestoreCollection<Event>;

  constructor(private afs: AngularFirestore) {
    this.eventCollection = this.afs.collection<Event>('groups');
  }

  getEvents(groupId: string): Observable<Event[]> {
    let events: Event[] = [];
    this.eventCollection.doc(groupId).ref.collection('events')
      .get()
      .then((response) => {
        if (response.docs.length > 0) {
          response.docs.forEach(groupDoc => {
            let data = groupDoc.data();

            let event = new Event();
            event.id = data.id;
            event.title = data.title;
            event.description = data.description;
            event.createdBy = data.createdBy;
            event.location = data.location;
            event.allDay = data.allDay;
            event.start = data.start;
            event.end = data.end;
            event.groupId = data.groupId;

            event.startTime = moment.unix(event.start.seconds).toDate();
            event.endTime = moment.unix(event.end.seconds).toDate();

            events.push(event);
          });
        }
      }).catch((error) => {
        this.handleError(error);
        return null;
      });

    return of(events);
  }

  getEvent(groupId: string, id: string): Observable<Event> {
    return this.eventCollection.doc(groupId).collection('events').doc<Event>(id).valueChanges().pipe(
      take(1),
      map(group => group)
    );
  }

  addEvent(event: Event): Promise<any> {
    event.id = event.title.replace(/\s+/g, '') + new Date().getTime();
    return this.eventCollection.doc(event.groupId).ref.collection('events').doc(event.id)
      .set({
        id: event.id,
        groupId: event.groupId,
        title: event.title,
        description: event.description,
        createdBy: event.createdBy,
        location: event.location,
        allDay: event.allDay,
        start: event.start,
        end: event.end
      })
      .then(() => event)
      .catch((error) => {
        this.handleError(error);
        return false;
      });
  }

  updateEvent(event: Event): Promise<boolean> {
    return this.eventCollection.doc(event.groupId).ref.collection('events').doc(event.id)
      .set({
        id: event.id,
        groupId: event.groupId,
        title: event.title,
        description: event.description,
        createdBy: event.createdBy,
        location: event.location,
        allDay: event.allDay,
        start: event.start,
        end: event.end
      })
      .then(() => true)
      .catch((error) => {
        this.handleError(error);
        return false;
      });
  }

  deleteEvent(groupId: string, id: string): Promise<void> {
    return this.eventCollection.doc(groupId).collection('events').doc(id).delete();
  }

  private handleError(error) {
    throw error;
  }
}
