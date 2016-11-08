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
                    __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, user_actions_1.UserActions])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
//# sourceMappingURL=admin-component.js.map