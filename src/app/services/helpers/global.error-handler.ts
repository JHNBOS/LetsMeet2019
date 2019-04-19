import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector, private alertCtrl: AlertController) { }

    async handleError(error) {
        console.error('%O', error);

        if (error.promise && error.rejection) {
            error = error.rejection;
        }

        let errorMsg = '';
        switch (error.code) {
            case 'auth/expired-action-code':
                errorMsg = 'Reset code is expired!';
                break;
            case 'auth/invalid-action-code':
                errorMsg = 'Reset code is invalid!';
                break;
            case 'auth/user-not-found':
                errorMsg = 'User was not found!';
                break;
            case 'auth/email-already-in-use':
                errorMsg = 'E-mail is already in use!';
                break;
            case 'auth/invalid-email':
                errorMsg = 'E-mail is incorrect!';
                break;
            case 'auth/wrong-password':
                errorMsg = 'Password is incorrect!';
                break;
            case 'auth/user-disabled':
                errorMsg = 'This account has been disabled!';
                break;
            case 'auth/operation-not-allowed':
                errorMsg = 'This account has not been enabled!';
                break;
            case 'auth/weak-password':
                errorMsg = 'Password is not strong enough!';
                break;
        }

        const alert = await this.alertCtrl.create({
            header: 'Error',
            message: errorMsg,
            buttons: ['OK']
        });
        await alert.present();
    }
}
