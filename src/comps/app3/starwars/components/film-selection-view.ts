import {Component, Input, Output, ChangeDetectionStrategy, EventEmitter, OnChanges} from 'angular2/core'

@Component({
    selector: 'film-selection',
    template: `
        <button type="button"
            *ngFor="#item of list"
            class="vehicle-selection"
            [ngClass]="{'btn-primary':item==currentSelection}"
            (click)="select(item)"
            >
            {{item+1}}
        </button>
    `,
    styles: [`
        .vehicle-selection {
            margin-right:8px;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmSelectionView implements OnChanges {

    @Input()
    count = 0;
    @Output()
    current:EventEmitter<any> = new EventEmitter();

    private currentSelection = null;
    private list;

    ngOnChanges() {
        this.list = (this.count > 0 ? Array.apply(null, Array(this.count)).map((x, index) => index) : []);
    }

    private select(item) {
        this.currentSelection = item;
        this.current.next(item);
    }


}