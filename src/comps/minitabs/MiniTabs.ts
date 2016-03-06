import {Component, ContentChildren, QueryList, AfterContentInit, ViewChildren, Input} from 'angular2/core';
import {Minitab} from './Minitab';

/**
 *  Below I demonstrate dynamic class setup.
 *
 *  You can also do [class]="getClass()"  and it will set a string of class or classes, but this will mess
 *  with any of the classes on the element if they are already set.
 *
 *  Often you will want to toggle a single class, which you can do by
 *  using a [class.className] syntax in the property.
 *
 *  and more examples for styles:
 *
 <!-- getColor() returns a valid color -->
 <h1 [style.color]="getColor()">Title</h1>
 <h1 [style.line-height.em]="'2'">Title</h1>

 **/
@Component({
    selector: 'mini-tabs',
    styles: [`
        .accent {
            background-color: lightgray;
        }
    `],
    template: `
    <button [ngStyle]="_style" (click)="isAccent($event)">toggle a class style on/off</button>
    <ul class="nav nav-tabs">
      <li #tabItem *ngFor="#tab of tabs" (click)="selectTab(tab,$event)" [class.active]="tab.active"
        [class.accent]="toggleClass">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class Minitabs implements AfterContentInit {

    _style:Object;

    //As the name suggests, @ContentChild and @ContentChildren queries will return directives
    //existing inside the <ng-content></ng-content> element of your view,
    //whereas @ViewChild and @ViewChildren only look at elements
    //that are on your view template directly (i.e. the shadow dom).
    //here we are using the ViewChildren to grab all children via the tabItem index
    @ViewChildren('tabItem')
    myTabs:QueryList<any>;

    // ability to style components by passing css
    @Input('style')
    set style(i_style:Object){
        this._style = i_style;
    }

    ngAfterViewChecked() {
        //console.log(this.myTabs);
    }

    private toggleClass:boolean = false;
    @ContentChildren(Minitab)
    tabs:QueryList<Minitab>;

    // access native elements through the angular interface of ViewChildren
    isAccent() {
        this.toggleClass = !this.toggleClass;
        this.myTabs.map(i=> {
            console.log('my tabs ' + i._appElement.nativeElement);
        });
    }

    // contentChildren are set
    ngAfterContentInit() {
        console.log(this.tabs);
        // get all active tabs
        let activeTabs = this.tabs.filter((tab)=>tab.active);

        // if there is no active tab set, activate the first
        if (activeTabs.length === 0)
            this.selectTab(this.tabs.first);
    }

    selectTab(tab:Minitab, event?:MouseEvent) {
        // deactivate all tabs
        event ? event.preventDefault() : null;
        this.tabs.toArray().forEach(tab => tab.active = false);

        // activate the tab the user has clicked on.
        tab.active = true;
    }

}