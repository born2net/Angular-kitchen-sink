import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Lib} from "../../../Lib";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/share';
import TodoStatsModel from "./TodoStatsModel";

const url:string = 'http://secure.digitalsignage.com';



export class TodoItemModel {
    private task:String;
    public id:string;

    constructor(text:String, id?:string) {
        this.task = text;
        this.id = id || Lib.guid();
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
export class TodosService {
    private m_dataStore:IDataStore;

    constructor(private _http:Http, private todoStatsModel:TodoStatsModel) {
        var self = this;
        this.m_dataStore = {todos: []};
        this.loadTodos();
    }

    addItem(newItem:String) {
        var todo:TodoItemModel = new TodoItemModel(newItem);
        this.m_dataStore.todos.push(todo);
        this.createTodo(todo);
    }

    removeItem(item:TodoItemModel) {
        const index = this.m_dataStore.todos.indexOf(item);
        this.m_dataStore.todos.splice(index, 1);
        this.deleteTodo(item);
    }

    editItem(item:TodoItemModel) {
        const index = this.m_dataStore.todos.indexOf(item);
        this.m_dataStore.todos[index].text = item.getTask();
        this.updateTodo(item);
    }

    getDataStore():IDataStore {
        return this.m_dataStore;
    }

    private loadTodos() {
        var self = this;
        this.todoStatsModel.reads++;
        let channel = this._http.get(`${url}/todos`).map(response => response.json()).subscribe(data => {
            try {
                data = JSON.parse(data);
            } catch (e) {
                channel.unsubscribe();
                return;
            }
            for (var i in data) {
                var todoItem = new TodoItemModel(data[i].task, data[i].id)
                self.m_dataStore.todos.push(todoItem);
            }
            channel.unsubscribe();
        }, error => console.log(`Could not load todos ${error}`));
    }

    private createTodo(todo:TodoItemModel) {
        this.todoStatsModel.creates++;
        let sendData = JSON.stringify(todo);
        let channel = this._http.post(`${url}/todos`, sendData)
            .map(response => response.json()).subscribe(sendData => {
                channel.unsubscribe();
            }, error => console.log('Could not create todo.'));
    }

    private updateTodo(todo:TodoItemModel) {
        this.todoStatsModel.updates++;
        let channel = this._http.put(`${url}/todos/${todo.id}`, JSON.stringify(todo))
            .map(response => response.json()).subscribe(data => {
                channel.unsubscribe();
            }, error => console.log('Could not update todo.'));
    }

    private deleteTodo(todo:TodoItemModel) {
        this.todoStatsModel.deletes++;
        let channel = this._http.delete(`${url}/todos/${todo.id}`).subscribe(response => {
            this.m_dataStore.todos.forEach((t, index) => {
                if (t.id === todo.id) {
                    this.m_dataStore.todos.splice(index, 1);
                }
            });
            channel.unsubscribe();
        }, error => console.log('Could not delete todo.'));
    }
}
