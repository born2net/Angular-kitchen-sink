var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StoreModel_1 = require("../../../models/StoreModel");
var TodoModel = (function (_super) {
    __extends(TodoModel, _super);
    function TodoModel(data) {
        if (data === void 0) { data = {}; }
        _super.call(this, data);
    }
    TodoModel.prototype.invalidateTodoId = function (i_id) {
        if (i_id === void 0) { i_id = -1; }
        return this.setKey(TodoModel, 'id', i_id);
    };
    return TodoModel;
})(StoreModel_1.StoreModel);
exports.TodoModel = TodoModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvdG9kb21vZGVsLnRzIl0sIm5hbWVzIjpbIlRvZG9Nb2RlbCIsIlRvZG9Nb2RlbC5jb25zdHJ1Y3RvciIsIlRvZG9Nb2RlbC5pbnZhbGlkYXRlVG9kb0lkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJCQUF5Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBS3REO0lBQStCQSw2QkFBVUE7SUFFckNBLG1CQUFZQSxJQUFhQTtRQUFiQyxvQkFBYUEsR0FBYkEsU0FBYUE7UUFDckJBLGtCQUFNQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFFREQsb0NBQWdCQSxHQUFoQkEsVUFBaUJBLElBQVNBO1FBQVRFLG9CQUFTQSxHQUFUQSxRQUFRQSxDQUFDQTtRQUN0QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBWUEsU0FBU0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDekRBLENBQUNBO0lBRUxGLGdCQUFDQTtBQUFEQSxDQVZBLEFBVUNBLEVBVjhCLHVCQUFVLEVBVXhDO0FBVlksaUJBQVMsWUFVckIsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAxL3RvZG9zL1RvZG9Nb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmVNb2RlbH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9TdG9yZU1vZGVsXCI7XHJcblxyXG4vKipcclxuICogVGhpbiB3cmFwcGVyIG9mIEltbXV0YWJsZSBkYXRhIGFyb3VuZCBhIHNpbmdsZSBidXNpbmVzc1xyXG4gKiAqKi9cclxuZXhwb3J0IGNsYXNzIFRvZG9Nb2RlbCBleHRlbmRzIFN0b3JlTW9kZWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGE6YW55ID0ge30pIHtcclxuICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnZhbGlkYXRlVG9kb0lkKGlfaWQgPSAtMSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldEtleTxUb2RvTW9kZWw+KFRvZG9Nb2RlbCwgJ2lkJywgaV9pZCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
