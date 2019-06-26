import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

import { AuthenticationService } from '../../services/helpers/authentication.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  user: FormGroup;
  error_messages = environment.error_messages;

  loader: any;

  constructor(private navController: NavController, private router: Router, private authService: AuthenticationService, private formBuilder: FormBuilder,
    private userService: UserService, public loadingController: LoadingController, private alertController: AlertController, private storage: Storage) {
  }

  ngOnInit() {
    this.createFormGroup();
  }

  async init() {
    this.loader = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Signing in...',
      translucent: true,
      backdropDismiss: false,
      showBackdrop: true,
      keyboardClose: true
    });
  }

  async ionViewWillEnter() {
    await this.init();

    this.authService.checkSavedUser().then(async (response) => {
      if (response == true) {
        await this.loader.present();

        setTimeout(() => {
          this.loadingController.dismiss();
          this.navController.navigateRoot('/home');
        }, 2000);
      }
    }, (error) => { this.loadingController.dismiss(); });
  }

  createFormGroup() {
    this.user = this.formBuilder.group({
      email: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern(environment.email_regex)
        ]), updateOn: 'blur'
      }),
      password: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(environment.password_regex)
        ]), updateOn: 'change',
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

  goToSignUp() {
    this.navController.navigateForward('/register');
  }

  goToForgotPass() {
    this.navController.navigateForward('/forgot-password');
  }

  getUserProfile(email: string): Promise<User> {
    return this.userService.getUserByEmail(email)
      .then((result) => { return result; });
  }

  async submit() {
    await this.loader.present();

    const credentials = { email: this.user.controls.email.value, password: this.user.controls.password.value };
    await this.authService.signInWithEmail(credentials).then(() => {
      this.getUserProfile(credentials.email).then(async (profile) => {
        this.authService.saveUser(profile).then(async () => {
          await this.loadingController.dismiss().then(() => {
            this.navController.navigateRoot('/home');
          }, (err) => console.log(err));
        });
      });
    }, (rejected: firebase.auth.Error) => { this.loadingController.dismiss(); throw rejected; });
  }

}
