import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { User } from '../models/user';


@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private user: firebase.User;

	constructor(private firebaseAuth: AngularFireAuth, private storage: Storage) {
		this.firebaseAuth.authState.subscribe(user => this.user = user);
	}

	async signInWithEmail(credentials) {
		await this.firebaseAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async () => {
			return this.firebaseAuth.auth
				.signInWithEmailAndPassword(credentials.email, credentials.password)
				.catch(error => this.handleError(error));
		});
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
		this.storage.clear();
		return await this.firebaseAuth.auth.signOut();
	}

	async saveUser(user: User): Promise<void> {
		this.storage.clear();
		await this.storage.set('firebase', this.user)
			.then((response) => this.storage.set('user', user));
	}

	checkSavedUser(): Promise<boolean> {
		return this.storage.ready().then(() => {
			return this.storage.get('firebase').then((response) => true);
		});
	}

	isAuthenticated() {
		return this.user != null;
	}

	getFireAuth() {
		return this.firebaseAuth;
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
