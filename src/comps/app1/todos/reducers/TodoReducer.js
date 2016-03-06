"use strict";
var immutable_1 = require('immutable');
var TodoAction = require("../actions/TodoAction");
var TodoModel_1 = require("../TodoModel");
function todos(state, action) {
    if (state === void 0) { state = immutable_1.List(); }
    function indexOf(id) {
        return state.findIndex(function (i) { return i.getModelId() === id; });
    }
    switch (action.type) {
        case TodoAction.ADD_TODO:
            return state.push(action.todoModel);
        case TodoAction.REMOVE_TODO:
            return immutable_1.List(state.filter(function (i) { return i.getKey('modelId') !== action.modelId; }));
        case TodoAction.CLEAR_TODOS:
            return immutable_1.List();
        case TodoAction.EDIT_TODO:
            return state.update(indexOf(action.modelId), function (todoModel) {
                return todoModel.setKey(TodoModel_1.TodoModel, action.key, action.value);
            });
        default:
            return state;
    }
}
exports.todos = todos;
//# sourceMappingURL=TodoReducer.js.map