import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { ContactService } from 'src/app/services/contact.service';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { Contact } from 'src/app/services/models/contact';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.page.html',
	styleUrls: ['./contacts.page.scss']
})
export class ContactsPage implements OnInit {
	authUser: firebase.User = null;
	contacts: Contact[] = null;

	searchQuery = '';

	constructor(
		private router: Router,
		private contactService: ContactService,
		public _sanitizer: DomSanitizer,
		private authenticationService: AuthenticationService,
		private alertController: AlertController,
		public menuController: MenuController
	) {}

	ngOnInit() {
		this.authUser = this.authenticationService.getUserAuth();
		this.getContacts();
	}

	getContacts() {
		this.contactService.getContacts(this.authUser.uid).subscribe(response => {
			setTimeout(() => (this.contacts = response), 1200);
		});
	}

	toggleSideNav() {
		this.menuController.toggle();
	}

	refreshContacts(event: any) {
		setTimeout(() => {
			this.getContacts();
			event.target.complete();
		}, 2000);
	}

	async deleteContact(contact: Contact) {
		const alert = await this.alertController.create({
			header: 'Delete Contact',
			message: 'Are you sure you want to delete this contact?',
			buttons: [
				{
					text: 'Yes',
					handler: () => {
						this.contactService.deleteContact(contact.id).then(response => {
							this.getContacts();
						});
					}
				},
				{
					text: 'No'
				}
			]
		});

		await alert.present();
	}

	async showPrompt() {
		const alert = await this.alertController.create({
			header: 'Add Contact',
			message: 'Please enter the email of the contact you would like to add.',
			inputs: [
				{
					name: 'contactEmail',
					type: 'email',
					id: 'contactEmail',
					placeholder: 'Email'
				}
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary'
				},
				{
					text: 'OK',
					handler: data => {
						let contactEmail = data.contactEmail;
						this.contactService
							.addContactByEmail(contactEmail)
							.then(async response => {
								if (response === false) {
									alert.dismiss();

									const errorAlert = await this.alertController.create({
										header: 'Error',
										message: 'No user found matching this email!',
										buttons: [
											{
												text: 'OK',
												handler: () => this.getContacts()
											}
										]
									});
									await errorAlert.present();
								} else {
									alert.dismiss();
								}
							});
					}
				}
			]
		});

		await alert.present();
	}

	navigateBack() {
		this.router.navigate(['home/profile']);
	}
}
