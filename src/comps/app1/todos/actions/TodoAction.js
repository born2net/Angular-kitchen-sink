var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var angular2_redux_util_1 = require("angular2-redux-util");
var TodoModel_1 = require("../TodoModel");
var StoreModel_1 = require("../../../../models/StoreModel");
exports.ADD_TODO = 'ADD_TODO';
exports.REMOVE_TODO = 'REMOVE_TODO';
exports.EDIT_TODO = 'EDIT_TODO';
exports.CLEAR_TODOS = 'CLEAR_TODOS';
var TodoAction = (function (_super) {
    __extends(TodoAction, _super);
    function TodoAction() {
        _super.call(this);
    }
    TodoAction.prototype.addTodo = function (task, id) {
        var _this = this;
        return function (dispatch) {
            var modelId = id || StoreModel_1.StoreModel.UniqueId();
            var todoModel = new TodoModel_1.TodoModel({ task: task, modelId: modelId });
            _this.service.saveTodoRemote(todoModel, function (status) {
                if (status == -1) {
                    bootbox.alert('problem saving to server 1');
                    return;
                }
                dispatch(_this.addTodoDispatch(todoModel));
            });
        };
    };
    TodoAction.prototype.addTodoDispatch = function (todoModel) {
        return { type: exports.ADD_TODO, todoModel: todoModel };
    };
    TodoAction.prototype.clearTodoDispatch = function () {
        return { type: exports.CLEAR_TODOS };
    };
    TodoAction.prototype.removeTodo = function (todoModel) {
        var _this = this;
        return function (dispatch) {
            _this.service.removeTodoRemote(todoModel, function (status) {
                if (status == -1) {
                    bootbox.alert('problem saving to server 2');
                    return;
                }
                dispatch(_this.removeTodoDispatch(todoModel));
            });
        };
    };
    TodoAction.prototype.removeTodoDispatch = function (todoModel) {
        return { type: exports.REMOVE_TODO, modelId: todoModel.getKey('modelId') };
    };
    TodoAction.prototype.editTodo = function (todoModel) {
        var _this = this;
        return function (dispatch) {
            dispatch(_this.editTodoDispatch(todoModel));
            _this.service.editTodoRemote(todoModel, function (status) {
                if (status == -1) {
                    bootbox.alert('problem saving to server 3');
                    return;
                }
            });
        };
    };
    TodoAction.prototype.editTodoDispatch = function (todoModel) {
        return { type: exports.EDIT_TODO, modelId: todoModel.getKey('modelId'), key: 'task', value: todoModel['task'] };
    };
    TodoAction = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoAction);
    return TodoAction;
})(angular2_redux_util_1.Actions);
exports.TodoAction = TodoAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvYWN0aW9ucy90b2RvYWN0aW9uLnRzIl0sIm5hbWVzIjpbIlRvZG9BY3Rpb24iLCJUb2RvQWN0aW9uLmNvbnN0cnVjdG9yIiwiVG9kb0FjdGlvbi5hZGRUb2RvIiwiVG9kb0FjdGlvbi5hZGRUb2RvRGlzcGF0Y2giLCJUb2RvQWN0aW9uLmNsZWFyVG9kb0Rpc3BhdGNoIiwiVG9kb0FjdGlvbi5yZW1vdmVUb2RvIiwiVG9kb0FjdGlvbi5yZW1vdmVUb2RvRGlzcGF0Y2giLCJUb2RvQWN0aW9uLmVkaXRUb2RvIiwiVG9kb0FjdGlvbi5lZGl0VG9kb0Rpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUNwRCxvQ0FBc0IscUJBQXFCLENBQUMsQ0FBQTtBQUM1QywwQkFBd0IsY0FBYyxDQUFDLENBQUE7QUFDdkMsMkJBQXlCLCtCQUErQixDQUFDLENBQUE7QUFHNUMsZ0JBQVEsR0FBRyxVQUFVLENBQUM7QUFDdEIsbUJBQVcsR0FBRyxhQUFhLENBQUM7QUFDNUIsaUJBQVMsR0FBRyxXQUFXLENBQUM7QUFDeEIsbUJBQVcsR0FBRyxhQUFhLENBQUM7QUFFekM7SUFDZ0NBLDhCQUFPQTtJQUluQ0E7UUFDSUMsaUJBQU9BLENBQUNBO0lBQ1pBLENBQUNBO0lBRU1ELDRCQUFPQSxHQUFkQSxVQUFlQSxJQUFXQSxFQUFFQSxFQUFVQTtRQUF0Q0UsaUJBYUNBO1FBWkdBLE1BQU1BLENBQUNBLFVBQUNBLFFBQVFBO1lBQ1pBLElBQUlBLE9BQU9BLEdBQUdBLEVBQUVBLElBQUlBLHVCQUFVQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtZQUMxQ0EsSUFBSUEsU0FBU0EsR0FBYUEsSUFBSUEscUJBQVNBLENBQUNBLEVBQUNBLE1BQUFBLElBQUlBLEVBQUVBLFNBQUFBLE9BQU9BLEVBQUNBLENBQUNBLENBQUNBO1lBQ3pEQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxjQUFjQSxD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LEFBZ0VDQSxFQS9EK0IsNkJBQU8sRUErRHRDO0FBL0RZLGtCQUFVLGFBK0R0QixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDEvdG9kb3MvYWN0aW9ucy9Ub2RvQWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7QWN0aW9uc30gZnJvbSBcImFuZ3VsYXIyLXJlZHV4LXV0aWxcIjtcclxuaW1wb3J0IHtUb2RvTW9kZWx9IGZyb20gXCIuLi9Ub2RvTW9kZWxcIjtcclxuaW1wb3J0IHtTdG9yZU1vZGVsfSBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL1N0b3JlTW9kZWxcIjtcclxuaW1wb3J0IHtUb2Rvc1NlcnZpY2V9IGZyb20gXCIuLi9Ub2RvU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gJ0FERF9UT0RPJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9UT0RPID0gJ1JFTU9WRV9UT0RPJztcclxuZXhwb3J0IGNvbnN0IEVESVRfVE9ETyA9ICdFRElUX1RPRE8nO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfVE9ET1MgPSAnQ0xFQVJfVE9ET1MnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9kb0FjdGlvbiBleHRlbmRzIEFjdGlvbnMge1xyXG5cclxuICAgIHB1YmxpYyBzZXJ2aWNlOlRvZG9zU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb2RvKHRhc2s6c3RyaW5nLCBpZD86c3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbW9kZWxJZCA9IGlkIHx8IFN0b3JlTW9kZWwuVW5pcXVlSWQoKTtcclxuICAgICAgICAgICAgdmFyIHRvZG9Nb2RlbDpUb2RvTW9kZWwgPSBuZXcgVG9kb01vZGVsKHt0YXNrLCBtb2RlbElkfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5zYXZlVG9kb1JlbW90ZSh0b2RvTW9kZWwsIChzdGF0dXM6bnVtYmVyKT0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBib290Ym94LmFsZXJ0KCdwcm9ibGVtIHNhdmluZyB0byBzZXJ2ZXIgMScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vZGlzcGF0Y2goe3R5cGU6IEFERF9UT0RPLCB0b2RvTW9kZWw6IHRvZG9Nb2RlbH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godGhpcy5hZGRUb2RvRGlzcGF0Y2godG9kb01vZGVsKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVG9kb0Rpc3BhdGNoKHRvZG9Nb2RlbDpUb2RvTW9kZWwpIHtcclxuICAgICAgICByZXR1cm4ge3R5cGU6IEFERF9UT0RPLCB0b2RvTW9kZWw6IHRvZG9Nb2RlbH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyVG9kb0Rpc3BhdGNoKCkge1xyXG4gICAgICAgIHJldHVybiB7dHlwZTogQ0xFQVJfVE9ET1N9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVUb2RvKHRvZG9Nb2RlbDpUb2RvTW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5yZW1vdmVUb2RvUmVtb3RlKHRvZG9Nb2RlbCwgKHN0YXR1czpudW1iZXIpPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb3Rib3guYWxlcnQoJ3Byb2JsZW0gc2F2aW5nIHRvIHNlcnZlciAyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godGhpcy5yZW1vdmVUb2RvRGlzcGF0Y2godG9kb01vZGVsKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlVG9kb0Rpc3BhdGNoKHRvZG9Nb2RlbDpUb2RvTW9kZWwpIHtcclxuICAgICAgICByZXR1cm4ge3R5cGU6IFJFTU9WRV9UT0RPLCBtb2RlbElkOiB0b2RvTW9kZWwuZ2V0S2V5KCdtb2RlbElkJyl9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlZGl0VG9kbyh0b2RvTW9kZWw6VG9kb01vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0aGlzLmVkaXRUb2RvRGlzcGF0Y2godG9kb01vZGVsKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5lZGl0VG9kb1JlbW90ZSh0b2RvTW9kZWwsIChzdGF0dXM6bnVtYmVyKT0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBib290Ym94LmFsZXJ0KCdwcm9ibGVtIHNhdmluZyB0byBzZXJ2ZXIgMycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlZGl0VG9kb0Rpc3BhdGNoKHRvZG9Nb2RlbDpUb2RvTW9kZWwpIHtcclxuICAgICAgICByZXR1cm4ge3R5cGU6IEVESVRfVE9ETywgbW9kZWxJZDogdG9kb01vZGVsLmdldEtleSgnbW9kZWxJZCcpLCBrZXk6ICd0YXNrJywgdmFsdWU6IHRvZG9Nb2RlbFsndGFzayddfTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
