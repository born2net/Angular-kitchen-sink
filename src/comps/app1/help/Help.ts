import {Component} from "angular2/core";
import {Contributors} from "./contributors/contributors";
import {Alert, Rating} from 'ng2-bootstrap/ng2-bootstrap';
import {CommBroker} from "../../../services/CommBroker";
import {Consts} from "../../../Conts";
import {Tabs} from "../../tabs/tabs";
import {Tab} from "../../tabs/tab";

@Component({
    selector: 'Help',
    providers: [Contributors],
    directives: [Alert, Rating, Tab, Tabs, Contributors],
    template: ` <small>I am Help component and using
                <a href="https://github.com/valor-software/ng2-bootstrap" target="_blank">ng2-bootstrap</a></small>
                <br/>
                <alert type="info">Welcome to Angular2 Bootstrap starter pack!</alert>
                <rating [(ngModel)]="rate" [max]="max" [readonly]="isReadonly" [titles]="['one','two','three']" ></rating>
                <br/>
                  <tabs>
                    <tab [tabtitle]="'About this app'">
                      <h4>
                        This App was created as both a starting point for anyone looking to create a scalable application in Angular 2
                      as it focuses on key concepts of object oriented / component programming.</h4>
                      <hr/>
                      <h4>We also try and touch all the major aspects
                      of the language to give new commers a sample code base to reference for help (well at least until Angular 2 takes over
                      the universe | Angular 2 - one framework baby!!!).</h4>
                      <hr/>
                      <h5>Want to help? visit me on Github</h5>
                      <center>
                        <a id="largeGit" href="https://github.com/born2net/ng2Boilerplate" target="_blank" class="fa fa-github"></a>
                      </center>

                    </tab>
                    <tab [tabtitle]="'Contributors'" >
                      <Contributors></Contributors>
                    </tab>
                    <tab tabtitle="Angular 2 Resources">
                      <div class="container">
                        <div class="notice notice-info">
                          <strong>videos</strong> <a target="_blank" href="https://youtube.com">Watch the video tutorial on this project</a>
                        </div>
                        <div class="notice notice-success">
                          <strong>home page</strong> <a target="_blank" href="https://angular.io/">Angular 2 home page</a>
                        </div>
                        <div class="notice notice-danger">
                          <strong>docs</strong> <a target="_blank" href="https://angular.io/docs/js/latest//">Angular 2 docs</a>
                        </div>
                        <div class="notice notice-info">
                          <strong>videos</strong> <a target="_blank" href="https://egghead.io/technologies/angular2">EggHead Angular 2 tutorials</a>
                        </div>
                        <div class="notice notice-warning">
                          <strong>books</strong> <a target="_blank" href="https://pragprog.com/book/smreactjs/reactive-programming-with-rxjs">rx.js book</a>
                        </div>
                        <div class="notice notice-warning">
                          <strong>books</strong> <a target="_blank" href="https://www.ng-book.com/2/">ng2 book</a>
                        </div>
                      </div>
                    </tab>
                  </tabs>
                `
})

export class Help  {
    constructor(private commBroker:CommBroker) {
    }
    ngOnInit(){
        this.commBroker.getService(Consts.Services().App).appResized();
    }
}
