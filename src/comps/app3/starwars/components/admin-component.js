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
var angular2_redux_util_1 = require("angular2-redux-util");
var user_actions_1 = require("../actions/user-actions");
var users_view_1 = require("../components/users-view");
var user_view_1 = require("../components/user-view");
var reselect_1 = require('reselect');
var AdminComponent = (function () {
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
            template: "\n        <h3>Users</h3>\n        <a href=\"\" (click)=\"$event.preventDefault(); setFilmFilter(!filmFilter)\" [class.hidden]=\"!usersToShow\">\n            Turn filter {{filmFilter?\"off\":\"on\"}}\n        </a>\n        <users [data]=\"usersToShow\" (current)=\"setCurrentUser($event)\">\n        </users>\n        <hr/>\n        <h3>Current User</h3>\n        <br/>\n        <user [data]=\"currentUser\"></user>\n    ",
            directives: [users_view_1.UsersView, user_view_1.UserView]
        }), 
        __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, user_actions_1.UserActions])
    ], AdminComponent);
    return AdminComponent;
})();
exports.AdminComponent = AdminComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQWRtaW5Db21wb25lbnQiLCJBZG1pbkNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFkbWluQ29tcG9uZW50LmNyZWF0ZVVzZXJzVG9TaG93U2VsZWN0b3IiLCJBZG1pbkNvbXBvbmVudC5nZXRGaWx0ZXIiLCJBZG1pbkNvbXBvbmVudC5nZXRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQ3hCLENBQUMsQ0FEc0M7QUFDdkMsb0NBQXVCLHFCQUFxQixDQUFDLENBQUE7QUFDN0MsNkJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFDcEQsMkJBQXdCLDBCQUEwQixDQUFDLENBQUE7QUFDbkQsMEJBQXVCLHlCQUF5QixDQUFDLENBQUE7QUFDakQseUJBQTZCLFVBQVUsQ0FBQyxDQUFBO0FBRXhDO0lBeUJJQSx3QkFBWUEsUUFBaUJBLEVBQUVBLFdBQXVCQTtRQVA5Q0MsZ0JBQVdBLEdBQUdBLElBQUlBLENBQUNBO1FBQ25CQSxnQkFBV0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkJBLGVBQVVBLEdBQUdBLElBQUlBLENBQUNBO1FBTXRCQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNoQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsV0FBV0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxXQUFXQSxDQUFDQSxjQUFjQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUN6RkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBSUEsV0FBV0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxXQUFXQSxDQUFDQSxhQUFhQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUV4RkEsSUFBTUEsbUJBQW1CQSxHQUFHQSxjQUFjQSxDQUFDQSx5QkFBeUJBLEVBQUVBLENBQUNBO1FBRXZFQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxLQUFLQTtZQUNyQkEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsbUJBQW1CQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUM5Q0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7WUFDdkNBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBO1FBRTdDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNIQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUVoREEsQ0FBQ0E7SUFFY0Qsd0NBQXlCQSxHQUF4Q0E7UUFDSUUsSUFBTUEsbUJBQW1CQSxHQUFHQSx5QkFBY0EsQ0FBQ0EsVUFBQ0EsS0FBU0EsSUFBS0EsT0FBQUEsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsRUFBdEJBLENBQXNCQSxFQUFFQSxVQUFBQSxLQUFLQSxJQUFJQSxPQUFBQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUF2QkEsQ0FBdUJBLEVBQzlHQSxVQUFDQSxVQUFVQSxFQUFFQSxXQUFXQSxJQUFLQSxPQUFBQSxVQUFVQSxJQUFJQSxXQUFXQSxHQUFHQSxXQUFXQSxHQUFHQSxJQUFJQSxFQUE5Q0EsQ0FBOENBLENBQzlFQSxDQUFDQTtRQUNGQSxNQUFNQSxDQUFDQSx5QkFBY0EsQ0FBQ0EsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBaEJBLENBQWdCQSxFQUFFQSxtQkFBbUJBLEVBQ2hFQSxVQUFDQSxLQUFLQSxFQUFFQSxXQUFXQSxJQUFLQSxPQUFBQSxXQUFXQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxHQUFHQSxLQUFLQSxFQUF6RUEsQ0FBeUVBLENBQ3BHQSxDQUFDQTtJQUNOQSxDQUFDQTs7SUFFY0Ysd0JBQVNBLEdBQXhCQSxVQUF5QkEsSUFBSUE7UUFDekJHLElBQU1BLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBO2FBQ3RCQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUF6QkEsQ0FBeUJBLENBQUNBO2FBQ3JDQSxNQUFNQSxDQUFDQSxVQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxJQUFJQSxPQUFBQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxNQUFNQSxFQUE3QkEsQ0FBNkJBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO1FBQzlEQSxNQUFNQSxDQUFDQSxVQUFBQSxJQUFJQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFuQ0EsQ0FBbUNBLENBQUNBO0lBQ3ZEQSxDQUFDQTs7SUFFY0gsb0JBQUtBLEdBQXBCQSxVQUFxQkEsR0FBR0E7UUFDcEJJLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLGVBQWVBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO0lBQzVDQSxDQUFDQTs7SUE1RExKO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxPQUFPQTtZQUNqQkEsUUFBUUEsRUFBRUEsc2FBV1RBO1lBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLHNCQUFTQSxFQUFFQSxvQkFBUUEsQ0FBQ0E7U0FDcENBLENBQUNBOzt1QkErQ0RBO0lBQURBLHFCQUFDQTtBQUFEQSxDQTlEQSxBQThEQ0EsSUFBQTtBQTlDWSxzQkFBYyxpQkE4QzFCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQge0FwcFN0b3JlfSBmcm9tIFwiYW5ndWxhcjItcmVkdXgtdXRpbFwiO1xyXG5pbXBvcnQge1VzZXJBY3Rpb25zfSBmcm9tIFwiLi4vYWN0aW9ucy91c2VyLWFjdGlvbnNcIjtcclxuaW1wb3J0IHtVc2Vyc1ZpZXd9IGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJzLXZpZXdcIjtcclxuaW1wb3J0IHtVc2VyVmlld30gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlci12aWV3XCI7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZG1pbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMz5Vc2VyczwvaDM+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTsgc2V0RmlsbUZpbHRlcighZmlsbUZpbHRlcilcIiBbY2xhc3MuaGlkZGVuXT1cIiF1c2Vyc1RvU2hvd1wiPlxyXG4gICAgICAgICAgICBUdXJuIGZpbHRlciB7e2ZpbG1GaWx0ZXI/XCJvZmZcIjpcIm9uXCJ9fVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8dXNlcnMgW2RhdGFdPVwidXNlcnNUb1Nob3dcIiAoY3VycmVudCk9XCJzZXRDdXJyZW50VXNlcigkZXZlbnQpXCI+XHJcbiAgICAgICAgPC91c2Vycz5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDxoMz5DdXJyZW50IFVzZXI8L2gzPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPHVzZXIgW2RhdGFdPVwiY3VycmVudFVzZXJcIj48L3VzZXI+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1VzZXJzVmlldywgVXNlclZpZXddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZG1pbkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSB1c2Vyc1RvU2hvdyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZmlsbUZpbHRlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDdXJyZW50VXNlcjtcclxuICAgIHByaXZhdGUgc2V0RmlsbUZpbHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhcHBTdG9yZTpBcHBTdG9yZSwgdXNlckFjdGlvbnM6VXNlckFjdGlvbnMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50VXNlciA9IHVzZXJBY3Rpb25zLmNyZWF0ZURpc3BhdGNoZXIodXNlckFjdGlvbnMuc2V0Q3VycmVudFVzZXIsIGFwcFN0b3JlKTtcclxuICAgICAgICB0aGlzLnNldEZpbG1GaWx0ZXIgID0gdXNlckFjdGlvbnMuY3JlYXRlRGlzcGF0Y2hlcih1c2VyQWN0aW9ucy5zZXRGaWxtRmlsdGVyLCBhcHBTdG9yZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJzVG9TaG93U2VsZWN0b3IgPSBBZG1pbkNvbXBvbmVudC5jcmVhdGVVc2Vyc1RvU2hvd1NlbGVjdG9yKCk7XHJcblxyXG4gICAgICAgIGFwcFN0b3JlLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc2VsZi51c2Vyc1RvU2hvdyA9IHVzZXJzVG9TaG93U2VsZWN0b3Ioc3RhdGUpO1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRVc2VyID0gc3RhdGUudXNlcnMuY3VycmVudDtcclxuICAgICAgICAgICAgc2VsZi5maWxtRmlsdGVyID0gc3RhdGUudXNlcnMuZmlsbUZpbHRlcjtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXBwU3RvcmUuZGlzcGF0Y2godXNlckFjdGlvbnMuZmV0Y2hVc2VycygpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlVXNlcnNUb1Nob3dTZWxlY3RvcigpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RmlsbVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUudXNlcnMuZmlsbUZpbHRlciwgc3RhdGUgPT4gc3RhdGUuZmlsbXMuY3VycmVudEZpbG0sXHJcbiAgICAgICAgICAgIChmaWxtRmlsdGVyLCBjdXJyZW50RmlsbSkgPT4gZmlsbUZpbHRlciAmJiBjdXJyZW50RmlsbSA/IGN1cnJlbnRGaWxtIDogbnVsbFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJzLmxpc3QsIGN1cnJlbnRGaWxtU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICh1c2VycywgY3VycmVudEZpbG0pID0+IGN1cnJlbnRGaWxtID8gdXNlcnMuZmlsdGVyKEFkbWluQ29tcG9uZW50LmdldEZpbHRlcihjdXJyZW50RmlsbSkpIDogdXNlcnNcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRGaWx0ZXIoZmlsbSkge1xyXG4gICAgICAgIGNvbnN0IGlkcyA9IGZpbG0uY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAubWFwKHVybCA9PiBBZG1pbkNvbXBvbmVudC5nZXRJZCh1cmwpKVxyXG4gICAgICAgICAgICAucmVkdWNlKChpZHNNYXAsIGlkKT0+IChpZHNNYXBbaWRdID0gdHJ1ZSkgJiYgaWRzTWFwLCB7fSk7XHJcbiAgICAgICAgcmV0dXJuIHVzZXIgPT4gaWRzW0FkbWluQ29tcG9uZW50LmdldElkKHVzZXIudXJsKV07XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldElkKHVybCkge1xyXG4gICAgICAgIHJldHVybiB1cmwucmVwbGFjZSgvW2EtelxcL1xcLlxcOl0qL2csIFwiXCIpO1xyXG4gICAgfTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
