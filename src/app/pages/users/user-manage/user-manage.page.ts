import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { UserService } from 'src/app/services/user.service';

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
  error_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'firstName': [
      { type: 'required', message: 'First name is required' }
    ],
    'lastName': [
      { type: 'required', message: 'Last name is required' }
    ],
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public platform: Platform,
    private formBuilder: FormBuilder,
    public _sanitizer: DomSanitizer,
    private camera: Camera,
    public alertCtrl: AlertController,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    let uid = this.activatedRoute.snapshot.paramMap.get('uid');
    this.getUser(uid);
  }

  getUser(uid: string) {
    this.authUser = this.authenticationService.getUserAuth();
    this.memberSince = this.authUser.metadata.creationTime;
    this.userService.getUser(uid).subscribe(result => { this.user = result; this.createFormGroup(); });
  }

  createFormGroup() {
    this.userDetails = this.formBuilder.group({
      firstName: new FormControl(this.user.firstName, {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'blur'
      }),
      lastName: new FormControl(this.user.lastName, {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'blur'
      }),
      email: new FormControl(this.authUser.email, { validators: [] }),
      new_password: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ]), updateOn: 'blur'
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
    this.userService.updateUser(this.user).then(() => {
      // Check if password needs to be updated
      if (this.userDetails.controls.new_password.value != '') {
        this.authUser.updatePassword(this.userDetails.controls.new_password.value);
      }
    });

    // Show success alert
    if (true) {
      const alert = await this.alertCtrl.create({
        header: 'Success',
        message: 'Profile sucessfully updated!',
        buttons: ['OK']
      });
      await alert.present();
    }
    this.router.navigate(['home']);
  }
}
