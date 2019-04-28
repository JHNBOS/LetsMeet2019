import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
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
    public toastController: ToastController, private loadingController: LoadingController, private userService: UserService) {
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
      message: 'Your account has successfully been created',
      duration: 5000,
      position: 'bottom'
    });
    this.toast.onDidDismiss().then(() => this.navController.navigateBack('sign-in'));
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
