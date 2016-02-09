var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var film_actions_1 = require("../actions/film-actions");
var film_selection_view_1 = require("../components/film-selection-view");
var film_view_1 = require("../components/film-view");
var angular2_redux_util_1 = require("angular2-redux-util");
var FilmsComponent = (function () {
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
            template: "\n        <h3>Films</h3>\n        <film-selection [count]=\"filmsCount\" (current)=\"setCurrentFilm($event)\"></film-selection>\n        <div [ngClass]=\"{'text-muted':isFetchingCurrentFilm,'text-primary':!isFetchingCurrentFilm}\" style=\"margin-top:20px;\">\n            <film [data]=\"currentFilm\" [loading]=\"isFetchingCurrentFilm\"></film>\n        </div>\n\n    ",
            directives: [film_selection_view_1.FilmSelectionView, film_view_1.FilmView]
        }), 
        __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, film_actions_1.FilmActions])
    ], FilmsComponent);
    return FilmsComponent;
})();
exports.FilmsComponent = FilmsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9maWxtcy1jb21wb25lbnQudHMiXSwibmFtZXMiOlsiRmlsbXNDb21wb25lbnQiLCJGaWxtc0NvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkZpbG1zQ29tcG9uZW50LnNldEN1cnJlbnRGaWxtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFDeEIsQ0FBQyxDQURzQztBQUN2Qyw2QkFBMEIseUJBQXlCLENBQUMsQ0FBQTtBQUNwRCxvQ0FBZ0MsbUNBQW1DLENBQUMsQ0FBQTtBQUNwRSwwQkFBdUIseUJBQXlCLENBQUMsQ0FBQTtBQUNqRCxvQ0FBdUIscUJBQXFCLENBQUMsQ0FBQTtBQUU3QztJQWtCSUEsd0JBQW9CQSxRQUFpQkEsRUFBVUEsWUFBd0JBO1FBQW5EQyxhQUFRQSxHQUFSQSxRQUFRQSxDQUFTQTtRQUFVQSxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBWUE7UUFIL0RBLGdCQUFXQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNuQkEsMEJBQXFCQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUdsQ0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLEtBQUtBO1lBQzFCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUNwQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0E7WUFDM0NBLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsY0FBY0EsQ0FBQ0E7UUFDNURBLENBQUNBLENBQUNBLENBQUNBO1FBQ0hBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBLFlBQVlBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBLENBQUNBO0lBQ3REQSxDQUFDQTtJQUVERCx1Q0FBY0EsR0FBZEEsVUFBZUEsS0FBS0E7UUFDaEJFLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLGNBQWNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1FBQ2hFQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFFQSxDQUFDQSxDQUFDQTtJQUNoRUEsQ0FBQ0E7SUEvQkxGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxpQkFBaUJBO1lBQzNCQSxRQUFRQSxFQUFFQSxrWEFPVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsdUNBQWlCQSxFQUFFQSxvQkFBUUEsQ0FBQ0E7U0FDNUNBLENBQUNBOzt1QkFxQkRBO0lBQURBLHFCQUFDQTtBQUFEQSxDQWhDQSxBQWdDQ0EsSUFBQTtBQXBCWSxzQkFBYyxpQkFvQjFCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL2ZpbG1zLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQge0ZpbG1BY3Rpb25zfSBmcm9tIFwiLi4vYWN0aW9ucy9maWxtLWFjdGlvbnNcIjtcclxuaW1wb3J0IHtGaWxtU2VsZWN0aW9uVmlld30gZnJvbSBcIi4uL2NvbXBvbmVudHMvZmlsbS1zZWxlY3Rpb24tdmlld1wiO1xyXG5pbXBvcnQge0ZpbG1WaWV3fSBmcm9tIFwiLi4vY29tcG9uZW50cy9maWxtLXZpZXdcIjtcclxuaW1wb3J0IHtBcHBTdG9yZX0gZnJvbSBcImFuZ3VsYXIyLXJlZHV4LXV0aWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWxtcy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aDM+RmlsbXM8L2gzPlxyXG4gICAgICAgIDxmaWxtLXNlbGVjdGlvbiBbY291bnRdPVwiZmlsbXNDb3VudFwiIChjdXJyZW50KT1cInNldEN1cnJlbnRGaWxtKCRldmVudClcIj48L2ZpbG0tc2VsZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieyd0ZXh0LW11dGVkJzppc0ZldGNoaW5nQ3VycmVudEZpbG0sJ3RleHQtcHJpbWFyeSc6IWlzRmV0Y2hpbmdDdXJyZW50RmlsbX1cIiBzdHlsZT1cIm1hcmdpbi10b3A6MjBweDtcIj5cclxuICAgICAgICAgICAgPGZpbG0gW2RhdGFdPVwiY3VycmVudEZpbG1cIiBbbG9hZGluZ109XCJpc0ZldGNoaW5nQ3VycmVudEZpbG1cIj48L2ZpbG0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtGaWxtU2VsZWN0aW9uVmlldywgRmlsbVZpZXddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxtc0NvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBmaWxtc0NvdW50O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RmlsbSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlzRmV0Y2hpbmdDdXJyZW50RmlsbSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwU3RvcmU6QXBwU3RvcmUsIHByaXZhdGUgX2ZpbG1BY3Rpb25zOkZpbG1BY3Rpb25zKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLmZpbG1zQ291bnQgPSBzdGF0ZS5maWxtcy5jb3VudDtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50RmlsbSA9IHN0YXRlLmZpbG1zLmN1cnJlbnRGaWxtO1xyXG4gICAgICAgICAgICBzZWxmLmlzRmV0Y2hpbmdDdXJyZW50RmlsbSA9IHN0YXRlLmZpbG1zLmlzRmV0Y2hpbmdGaWxtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuZGlzcGF0Y2goX2ZpbG1BY3Rpb25zLmZldGNoRmlsbXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudEZpbG0oaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmFwcFN0b3JlLmRpc3BhdGNoKHRoaXMuX2ZpbG1BY3Rpb25zLnNldEN1cnJlbnRGaWxtKGluZGV4KSk7XHJcbiAgICAgICAgdGhpcy5hcHBTdG9yZS5kaXNwYXRjaCh0aGlzLl9maWxtQWN0aW9ucy5mZXRjaEZpbG0oaW5kZXggKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
