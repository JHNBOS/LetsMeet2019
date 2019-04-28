import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
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

  constructor(private navController: NavController, private router: Router, private authService: AuthenticationService, private formBuilder: FormBuilder,
    public alertCtrl: AlertController, private userService: UserService, private storage: Storage) { }

  ngOnInit() {
    this.createFormGroup();
  }

  ionViewWillEnter() {
    if (this.authService.checkSavedUser()) {
      this.navController.navigateRoot('/home');
    }
  }

  createFormGroup() {
    this.user = this.formBuilder.group({
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
        ]), updateOn: 'change',
      }),
    });
  }

  goToSignUp() {
    this.navController.navigateForward('/register');
  }

  goToForgotPass() {
    this.navController.navigateForward('/forgot-password');
  }

  async getUserProfile(email: string): Promise<User> {
    let profile = await this.userService.getUserByEmail(email);
    return profile;
  }

  async submit() {
    const credentials = { email: this.user.controls.email.value, password: this.user.controls.password.value };
    await this.authService.signInWithEmail(credentials)
      .then(async (response) => {
        // Get user profile
        let profile = await this.getUserProfile(credentials.email);

        await this.authService.saveUser(profile).then(() => this.navController.navigateForward('/home'));
      }, (rejected: firebase.auth.Error) => { throw rejected; }).then();
  }

}
