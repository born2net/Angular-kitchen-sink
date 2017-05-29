//our root app component
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'middleware-input',
    template: `
        <input type="text" [formControl]="form" class="form-control">
    `,
})
export class MiddlewareInput {
    @Output() value = new EventEmitter();
    @Input() middleware = obs => obs;
    form;

    ngOnInit() {
        this.form = new FormControl();

        this.form.valueChanges.let(this.middleware).subscribe(val => {
            this.value.next(val);
        });
    }

    ngOnDestory() {
        // destroy
    }

}