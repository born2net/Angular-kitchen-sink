import {Component} from 'angular2/core';
import {TodoItem} from "./Todoitem";
import {Observable} from "rxjs/Observable";
import {TodoAction} from "./actions/TodoAction";
import {AppStore} from "angular2-redux-util/dist/index";
import {TodoService} from "./TodoService";
import {TodoModel} from "./TodoModel";
import {Nodelogger} from "../../nodelogger/Nodelogger";

type channelTodoObservable = Observable<TodoItem>;
type channelTodosObservable = Observable<Array<channelTodoObservable>>;

@Component({
    selector: 'todo-list',
    template: `
                <section class="todoapp">
                  <header class="header">
                    <h1>your to-do's</h1>
                    <input class="new-todo" placeholder="What needs to be done?"
                    autofocus [(ngModel)]="newItem" (keyup.enter)="addItem(newItem)">
                    <button class="btn btn-default btn-lg" (click)="addItem(newItem)">Add todo</button>
                  </header>
                  <section class="main">
                    <ul class="todo-list">
                      <li *ngFor="let item of m_dataStore; trackBy:identify" nodeLogger="{{item}}"> 
                        <todo-item [item]="item" (done)="removeItem($event)" (edit)="editItem($event)">
                        </todo-item>
                      </li>
                    </ul>
                  </section>
                </section>
    `,
    styleUrls: ['../comps/app1/todos/Todolist.css'],
    directives: [TodoItem, Nodelogger],
})
export class TodoList {
    newItem = '';
    private m_dataStore:any = [];
    private addItem:Function;
    private editItem:Function;
    private removeItem:Function;

    constructor(private todoService:TodoService, private todoAction:TodoAction, private appStore:AppStore) {

        this.todoService.loadTodosRemote((status:number)=> {
            if (status == -1) {
                // ignore errors
                return;
            }
        });

        appStore.subscribe((path, prev, store) => {
            this.m_dataStore = store;
            this.newItem = '';
        }, 'todos', true);

        this.addItem = todoAction.createDispatcher(todoAction.addTodo, appStore);
        this.removeItem = todoAction.createDispatcher(todoAction.removeTodo, appStore);
        this.editItem = todoAction.createDispatcher(todoAction.editTodo, appStore);
    }

    // do what ever logic you need to come up with the unique identifier
    // of your item in loop, i will just return the object id.
    // see for more info: http://www.bennadel.com/blog/3020-understanding-object-identity-with-ngfor-loops-in-angular-2-beta-3.htm
    // and since we are using our own id identifier, we can see that through the nodeLogger
    // values are getting updated and not re-instantiated all the time, which would be the case
    // if we didn't use the identify method
    identify(index, item:TodoModel) {
        return item.getModelId();
    }
}