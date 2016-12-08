import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core'

@Component({
    selector: 'cart',
    template: `
        <p [class.hidden]="parts.length>0" class="text-muted">Empty :(</p>
        <table>
            <tr *ngFor="let part of parts">
                <td>
                    <button style="margin-right:10px;margin-bottom:3px;margin-top:3px"
                        (click)="removeFromCart.emit(part.id)">remove
                    </button>
                </td>
                <td>{{part.name}}</td>
            </tr>
        </table>
    `,
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class CartView {

    @Input() parts = [];
    @Output() removeFromCart: EventEmitter<any> = new EventEmitter();

}