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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvZmlsbXMtcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1lBRUEsb0JBQWUsVUFBQyxLQUFVLEVBQUUsTUFBZTtnQkFBM0IscUJBQVUsR0FBVixVQUFVO2dCQUFFLHNCQUFlLEdBQWYsV0FBZTtnQkFDdkMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLEtBQUssV0FBVyxDQUFDLGFBQWE7d0JBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztvQkFDN0QsS0FBSyxXQUFXLENBQUMsYUFBYTt3QkFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO29CQUNsRixLQUFLLFdBQVcsQ0FBQyxZQUFZO3dCQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUMsY0FBYyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7b0JBQzVELEtBQUssV0FBVyxDQUFDLFlBQVk7d0JBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztvQkFDdkYsS0FBSyxXQUFXLENBQUMsdUJBQXVCO3dCQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO29CQUMzRCxLQUFLLFdBQVcsQ0FBQyxhQUFhO3dCQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO29CQUNwRTt3QkFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNyQixDQUFDO1lBQ0wsQ0FBQyxFQUFDIiwiZmlsZSI6ImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvZmlsbXMtcmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEZpbG1BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZmlsbS1hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IFtdLCBhY3Rpb246YW55ID0ge30pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZpbG1BY3Rpb25zLlJFUVVFU1RfRklMTVM6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmdGaWxtczogdHJ1ZX0pO1xyXG4gICAgICAgIGNhc2UgRmlsbUFjdGlvbnMuUkVDRUlWRV9GSUxNUzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZ0ZpbG1zOiBmYWxzZSwgbGlzdDogYWN0aW9uLmZpbG1zfSk7XHJcbiAgICAgICAgY2FzZSBGaWxtQWN0aW9ucy5SRVFVRVNUX0ZJTE06XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmdGaWxtOiB0cnVlfSk7XHJcbiAgICAgICAgY2FzZSBGaWxtQWN0aW9ucy5SRUNFSVZFX0ZJTE06XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmdGaWxtOiBmYWxzZSwgY3VycmVudEZpbG06IGFjdGlvbi5maWxtfSk7XHJcbiAgICAgICAgY2FzZSBGaWxtQWN0aW9ucy5SRUNFSVZFX05VTUJFUl9PRl9GSUxNUzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7Y291bnQ6IGFjdGlvbi5jb3VudH0pO1xyXG4gICAgICAgIGNhc2UgRmlsbUFjdGlvbnMuQ1VSUkVOVF9GSUxNUzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7Y3VycmVudDogYWN0aW9uLmN1cnJlbnRJbmRleH0pO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
