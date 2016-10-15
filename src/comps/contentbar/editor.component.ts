import { Component, OnInit, AfterViewInit, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core'
import { BaseEditor } from './base-editor';


@Component({
    template: `
        <div>
            <select (change)="onQuestionChange($event.target.value)">
                <option *ngFor="let editor of editors" [value]="editor.editorName">{{ editor.editorName }}</option>
            </select>
        </div>
        <div>
            <ng-content></ng-content>
        </div>
        <div>
            <button (click)="onClickSubmit()">submit</button>
        </div>
    `,
    selector: 'question-editor'
})
export class EditorComponent  {

    @Output() formValueChange: EventEmitter<string> = new EventEmitter<string>();
    @ContentChildren(BaseEditor) editors: QueryList<BaseEditor>;

    onQuestionChange(newQuestion: string) {

        // reset editors
        this.hideAllEditors();
        let editorFilter = this.editors.filter(editor => editor.editorName === newQuestion);
        let editor = editorFilter[0];

        if(editor == null) {
            throw new Error(`Cannot find question editor for: ${newQuestion}`)
        }

        editor.isSelected = true;
    }

    onClickSubmit() {
        let currentEditor = this.editors.filter(editor => editor.isSelected)[0];
        console.log(`submitting: ${currentEditor.value}`);
        this.formValueChange.emit(currentEditor.value);
    }

    private hideAllEditors(): void {
        this.editors.forEach(editor => {
            editor.isSelected = false;
        })
    }
}