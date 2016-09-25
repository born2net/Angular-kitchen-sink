System.register(['../actions/film-actions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FilmActions;
    return {
        setters:[
            function (FilmActions_1) {
                FilmActions = FilmActions_1;
            }],
        execute: function() {
            exports_1("default",function (state, action) {
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
            });
        }
    }
});
