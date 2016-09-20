System.register(['../actions/part-actions', "./part-reducer"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PartActions, part_reducer_1;
    return {
        setters:[
            function (PartActions_1) {
                PartActions = PartActions_1;
            },
            function (part_reducer_1_1) {
                part_reducer_1 = part_reducer_1_1;
            }],
        execute: function() {
            exports_1("default",function (state, action) {
                if (state === void 0) { state = []; }
                if (action === void 0) { action = {}; }
                switch (action.type) {
                    case PartActions.ADD_PART:
                        return state.concat([part_reducer_1.default(null, action)]);
                    default:
                        return state;
                }
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvcGFydHMtcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBSUEsb0JBQWUsVUFBQyxLQUFrQixFQUFFLE1BQWU7Z0JBQW5DLHFCQUFrQixHQUFsQixVQUFrQjtnQkFBRSxzQkFBZSxHQUFmLFdBQWU7Z0JBQy9DLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNsQixLQUFLLFdBQVcsQ0FBQyxRQUFRO3dCQUNyQixNQUFNLENBQUssS0FBSyxTQUFFLHNCQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFDLENBQUM7b0JBQ2pEO3dCQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7WUFDTCxDQUFDLEVBQUMiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9yZWR1Y2Vycy9wYXJ0cy1yZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUGFydEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wYXJ0LWFjdGlvbnMnO1xyXG5pbXBvcnQgcGFydFJlZHVjZXIgZnJvbSBcIi4vcGFydC1yZWR1Y2VyXCJcclxuaW1wb3J0IHtJUGFydH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvcHBpbmctY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU6SVBhcnRbXSA9IFtdLCBhY3Rpb246YW55ID0ge30pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFBhcnRBY3Rpb25zLkFERF9QQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBwYXJ0UmVkdWNlcihudWxsLCBhY3Rpb24pXTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
