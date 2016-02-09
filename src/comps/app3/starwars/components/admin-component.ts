import {Component} from 'angular2/core'
import {AppStore} from "angular2-redux-util";
import {UserActions} from "../actions/user-actions";
import {UsersView} from "../components/users-view";
import {UserView} from "../components/user-view";
import {createSelector} from 'reselect';

@Component({
    selector: 'admin',
    template: `
        <h3>Users</h3>
        <a href="" (click)="$event.preventDefault(); setFilmFilter(!filmFilter)" [class.hidden]="!usersToShow">
            Turn filter {{filmFilter?"off":"on"}}
        </a>
        <users [data]="usersToShow" (current)="setCurrentUser($event)">
        </users>
        <hr/>
        <h3>Current User</h3>
        <br/>
        <user [data]="currentUser"></user>
    `,
    directives: [UsersView, UserView]
})
export class AdminComponent {

    private usersToShow = null;
    private currentUser = null;
    private filmFilter = null;

    private setCurrentUser;
    private setFilmFilter;

    constructor(appStore:AppStore, userActions:UserActions) {
        var self = this;
        this.setCurrentUser = userActions.createDispatcher(appStore, userActions.setCurrentUser);
        this.setFilmFilter  = userActions.createDispatcher(appStore, userActions.setFilmFilter);

        const usersToShowSelector = AdminComponent.createUsersToShowSelector();

        appStore.subscribe((state) => {
            self.usersToShow = usersToShowSelector(state);
            self.currentUser = state.users.current;
            self.filmFilter = state.users.filmFilter;

        });
        appStore.dispatch(userActions.fetchUsers());

    }

    private static createUsersToShowSelector() {
        const currentFilmSelector = createSelector((state:any) => state.users.filmFilter, state => state.films.currentFilm,
            (filmFilter, currentFilm) => filmFilter && currentFilm ? currentFilm : null
        );
        return createSelector(state => state.users.list, currentFilmSelector,
            (users, currentFilm) => currentFilm ? users.filter(AdminComponent.getFilter(currentFilm)) : users
        );
    };

    private static getFilter(film) {
        const ids = film.characters
            .map(url => AdminComponent.getId(url))
            .reduce((idsMap, id)=> (idsMap[id] = true) && idsMap, {});
        return user => ids[AdminComponent.getId(user.url)];
    };

    private static getId(url) {
        return url.replace(/[a-z\/\.\:]*/g, "");
    };

}