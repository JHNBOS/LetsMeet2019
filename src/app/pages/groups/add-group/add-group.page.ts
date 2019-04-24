import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { GroupService } from 'src/app/services/group.service';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { Group } from 'src/app/services/models/group';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.page.html',
  styleUrls: ['./add-group.page.scss'],
})
export class AddGroupPage implements OnInit {
  authUser: firebase.User;

  groupDetails: FormGroup;
  error_messages = environment.error_messages;

  constructor(
    private router: Router,
    public platform: Platform,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private authenticationService: AuthenticationService,
    private groupService: GroupService
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUser();
    this.createFormGroup();
  }

  getUser() {
    this.authUser = this.authenticationService.getUserAuth();
  }

  createFormGroup() {
    this.groupDetails = this.formBuilder.group({
      groupName: new FormControl('', {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'change'
      })
    });
  }

  submit() {
    let group = new Group();
    group.name = this.groupDetails.controls.groupName.value;
    group.createdBy = this.authUser.uid;

    this.groupService.addGroup(group).then(async (response) => {
      // Add user to group
      if (typeof response !== 'boolean') {
        this.addUserToGroup(response.id);
      }
    });
  }

  addUserToGroup(id: string) {
    this.groupService.addMember(id, this.authUser.uid).then(async (response) => {
      // Show success alert
      if (response) {
        const alert = await this.alertCtrl.create({
          header: 'Success',
          message: 'Group was sucessfully created!',
          buttons: ['OK']
        });
        await alert.present();
      }
      this.router.navigate(['home']);
    });
  }
}
