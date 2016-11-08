System.register(['immutable', "../TodoService", "../TodoModel"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1, TodoService, TodoModel_1;
    function todos(state, action) {
        if (state === void 0) { state = immutable_1.List(); }
        function indexOf(id) {
            return state.findIndex(function (i) { return i.getModelId() === id; });
        }
        switch (action.type) {
            case TodoService.ADD_TODO:
                return state.push(action.todoModel);
            case TodoService.REMOVE_TODO:
                return immutable_1.List(state.filter(function (i) { return i.getKey('modelId') !== action.modelId; }));
            case TodoService.CLEAR_TODOS:
                return immutable_1.List();
            case TodoService.EDIT_TODO:
                return state.update(indexOf(action.modelId), function (todoModel) {
                    return todoModel.setKey(TodoModel_1.TodoModel, action.key, action.value);
                });
            default:
                return state;
        }
    }
    exports_1("todos", todos);
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (TodoService_1) {
                TodoService = TodoService_1;
            },
            function (TodoModel_1_1) {
                TodoModel_1 = TodoModel_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=TodoReducer.js.map