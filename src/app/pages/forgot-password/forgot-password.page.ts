import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
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
      email: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern(environment.email_regex)
        ]), updateOn: 'change'
      })
    });
  }

  async submit() {
    const email = this.user.controls.email.value;
    await this.authService.sendPasswordResetEmail(email)
      .then(async (response) => {
        // Show success alert
        const alert = await this.alertCtrl.create({
          header: 'Success',
          message: 'An email with further instructions has been sent to this account!',
          buttons: [{
            text: 'OK', handler: () => {
              this.navController.navigateBack(['sign-in']);
            }
          }]
        });
        await alert.present();
      });
  }

}
