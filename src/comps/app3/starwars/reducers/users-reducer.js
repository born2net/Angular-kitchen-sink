System.register(['../actions/user-actions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserActions;
    return {
        setters:[
            function (UserActions_1) {
                UserActions = UserActions_1;
            }],
        execute: function() {
            exports_1("default",function (state, action) {
                if (state === void 0) { state = {}; }
                if (action === void 0) { action = {}; }
                switch (action.type) {
                    case UserActions.REQUEST_USERS:
                        return Object.assign({}, state, { isFetching: true });
                    case UserActions.RECEIVE_USERS:
                        return Object.assign({}, state, { isFetching: false, list: action.users, updated: action.updated });
                    case UserActions.CURRENT_USER:
                        return Object.assign({}, state, { current: action.current });
                    case UserActions.SET_FILM_FILTER:
                        return Object.assign({}, state, { filmFilter: action.filmFilter });
                    default:
                        return state;
                }
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvdXNlcnMtcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1lBRUEsb0JBQWUsVUFBQyxLQUFVLEVBQUUsTUFBZTtnQkFBM0IscUJBQVUsR0FBVixVQUFVO2dCQUFFLHNCQUFlLEdBQWYsV0FBZTtnQkFDdkMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLEtBQUssV0FBVyxDQUFDLGFBQWE7d0JBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztvQkFDeEQsS0FBSyxXQUFXLENBQUMsYUFBYTt3QkFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO29CQUN0RyxLQUFLLFdBQVcsQ0FBQyxZQUFZO3dCQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO29CQUMvRCxLQUFLLFdBQVcsQ0FBQyxlQUFlO3dCQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO29CQUNyRTt3QkFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNyQixDQUFDO1lBQ0wsQ0FBQyxFQUFDIiwiZmlsZSI6ImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvdXNlcnMtcmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFVzZXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHt9LCBhY3Rpb246YW55ID0ge30pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFVzZXJBY3Rpb25zLlJFUVVFU1RfVVNFUlM6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IHRydWV9KTtcclxuICAgICAgICBjYXNlIFVzZXJBY3Rpb25zLlJFQ0VJVkVfVVNFUlM6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IGZhbHNlLCBsaXN0OiBhY3Rpb24udXNlcnMsIHVwZGF0ZWQ6IGFjdGlvbi51cGRhdGVkfSk7XHJcbiAgICAgICAgY2FzZSBVc2VyQWN0aW9ucy5DVVJSRU5UX1VTRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2N1cnJlbnQ6IGFjdGlvbi5jdXJyZW50fSk7XHJcbiAgICAgICAgY2FzZSBVc2VyQWN0aW9ucy5TRVRfRklMTV9GSUxURVI6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2ZpbG1GaWx0ZXI6IGFjdGlvbi5maWxtRmlsdGVyfSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
