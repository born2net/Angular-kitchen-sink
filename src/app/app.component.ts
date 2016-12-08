import {Component, ViewContainerRef} from '@angular/core';
import {Ngmslib} from "ng-mslib";
import {ToastsManager, ToastOptions} from "ng2-toastr";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Http} from "@angular/http";
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";
import {LocalStorage} from "../services/LocalStorage";
import {AppStore} from "angular2-redux-util";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private http: Http, private fb: FormBuilder, private toastr: ToastsManager, private vRef: ViewContainerRef, private appStore: AppStore, private localStorage: LocalStorage) {
        this.toastr.setRootViewContainerRef(vRef);
        Ngmslib.GlobalizeStringJS();
        console.log(StringJS('string-js-is-init').humanize().s);
    }
}

