///<reference path="../../../../typings/app.d.ts"/>

import {Component, Injector, provide} from "angular2/core";
import {ShoppingComponent} from "./components/shopping-component";
import {PartActions} from "./actions/part-actions";
import {CartActions} from "./actions/cart-actions";
import {AdminComponent} from "./components/admin-component";
import {FilmsComponent} from "./components/films-component";
import {UserActions} from "./actions/user-actions";
import {FilmActions} from "./actions/film-actions";

@Component({
    selector: 'Starwars',
    directives: [ShoppingComponent, AdminComponent, FilmsComponent],
    template: ` <div class="row">
            <div class="col-md-6">
                <admin></admin>
            </div>
            <div class="col-md-6">
                <shopping></shopping>
                <hr/>
                <films-component></films-component>
            </div>
        </div>`,
    providers: [PartActions, CartActions, PartActions, UserActions, FilmActions]
})

export class Starwars {
    constructor() {
        // https://babeljs.io/repl/
        // test Immutable
        //var dog1:Dog = new Dog();
        //var dog2:Dog = new Dog();
        //var dog3:Dog = new Dog();
        //var dogs = Immutable.Map();
        //dogs.set(dog1.idz, dog1);
        //dogs.find(e=> {
        //    return true
        //});
        //var a = dogs.has('anim5');
        ////dogs = dogs.push(dog2);
        ////var d2 = dogs.get(0);
        ////var a = dogs.set(1,dog3);
        ////var d3 = dogs.get(1);

    }
}
