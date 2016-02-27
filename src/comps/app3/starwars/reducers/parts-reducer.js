var PartActions = require('../actions/part-actions');
var part_reducer_1 = require("./part-reducer");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = []; }
    if (action === void 0) { action = {}; }
    switch (action.type) {
        case PartActions.ADD_PART:
            return state.concat([part_reducer_1.default(null, action)]);
        default:
            return state;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvcGFydHMtcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFZLFdBQVcsV0FBTSx5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELDZCQUF3QixnQkFDeEIsQ0FBQyxDQUR1QztBQUd4QztrQkFBZSxVQUFDLEtBQWtCLEVBQUUsTUFBZTtJQUFuQyxxQkFBa0IsR0FBbEIsVUFBa0I7SUFBRSxzQkFBZSxHQUFmLFdBQWU7SUFDL0MsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIsS0FBSyxXQUFXLENBQUMsUUFBUTtZQUNyQixNQUFNLENBQUssS0FBSyxTQUFFLHNCQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFDLENBQUM7UUFDakQ7WUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9yZWR1Y2Vycy9wYXJ0cy1yZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUGFydEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wYXJ0LWFjdGlvbnMnO1xyXG5pbXBvcnQgcGFydFJlZHVjZXIgZnJvbSBcIi4vcGFydC1yZWR1Y2VyXCJcclxuaW1wb3J0IHtJUGFydH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvcHBpbmctY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU6SVBhcnRbXSA9IFtdLCBhY3Rpb246YW55ID0ge30pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFBhcnRBY3Rpb25zLkFERF9QQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBwYXJ0UmVkdWNlcihudWxsLCBhY3Rpb24pXTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
