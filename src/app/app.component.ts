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

    public department: string;
    public data: any = {default: 'storage'};
    public loggedIn: boolean = false;
    public location: string = 'storage';
    public contGroup: FormGroup;
    private user: string;
    private pass: string;
    private report: Array<any>

    constructor(private http: Http, private fb: FormBuilder, private toastr: ToastsManager, private vRef: ViewContainerRef, private appStore: AppStore, private localStorage: LocalStorage) {
        this.toastr.setRootViewContainerRef(vRef);
        Ngmslib.GlobalizeStringJS();
        console.log(StringJS('string-js-is-init').humanize().s);

        this.contGroup = fb.group({
            'location': [''],
            'user': [''],
            'password': [''],
            'serials': [''],
            'orderNumber': ['']
        });
        var user = this.localStorage.getItem('user')
        var pass = this.localStorage.getItem('pass')
        if (user && pass)
            this.onPasswordEntered(user, pass);
    }

    private onSelect(event) {
        this.location = this.data.default;
    }

    private runReport() {
        this.http.get(`https://secure.digitalsignage.com/inventoryManagerReport/${this.user}/${this.pass}`).map(result => result.json())
            .catch((err, o: Observable<any>) => {
                this.toastr.error('problem loading report', err);
                return <any>{status: 0, msg: 'problem loading report'};
            }).subscribe((data: any) => {
            this.report = data.msg;
        }, (err) => {
            // return this.toastr.error(err,'3');
        })

    }

    private logout() {
        this.toastr.success('logged out');
        this.localStorage.removeItem('user');
        this.localStorage.removeItem('pass');
        this.user = null;
        this.pass = null;

    }

    private onPasswordEntered(i_user?, i_pass?) {
        if (i_user && i_pass) {
            this.user = i_user;
            this.pass = i_pass;
        } else {
            this.user = this.contGroup.value.user;
            this.pass = this.contGroup.value.password;
        }
        this.http.get(`https://secure.digitalsignage.com/inventoryManagerAuth/${this.user}/${this.pass}`).map(result => result.json())
            .catch((err, o: Observable<any>) => {
                this.toastr.error('problem loading account', err);
                return <any>{status: 0, msg: 'problem with server'};
            }).subscribe((data: any) => {
            if (data.status == 0) {
                this.localStorage.removeItem('user');
                this.localStorage.removeItem('pass');
                return this.toastr.error(data.msg, '', {dismiss: 'click'});
            }
            this.department = data.msg.department;
            this.loggedIn = true;
            this.localStorage.setItem('user', this.user);
            this.localStorage.setItem('pass', this.pass);
        }, (err) => {
            // return this.toastr.error(err,'3');
        })

        console.log(this.contGroup.value.password);
    }

    public onSave() {
        var url;
        if (this.contGroup.value.serials.length < 8)
            return this.toastr.error('no valid serials');
        if (this.department == 'shipping' && this.contGroup.value.orderNumber.length < 5)
            return this.toastr.error('no valid order number provided');
        var serials = this.contGroup.value.serials.replace(/\n/ig, ':NEW:');
        if (this.department == 'shipping') {
            url = `https://secure.digitalsignage.com/inventoryManagerShipper/${this.user}/${this.pass}/${this.contGroup.value.orderNumber}/${serials}`
        } else if (this.department == 'sales') {
            url = `https://secure.digitalsignage.com/inventoryManager/${this.user}/${this.pass}/${this.contGroup.value.location}/${serials}`
        }
        this.http.get(url).map(result => result.json())
            .catch((err, o: Observable<any>) => {
                this.toastr.error('problem savings data to server ', err);
                return <any>{status: 0, msg: 'problem with server'};
            }).subscribe((data: any) => {
            if (data.status == 0)
                return this.toastr.error(data.msg, '', {dismiss: 'click'});

            return this.toastr.success(data.msg);

        }, (err) => {
            // return this.toastr.error(err,'3');
        })


    }
}

