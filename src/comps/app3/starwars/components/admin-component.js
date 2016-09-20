System.register(['@angular/core', "angular2-redux-util", "../actions/user-actions", 'reselect'], function(exports_1, context_1) {
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
    var core_1, angular2_redux_util_1, user_actions_1, reselect_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            },
            function (user_actions_1_1) {
                user_actions_1 = user_actions_1_1;
            },
            function (reselect_1_1) {
                reselect_1 = reselect_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent(appStore, userActions) {
                    this.usersToShow = null;
                    this.currentUser = null;
                    this.filmFilter = null;
                    var self = this;
                    this.setCurrentUser = userActions.createDispatcher(userActions.setCurrentUser, appStore);
                    this.setFilmFilter = userActions.createDispatcher(userActions.setFilmFilter, appStore);
                    var usersToShowSelector = AdminComponent.createUsersToShowSelector();
                    appStore.subscribe(function (state) {
                        self.usersToShow = usersToShowSelector(state);
                        self.currentUser = state.users.current;
                        self.filmFilter = state.users.filmFilter;
                    });
                    appStore.dispatch(userActions.fetchUsers());
                }
                AdminComponent.createUsersToShowSelector = function () {
                    var currentFilmSelector = reselect_1.createSelector(function (state) { return state.users.filmFilter; }, function (state) { return state.films.currentFilm; }, function (filmFilter, currentFilm) { return filmFilter && currentFilm ? currentFilm : null; });
                    return reselect_1.createSelector(function (state) { return state.users.list; }, currentFilmSelector, function (users, currentFilm) { return currentFilm ? users.filter(AdminComponent.getFilter(currentFilm)) : users; });
                };
                ;
                AdminComponent.getFilter = function (film) {
                    var ids = film.characters
                        .map(function (url) { return AdminComponent.getId(url); })
                        .reduce(function (idsMap, id) { return (idsMap[id] = true) && idsMap; }, {});
                    return function (user) { return ids[AdminComponent.getId(user.url)]; };
                };
                ;
                AdminComponent.getId = function (url) {
                    return url.replace(/[a-z\/\.\:]*/g, "");
                };
                ;
                AdminComponent = __decorate([
                    core_1.Component({
                        selector: 'admin',
                        template: "\n        <h3>Users</h3>\n        <a href=\"\" (click)=\"$event.preventDefault(); setFilmFilter(!filmFilter)\" [class.hidden]=\"!usersToShow\">\n            Turn filter {{filmFilter?\"off\":\"on\"}}\n        </a>\n        <users [data]=\"usersToShow\" (current)=\"setCurrentUser($event)\">\n        </users>\n        <hr/>\n        <h3>Current User</h3>\n        <br/>\n        <user [data]=\"currentUser\"></user>\n    "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof angular2_redux_util_1.AppStore !== 'undefined' && angular2_redux_util_1.AppStore) === 'function' && _a) || Object, user_actions_1.UserActions])
                ], AdminComponent);
                return AdminComponent;
                var _a;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBU0ksd0JBQVksUUFBaUIsRUFBRSxXQUF1QjtvQkFQOUMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO29CQUNuQixlQUFVLEdBQUcsSUFBSSxDQUFDO29CQU10QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3pGLElBQUksQ0FBQyxhQUFhLEdBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBRXhGLElBQU0sbUJBQW1CLEdBQUcsY0FBYyxDQUFDLHlCQUF5QixFQUFFLENBQUM7b0JBRXZFLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO3dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO29CQUU3QyxDQUFDLENBQUMsQ0FBQztvQkFDSCxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUVoRCxDQUFDO2dCQUVjLHdDQUF5QixHQUF4QztvQkFDSSxJQUFNLG1CQUFtQixHQUFHLHlCQUFjLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBdEIsQ0FBc0IsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUF2QixDQUF1QixFQUM5RyxVQUFDLFVBQVUsRUFBRSxXQUFXLElBQUssT0FBQSxVQUFVLElBQUksV0FBVyxHQUFHLFdBQVcsR0FBRyxJQUFJLEVBQTlDLENBQThDLENBQzlFLENBQUM7b0JBQ0YsTUFBTSxDQUFDLHlCQUFjLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBaEIsQ0FBZ0IsRUFBRSxtQkFBbUIsRUFDaEUsVUFBQyxLQUFLLEVBQUUsV0FBVyxJQUFLLE9BQUEsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBekUsQ0FBeUUsQ0FDcEcsQ0FBQztnQkFDTixDQUFDOztnQkFFYyx3QkFBUyxHQUF4QixVQUF5QixJQUFJO29CQUN6QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVTt5QkFDdEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FBQzt5QkFDckMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxPQUFBLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBN0IsQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQW5DLENBQW1DLENBQUM7Z0JBQ3ZELENBQUM7O2dCQUVjLG9CQUFLLEdBQXBCLFVBQXFCLEdBQUc7b0JBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDNUMsQ0FBQzs7Z0JBM0RMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFFBQVEsRUFBRSxzYUFXVDtxQkFDSixDQUFDOztrQ0FBQTtnQkErQ0YscUJBQUM7O1lBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtZQTlDRCwyQ0E4Q0MsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAzL3N0YXJ3YXJzL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7QXBwU3RvcmV9IGZyb20gXCJhbmd1bGFyMi1yZWR1eC11dGlsXCI7XHJcbmltcG9ydCB7VXNlckFjdGlvbnN9IGZyb20gXCIuLi9hY3Rpb25zL3VzZXItYWN0aW9uc1wiO1xyXG5pbXBvcnQge1VzZXJzVmlld30gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlcnMtdmlld1wiO1xyXG5pbXBvcnQge1VzZXJWaWV3fSBmcm9tIFwiLi4vY29tcG9uZW50cy91c2VyLXZpZXdcIjtcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FkbWluJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgzPlVzZXJzPC9oMz5cclxuICAgICAgICA8YSBocmVmPVwiXCIgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBzZXRGaWxtRmlsdGVyKCFmaWxtRmlsdGVyKVwiIFtjbGFzcy5oaWRkZW5dPVwiIXVzZXJzVG9TaG93XCI+XHJcbiAgICAgICAgICAgIFR1cm4gZmlsdGVyIHt7ZmlsbUZpbHRlcj9cIm9mZlwiOlwib25cIn19XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDx1c2VycyBbZGF0YV09XCJ1c2Vyc1RvU2hvd1wiIChjdXJyZW50KT1cInNldEN1cnJlbnRVc2VyKCRldmVudClcIj5cclxuICAgICAgICA8L3VzZXJzPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGgzPkN1cnJlbnQgVXNlcjwvaDM+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8dXNlciBbZGF0YV09XCJjdXJyZW50VXNlclwiPjwvdXNlcj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHVzZXJzVG9TaG93ID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFVzZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBmaWxtRmlsdGVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNldEN1cnJlbnRVc2VyO1xyXG4gICAgcHJpdmF0ZSBzZXRGaWxtRmlsdGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFwcFN0b3JlOkFwcFN0b3JlLCB1c2VyQWN0aW9uczpVc2VyQWN0aW9ucykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRVc2VyID0gdXNlckFjdGlvbnMuY3JlYXRlRGlzcGF0Y2hlcih1c2VyQWN0aW9ucy5zZXRDdXJyZW50VXNlciwgYXBwU3RvcmUpO1xyXG4gICAgICAgIHRoaXMuc2V0RmlsbUZpbHRlciAgPSB1c2VyQWN0aW9ucy5jcmVhdGVEaXNwYXRjaGVyKHVzZXJBY3Rpb25zLnNldEZpbG1GaWx0ZXIsIGFwcFN0b3JlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcnNUb1Nob3dTZWxlY3RvciA9IEFkbWluQ29tcG9uZW50LmNyZWF0ZVVzZXJzVG9TaG93U2VsZWN0b3IoKTtcclxuXHJcbiAgICAgICAgYXBwU3RvcmUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnVzZXJzVG9TaG93ID0gdXNlcnNUb1Nob3dTZWxlY3RvcihzdGF0ZSk7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFVzZXIgPSBzdGF0ZS51c2Vycy5jdXJyZW50O1xyXG4gICAgICAgICAgICBzZWxmLmZpbG1GaWx0ZXIgPSBzdGF0ZS51c2Vycy5maWxtRmlsdGVyO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBhcHBTdG9yZS5kaXNwYXRjaCh1c2VyQWN0aW9ucy5mZXRjaFVzZXJzKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVVc2Vyc1RvU2hvd1NlbGVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGaWxtU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS51c2Vycy5maWxtRmlsdGVyLCBzdGF0ZSA9PiBzdGF0ZS5maWxtcy5jdXJyZW50RmlsbSxcclxuICAgICAgICAgICAgKGZpbG1GaWx0ZXIsIGN1cnJlbnRGaWxtKSA9PiBmaWxtRmlsdGVyICYmIGN1cnJlbnRGaWxtID8gY3VycmVudEZpbG0gOiBudWxsXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gY3JlYXRlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcnMubGlzdCwgY3VycmVudEZpbG1TZWxlY3RvcixcclxuICAgICAgICAgICAgKHVzZXJzLCBjdXJyZW50RmlsbSkgPT4gY3VycmVudEZpbG0gPyB1c2Vycy5maWx0ZXIoQWRtaW5Db21wb25lbnQuZ2V0RmlsdGVyKGN1cnJlbnRGaWxtKSkgOiB1c2Vyc1xyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldEZpbHRlcihmaWxtKSB7XHJcbiAgICAgICAgY29uc3QgaWRzID0gZmlsbS5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgIC5tYXAodXJsID0+IEFkbWluQ29tcG9uZW50LmdldElkKHVybCkpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGlkc01hcCwgaWQpPT4gKGlkc01hcFtpZF0gPSB0cnVlKSAmJiBpZHNNYXAsIHt9KTtcclxuICAgICAgICByZXR1cm4gdXNlciA9PiBpZHNbQWRtaW5Db21wb25lbnQuZ2V0SWQodXNlci51cmwpXTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0SWQodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKC9bYS16XFwvXFwuXFw6XSovZywgXCJcIik7XHJcbiAgICB9O1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
