import * as firebase from 'firebase';

export class AuthService {
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            e => console.error(e)
        )
    }

    signupinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                console.log(response)
            }
        )
        .catch(
            e => console.error(e)
        )
    }
}