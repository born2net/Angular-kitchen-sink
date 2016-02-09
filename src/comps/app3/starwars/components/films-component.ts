import {Component} from 'angular2/core'
import {FilmActions} from "../actions/film-actions";
import {FilmSelectionView} from "../components/film-selection-view";
import {FilmView} from "../components/film-view";
import {AppStore} from "angular2-redux-util";

@Component({
    selector: 'films-component',
    template: `
        <h3>Films</h3>
        <film-selection [count]="filmsCount" (current)="setCurrentFilm($event)"></film-selection>
        <div [ngClass]="{'text-muted':isFetchingCurrentFilm,'text-primary':!isFetchingCurrentFilm}" style="margin-top:20px;">
            <film [data]="currentFilm" [loading]="isFetchingCurrentFilm"></film>
        </div>

    `,
    directives: [FilmSelectionView, FilmView]
})
export class FilmsComponent {

    private filmsCount;
    private currentFilm = null;
    private isFetchingCurrentFilm = false;

    constructor(private appStore:AppStore, private _filmActions:FilmActions) {
        var self = this;
        this.appStore.subscribe((state) => {
            self.filmsCount = state.films.count;
            self.currentFilm = state.films.currentFilm;
            self.isFetchingCurrentFilm = state.films.isFetchingFilm;
        });
        this.appStore.dispatch(_filmActions.fetchFilms());
    }

    setCurrentFilm(index) {
        this.appStore.dispatch(this._filmActions.setCurrentFilm(index));
        this.appStore.dispatch(this._filmActions.fetchFilm(index ));
    }
}