import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCi1WQErpivMi6aKC6Ehz6C3qok9qV8E3I",
      authDomain: "ngrecipe-ff888.firebaseapp.com"
    })
  }
}
