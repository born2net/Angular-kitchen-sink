System.register(['@angular/core', "../actions/film-actions", "angular2-redux-util"], function(exports_1, context_1) {
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
    var core_1, film_actions_1, angular2_redux_util_1;
    var FilmsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (film_actions_1_1) {
                film_actions_1 = film_actions_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            }],
        execute: function() {
            FilmsComponent = (function () {
                function FilmsComponent(appStore, _filmActions) {
                    this.appStore = appStore;
                    this._filmActions = _filmActions;
                    this.currentFilm = null;
                    this.isFetchingCurrentFilm = false;
                    var self = this;
                    this.appStore.subscribe(function (state) {
                        self.filmsCount = state.films.count;
                        self.currentFilm = state.films.currentFilm;
                        self.isFetchingCurrentFilm = state.films.isFetchingFilm;
                    });
                    this.appStore.dispatch(_filmActions.fetchFilms());
                }
                FilmsComponent.prototype.setCurrentFilm = function (index) {
                    this.appStore.dispatch(this._filmActions.setCurrentFilm(index));
                    this.appStore.dispatch(this._filmActions.fetchFilm(index));
                };
                FilmsComponent = __decorate([
                    core_1.Component({
                        selector: 'films-component',
                        template: "\n        <h3>Films</h3>\n        <film-selection [count]=\"filmsCount\" (current)=\"setCurrentFilm($event)\"></film-selection>\n        <div [ngClass]=\"{'text-muted':isFetchingCurrentFilm,'text-primary':!isFetchingCurrentFilm}\" style=\"margin-top:20px;\">\n            <film [data]=\"currentFilm\" [loading]=\"isFetchingCurrentFilm\"></film>\n        </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, film_actions_1.FilmActions])
                ], FilmsComponent);
                return FilmsComponent;
            }());
            exports_1("FilmsComponent", FilmsComponent);
        }
    }
});
//# sourceMappingURL=films-component.js.map