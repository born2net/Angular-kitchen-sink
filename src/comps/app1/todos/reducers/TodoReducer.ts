import {List} from 'immutable';
import * as TodoService from "../TodoService";
import {TodoModel} from "../TodoModel";

export interface ITodoAction {
    type: string;
    todoModel: TodoModel;
    modelId?: string,
    key?: string,
    value: any

}

export function todos(state:List<TodoModel> = List<TodoModel>(), action:ITodoAction):List<TodoModel> {

    function indexOf(id:string) {
        return state.findIndex((i:TodoModel) => i.getModelId() === id);
    }

    switch (action.type) {
        case TodoService.ADD_TODO:
            return state.push(action.todoModel);
        case TodoService.REMOVE_TODO:
            return List<TodoModel>(state.filter((i:TodoModel) => i.getKey('modelId') !== action.modelId));
        case TodoService.CLEAR_TODOS:
            return List<TodoModel>();
        case TodoService.EDIT_TODO:
            return state.update(indexOf(action.modelId), (todoModel:TodoModel) => {
                return todoModel.setKey<TodoModel>(TodoModel, action.key, action.value)
            });
        default:
            return state;
    }
}