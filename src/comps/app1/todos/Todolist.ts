import {
    Component,
    ApplicationRef
} from "@angular/core";
import {TodoItem} from "./Todoitem";
import {Observable} from "rxjs/Observable";
import {TodoAction} from "./actions/TodoAction";
import {AppStore} from "angular2-redux-util/dist/index";
import {TodoService} from "./TodoService";
import {TodoModel} from "./TodoModel";
import {List} from "Immutable";

type channelTodoObservable = Observable<TodoItem>;
type channelTodosObservable = Observable<Array<channelTodoObservable>>;

@Component({
    selector: 'todo-list',
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
    styleUrls: ['../comps/app1/todos/Todolist.css']

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

    onDrop(src:any, trg:TodoModel) {
        var todos:List<TodoModel> = this.appStore.getState().todos;
        var trgOrder = trg.getKey('order');
        var srcOrder;
        todos.forEach((todo:TodoModel)=> {
            if (todo.getModelId() == src)
                srcOrder = parseInt(todo.getKey('order'));
        });
        this.moveRow(srcOrder, trgOrder);
        // this.appRef.tick();
    }

    private moveRow(src, trg) {
        src = parseInt(src);
        trg = parseInt(trg);
        var todos:List<TodoModel> = this.appStore.getState().todos;

        function getTodoModelByOrder(order:number) {
            var index = todos.findIndex((i:TodoModel) => i.getKey('order') == order);
            return todos.get(index);
        }
        if (src > trg) {
            todos.forEach((todo:TodoModel)=> {
                var curr:number = parseInt(todo.getKey('order'));
                if (curr >= trg) {
                    todo = todo.setKey<TodoModel>(TodoModel, 'order', curr + 1);
                    todo['task'] = todo.getKey('task');
                    this.editItem(todo);
                }
            });
            var todoSrc:TodoModel = getTodoModelByOrder(src);
            todoSrc = todoSrc.setKey<TodoModel>(TodoModel, 'order', trg);
            todoSrc['task'] = todoSrc.getKey('task');
            this.editItem(todoSrc);
        } else {
            todos.forEach((todo:TodoModel)=> {
                var curr:number = parseInt(todo.getKey('order'));
                if (curr <= trg) {
                    todo = todo.setKey<TodoModel>(TodoModel, 'order', curr - 1);
                    todo['task'] = todo.getKey('task');
                    this.editItem(todo);
                }
            });
            var todoSrc:TodoModel = getTodoModelByOrder(src);
            todoSrc = todoSrc.setKey<TodoModel>(TodoModel, 'order', trg);
            todoSrc['task'] = todoSrc.getKey('task');
            this.editItem(todoSrc);
        }
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