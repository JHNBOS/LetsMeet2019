import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
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
          Validators.pattern(environment.email_regex)
        ]), updateOn: 'blur'
      }),
      password: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(environment.password_regex)
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
            buttons: [{
              text: 'OK', handler: () => {
                this.navController.navigateBack(['sign-in']);
              }
            }]
          });
          await alert.present();
        }
      }, (rejected: firebase.auth.Error) => { throw rejected; });
  }

  createUser(uid: string): Promise<boolean> {
    const newUser: User = {
      uid: uid,
      email: this.user.controls.email.value,
      color: '',
      avatar: '',
      firstName: this.user.controls.firstName.value,
      lastName: this.user.controls.lastName.value
    };

    return this.userService.addUser(newUser);
  }

}
