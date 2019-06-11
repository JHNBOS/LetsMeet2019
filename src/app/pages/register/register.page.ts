import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: FormGroup;
  error_messages = environment.error_messages;

  loader: any;
  toast: any;

  constructor(private navController: NavController, private authService: AuthenticationService, private formBuilder: FormBuilder,
    public toastController: ToastController, private loadingController: LoadingController, private userService: UserService,
    private alertController: AlertController) {
  }

  ngOnInit() {
    this.init();
    this.createFormGroup();
  }

  async init() {
    this.loader = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Signing up...',
      translucent: true,
      backdropDismiss: false,
      showBackdrop: true,
      keyboardClose: true
    });

    this.toast = await this.toastController.create({
      message: 'Your account has successfully been created!',
      duration: 2000,
      position: 'bottom',
      showCloseButton: true
    });
    this.toast.onDidDismiss().then(() => { this.authService.resetAuth(); this.navController.navigateBack('sign-in'); });
  }

  createFormGroup() {
    this.user = this.formBuilder.group({
      firstName: new FormControl('', {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'change'
      }),
      lastName: new FormControl('', {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'change'
      }),
      email: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern(environment.email_regex)
        ]), updateOn: 'change'
      }),
      password: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(environment.password_regex)
        ]), updateOn: 'change'
      }),
    });
  }

  async showPasswordDetails() {
    const alert = await this.alertController.create({
      header: 'Password Requirements',
      message: `<span style="font-size:0.9rem;">Your password needs to:</span> <br> 
                <ul style="padding:0 0 0 20px;font-size:0.85rem;">
                  <li>Include both lowercase and uppercase characters</li>
                  <li>Include at least one number</li>
                  <li>Be at least 5 characters long</li>
                </ul>`,
      buttons: ['OK']
    });
    return await alert.present();
  }

  async submit() {
    await this.loader.present();

    const credentials = { email: this.user.controls.email.value, password: this.user.controls.password.value };
    await this.authService.signUp(credentials)
      .then(async (response: firebase.auth.UserCredential) => {
        if (response) {
          this.createUser(response.user.uid);
        }

        this.loadingController.dismiss();
        await this.toast.present();
      }, (rejected: firebase.auth.Error) => { this.loadingController.dismiss; throw rejected; });
  }

  createUser(uid: string): Promise<boolean> {
    const newUser: User = {
      uid: uid,
      email: this.user.controls.email.value,
      color: '',
      avatar: environment.profile_avatar,
      firstName: this.user.controls.firstName.value,
      lastName: this.user.controls.lastName.value
    };

    return this.userService.addUser(newUser).then((response) => response);
  }

}
