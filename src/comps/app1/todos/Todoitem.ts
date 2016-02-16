import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {TodoItemModel} from './TodoService';
//import './Todoitem.css';

@Component({
    selector: 'todo-item',
    template: `
                <div class="view">
                    <input [(ngModel)]="_item.task" class="editInput" *ngIf="editMode" value="{{_item.task}}"/>
                    <label  *ngIf="!editMode">{{_item.getKey('task')}}</label>
                    <button (click)="doneClicked()"  class="fa fa-minus buttonsDone"></button>
                    <button (click)="editClicked()" [ngClass]="{'fa-check-square': editMode}" class="fa fa-edit buttonsEdit"></button>
                </div>
    `,
    styleUrls: ['../comps/app1/todos/Todoitem.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItem {
    private editMode = false;
    private _item:TodoItemModel;

    // demonstrate intercepting a set input in case you want to modify data
    @Input()
    set item(value:TodoItemModel) {
        this._item = value;
    }

    @Output()
    done = new EventEmitter();
    @Output()
    edit = new EventEmitter();

    doneClicked() {
        this.done.next(this._item);
    }

    editClicked() {
        this.editMode = !this.editMode;
        if (this.editMode)
            return;
        this.edit.next(this._item);
    }
}
