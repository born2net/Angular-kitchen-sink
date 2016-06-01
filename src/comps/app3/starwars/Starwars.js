System.register(["@angular/core", "./components/shopping-component", "./actions/part-actions", "./actions/cart-actions", "./components/admin-component", "./components/films-component", "./actions/user-actions", "./actions/film-actions"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_component_1, part_actions_1, cart_actions_1, admin_component_1, films_component_1, user_actions_1, film_actions_1;
    var Starwars;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_component_1_1) {
                shopping_component_1 = shopping_component_1_1;
            },
            function (part_actions_1_1) {
                part_actions_1 = part_actions_1_1;
            },
            function (cart_actions_1_1) {
                cart_actions_1 = cart_actions_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (films_component_1_1) {
                films_component_1 = films_component_1_1;
            },
            function (user_actions_1_1) {
                user_actions_1 = user_actions_1_1;
            },
            function (film_actions_1_1) {
                film_actions_1 = film_actions_1_1;
            }],
        execute: function() {
            Starwars = (function () {
                function Starwars() {
                }
                Starwars = __decorate([
                    core_1.Component({
                        selector: 'Starwars',
                        directives: [shopping_component_1.ShoppingComponent, admin_component_1.AdminComponent, films_component_1.FilmsComponent],
                        template: " <div class=\"row\">\n            <div class=\"col-md-6\">\n                <admin></admin>\n            </div>\n            <div class=\"col-md-6\">\n                <shopping></shopping>\n                <hr/>\n                <films-component></films-component>\n            </div>\n        </div>",
                        providers: [part_actions_1.PartActions, cart_actions_1.CartActions, part_actions_1.PartActions, user_actions_1.UserActions, film_actions_1.FilmActions]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Starwars);
                return Starwars;
            }());
            exports_1("Starwars", Starwars);
        }
    }
});
//# sourceMappingURL=Starwars.js.map