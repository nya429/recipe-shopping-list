import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './../auth.service';
import { CanComponentDeactivate } from './../deactivate-guard.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  alertFlag: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.errorEmiiter.subscribe(
      error  => {
        this.alertFlag = error.code;
      }
    );
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

  onCancle() {
    this.alertFlag = null;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
