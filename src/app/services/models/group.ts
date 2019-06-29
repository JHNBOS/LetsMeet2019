import { firestore } from 'firebase';
import * as moment from 'moment';

export class Group {
    id: string;
    name: string;
    createdOn: Date;
    createdBy: string;
    members: string[];
    picture: string;

    constructor(data?: firestore.DocumentData) {
        this.id = data.id;
        this.name = data.name;
        this.createdOn = moment.unix(data.createdOn.seconds).toDate();
        this.createdBy = data.createdBy;
        this.members = data.members;
        this.picture = data.picture;
    }
}
