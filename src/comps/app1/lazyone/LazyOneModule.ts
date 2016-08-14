import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {LazyComponent} from "./LazyComponent";
import {lazyOneRouting} from "./LazyOneRouting";
import {MoodRatingSvg} from "../../mood-rating-svg/MoodRatingSvg";

@NgModule({
    imports: [CommonModule, lazyOneRouting],
    declarations: [LazyComponent, MoodRatingSvg],
    providers: []
})
export default class LazyOneModule {
    constructor(){
    }
}
