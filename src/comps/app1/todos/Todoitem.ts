import {
    Component, Input, Output, EventEmitter, ChangeDetectionStrategy, KeyValueDiffers,
    KeyValueDiffer
} from '@angular/core';
import {TodoItemModel} from './TodoService';
import TodoItemTemplate from './Todoitem.css!text';

//import './Todoitem.css';

@Component({
    selector: 'todo-item',
    moduleId: __moduleName,
    template: `
                <div class="view">
                    <input [(ngModel)]="_item.task" class="editInput" *ngIf="editMode" value="{{_item.task}}"/>
                    <label  *ngIf="!editMode">{{_item.getKey('task')}}</label>
                    <button (click)="doneClicked()"  class="fa fa-minus buttonsDone"></button>
                    <button (click)="editClicked()" [ngClass]="{'fa-check-square': editMode}" class="fa fa-edit buttonsEdit"></button>
                    <button style="position: relative; left: -80px; top: -62px" class="pull-right fa fa-arrows-v buttonsEdit"></button>
                </div>
    `,
    styles: [TodoItemTemplate],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItem {

    constructor(differs: KeyValueDiffers) {
        this.differ = differs.find([]).create(null);
    }

    /**
     * Use KeyValueDiffers to generate KeyValueChangeRecord of each change
     * using the ngDoCheck life cycle hook
     */
    ngDoCheck() {
        var changes = this.differ.diff(this._item);
        if (changes) {
            changes.forEachAddedItem(r => console.log('added', r));
            changes.forEachRemovedItem(r => console.log('removed', r));
            changes.forEachChangedItem(r => console.log('changed', r));
        }
    }

    private differ:KeyValueDiffer;
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
        this.done.emit(this._item);
    }

    editClicked() {
        this.editMode = !this.editMode;
        if (this.editMode)
            return;
        this.edit.emit(this._item);
    }
}
