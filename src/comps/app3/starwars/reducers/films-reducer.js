"use strict";
var FilmActions = require('../actions/film-actions');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = []; }
    if (action === void 0) { action = {}; }
    switch (action.type) {
        case FilmActions.REQUEST_FILMS:
            return Object.assign({}, state, { isFetchingFilms: true });
        case FilmActions.RECEIVE_FILMS:
            return Object.assign({}, state, { isFetchingFilms: false, list: action.films });
        case FilmActions.REQUEST_FILM:
            return Object.assign({}, state, { isFetchingFilm: true });
        case FilmActions.RECEIVE_FILM:
            return Object.assign({}, state, { isFetchingFilm: false, currentFilm: action.film });
        case FilmActions.RECEIVE_NUMBER_OF_FILMS:
            return Object.assign({}, state, { count: action.count });
        case FilmActions.CURRENT_FILMS:
            return Object.assign({}, state, { current: action.currentIndex });
        default:
            return state;
    }
};
//# sourceMappingURL=films-reducer.js.map