import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {LazyComponent} from "./LazyComponent";
import {lazyOneRouting} from "./LazyOneRouting";
import {MoodRatingSvg} from "../../mood-rating-svg/MoodRatingSvg";

@NgModule({
    imports: [CommonModule, lazyOneRouting], // we import the modules this module will need like CommonModule for ngIf etc
    declarations: [LazyComponent, MoodRatingSvg], // we declare so this module can use the components listed
    exports: [LazyComponent, MoodRatingSvg], // we export components so other importing modules of this module can use the components exported
    providers: [] // list any providers, keep in mind these will be available as NEW INSTANCE provider as this is a lazy loaded module (compared to global if not lazy loaded)
})
export default class LazyOneModule {
    constructor(){
    }
}
