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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvcmVkdWNlcnMvVG9kb1JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQWFBLGVBQXNCLEtBQXlDLEVBQUUsTUFBa0I7UUFBN0QscUJBQXlDLEdBQXpDLFFBQXdCLGdCQUFJLEVBQWE7UUFFM0QsaUJBQWlCLEVBQVM7WUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFXLElBQUssT0FBQSxDQUFDLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUVELE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssV0FBVyxDQUFDLFFBQVE7Z0JBQ3JCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4QyxLQUFLLFdBQVcsQ0FBQyxXQUFXO2dCQUN4QixNQUFNLENBQUMsZ0JBQUksQ0FBWSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBVyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUF0QyxDQUFzQyxDQUFDLENBQUMsQ0FBQztZQUNsRyxLQUFLLFdBQVcsQ0FBQyxXQUFXO2dCQUN4QixNQUFNLENBQUMsZ0JBQUksRUFBYSxDQUFDO1lBQzdCLEtBQUssV0FBVyxDQUFDLFNBQVM7Z0JBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBQyxTQUFtQjtvQkFDN0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQVkscUJBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDM0UsQ0FBQyxDQUFDLENBQUM7WUFDUDtnQkFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBcEJELHlCQW9CQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDEvdG9kb3MvcmVkdWNlcnMvVG9kb1JlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCAqIGFzIFRvZG9TZXJ2aWNlIGZyb20gXCIuLi9Ub2RvU2VydmljZVwiO1xyXG5pbXBvcnQge1RvZG9Nb2RlbH0gZnJvbSBcIi4uL1RvZG9Nb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9kb0FjdGlvbiB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICB0b2RvTW9kZWw6IFRvZG9Nb2RlbDtcclxuICAgIG1vZGVsSWQ/OiBzdHJpbmcsXHJcbiAgICBrZXk/OiBzdHJpbmcsXHJcbiAgICB2YWx1ZTogYW55XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9kb3Moc3RhdGU6TGlzdDxUb2RvTW9kZWw+ID0gTGlzdDxUb2RvTW9kZWw+KCksIGFjdGlvbjpJVG9kb0FjdGlvbik6TGlzdDxUb2RvTW9kZWw+IHtcclxuXHJcbiAgICBmdW5jdGlvbiBpbmRleE9mKGlkOnN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZS5maW5kSW5kZXgoKGk6VG9kb01vZGVsKSA9PiBpLmdldE1vZGVsSWQoKSA9PT0gaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRvZG9TZXJ2aWNlLkFERF9UT0RPOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUucHVzaChhY3Rpb24udG9kb01vZGVsKTtcclxuICAgICAgICBjYXNlIFRvZG9TZXJ2aWNlLlJFTU9WRV9UT0RPOlxyXG4gICAgICAgICAgICByZXR1cm4gTGlzdDxUb2RvTW9kZWw+KHN0YXRlLmZpbHRlcigoaTpUb2RvTW9kZWwpID0+IGkuZ2V0S2V5KCdtb2RlbElkJykgIT09IGFjdGlvbi5tb2RlbElkKSk7XHJcbiAgICAgICAgY2FzZSBUb2RvU2VydmljZS5DTEVBUl9UT0RPUzpcclxuICAgICAgICAgICAgcmV0dXJuIExpc3Q8VG9kb01vZGVsPigpO1xyXG4gICAgICAgIGNhc2UgVG9kb1NlcnZpY2UuRURJVF9UT0RPOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUudXBkYXRlKGluZGV4T2YoYWN0aW9uLm1vZGVsSWQpLCAodG9kb01vZGVsOlRvZG9Nb2RlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG9Nb2RlbC5zZXRLZXk8VG9kb01vZGVsPihUb2RvTW9kZWwsIGFjdGlvbi5rZXksIGFjdGlvbi52YWx1ZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
