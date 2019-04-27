import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ContactSelectComponent } from 'src/app/components/contact-select/contact-select.component';
import { DataService } from 'src/app/services/data.service';
import { GroupService } from 'src/app/services/group.service';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { Contact } from 'src/app/services/models/contact';
import { Group } from 'src/app/services/models/group';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class GroupDetailsPage implements OnInit {
  authUser: firebase.User = null;

  group: Group = null;
  createdBy: string;
  members: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private groupService: GroupService,
    public _sanitizer: DomSanitizer,
    private dataService: DataService,
    private authenticationService: AuthenticationService,
    private modal: ModalController,
    private alertController: AlertController
  ) {
    this.dataService.serviceData.subscribe((response) => this.group = response);
  }

  ngOnInit() {
    this.getUser();
    this.getCreatedBy();
    this.getMembers();
  }

  ionViewWillEnter() {
  }

  getUser() {
    this.authUser = this.authenticationService.getUserAuth();
  }

  getCreatedBy() {
    this.userService.getUser(this.group.createdBy).subscribe((response) => this.createdBy = `${response.firstName} ${response.lastName}`);
  }

  getMembers() {
    for (let index = 0; index < this.group.members.length; index++) {
      const memberUid = this.group.members[index];
      this.userService.getUser(memberUid).subscribe((response) => this.members.push(response));
    }
  }

  async addMember() {
    const modal = await this.modal.create({
      component: ContactSelectComponent,
      componentProps: {
        contactsAlreadySelected: this.members
      },
      cssClass: 'modal-fullscreen'
    });

    modal.onDidDismiss().then((response) => this.addMembers(response.data));
    await modal.present();
  }

  async addMembers(members: Contact[]) {
    for (let index = 0; index < members.length; index++) {
      const member = members[index];

      await this.groupService.addMember(this.group.id, member.id);
    }
  }

  async removeMember(member: User) {
    const alert = await this.alertController.create({
      header: 'Remove Member',
      message: 'Are you sure you want to remove this member from the group?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.groupService.removeMember(this.group.id, member.uid).then((response) => this.ngOnInit());
          }
        },
        {
          text: 'No'
        }
      ]
    });

    await alert.present();
  }
}
