import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private alertController: AlertController, private authenticationService: AuthenticationService,
    private navController: NavController) { }

  async signOut() {
    const alert = await this.alertController.create({
      header: 'Signing out',
      message: 'Are you sure you want to sign out?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => alert.dismiss()
        },
        {
          text: 'Yes',
          handler: () => {
            alert.dismiss();
            this.authenticationService.signOut();
            this.navController.navigateRoot('sign-in');
          }
        },
      ]
    });
    await alert.present();
  }
}
