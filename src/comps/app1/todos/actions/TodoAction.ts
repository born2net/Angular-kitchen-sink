import {Injectable, Component, Injector, provide} from "angular2/core";
import {Actions, AppStore} from "angular2-redux-util";
import {TodoModel} from "../TodoModel";
import {StoreModel} from "../../../../models/StoreModel";
import {TodoService} from "../TodoService";
import {HTTP_PROVIDERS} from "angular2/http";
import TodoStatsModel from "../TodoStatsModel";
import {CommBroker} from "../../../../services/CommBroker";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';

var bootbox = require('bootbox');

@Injectable()
export class TodoAction extends Actions {

    private service:TodoService;

    constructor(private appStore:AppStore) {
        super();
    }

    private factoryTodoService():TodoService {


        /** An example of how to provide a service manually that depends on other services
         as well as example of factory, use providers: [ ... when inside a component
         or via a pure provide(... if not!

         while this may not be the best way to architect your application, we still use
         it here as code sample:

         examples 1 via component decoration:
         ====================================
         providers: [
         provide(TodoService, {
                useFactory: (todoAction, http, todoStatsModel, appStore) => {
                    return new todoAction(TodoAction, http, todoStatsModel, appStore)
                },
                deps: [TodoAction, Http, TodoStatsModel, AppStore]
            })
         ]

         examples 2 in controller
         ====================================
         var p = provide(TodoService, {
            useFactory: (todoAction, http, todoStatsModel, appStore) => {
                return new todoAction(TodoAction, http, todoStatsModel, appStore)
            },
            deps: [TodoAction, HTTP_PROVIDERS, TodoStatsModel, AppStore]
        })

         examples 3 in controller
         ====================================
         **/
        if (this.service)
            return this.service;

        var injector = Injector.resolveAndCreate(
            [
                TodoService,
                TodoAction,
                HTTP_PROVIDERS,
                TodoStatsModel,
                provide(CommBroker, {useClass: CommBroker}),
                provide(AppStore, {useValue: this.appStore})
            ]);
        this.service = injector.get(TodoService);
        return this.service;
    }

    public addTodo(task:string, id?:string) {
        this.factoryTodoService();
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
        this.factoryTodoService();
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
        this.factoryTodoService();
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
