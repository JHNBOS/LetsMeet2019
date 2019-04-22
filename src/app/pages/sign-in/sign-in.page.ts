import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
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

  constructor(private navController: NavController, private authService: AuthenticationService, private formBuilder: FormBuilder,
    public alertCtrl: AlertController) { }

  ngOnInit() {
    this.createFormGroup();
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

  async submit() {
    const credentials = { email: this.user.controls.email.value, password: this.user.controls.password.value };
    await this.authService.signInWithEmail(credentials)
      .then((response) => {
        if (response) {
          // Continue to home page
          this.navController.navigateForward('/home');
        }
      }, (rejected: firebase.auth.Error) => { throw rejected; });
  }

}
