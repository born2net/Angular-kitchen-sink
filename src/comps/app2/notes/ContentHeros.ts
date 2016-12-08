import {Component, ContentChildren, QueryList} from "@angular/core";
import {Directive, Input} from "@angular/core";

@Directive({
    selector: 'ContentHero',
})
export class ContentHero {

    @Input()
    id: number;

    @Input()
    name:string;
}

@Component({
    selector:'ContentHeroes',
    styles: [`
        .even {
            background-color: #d6d6d6;
        }
        .odd {
            background-color: #f1f1f1;
        }
    `],
    template: `
    <table>
        <thead>
            <th>Name</th>
        </thead>
        <tbody>
        <!-- you can also use the speicla variable first and last -->
        <!--<tr *ngFor="let hero of heroes; let first = first; let last = last" -->
            <!--[ngClass]="{ first: first, last: last }">-->
            <!--<td>{{hero.name}}</td>-->
        <!--</tr>-->
        <tr *ngFor="let hero of heroes; let even = even; let odd = odd" 
            [ngClass]="{ odd: odd, even: even }">
            <td>{{hero.name}}</td>
        </tr>
        </tbody>
    </table>
`
})
export class ContentHeroes {

    @ContentChildren(ContentHero)
    heroes: QueryList<ContentHero>;
}