// for reference see: http://www.bennadel.com/blog/3116-using-an-item-template-with-an-html-dropdown-menu-component-in-angular-2-rc-3.htm

import {Component} from "@angular/core";

// Import the application components and services.
import {InjectTemplateChild} from "./InjectTemplateChild";

interface Friend {
    id: number;
    name: string;
    avatar: string;
}
@Component({
    selector: "InjectTemplateParent",
    directives: [InjectTemplateChild],

    // I our view, notice that we are providing a TemplateRef as a child element of the
    // HtmlDropdownComponent. The dropdown component will query for this template and
    // then use it to render both the option items as well as the root item.
    template: `
		<p>
			<strong>Best Friend</strong>: {{ bestFriend?.name || "None selected" }}
			&mdash;
			<a (click)="clearSelection()">Clear selection</a>
		</p>

		<InjectTemplateChild [items]="friends" [(value)]="bestFriend" placeholder="Select Angry bird">
			<template let-friend="item">
				<img [src]="( './assets/' + friend.avatar )" />
				<span class="name">
					{{ friend.name }}
				</span>
			</template>
		</InjectTemplateChild>
	`
})
export class InjectTemplateParent {

    // I hold the friend that is selected as the best friend.
    public bestFriend: Friend;

    // I hold the collection of friends.
    public friends: Friend[];


    // I initialize the component.
    constructor() {
        this.bestFriend = null;
        this.friends = [
            {
                id: 1,
                name: "Angry",
                avatar: "angry.png"
            },
            {
                id: 2,
                name: "Fast tracker",
                avatar: "fasttracker.png"
            },
            {
                id: 3,
                name: "Pivoter",
                avatar: "pivoter.png"
            },
            {
                id: 4,
                name: "Time bomb",
                avatar: "timebomb.png"
            }
        ];
    }

    public clearSelection(): void {
        this.bestFriend = null;
    }

}