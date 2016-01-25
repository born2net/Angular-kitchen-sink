import {Component, Input, Output, ChangeDetectionStrategy, EventEmitter} from 'angular2/core'

@Component({
    selector: 'film',
    template: `
        <label>{{data?.title}}</label><span *ngIf="loading" class="blink">loading...</span>
        <p>{{data?.opening_crawl}}</p>
    `,
    styles: [`
        .blink {
            margin-left:10px;
            animation: blink .75s linear infinite;
        }
        @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 1; }
            50.01% { opacity: 0; }
            100% { opacity: 0; }
        }
    `],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class FilmView {

    @Input() data = null;
    @Input() loading = false;

}