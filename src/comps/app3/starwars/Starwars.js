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
var shopping_component_1 = require("./components/shopping-component");
var part_actions_1 = require("./actions/part-actions");
var cart_actions_1 = require("./actions/cart-actions");
var admin_component_1 = require("./components/admin-component");
var films_component_1 = require("./components/films-component");
var user_actions_1 = require("./actions/user-actions");
var film_actions_1 = require("./actions/film-actions");
var Starwars = (function () {
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
})();
exports.Starwars = Starwars;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvc3RhcndhcnMudHMiXSwibmFtZXMiOlsiU3RhcndhcnMiLCJTdGFyd2Fycy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELG1DQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELGdDQUE2Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzVELGdDQUE2Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzVELDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBRW5EO0lBaUJJQTtJQWlCQUMsQ0FBQ0E7SUFsQ0xEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxVQUFVQTtZQUNwQkEsVUFBVUEsRUFBRUEsQ0FBQ0Esc0NBQWlCQSxFQUFFQSxnQ0FBY0EsRUFBRUEsZ0NBQWNBLENBQUNBO1lBQy9EQSxRQUFRQSxFQUFFQSw4U0FTQ0E7WUFDWEEsU0FBU0EsRUFBRUEsQ0FBQ0EsMEJBQVdBLEVBQUVBLDBCQUFXQSxFQUFFQSwwQkFBV0EsRUFBRUEsMEJBQVdBLEVBQUVBLDBCQUFXQSxDQUFDQTtTQUMvRUEsQ0FBQ0E7O2lCQXFCREE7SUFBREEsZUFBQ0E7QUFBREEsQ0FuQ0EsQUFtQ0NBLElBQUE7QUFuQlksZ0JBQVEsV0FtQnBCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9TdGFyd2Fycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0b3IsIHByb3ZpZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7U2hvcHBpbmdDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvc2hvcHBpbmctY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UGFydEFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnMvcGFydC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7Q2FydEFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnMvY2FydC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7QWRtaW5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RmlsbXNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsbXMtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlckFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnMvdXNlci1hY3Rpb25zXCI7XHJcbmltcG9ydCB7RmlsbUFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnMvZmlsbS1hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnU3RhcndhcnMnLFxyXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nQ29tcG9uZW50LCBBZG1pbkNvbXBvbmVudCwgRmlsbXNDb21wb25lbnRdLFxyXG4gICAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxhZG1pbj48L2FkbWluPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8c2hvcHBpbmc+PC9zaG9wcGluZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZmlsbXMtY29tcG9uZW50PjwvZmlsbXMtY29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gLFxyXG4gICAgcHJvdmlkZXJzOiBbUGFydEFjdGlvbnMsIENhcnRBY3Rpb25zLCBQYXJ0QWN0aW9ucywgVXNlckFjdGlvbnMsIEZpbG1BY3Rpb25zXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ3YXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vYmFiZWxqcy5pby9yZXBsL1xyXG4gICAgICAgIC8vIHRlc3QgSW1tdXRhYmxlXHJcbiAgICAgICAgLy92YXIgZG9nMTpEb2cgPSBuZXcgRG9nKCk7XHJcbiAgICAgICAgLy92YXIgZG9nMjpEb2cgPSBuZXcgRG9nKCk7XHJcbiAgICAgICAgLy92YXIgZG9nMzpEb2cgPSBuZXcgRG9nKCk7XHJcbiAgICAgICAgLy92YXIgZG9ncyA9IEltbXV0YWJsZS5NYXAoKTtcclxuICAgICAgICAvL2RvZ3Muc2V0KGRvZzEuaWR6LCBkb2cxKTtcclxuICAgICAgICAvL2RvZ3MuZmluZChlPT4ge1xyXG4gICAgICAgIC8vICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgLy99KTtcclxuICAgICAgICAvL3ZhciBhID0gZG9ncy5oYXMoJ2FuaW01Jyk7XHJcbiAgICAgICAgLy8vL2RvZ3MgPSBkb2dzLnB1c2goZG9nMik7XHJcbiAgICAgICAgLy8vL3ZhciBkMiA9IGRvZ3MuZ2V0KDApO1xyXG4gICAgICAgIC8vLy92YXIgYSA9IGRvZ3Muc2V0KDEsZG9nMyk7XHJcbiAgICAgICAgLy8vL3ZhciBkMyA9IGRvZ3MuZ2V0KDEpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
