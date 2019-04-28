import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class UserManagePage implements OnInit {
  user: User = null;
  authUser: firebase.User = null;
  memberSince: string;

  userDetails: FormGroup;
  error_messages = environment.error_messages;

  loader: any;
  toast: any;
  showSuccess = false;

  constructor(
    public platform: Platform,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    public _sanitizer: DomSanitizer,
    private camera: Camera,
    private storage: Storage,
    public toastController: ToastController,
    public loadingController: LoadingController,
  ) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    setTimeout(async () => {
      this.loader = await this.loadingController.create({
        spinner: 'crescent',
        message: 'Saving changes...',
        translucent: true,
        backdropDismiss: false,
        showBackdrop: true,
        keyboardClose: true
      });
      this.toast = await this.toastController.create({
        message: '',
        duration: 2000,
        position: 'bottom',
        showCloseButton: true
      });
    }, 0);
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
            this.toast.message = 'Could not upload image. Please try again!';
            await this.toast.present();
          });
      }
    });
  }

  async submit() {
    await this.loader.present();

    // Update properties
    this.user.firstName = this.userDetails.controls.firstName.value;
    this.user.lastName = this.userDetails.controls.lastName.value;

    this.userService.updateUser(this.user).then((response) => {
      this.showSuccess = response;
      if (this.userDetails.controls.new_password.value != '') {
        this.authUser.updatePassword(this.userDetails.controls.new_password.value);
      }

      // Show toast
      if (this.showSuccess) {
        this.toast.message = 'Profile successfully updated!';
        this.toast.onDidDismiss().then(() => this.router.navigate(['home']));

        this.authenticationService.saveUser(this.user).then(async () => {
          this.loadingController.dismiss();
          await this.toast.present();
        });
      }
      this.loadingController.dismiss();
    });
  }

  navigateBack() {
    this.router.navigate(['home/profile']);
  }
}
