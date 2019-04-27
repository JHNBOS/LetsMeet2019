import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-user-details',
	templateUrl: './details.page.html',
	styleUrls: ['./details.page.scss'],
})
export class UserDetailsPage implements OnInit {
	user: User = null;
	memberSince: string;

	constructor(
		private router: Router,
		private authenticationService: AuthenticationService,
		private userService: UserService,
		public _sanitizer: DomSanitizer,
	) {
	}

	ngOnInit() {
	}

	ionViewWillEnter() {
		this.getUser();
	}

	navigateToManage() {
		this.router.navigate(['user/manage']);
	}

	navigateToContacts() {
		this.router.navigate(['contacts']);
	}

	getUser() {
		let authUser = this.authenticationService.getUserAuth();

		this.memberSince = authUser.metadata.creationTime;
		this.userService.getUser(authUser.uid).subscribe(response => (this.user = response));
	}
}
