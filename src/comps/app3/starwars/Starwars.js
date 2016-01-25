var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var redux_1 = require("redux");
var parts_reducer_1 = require("./reducers/parts-reducer");
var cart_reducer_1 = require("./reducers/cart-reducer");
var angular2_redux_1 = require("angular2-redux");
var shopping_component_1 = require("./components/shopping-component");
var CommBroker_1 = require("../../../services/CommBroker");
var part_actions_1 = require("./actions/part-actions");
var cart_actions_1 = require("./actions/cart-actions");
var Lib_1 = require("../../../Lib");
var Consts = require("./StoreConsts");
var admin_component_1 = require("./components/admin-component");
var films_component_1 = require("./components/films-component");
var user_actions_1 = require("./actions/user-actions");
var film_actions_1 = require("./actions/film-actions");
var Starwars = (function () {
    function Starwars(commBroker) {
        this.commBroker = commBroker;
        var createStoreWithMiddleware = redux_1.applyMiddleware(Lib_1.Lib.loggerMiddleware)(redux_1.createStore);
        var reducers = redux_1.combineReducers({ parts: parts_reducer_1.default, cart: cart_reducer_1.default });
        var appStore = new angular2_redux_1.AppStore(createStoreWithMiddleware(reducers));
        this.commBroker.setService(Consts.APP_STORE, appStore);
    }
    Starwars = __decorate([
        core_1.Component({
            selector: 'Starwars',
            directives: [shopping_component_1.ShoppingComponent, admin_component_1.AdminComponent, films_component_1.FilmsComponent],
            template: " <div class=\"row\">\n            <div class=\"col-md-6\">\n                <admin></admin>\n            </div>\n            <div class=\"col-md-6\">\n                <!--<shopping></shopping>-->\n                <hr/>\n                <films-component></films-component>\n            </div>\n        </div>",
            providers: [part_actions_1.PartActions, cart_actions_1.CartActions, part_actions_1.PartActions, user_actions_1.UserActions, film_actions_1.FilmActions]
        }), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
    ], Starwars);
    return Starwars;
})();
exports.Starwars = Starwars;
//# sourceMappingURL=Starwars.js.map