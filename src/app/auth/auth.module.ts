import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth.routing.module';
import { EmailRegValidatorDirective } from './email-validation.directive';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        EmailRegValidatorDirective
    ],
    imports: [
        AuthRoutingModule,
        CommonModule,
        FormsModule
    ]
})
export class AuthModule {

}