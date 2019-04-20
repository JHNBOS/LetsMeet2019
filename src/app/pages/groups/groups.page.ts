import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/app/services/models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  groups: Group[] = null;

  constructor(private router: Router, private groupService: GroupService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  getGroups() {
    this.groupService.getGroups().subscribe(
      (result) => this.groups = result
    );
  }

  navigateToAdd() {
    this.router.navigate(['add-group']);
  }

}
