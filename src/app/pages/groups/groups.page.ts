import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
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
    private authenticationService: AuthenticationService, private alertController: AlertController, private dataService: DataService) { }

  ngOnInit() {
    this.authUser = this.authenticationService.getUserAuth();
    this.getGroups();
  }

  ionViewWillLoad() {
    this.authUser = this.authenticationService.getUserAuth();
    this.getGroups();
  }

  ionViewWillEnter() {
    this.authUser = this.authenticationService.getUserAuth();
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups(this.authUser.uid).subscribe(
      (response) => this.groups = response
    );
  }

  refreshGroups(event: any) {
    this.authUser = this.authenticationService.getUserAuth();
    this.getGroups();

    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  navigateToAdd() {
    this.router.navigate(['add-group']);
  }

  navigateToCalendar(group: Group) {
    this.dataService.changeData(group);
    this.router.navigate(['calendar']);
  }

  async signOut() {
    const alert = await this.alertController.create({
      header: 'Signing out',
      message: 'Are you sure you want to sign out?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => alert.dismiss()
        },
        {
          text: 'Yes',
          handler: () => {
            alert.dismiss();
            this.authenticationService.signOut();
            this.router.navigate(['sign-in']);
          }
        },
      ]
    });
    await alert.present();
  }
}
