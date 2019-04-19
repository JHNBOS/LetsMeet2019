import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private user: firebase.User;

	constructor(private firebaseAuth: AngularFireAuth) {
		firebaseAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	async signInWithEmail(credentials) {
		return await this.firebaseAuth.auth
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.catch(error => this.handleError(error));
	}

	async signUp(credentials) {
		return await this.firebaseAuth.auth
			.createUserWithEmailAndPassword(credentials.email, credentials.password)
			.catch(error => this.handleError(error));
	}

	async sendPasswordResetEmail(email: string) {
		return await this.firebaseAuth.auth
			.sendPasswordResetEmail(email)
			.catch(error => this.handleError(error));
	}

	async confirmPasswordReset(code: string) {
		return await this.firebaseAuth.auth
			.verifyPasswordResetCode(code)
			.catch(error => this.handleError(error));
	}

	async signOut(): Promise<void> {
		return await this.firebaseAuth.auth.signOut();
	}

	isAuthenticated() {
		return this.user != null;
	}

	getUserAuth() {
		return this.user;
	}

	getEmail() {
		return this.user && this.user.email;
	}

	getUID() {
		return this.user.uid;
	}

	private handleError(error) {
		throw error;
	}
}
