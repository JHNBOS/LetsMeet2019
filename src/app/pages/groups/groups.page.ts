import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GroupService } from 'src/app/services/group.service';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { Group } from 'src/app/services/models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  authUser: firebase.User = null;
  groups: Group[] = null;

  constructor(private router: Router, private groupService: GroupService, public _sanitizer: DomSanitizer,
    private authenticationService: AuthenticationService, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.authUser = this.authenticationService.getUserAuth();
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups(this.authUser.uid).subscribe(
      (result) => this.groups = result
    );
  }

  navigateToAdd() {
    this.router.navigate(['add-group']);
  }

  async signOut() {
    const alert = await this.alertController.create({
      header: 'Sign Out',
      message: 'Are you sure you want to sign out?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            alert.dismiss();
            this.authenticationService.signOut();
            this.router.navigate(['sign-in']);
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => alert.dismiss()
        }
      ]
    });
    await alert.present();
  }
}
