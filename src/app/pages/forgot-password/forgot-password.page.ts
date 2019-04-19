import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  user: FormGroup;
  error_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ]
  };

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
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]), updateOn: 'blur'
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
          buttons: ['OK']
        });
        await alert.present();
        this.navController.navigateBack(['sign-in']);
      });
  }

}
