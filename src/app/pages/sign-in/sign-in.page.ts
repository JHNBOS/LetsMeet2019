import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

import { AuthenticationService } from '../../services/helpers/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  user: FormGroup;
  error_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ]
  };

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
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]), updateOn: 'blur'
      }),
      password: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ]), updateOn: 'blur'
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
