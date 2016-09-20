System.register(['immutable', "../actions/AppdbAction"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1, AppdbAction;
    function appdb(state, action) {
        if (state === void 0) { state = immutable_1.Map({}); }
        switch (action.type) {
            case AppdbAction.APP_START_TIME:
                return immutable_1.Map({ appStartTime: Date.now() });
            default:
                return state;
        }
    }
    exports_1("default", appdb);
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (AppdbAction_1) {
                AppdbAction = AppdbAction_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL0FwcGRiUmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBS0EsZUFBOEIsS0FBNkMsRUFBRSxNQUFVO1FBQXpELHFCQUE2QyxHQUE3QyxRQUF5QixlQUFHLENBQWMsRUFBRSxDQUFDO1FBQ3ZFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssV0FBVyxDQUFDLGNBQWM7Z0JBQzNCLE1BQU0sQ0FBQyxlQUFHLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUMzQztnQkFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBUEQsMkJBT0MsQ0FBQSIsImZpbGUiOiJyZWR1Y2Vycy9BcHBkYlJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01hcH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0ICogYXMgQXBwZGJBY3Rpb24gZnJvbSBcIi4uL2FjdGlvbnMvQXBwZGJBY3Rpb25cIjtcclxuXHJcbi8qKiBnbG9iYWwgYXBwbGljYXRpb24gcmVkdWNlZCBhY3Rpb25zIGRlZmluZWQgaGVyZSAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGRiKHN0YXRlOk1hcDxzdHJpbmcsIGFueT4gPSBNYXA8c3RyaW5nLCBhbnk+KHt9KSwgYWN0aW9uOmFueSk6TWFwPHN0cmluZywgYW55PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBcHBkYkFjdGlvbi5BUFBfU1RBUlRfVElNRTpcclxuICAgICAgICAgICAgcmV0dXJuIE1hcCh7YXBwU3RhcnRUaW1lOiBEYXRlLm5vdygpfSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
