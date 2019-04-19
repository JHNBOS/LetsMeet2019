import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.page.html',
	styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
	user: User = null;
	memberSince: string;

	constructor(
		private router: Router,
		private authenticationService: AuthenticationService,
		private userService: UserService,
		public _sanitizer: DomSanitizer,
	) { }

	ngOnInit() {
		this.getUser();
	}

	navigateToManage() {
		this.router.navigateByUrl(`/manage/${this.user.uid}`);
	}

	getUser() {
		let userId = this.authenticationService.getUID();
		this.memberSince = this.authenticationService.getUserAuth().metadata.creationTime;
		this.userService.getUser(userId).subscribe(result => (this.user = result));
	}
}
