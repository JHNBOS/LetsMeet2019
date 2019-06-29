import { firestore } from 'firebase';

export class Contact {
	id: string;
	name: string;
	email: string;
	avatar: string;
	selected: boolean = false;

	constructor(data?: firestore.DocumentData) {
		this.id = data.id;
		this.name = data.name;
		this.email = data.email;
		this.avatar = data.avatar;
		this.selected = false;
	}
}
