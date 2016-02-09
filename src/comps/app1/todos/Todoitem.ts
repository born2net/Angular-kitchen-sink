import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {TodoItemModel} from './TodoService';
//import './Todoitem.css';

@Component({
    selector: 'todo-item',
    template: `
                <div class="view">
                    <input [(ngModel)]="item.task" class="editInput" *ngIf="editMode" value="{{item.task}}"/>
                    <label  *ngIf="!editMode">{{item.getKey('task')}}</label>
                    <button (click)="doneClicked()"  class="fa fa-minus buttonsDone"></button>
                    <button (click)="editClicked()" [ngClass]="{'fa-check-square': editMode}" class="fa fa-edit buttonsEdit"></button>
                </div>
    `,
    styleUrls: ['../comps/app1/todos/Todoitem.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItem {
    private editMode = false;

    @Input()
    item:TodoItemModel;
    @Output()
    done = new EventEmitter();
    @Output()
    edit = new EventEmitter();

    doneClicked() {
        this.done.next(this.item);
    }

    editClicked() {
        this.editMode = !this.editMode;
        if (this.editMode)
            return;
        this.edit.next(this.item);
    }
}
