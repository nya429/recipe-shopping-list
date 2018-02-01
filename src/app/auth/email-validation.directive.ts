import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, FormControl, Validator, NG_VALIDATORS } from "@angular/forms";



  @Directive({
    selector: '[emailValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailRegValidatorDirective, multi: true}]
  })
  export class EmailRegValidatorDirective implements Validator {
    validatee: ValidatorFn; 

    constructor() {  
      this.validatee = this.emailRegValidator;  
     }  

    validate(control: AbstractControl): {[key: string]: boolean} {
      return control ? this.validatee(control): null;
    }

   emailRegValidator(control: AbstractControl): ValidatorFn {
      return (control: AbstractControl): {[key: string]: boolean} => {
        console.log(control.value)
        const forbidden = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);
        return forbidden ? {'InvalidEmail': true} : null;
      };
    }
  
  }