import {Injectable, Component} from "angular2/core";
import {Actions} from "angular2-redux-util";
import {TodoModel} from "../TodoModel";
import {StoreModel} from "../../../../models/StoreModel";
import {TodosService} from "../TodoService";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';

@Injectable()
export class TodoAction extends Actions {

    public service:TodosService;

    constructor() {
        super();
    }

    public addTodo(task:string, id?:string) {
        return (dispatch) => {
            let modelId = id || StoreModel.UniqueId();
            var todoModel:TodoModel = new TodoModel({task, modelId});
            this.service.saveTodoRemote(todoModel, (status:number)=> {
                if (status == -1) {
                    bootbox.alert('problem saving to server 1');
                    return;
                }
                //dispatch({type: ADD_TODO, todoModel: todoModel});
                dispatch(this.addTodoDispatch(todoModel));
            });
        }
    }

    public addTodoDispatch(todoModel:TodoModel) {
        return {type: ADD_TODO, todoModel: todoModel};
    }

    public clearTodoDispatch() {
        return {type: CLEAR_TODOS};
    }

    public removeTodo(todoModel:TodoModel) {
        return (dispatch) => {
            this.service.removeTodoRemote(todoModel, (status:number)=> {
                if (status == -1) {
                    bootbox.alert('problem saving to server 2');
                    return;
                }
                dispatch(this.removeTodoDispatch(todoModel));
            });
        }
    }

    public removeTodoDispatch(todoModel:TodoModel) {
        return {type: REMOVE_TODO, modelId: todoModel.getKey('modelId')};
    }

    public editTodo(todoModel:TodoModel) {
        return (dispatch) => {
            dispatch(this.editTodoDispatch(todoModel));
            this.service.editTodoRemote(todoModel, (status:number)=> {
                if (status == -1) {
                    bootbox.alert('problem saving to server 3');
                    return;
                }
            });
        }
    }

    public editTodoDispatch(todoModel:TodoModel) {
        return {type: EDIT_TODO, modelId: todoModel.getKey('modelId'), key: 'task', value: todoModel['task']};
    }

}
