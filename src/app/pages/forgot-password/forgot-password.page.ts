import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  user: FormGroup;
  error_messages = environment.error_messages;

  loader: any;
  toast: any;

  constructor(private navController: NavController, private authService: AuthenticationService, private formBuilder: FormBuilder,
    public toastController: ToastController, public loadingController: LoadingController) {
  }

  ngOnInit() {
    this.init();
    this.createFormGroup();
  }

  async init() {
    this.loader = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Resetting password...',
      translucent: true,
      backdropDismiss: false,
      showBackdrop: true,
      keyboardClose: true
    });

    this.toast = await this.toastController.create({
      message: 'An email with further instructions has been sent to this account!',
      duration: 5000,
      position: 'bottom'
    });
    this.toast.onDidDismiss().then(() => this.navController.navigateBack('sign-in'));
  }

  createFormGroup() {
    this.user = this.formBuilder.group({
      email: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern(environment.email_regex)
        ]), updateOn: 'change'
      })
    });
  }

  async submit() {
    await this.loader.present();

    const email = this.user.controls.email.value;
    await this.authService.sendPasswordResetEmail(email)
      .then(async (response) => {
        this.loadingController.dismiss();
        this.toast.present();
      });
  }

}
