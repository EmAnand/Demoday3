import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

 @Directive({
     selector: '[checkEmail]',
     providers : [{provide: NG_VALIDATORS,
        useExisting: checkEmailValidator,
        multi: true

     }]
 })

 export class checkEmailValidator implements Validator{
    validate(control: AbstractControl): {[key: string]:any} | null{
        return control.value != 'vikash@gmail.com' ? { 'checkEmailkey': true}:null
    }
 }