import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {LazyComponent} from "./LazyComponent";
import {lazyOneRouting} from "./LazyOneRouting";

@NgModule({
    imports: [CommonModule, lazyOneRouting],
    declarations: [LazyComponent],
    providers: []
})
export default class LazyOneModule {
    constructor(){
    }
}
