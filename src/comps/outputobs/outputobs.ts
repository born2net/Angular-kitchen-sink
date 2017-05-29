// ref: https://soyuka.me/angular2-external-subscriber-directive/

import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable, Observer} from "rxjs/Rx";

export interface ListItem {
    name: string;
}

export interface MyReactiveInputEvent {
    term: string;
    observer: Observer<any>;
}

@Component({
    selector: 'output-observable',
    template: `
        <input [formControl]="searchControl">
        <ul>
            <li *ngFor="let item of items">
                {{item.name}}
            </li>
        </ul>
    `,
})
export class OutputObservable implements OnInit {
    searchControl: FormControl = new FormControl();
    @Input() items: any[]
    @Output() onUpdate: EventEmitter<MyReactiveInputEvent> = new EventEmitter()

    ngOnInit() {
        this.searchControl.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap((term: string) => {
                if (this.onUpdate.observers.length === 0) {
                    return Observable.empty()
                }

                this.items = [];
                return Observable.create((observer: Observer<any>) => {
                    this.onUpdate.emit({term: term, observer: observer})
                })
            })
            .subscribe((item: any) => {
                this.items.push(item)
            })
    }
}

