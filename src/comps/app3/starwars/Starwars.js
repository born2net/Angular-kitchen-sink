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
var thunk = require('redux-thunk');
var parts_reducer_1 = require("./reducers/parts-reducer");
var cart_reducer_1 = require("./reducers/cart-reducer");
var films_reducer_1 = require("./reducers/films-reducer");
var users_reducer_1 = require("./reducers/users-reducer");
var angular2_redux_util_1 = require("angular2-redux-util");
var shopping_component_1 = require("./components/shopping-component");
var CommBroker_1 = require("../../../services/CommBroker");
var part_actions_1 = require("./actions/part-actions");
var cart_actions_1 = require("./actions/cart-actions");
var Consts = require("./StoreConsts");
var admin_component_1 = require("./components/admin-component");
var films_component_1 = require("./components/films-component");
var user_actions_1 = require("./actions/user-actions");
var film_actions_1 = require("./actions/film-actions");
var appStoreFactory = function () {
    var reducers = redux_1.combineReducers({ parts: parts_reducer_1.default, cart: cart_reducer_1.default, films: films_reducer_1.default, users: users_reducer_1.default });
    var middlewareEnhancer = redux_1.applyMiddleware(thunk, angular2_redux_util_1.LoggerMiddleware);
    var isDebug = window.devToolsExtension;
    var applyDevTools = function () { return isDebug ? window.devToolsExtension() : function (f) { return f; }; };
    var enhancers = redux_1.compose(middlewareEnhancer, applyDevTools());
    var createStoreWithEnhancers = enhancers(redux_1.createStore);
    var reduxAppStore = createStoreWithEnhancers(reducers);
    return new angular2_redux_util_1.AppStore(reduxAppStore);
};
var Starwars = (function () {
    function Starwars(commBroker) {
        this.commBroker = commBroker;
        var reduxAppStore = appStoreFactory();
        this.commBroker.setService(Consts.APP_STORE, reduxAppStore);
    }
    Starwars = __decorate([
        core_1.Component({
            selector: 'Starwars',
            directives: [shopping_component_1.ShoppingComponent, admin_component_1.AdminComponent, films_component_1.FilmsComponent],
            template: " <div class=\"row\">\n            <div class=\"col-md-6\">\n                <admin></admin>\n            </div>\n            <div class=\"col-md-6\">\n                <shopping></shopping>\n                <hr/>\n                <films-component></films-component>\n            </div>\n        </div>",
            providers: [part_actions_1.PartActions, cart_actions_1.CartActions, part_actions_1.PartActions, user_actions_1.UserActions, film_actions_1.FilmActions]
        }), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
    ], Starwars);
    return Starwars;
})();
exports.Starwars = Starwars;
//# sourceMappingURL=Starwars.js.map