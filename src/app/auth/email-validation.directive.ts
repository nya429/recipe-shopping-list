import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, FormControl, Validator, NG_VALIDATORS } from '@angular/forms';


export function emailRegValidator(): ValidatorFn {
  return (c: AbstractControl): {[key: string]: boolean} => {
    console.log(c.value);
    const isInvalid = !/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);
    return isInvalid ? {'InvalidEmail': true} : null;
  };
}
  @Directive({
    selector: '[appEmailValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailRegValidatorDirective, multi: true}]
  })
  export class EmailRegValidatorDirective implements Validator {
    validate(control: AbstractControl): {[key: string]: boolean} {
      return control ? emailRegValidator()(control) : null;
    }
  }
