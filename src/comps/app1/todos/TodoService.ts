/** An example of how to provide a service manually that depends on other services
 as well as example of factory, use providers: [ ... when inside a component
 or via a pure provide (... if not!

 while this may not be the best way to architect your application, we still use
 it here as code sample:

 examples 1 via component decoration:
 ====================================
 providers: [
 provide (TodoService, {
                useFactory: (todoAction, http, todoStatsModel, appStore) => {
                    return new todoAction(TodoAction, http, todoStatsModel, appStore)
                },
                deps: [TodoAction, Http, TodoStatsModel, AppStore]
            })
 ]

 examples 2 in controller
 ====================================
 var p = provide (TodoService, {
            useFactory: (todoAction, http, todoStatsModel, appStore) => {
                return new todoAction(TodoAction, http, todoStatsModel, appStore)
            },
            deps: [TodoAction, TodoStatsModel, AppStore]
        })

 examples 3 in controller
 ====================================
 **/
import * as _ from 'lodash';

import {
    Injectable,
    ReflectiveInjector
} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/share";
import TodoStatsModel from "./TodoStatsModel";
import {TodoModel} from "./TodoModel";
import {
    AppStore,
    Actions
} from "angular2-redux-util";
import {CommBroker} from "../../../services/CommBroker";
import {Ngmslib} from "ng-mslib";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';

// debug server
//const url:string = 'http://secure.digitalsignage.com:8080';
const url: string = 'http://secure.digitalsignage.com';

export class TodoItemModel {
    private task: String;
    private id: string;

    constructor(text: String, id?: string) {
        this.task = text;
        this.id = id || Ngmslib.guid();
    }

    get text() {
        console.log('getting value for task', this.task);
        return this.task;
    }

    set text(value) {
        this.task = value;
    }

    getTask() {
        return this.task;
    }
}

export interface IDataStore {
    todos: Array<TodoItemModel>
}

@Injectable()
export class TodoService extends Actions {
    private m_dataStore: IDataStore;
    private m_addTodoDispatch: Function;
    private m_clearTodoDispatch: Function;
    private newOrderNumber: number = 9999

    constructor(private _http: Http, private todoStatsModel: TodoStatsModel, private appStore: AppStore) {
        super();
        this.m_dataStore = {todos: []};
        this.m_addTodoDispatch = this.createDispatcher(this.addTodoDispatch, this.appStore);
        this.m_clearTodoDispatch = this.createDispatcher(this.clearTodoDispatch, this.appStore);
    }

    /**
     *  factoryTodoService
     *  example of todo service creator
     * @returns {any}
     */
    private factoryTodoService():TodoService {
        var injector = ReflectiveInjector.resolveAndCreate(
            [
                TodoService,
                TodoStatsModel,
                {provide: CommBroker, useClass: CommBroker},
                {provide: AppStore, useValue: this.appStore}
            ]);
        return injector.get(TodoService);
    }

    public saveTodoRemote(todo: TodoModel, cb: (status: number)=>void) {
        this.todoStatsModel.creates++;
        let sendData = JSON.stringify(todo);
        this._http.post(`${url}/todos`, sendData)
            .map(response => response.json()).subscribe(sendData => {
            cb(1);
        }, error => {
            console.log('Could not create todo.');
            cb(-1);
        });
    }

    public loadTodosRemote(cb: (status: number)=>void) {
        this.m_clearTodoDispatch();
        this.todoStatsModel.reads++;
        this._http.get(`${url}/todos`).map(response => response.json()).subscribe(data => {
            try {
                data = JSON.parse(data);
                cb(1);
            } catch (e) {
                cb(-1);
                return;
            }
            for (var i in data) {
                var todoModel: TodoModel = new TodoModel({
                    task: data[i]._data.task,
                    modelId: data[i]._data.modelId,
                    order: i
                });
                this.m_addTodoDispatch(todoModel);
            }
        }, error => console.log(`Could not load todos ${error}`));
    }

    public removeTodoRemote(todoModel: TodoModel, cb: (status: number)=>void) {
        this.todoStatsModel.deletes++;
        var modelId = todoModel.getKey('modelId');
        this._http.delete(`${url}/todos/${modelId}`).subscribe(response => {
            if (response.status == 200) {
                cb(1)
            } else {
                cb(-1);
            }
        }, error => console.log('Could not delete todo.'));
    }

    public editTodoRemote(todoModel: TodoModel, cb: (status: number)=>void) {
        this.todoStatsModel.updates++;
        var modelId = todoModel.getKey('modelId');
        var data = JSON.stringify(todoModel);
        this._http.put(`${url}/todos/${modelId}`, data).subscribe(response => {
            if (response.status == 200) {
                cb(1)
            } else {
                cb(-1);
            }
        }, error => console.log('Could not update todo.'));
    }

    public addTodo(task: string, id?: string) {
        return (dispatch) => {
            let modelId = id || _.uniqueId();
            var todoModel: TodoModel = new TodoModel({
                task,
                modelId,
                order: this.newOrderNumber++
            });
            this.saveTodoRemote(todoModel, (status: number)=> {
                if (status == -1) {
                    bootbox.alert('problem saving to server 1');
                    return;
                }
                //dispatch({type: ADD_TODO, todoModel: todoModel});
                dispatch(this.addTodoDispatch(todoModel));
            });
        }
    }

    public addTodoDispatch(todoModel: TodoModel) {
        return {
            type: ADD_TODO,
            todoModel: todoModel
        };
    }

    public clearTodoDispatch() {
        return {type: CLEAR_TODOS};
    }

    public removeTodo(todoModel: TodoModel) {
        return (dispatch) => {
            this.removeTodoRemote(todoModel, (status: number)=> {
                if (status == -1) {
                    bootbox.alert('problem saving to server 2');
                    return;
                }
                dispatch(this.removeTodoDispatch(todoModel));
            });
        }
    }

    public removeTodoDispatch(todoModel: TodoModel) {
        return {
            type: REMOVE_TODO,
            modelId: todoModel.getKey('modelId')
        };
    }

    public editTodo(todoModel: TodoModel) {
        return (dispatch) => {
            dispatch(this.editTodoDispatch(todoModel));
            dispatch(this.editTodoOrderDispatch(todoModel));
            this.editTodoRemote(todoModel, (status: number)=> {
                if (status == -1) {
                    bootbox.alert('problem saving to server 3');
                    return;
                }
            });
        }
    }

    public editTodoDispatch(todoModel: TodoModel) {
        return {
            type: EDIT_TODO,
            modelId: todoModel.getKey('modelId'),
            key: 'task',
            value: todoModel['task']
        };
    }

    public editTodoOrderDispatch(todoModel: TodoModel) {
        return {
            type: EDIT_TODO,
            modelId: todoModel.getKey('modelId'),
            key: 'order',
            value: todoModel.getKey('order')
        };
    }
}
