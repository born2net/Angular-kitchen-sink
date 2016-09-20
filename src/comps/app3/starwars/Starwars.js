System.register(["@angular/core", "./actions/part-actions", "./actions/cart-actions", "./actions/user-actions", "./actions/film-actions"], function(exports_1, context_1) {
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
    var core_1, part_actions_1, cart_actions_1, user_actions_1, film_actions_1;
    var Starwars;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (part_actions_1_1) {
                part_actions_1 = part_actions_1_1;
            },
            function (cart_actions_1_1) {
                cart_actions_1 = cart_actions_1_1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvc3RhcndhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQ0k7Z0JBaUJBLENBQUM7Z0JBakNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSw4U0FTQzt3QkFDWCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDBCQUFXLENBQUM7cUJBQy9FLENBQUM7OzRCQUFBO2dCQXFCRixlQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCwrQkFtQkMsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAzL3N0YXJ3YXJzL3N0YXJ3YXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFydEFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnMvcGFydC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7Q2FydEFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnMvY2FydC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7VXNlckFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnMvdXNlci1hY3Rpb25zXCI7XHJcbmltcG9ydCB7RmlsbUFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnMvZmlsbS1hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnU3RhcndhcnMnLFxyXG4gICAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxhZG1pbj48L2FkbWluPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8c2hvcHBpbmc+PC9zaG9wcGluZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZmlsbXMtY29tcG9uZW50PjwvZmlsbXMtY29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gLFxyXG4gICAgcHJvdmlkZXJzOiBbUGFydEFjdGlvbnMsIENhcnRBY3Rpb25zLCBQYXJ0QWN0aW9ucywgVXNlckFjdGlvbnMsIEZpbG1BY3Rpb25zXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ3YXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vYmFiZWxqcy5pby9yZXBsL1xyXG4gICAgICAgIC8vIHRlc3QgSW1tdXRhYmxlXHJcbiAgICAgICAgLy92YXIgZG9nMTpEb2cgPSBuZXcgRG9nKCk7XHJcbiAgICAgICAgLy92YXIgZG9nMjpEb2cgPSBuZXcgRG9nKCk7XHJcbiAgICAgICAgLy92YXIgZG9nMzpEb2cgPSBuZXcgRG9nKCk7XHJcbiAgICAgICAgLy92YXIgZG9ncyA9IEltbXV0YWJsZS5NYXAoKTtcclxuICAgICAgICAvL2RvZ3Muc2V0KGRvZzEuaWR6LCBkb2cxKTtcclxuICAgICAgICAvL2RvZ3MuZmluZChlPT4ge1xyXG4gICAgICAgIC8vICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgLy99KTtcclxuICAgICAgICAvL3ZhciBhID0gZG9ncy5oYXMoJ2FuaW01Jyk7XHJcbiAgICAgICAgLy8vL2RvZ3MgPSBkb2dzLnB1c2goZG9nMik7XHJcbiAgICAgICAgLy8vL3ZhciBkMiA9IGRvZ3MuZ2V0KDApO1xyXG4gICAgICAgIC8vLy92YXIgYSA9IGRvZ3Muc2V0KDEsZG9nMyk7XHJcbiAgICAgICAgLy8vL3ZhciBkMyA9IGRvZ3MuZ2V0KDEpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
