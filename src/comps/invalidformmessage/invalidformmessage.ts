// ref: https://hackernoon.com/create-reuseable-validation-directive-in-angualr-2-dcb0b0df2ce8

import {Component, Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef} from "@angular/core";
import {AbstractControl, ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

import {Observable, Subscription} from "rxjs/Rx";


@Directive({
    selector: '[invalidmessage]'
})
export class InvalidmessageDirective implements OnInit, OnDestroy {
    @Input() invalidmessage: string;
    control: AbstractControl;
    hasView = false;
    controlValue$: Observable<any>;
    controlSubscription: Subscription;
    hasSubmitted: boolean;

    constructor(private _fg: ControlContainer,
                private _el: ElementRef,
                private render: Renderer2) {
    }

    ngOnInit() {
        this.control = this.form.get(this.invalidmessage);
        let formSubmit$ = (<FormGroupDirective>this._fg).ngSubmit.map(() => {
            this.hasSubmitted = true;
        });
        this.controlValue$ = Observable.merge(this.control.valueChanges, Observable.of(''), formSubmit$);
        this.controlSubscription = this.controlValue$.subscribe(() => {
            this.setVisible();
        });
    }

    private setVisible() {
        if (this.control.invalid && (this.control.dirty || this.hasSubmitted)) {
            this.render.removeStyle(this._el.nativeElement, 'display');
        } else {
            this.render.setStyle(this._el.nativeElement, 'display', 'none');
        }
    }

    match(error: string) {
        if (this.control && this.control.errors) {
            if (Object.keys(this.control.errors).indexOf(error) > -1) {
                return true;
            }
        }
        return false;
    }

    get form() {
        return this._fg.formDirective ? (this._fg.formDirective as FormGroupDirective).form : null;
    }

    ngOnDestroy() {
        this.controlSubscription.unsubscribe();
    }
}


@Directive({
    selector: '[invalidType]'
})
export class InvalidTypeDirective implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @Input('invalidType') type: string;
    private hasView = false;

    constructor(private invalidmessage: InvalidmessageDirective,
                private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {
    }

    ngOnInit() {
        this.invalidmessage.controlValue$.subscribe(() => {
            this.setVisible();
        });
    }

    private setVisible() {
        if (this.invalidmessage.match(this.type)) {
            if (!this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            }
        } else {
            if (this.hasView) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        }
    }
}


@Component({
    selector: 'invalid-form-message',
    template: `
        <form [formGroup]="myForm">
            <div>
                <label>Name</label>
                <input type="text" formControlName="name">
                <div invalidmessage="name">
                    <p *invalidType="'required'">Please provide name</p>
                </div>
            </div>
            <div>
                <label>Lastname</label>
                <input type="text" formControlName="lastname">
                <div invalidmessage="lastname">
                    <p *invalidType="'required'">Please provide lastname</p>
                </div>
            </div>
            <div>
                <label>Email</label>
                <input type="text" formControlName="email">
                <div invalidmessage="email">
                    <p *invalidType="'required'">Please provide email</p>
                    <p *invalidType="'email'">Please provide valid email</p>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    `,
})
export class InvalidFormMessage implements OnInit {
    name: string;
    myForm: FormGroup;

    constructor(private _fb: FormBuilder) {

    }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }
}


