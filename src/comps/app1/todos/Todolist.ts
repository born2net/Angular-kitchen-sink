import {Component, ApplicationRef} from '@angular/core';
import {TodoItem} from "./Todoitem";
import {Observable} from "rxjs/Observable";
import {TodoAction} from "./actions/TodoAction";
import {AppStore} from "angular2-redux-util/dist/index";
import {TodoService} from "./TodoService";
import {TodoModel} from "./TodoModel";
import {Nodelogger} from "../../nodelogger/Nodelogger";
import {MakeDraggable} from "../../dragndrop/make-draggable.directive";
import {MakeDroppable} from "../../dragndrop/make-droppable.directive";
import {SortBy} from "../../../pipes/SortBy";
import {List} from 'Immutable';
import {StoreModel} from "../../../models/StoreModel";
import {Todo} from "./Todo";

type channelTodoObservable = Observable<TodoItem>;
type channelTodosObservable = Observable<Array<channelTodoObservable>>;

@Component({
    selector: 'todo-list',
    pipes: [SortBy],
    template: `
                <section class="todoapp" style="height: 500px">
                  <header class="header">
                    <h1>your to-do's</h1>
                    <input class="new-todo" placeholder="What needs to be done?"
                    autofocus [(ngModel)]="newItem" (keyup.enter)="addItem(newItem)">
                    <button class="btn btn-default btn-lg" (click)="addItem(newItem)">Add todo</button>
                  </header>
                  <section class="main">
                    <ul class="todo-list">
                      <li *ngFor="let item of m_dataStore | sortBy;  let i=index;trackBy:identify" nodeLogger="{{item}}"> 
                        <todo-item [item]="item" (done)="removeItem($event)"
                             [makeDraggable]="item" makeDroppable (dropped)="onDrop($event, item)"
                            (edit)="editItem($event)">
                        </todo-item>
                      </li>
                    </ul>
                  </section>
                </section>
    `,
    styleUrls: ['../comps/app1/todos/Todolist.css'],
    directives: [TodoItem, Nodelogger, MakeDraggable, MakeDroppable],
})
export class TodoList {
    newItem = '';
    private m_dataStore:any = [];
    private addItem:Function;
    private editItem:Function;
    private removeItem:Function;

    constructor(private todoService:TodoService, private todoAction:TodoAction, private appStore:AppStore, private appRef:ApplicationRef) {

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


    // getOrder(item:StoreModel):string{
    //     return item.getKey('order');
    // }

    onDrop(src:any, trg:TodoModel) {
        var todos:List<TodoModel> = this.appStore.getState().todos;
        var trgOrder = trg.getKey('order');
        var srcOrder = -1;
        todos.forEach((todo:TodoModel)=> {
            if (todo.getModelId() == src)
                srcOrder = parseInt(todo.getKey('order'));
        });
        this.moveRow(srcOrder, trgOrder);
        this.appRef.tick();

        // todos.forEach((todo:TodoModel)=> {
        //     if (todo.getModelId() == src) {
        //         var task = todo.getKey('task');
        //
        //         var oldOrder = parseFloat(todo.getKey('order'));
        //         var order = oldOrder + 0.5;
        //         var newTask = todo.setKey<TodoModel>(TodoModel, 'order', order);
        //         newTask['task'] = task;
        //         this.editItem(newTask);
        //     }
        // })
        //this._moveRow(src.order, trg.order);
    }

    private moveRow(src, trg) {

        src = parseInt(src);
        trg = parseInt(trg);
        var todos:List<TodoModel> = this.appStore.getState().todos;

        function getTodoModelByOrder(order:number) {
            var index = todos.findIndex((i:TodoModel) => i.getKey('order') === order);
            return todos.get(index);
        }

        // If the element was moved down
        if (src > trg) {

            todos.forEach((todo:TodoModel)=> {
                var order:number = parseInt(todo.getKey('ordeer'));
            });

            // for (let i = trg; i < src; i++) {
            //     var todoModel:TodoModel = getTodoModelByOrder(i);
            //     var task = todoModel.getKey('task');
            //     var order = parseInt(todoModel.getKey('order'));
            //     todoModel = todoModel.setKey<TodoModel>(TodoModel, 'order', order + 1);
            //     todoModel['task'] = task;
            //     this.editItem(todoModel);
            // }
            // var todoModel:TodoModel = getTodoModelByOrder(src);
            // var task = todoModel.getKey('task');
            // var order = parseInt(todoModel.getKey('order'));
            // todoModel = todoModel.setKey<TodoModel>(TodoModel, 'order', trg);
            // todoModel['task'] = task;
            // this.editItem(todoModel);
        } else {  // if the element was moved up
            // for (let i = src + 1; i <= trg; i++) {
            //     this.todos[i].order--;
            // }
        }
        // this.todos[src].order = trg;


        // If the element was moved down
        // if (src > trg) {
        //     for (let i = trg; i < src; i++) {
        //         this.todos[i].order++;
        //     }
        // } else {  // if the element was moved up
        //     for (let i = src + 1; i <= trg; i++) {
        //         this.todos[i].order--;
        //     }
        // }
        // this.todos[src].order = trg;
        // this.todos.sort((a, b) => a.order - b.order);
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