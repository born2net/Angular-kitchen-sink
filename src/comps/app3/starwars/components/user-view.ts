import {Component, Input, ChangeDetectionStrategy} from 'angular2/core'

@Component({
    selector: 'user',
    template: `
        <form *ngIf="data" class="form">
            <div class="form-group">
                <span>Name:</span><label>{{data.name}}</label>
            </div>
            <div class="form-group">
                <span>Hair:</span><label>{{data.hair_color}}</label>
            </div>
            <div class="form-group">
                <span>Gender:</span><label>{{data.gender}}</label>
            </div>
            <div class="form-group">
                <span>Eyes:</span><label>{{data.eye_color}}</label>
            </div>
        </form>
    `,
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserView {
    @Input() data = {};
}