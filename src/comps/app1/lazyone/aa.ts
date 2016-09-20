import {Component} from "@angular/core";
import {AuthService} from "../../../services/AuthService";


@Component({
    selector: 'AAAA',
    template: `<h1>FOO BAR</h1>
           
<small>I am Lazy load component loaded via router</small>
<h2>Hello world, I was lazy loaded...</h2>
<h3>Examples for lazy loading: </h3>
<h4><a href="http://plnkr.co/edit/mXSjnUtN7CM6ZqtOicE2?p=preview">plnkr 1</a></h4>
<h4><a href="http://plnkr.co/edit/TU73YA7kD7ZMyD8wEsUd?p=preview">plnkr 2</a></h4>
<hr/>
<h5><a href="https://angular.io/docs/ts/latest/guide/ngmodule.html">read the for modules docs</a></h5>
<h5><a href="https://angular.io/docs/ts/latest/guide/router.html">read the for router docs</a></h5>
<hr/>

<small>I am mood-rating component with embedded SVG</small>
<h4>
    How are you feeling today?
</h4>
<mood-rating [(value)]="rating" [size]="40" style="color: #FFC125 ;"></mood-rating>
<hr/>
<mood-rating [(value)]="rating" [size]="60" style="color: #1C86EE ;"></mood-rating>
<hr/>
<mood-rating [(value)]="rating" [size]="90" style="color: #FF0099 ;"></mood-rating>

<h1>Hellow world</h1>

`,
})
export class AAAA {
    constructor(auth:AuthService){
        alert('AAAA ' + auth)
    }
}