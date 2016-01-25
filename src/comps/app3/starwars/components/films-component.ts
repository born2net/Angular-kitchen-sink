import {Component} from 'angular2/core'
import {AppStore} from "angular2-redux";
import {FilmActions} from "../actions/film-actions";
import {FilmSelectionView} from "../components/film-selection-view";
import {FilmView} from "../components/film-view";
import {CommBroker} from "../../../../services/CommBroker";
import * as Consts from '../StoreConsts'

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
    private _appStore
    private currentFilm = null;
    private isFetchingCurrentFilm = false;

    constructor(private commBroker:CommBroker, private _filmActions:FilmActions) {
        this._appStore = commBroker.getService(Consts.APP_STORE);
        this._appStore.subscribe((state) => {
            this.filmsCount = state.films.count;
            this.currentFilm = state.films.currentFilm;
            this.isFetchingCurrentFilm = state.films.isFetchingFilm;
        });
        this._appStore.dispatch(_filmActions.fetchFilms());
    }

    setCurrentFilm(index) {
        this._appStore.dispatch(this._filmActions.setCurrentFilm(index));
        this._appStore.dispatch(this._filmActions.fetchFilm(index ));
    }
}