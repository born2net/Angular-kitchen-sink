/** Reference:
 * https://scotch.io/tutorials/how-to-implement-a-custom-validator-directive-confirm-password-in-angular-2
 *
 *
 **/

import {
    Directive,
    forwardRef,
    Attribute
} from "@angular/core";
import {
    Validator,
    AbstractControl,
    NG_VALIDATORS
} from "@angular/forms";

@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => PasswordEqual),
        multi: true
    }]
})
export class PasswordEqual implements Validator {
    constructor(@Attribute('validateEqual') public validateEqual: string, @Attribute('reverse') public reverse: string) {

    }

    private get isReverse() {
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true : false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value
        let v = c.value;

        // control vlaue
        let e = c.root.find(this.validateEqual);

        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            }
        }

        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) e.setErrors(null);
        }

        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            })
        }

        return null;
    }
}



// Usage:

// <div class="container">
//     <h1>Add user</h1>
// <form #f="ngForm" novalidate (ngSubmit)="save(f.value, f.valid)">
// <div class="form-group">
//     <label for="">Username</label>
// <input type="text" class="form-control" name="username" [ngModel]="user.username"
// required minlength="5" maxlength="8" #username="ngModel">
//     <small [hidden]="username.valid || (username.pristine && !f.submitted)" class="text-danger">
//     Username is required (minimum 5 characters).
// </small>
// <!--<pre *ngIf="username.errors" class="margin-20">{{ username.errors | json }}</pre>-->
// </div>
// <div class="form-group">
//     <label for="">Email</label>
// <input type="email" class="form-control" name="email" [ngModel]="user.email"
// required  #email="ngModel" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$">
//     <small [hidden]="email.valid || (email.pristine && !f.submitted)" class="text-danger">
//     Email is required and format should be <i>john@doe.com</i>.
// </small>
// <!--<pre *ngIf="email.errors" class="margin-20">{{ email.errors | json }}</pre>-->
// </div>
// <div class="form-group">
//     <label for="">Password</label>
// <input type="password" class="form-control" name="password" [ngModel]="user.password"
// required validateEqual="confirmPassword" reverse="true" #password="ngModel">
//     <small [hidden]="password.valid || (password.pristine && !f.submitted)" class="text-danger">
//     Password is required
// </small>
// <!--<pre *ngIf="password.errors" class="margin-20">{{ password.errors | json }}</pre>-->
// </div>
// <div class="form-group">
//     <label for="">Retype password</label>
// <input type="password" class="form-control" name="confirmPassword" [ngModel]="user.confirmPassword"
// required validateEqual="password" reverse="false" #confirmPassword="ngModel">
//     <small [hidden]="confirmPassword.valid || (confirmPassword.pristine && !f.submitted)" class="text-danger">
//     Password mismatch
// </small>
// <!--<pre *ngIf="confirmPassword.errors" class="margin-20">{{ confirmPassword.errors | json }}</pre>-->
// </div>
// <button type="submit" class="btn btn-default">Submit</button>
// <div class="margin-20" *ngIf="f">
//     <div>Form details:-</div>
// <pre>Is form valid?: <br>{{f.valid | json}}</pre>
// <pre>Is form submitted?: <br>{{f.submitted | json}}</pre>
// <pre>submitted value: <br>{{f.value | json}}</pre>
// </div>
// </form>
//</div>
