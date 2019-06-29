import { firestore } from 'firebase';
import * as moment from 'moment';

export class Event {
    id: string;
    groupId: string;
    createdBy: string;
    title: string;
    description: string;
    location: string;
    startTime: any;
    endTime: any;
    start: any;
    end: any;
    allDay: boolean;

    constructor(data?: firestore.DocumentData) {
        this.id = data.id;
        this.groupId = data.groupId;
        this.createdBy = data.createdBy;
        this.title = data.title;
        this.description = data.description;
        this.location = data.location;
        this.startTime = moment.unix(data.start.seconds).toDate();
        this.endTime = moment.unix(data.end.seconds).toDate();
        this.start = data.start;
        this.end = data.end;
        this.allDay = data.allDay;
    }
}
