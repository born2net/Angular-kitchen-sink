System.register(['immutable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1;
    function notify(state, action) {
        if (state === void 0) { state = immutable_1.Map({}); }
        console.log('ACTION: ' + action.type);
        return { data: immutable_1.Map({ currentAction: action.type }) };
    }
    exports_1("default", notify);
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL05vdGlmeVJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQVNBLGdCQUErQixLQUE2QyxFQUFFLE1BQVU7UUFBekQscUJBQTZDLEdBQTdDLFFBQXlCLGVBQUcsQ0FBYyxFQUFFLENBQUM7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxlQUFHLENBQUMsRUFBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUNyRCxDQUFDO0lBSEQsNEJBR0MsQ0FBQSIsImZpbGUiOiJyZWR1Y2Vycy9Ob3RpZnlSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXB9IGZyb20gJ2ltbXV0YWJsZSc7XHJcblxyXG4vKipcclxuICogcmVnaXN0ZXIgaW4gc3RvcmUgZWFjaCBjYWxsIHNvIHdlIGNhbiBmaWx0ZXJcclxuICogaWYgd2Ugd2lzaCBvbiBhIHBlciBjb21wb25lbnQgYWN0aW9uIGJhc2lzIHVzaW5nOlxyXG4gKlxyXG4gKiAgICBpZiAodGhpcy5hcHBTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldCgnbGFzdEFjdGlvbicpPT0nU09NRV9BQ1RJT04nKTtcclxuICogICAgICByZXR1cm47XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZnkoc3RhdGU6TWFwPHN0cmluZywgYW55PiA9IE1hcDxzdHJpbmcsIGFueT4oe30pLCBhY3Rpb246YW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygnQUNUSU9OOiAnICsgYWN0aW9uLnR5cGUpO1xyXG4gICAgcmV0dXJuIHtkYXRhOiBNYXAoe2N1cnJlbnRBY3Rpb246IGFjdGlvbi50eXBlfSl9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
