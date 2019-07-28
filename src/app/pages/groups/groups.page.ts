import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertController, MenuController, NavController } from '@ionic/angular';
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


  constructor(private router: Router, private groupService: GroupService, public _sanitizer: DomSanitizer, private navController: NavController,
    private authenticationService: AuthenticationService, private alertController: AlertController, private dataService: DataService,
    public menuController: MenuController) { }

  ngOnInit() {
    this.authUser = this.authenticationService.getUserAuth();
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups(this.authUser.uid).subscribe(
      (response) => { setTimeout(() => this.groups = response, 1200); }
    );
  }

  refreshGroups(event: any) {
    setTimeout(() => {
      this.getGroups();
      event.target.complete();
    }, 2000);
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

  toggleSideNav() {
    this.menuController.toggle();
  }

  navigateToAdd() {
    this.router.navigate(['groups/add']);
  }

  navigateToDetails(group: Group) {
    this.dataService.changeData(group);
    this.router.navigate(['groups/details']);
  }

  navigateToCalendar(group: Group) {
    this.dataService.changeData(group);
    this.router.navigate(['calendar']);
  }
}
