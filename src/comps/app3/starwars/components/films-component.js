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
                    __metadata('design:paramtypes', [(typeof (_a = typeof angular2_redux_util_1.AppStore !== 'undefined' && angular2_redux_util_1.AppStore) === 'function' && _a) || Object, film_actions_1.FilmActions])
                ], FilmsComponent);
                return FilmsComponent;
                var _a;
            }());
            exports_1("FilmsComponent", FilmsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9maWxtcy1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBTUksd0JBQW9CLFFBQWlCLEVBQVUsWUFBd0I7b0JBQW5ELGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBSC9ELGdCQUFXLEdBQUcsSUFBSSxDQUFDO29CQUNuQiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7b0JBR2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO3dCQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO3dCQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7b0JBQzVELENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQUVELHVDQUFjLEdBQWQsVUFBZSxLQUFLO29CQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQTlCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSxrWEFPVDtxQkFDSixDQUFDOztrQ0FBQTtnQkFxQkYscUJBQUM7O1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCwyQ0FvQkMsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAzL3N0YXJ3YXJzL2NvbXBvbmVudHMvZmlsbXMtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7RmlsbUFjdGlvbnN9IGZyb20gXCIuLi9hY3Rpb25zL2ZpbG0tYWN0aW9uc1wiO1xyXG5pbXBvcnQge0ZpbG1TZWxlY3Rpb25WaWV3fSBmcm9tIFwiLi4vY29tcG9uZW50cy9maWxtLXNlbGVjdGlvbi12aWV3XCI7XHJcbmltcG9ydCB7RmlsbVZpZXd9IGZyb20gXCIuLi9jb21wb25lbnRzL2ZpbG0tdmlld1wiO1xyXG5pbXBvcnQge0FwcFN0b3JlfSBmcm9tIFwiYW5ndWxhcjItcmVkdXgtdXRpbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpbG1zLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMz5GaWxtczwvaDM+XHJcbiAgICAgICAgPGZpbG0tc2VsZWN0aW9uIFtjb3VudF09XCJmaWxtc0NvdW50XCIgKGN1cnJlbnQpPVwic2V0Q3VycmVudEZpbG0oJGV2ZW50KVwiPjwvZmlsbS1zZWxlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7J3RleHQtbXV0ZWQnOmlzRmV0Y2hpbmdDdXJyZW50RmlsbSwndGV4dC1wcmltYXJ5JzohaXNGZXRjaGluZ0N1cnJlbnRGaWxtfVwiIHN0eWxlPVwibWFyZ2luLXRvcDoyMHB4O1wiPlxyXG4gICAgICAgICAgICA8ZmlsbSBbZGF0YV09XCJjdXJyZW50RmlsbVwiIFtsb2FkaW5nXT1cImlzRmV0Y2hpbmdDdXJyZW50RmlsbVwiPjwvZmlsbT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxtc0NvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBmaWxtc0NvdW50O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RmlsbSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlzRmV0Y2hpbmdDdXJyZW50RmlsbSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwU3RvcmU6QXBwU3RvcmUsIHByaXZhdGUgX2ZpbG1BY3Rpb25zOkZpbG1BY3Rpb25zKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLmZpbG1zQ291bnQgPSBzdGF0ZS5maWxtcy5jb3VudDtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50RmlsbSA9IHN0YXRlLmZpbG1zLmN1cnJlbnRGaWxtO1xyXG4gICAgICAgICAgICBzZWxmLmlzRmV0Y2hpbmdDdXJyZW50RmlsbSA9IHN0YXRlLmZpbG1zLmlzRmV0Y2hpbmdGaWxtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuZGlzcGF0Y2goX2ZpbG1BY3Rpb25zLmZldGNoRmlsbXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudEZpbG0oaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmFwcFN0b3JlLmRpc3BhdGNoKHRoaXMuX2ZpbG1BY3Rpb25zLnNldEN1cnJlbnRGaWxtKGluZGV4KSk7XHJcbiAgICAgICAgdGhpcy5hcHBTdG9yZS5kaXNwYXRjaCh0aGlzLl9maWxtQWN0aW9ucy5mZXRjaEZpbG0oaW5kZXggKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
