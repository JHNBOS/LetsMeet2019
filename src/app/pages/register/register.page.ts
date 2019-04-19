import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
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
    ],
    'firstName': [
      { type: 'required', message: 'First name is required' }
    ],
    'lastName': [
      { type: 'required', message: 'Last name is required' }
    ],
  };

  constructor(private navController: NavController, private authService: AuthenticationService, private formBuilder: FormBuilder,
    public alertCtrl: AlertController, private userService: UserService) {
  }

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.user = this.formBuilder.group({
      firstName: new FormControl('', {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'blur'
      }),
      lastName: new FormControl('', {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'blur'
      }),
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

  async submit() {
    const credentials = { email: this.user.controls.email.value, password: this.user.controls.password.value };
    await this.authService.signUp(credentials)
      .then(async (response: firebase.auth.UserCredential) => {
        let showAlert = false;

        // Create user in database
        if (response) {
          this.createUser(response.user.uid).then((result) => showAlert = result);
        }

        // Show success alert
        if (showAlert) {
          const alert = await this.alertCtrl.create({
            header: 'Success',
            message: 'Sign up was successful!',
            buttons: ['OK']
          });
          await alert.present();
        }
        this.navController.navigateBack(['sign-in']);
      }, (rejected: firebase.auth.Error) => { throw rejected; });
  }

  createUser(uid: string): Promise<boolean> {
    const newUser: User = {
      uid: uid,
      color: '',
      avatar: '',
      firstName: this.user.controls.firstName.value,
      lastName: this.user.controls.lastName.value
    };

    return this.userService.addUser(newUser);
  }

}
