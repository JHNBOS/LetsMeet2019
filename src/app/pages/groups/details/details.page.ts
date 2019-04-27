import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Group } from 'src/app/services/models/group';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class GroupDetailsPage implements OnInit {
  group: Group = null;
  createdBy: string;
  members: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    public _sanitizer: DomSanitizer,
    private dataService: DataService
  ) {
    this.dataService.serviceData.subscribe((response) => this.group = response);
  }

  ngOnInit() {
    this.getCreatedBy();
    this.getMembers();
  }

  ionViewWillEnter() {
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
}
