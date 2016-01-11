///<reference path="../../../typings/app.d.ts"/>

import {Component, ElementRef} from 'angular2/core';
import {Consts} from "src/Conts";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';

@Component({
    template: `
            <div id="logoContainer" class="reshid flip">
              <div class="flipcard">
                <div class="face front">
                  <img class="img-responsive" src="assets/logo_s.png"/>
                </div>
                <div class="face back">
                  <img class="img-responsive" src="assets/logo_b.png"/>
                </div>
              </div>
            </div>
    `
})
export class Logo {
    constructor(private elementRef:ElementRef) {
        this.listenMouse();
    }

    listenMouse():Observable<any> {
        var over:Observable<any> = Observable.fromEvent(this.elementRef.nativeElement, 'mouseover');
        var out:Observable<any> = Observable.fromEvent(this.elementRef.nativeElement, 'mouseover');
        //return Observable.merge(over, out)
        return over.merge(out);

        //jQuery('.flip').mouseenter(function () {
        //    jQuery(this).find('.flipcard').addClass('flipped').mouseleave(function () {
        //        jQuery(this).removeClass('flipped');
        //    });
        //    return false;
        //});
    }
}