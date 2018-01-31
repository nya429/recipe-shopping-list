import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string = null;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser.getToken()
                .then(
                    (token: string) => {
                        this.token = token;
                        this.router.navigate(['/']);
                    }
                );
            }
        )
        .catch(
            e => console.error(e)
        );
    }

    signupinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser.getToken().then(
                    (token: string) => {
                        this.token = token;
                        this.router.navigate(['/']);
                });
            }
)
        .catch(
            e => console.error(e)
        );
    }

    getToken() {
       firebase.auth().currentUser.getToken().then(
         (token: string) => this.token = token
       );
       return this.token;
    }

    isAuthenticated() {
        return this.token !== null;
    }

    logOut() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
     }
}
