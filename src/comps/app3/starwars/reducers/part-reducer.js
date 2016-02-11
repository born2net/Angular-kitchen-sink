var PartActions = require('../actions/part-actions');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = {}; }
    if (action === void 0) { action = {}; }
    switch (action.type) {
        case PartActions.ADD_PART:
            return { id: action.id, name: action.name };
        default:
            return state;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvcGFydC1yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVksV0FBVyxXQUFNLHlCQUF5QixDQUFDLENBQUE7QUFFdkQ7a0JBQWUsVUFBQyxLQUFjLEVBQUUsTUFBZTtJQUEvQixxQkFBYyxHQUFkLFVBQWM7SUFBRSxzQkFBZSxHQUFmLFdBQWU7SUFDM0MsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIsS0FBSyxXQUFXLENBQUMsUUFBUTtZQUNyQixNQUFNLENBQUMsRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQzlDO1lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvcGFydC1yZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUGFydEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wYXJ0LWFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlOmFueSA9IHt9LCBhY3Rpb246YW55ID0ge30pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFBhcnRBY3Rpb25zLkFERF9QQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4ge2lkOiBhY3Rpb24uaWQsIG5hbWU6IGFjdGlvbi5uYW1lfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
