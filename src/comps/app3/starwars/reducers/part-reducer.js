System.register(['../actions/part-actions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PartActions;
    return {
        setters:[
            function (PartActions_1) {
                PartActions = PartActions_1;
            }],
        execute: function() {
            exports_1("default",function (state, action) {
                if (state === void 0) { state = {}; }
                if (action === void 0) { action = {}; }
                switch (action.type) {
                    case PartActions.ADD_PART:
                        return { id: action.id, name: action.name };
                    default:
                        return state;
                }
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvcGFydC1yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7WUFFQSxvQkFBZSxVQUFDLEtBQWMsRUFBRSxNQUFlO2dCQUEvQixxQkFBYyxHQUFkLFVBQWM7Z0JBQUUsc0JBQWUsR0FBZixXQUFlO2dCQUMzQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsS0FBSyxXQUFXLENBQUMsUUFBUTt3QkFDckIsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQztvQkFDOUM7d0JBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDckIsQ0FBQztZQUNMLENBQUMsRUFBQyIsImZpbGUiOiJjb21wcy9hcHAzL3N0YXJ3YXJzL3JlZHVjZXJzL3BhcnQtcmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFBhcnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcGFydC1hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZTphbnkgPSB7fSwgYWN0aW9uOmFueSA9IHt9KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBQYXJ0QWN0aW9ucy5BRERfUEFSVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtpZDogYWN0aW9uLmlkLCBuYW1lOiBhY3Rpb24ubmFtZX07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
