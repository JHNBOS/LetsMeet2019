import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { User } from 'src/app/services/models/user';

@Component({
	selector: 'app-user-details',
	templateUrl: './details.page.html',
	styleUrls: ['./details.page.scss'],
})
export class UserDetailsPage implements OnInit {
	user: User = null;
	memberSince: string;

	constructor(
		private router: Router, private authenticationService: AuthenticationService, public _sanitizer: DomSanitizer,
		public menuController: MenuController
	) {
	}

	ngOnInit() {
		this.getUser();
	}

	toggleSideNav() {
		this.menuController.toggle();
	}

	navigateToManage() {
		this.router.navigate(['user/manage']);
	}

	navigateToContacts() {
		this.router.navigate(['contacts']);
	}

	getUser() {
		this.memberSince = this.authenticationService.getUserAuth().metadata.creationTime;
		this.authenticationService.getSavedUser().then((response => this.user = response));
	}
}
