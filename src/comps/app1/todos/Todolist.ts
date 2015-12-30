import {Component} from 'angular2/core';
import {TodosService, IDataStore, TodoItemModel} from "./TodoRemote";
import {TodoItem} from "./Todoitem";
import {Observable} from "rxjs/Observable";

type channelTodoObservable = Observable<TodoItem>;
type channelTodosObservable = Observable<Array<channelTodoObservable>>;

@Component({
    selector: 'todo-list',
    template: `
                <section class="todoapp">
                  <header class="header">
                    <h1>your to-do's</h1>
                    <input class="new-todo" placeholder="What needs to be done?"
                    autofocus [(ngModel)]="newItem" (keyup.enter)="addItem()">
                    <button class="btn btn-default btn-lg" (click)="addItem()">Add todo</button>
                  </header>
                  <section class="main">
                    <ul class="todo-list">
                      <li *ngFor="#item of m_dataStore.todos">
                        <todo-item [item]="item" (done)="removeItem($event)" (edit)="editItem($event)">
                        </todo-item>
                      </li>
                    </ul>
                  </section>
                </section>
    `,
    styleUrls: ['src/comps/app1/todos/todolist.css'],
    directives: [TodoItem],
    providers: [TodosService]
})
export class TodoList {
    newItem = '';
    private m_dataStore:IDataStore;

    constructor(private todoService:TodosService) {
        this.m_dataStore = todoService.getDataStore();
    }

    addItem() {
        if (this.newItem.length == 0)
            return;
        this.todoService.addItem(this.newItem);
        this.newItem = '';
    }

    removeItem(item:TodoItemModel) {
        this.todoService.removeItem(item);
    }

    editItem(item:TodoItemModel) {
        this.todoService.editItem(item);
    }
}