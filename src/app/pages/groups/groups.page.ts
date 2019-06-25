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
  groups: Group[];

  constructor(private router: Router, private groupService: GroupService, public _sanitizer: DomSanitizer,
    private authenticationService: AuthenticationService, private alertController: AlertController, private dataService: DataService) { }

  ngOnInit() {
    console.log('Groups');
    this.authUser = this.authenticationService.getUserAuth();
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.getGroups();
    }, 2500);
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
    }, 2500);
  }

  async deleteGroup(group: Group) {
    const alert = await this.alertController.create({
      header: 'Leave Group',
      message: 'Are you sure you want to leave this group?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.groupService.removeMember(group.id, this.authUser.uid).then((response) => {
              if (group.createdBy == this.authUser.uid) {
                this.groupService.assignNewCreator(group).then((response) => this.getGroups());
              }
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

  navigateToAdd() {
    this.router.navigate(['group/add']);
  }

  navigateToDetails(group: Group) {
    this.dataService.changeData(group);
    this.router.navigate(['group/details']);
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
