import {Component, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core'

@Component({
    selector: 'add-part',
    template: `
        <form class="form-inline" (submit)="onSubmit($event,name.value);name.value=''">
            <div class="form-group">
                <input #name type="text" class="form-control" placeholder="Part Name" autocomplete="off">
            </div>
            <button type="submit" class="btn btn-default">Add</button>
        </form>
    `,
    changeDetection:ChangeDetectionStrategy.CheckOnce
})
export class AddPartsView {

    @Output() add:EventEmitter<any> = new EventEmitter();

    private onSubmit($event, value) {
        $event.preventDefault();
        this.add.next(value);
    }
}