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
var user_actions_1 = require("../actions/user-actions");
var users_view_1 = require("../components/users-view");
var user_view_1 = require("../components/user-view");
var reselect_1 = require('reselect');
var CommBroker_1 = require("../../../../services/CommBroker");
var Consts = require('../StoreConsts');
var AdminComponent = (function () {
    function AdminComponent(commBroker, userActions) {
        this.usersToShow = null;
        this.currentUser = null;
        this.filmFilter = null;
        var self = this;
        var appStore = commBroker.getService(Consts.APP_STORE);
        this.setCurrentUser = userActions.createDispatcher(appStore, userActions.setCurrentUser);
        this.setFilmFilter = userActions.createDispatcher(appStore, userActions.setFilmFilter);
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
            template: "\n        <h3>Users</h3>\n        <a href=\"\" (click)=\"$event.preventDefault(); setFilmFilter(!filmFilter)\" [class.hidden]=\"!usersToShow\">\n            Turn filter {{filmFilter?\"off\":\"on\"}}\n        </a>\n        <users [data]=\"usersToShow\" (current)=\"setCurrentUser($event)\">\n        </users>\n        <hr/>\n        <h3>Current User</h3>\n        <br/>\n        <user [data]=\"currentUser\"></user>\n    ",
            directives: [users_view_1.UsersView, user_view_1.UserView]
        }), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker, user_actions_1.UserActions])
    ], AdminComponent);
    return AdminComponent;
})();
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin-component.js.map