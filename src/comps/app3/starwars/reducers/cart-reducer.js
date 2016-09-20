System.register(['../actions/cart-actions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CartActions;
    return {
        setters:[
            function (CartActions_1) {
                CartActions = CartActions_1;
            }],
        execute: function() {
            exports_1("default",function (state, action) {
                if (state === void 0) { state = []; }
                if (action === void 0) { action = {}; }
                switch (action.type) {
                    case CartActions.ADD_TO_CART:
                        return state.concat([action.id]);
                    case CartActions.REMOVE_FROM_CART:
                        return state.filter(function (id) { return id !== action.id; });
                    default:
                        return state;
                }
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvY2FydC1yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7WUFHQSxvQkFBZSxVQUFDLEtBQWtCLEVBQUUsTUFBZTtnQkFBbkMscUJBQWtCLEdBQWxCLFVBQWtCO2dCQUFFLHNCQUFlLEdBQWYsV0FBZTtnQkFDL0MsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLEtBQUssV0FBVyxDQUFDLFdBQVc7d0JBQ3hCLE1BQU0sQ0FBSyxLQUFLLFNBQUUsTUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDO29CQUNqQyxLQUFLLFdBQVcsQ0FBQyxnQkFBZ0I7d0JBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztvQkFDaEQ7d0JBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDckIsQ0FBQztZQUNMLENBQUMsRUFBQyIsImZpbGUiOiJjb21wcy9hcHAzL3N0YXJ3YXJzL3JlZHVjZXJzL2NhcnQtcmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIENhcnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY2FydC1hY3Rpb25zJztcclxuaW1wb3J0IHtJQ2FydH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvcHBpbmctY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU6SUNhcnRbXSA9IFtdLCBhY3Rpb246YW55ID0ge30pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIENhcnRBY3Rpb25zLkFERF9UT19DQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24uaWRdO1xyXG4gICAgICAgIGNhc2UgQ2FydEFjdGlvbnMuUkVNT1ZFX0ZST01fQ0FSVDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihpZCA9PiBpZCAhPT0gYWN0aW9uLmlkKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
