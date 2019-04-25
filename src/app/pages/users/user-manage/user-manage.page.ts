import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

import { User } from '../../../services/models/user';


@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.page.html',
  styleUrls: ['./user-manage.page.scss'],
})
export class UserManagePage implements OnInit {
  user: User = null;
  authUser: firebase.User = null;
  memberSince: string;

  userDetails: FormGroup;
  error_messages = environment.error_messages;

  constructor(
    private router: Router,
    public platform: Platform,
    private formBuilder: FormBuilder,
    public _sanitizer: DomSanitizer,
    private camera: Camera,
    public alertCtrl: AlertController,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private storage: Storage
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUser();
  }

  getUser() {
    this.authUser = this.authenticationService.getUserAuth();
    this.memberSince = this.authUser.metadata.creationTime;
    this.userService.getUser(this.authUser.uid).subscribe(response => { this.user = response; this.createFormGroup(); });
  }

  createFormGroup() {
    this.userDetails = this.formBuilder.group({
      firstName: new FormControl(this.user.firstName, {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'change'
      }),
      lastName: new FormControl(this.user.lastName, {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'change'
      }),
      email: new FormControl(this.authUser.email, { validators: [] }),
      new_password: new FormControl('', {
        validators: Validators.compose([
          Validators.minLength(5),
          Validators.pattern(environment.password_regex)
        ]), updateOn: 'change'
      }),
    });
  }

  async uploadAvatar() {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      correctOrientation: true
    };

    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.camera.getPicture(options).then(
          (imageData) => {
            let base64Image = "data:image/jpeg;base64," + imageData;
            this.user.avatar = base64Image;
          }, async (error) => {
            const alert = await this.alertCtrl.create({
              header: 'Error',
              message: 'Could not upload image. Please try again!',
              buttons: ['OK']
            });
            await alert.present();
          });
      }
    });
  }

  async submit() {
    let showSuccess = false;
    this.user.firstName = this.userDetails.controls.firstName.value;
    this.user.lastName = this.userDetails.controls.lastName.value;

    this.userService.updateUser(this.user).then((response) => {
      showSuccess = response;

      // Check if password needs to be updated
      if (this.userDetails.controls.new_password.value != '') {
        this.authUser.updatePassword(this.userDetails.controls.new_password.value);
      }
    });

    // Show success alert
    if (showSuccess) {
      const alert = await this.alertCtrl.create({
        header: 'Success',
        message: 'Profile sucessfully updated!',
        buttons: [{
          text: 'OK', handler: () => {
            this.router.navigate(['home']);
          }
        }]
      });

      this.storage.clear();
      this.storage.set('user', this.user).then(async () => {
        await alert.present();
      });
    }
  }

  navigateBack() {
    this.router.navigate(['home/profile']);
  }
}
