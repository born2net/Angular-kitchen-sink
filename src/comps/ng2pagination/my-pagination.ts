/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Pagination} from './pagination.component';
import {Pager} from './pager.component';
/*Angular 2 Pagination Example*/
@Component({
    selector: 'my-app',
    template:`
                <div class="row">

                    <h4>Angular 2 Pagination Example</h4> <br>
                    <span class="text-danger"> The selected page<span class="badge">{{currentSelectedPage}}</span> </span> <br>
                    <span class="text-danger"> Totoal items per page<span class="badge">{{currentItemsPerPage}}</span> </span> <br>

                    <div class="form-group">
                    <img [src]="slides[currentPage-1].image" style="margin:auto;">
                    </div>
                    <div class="form-group">
                    <pagination [boundaryLinks]="true" [totalItems]="totalResults"
                                [(ngModel)]="currentPage" (pageChanged)="currentPageChanged($event)"
                                [maxSize]="maxSize"
                                ></pagination>
                                <br>
                    <button type="button" class="btn btn-info" (click)="setCurrentPage(2)">Set the current page <span class="badge">to: 2</span></button> <br>

                    <br>
                    </div>
                    <div class="form-group" style="float: left">
                    <h4>Angular 2 Pager Example</h4>
                    <pager [totalItems]="totalResults" [(ngModel)]="currentPage" onPageChanged="currentPageChanged($event)"></pager>
                    </div>

                </div>

             `,
    directives: [Pagination, Pager, FORM_DIRECTIVES, CORE_DIRECTIVES],
})
export class Angular2Pagination  {
    //this array contains the image we will show for each page
    private slides:Array<any> = [];
    //print to the user the selected page
    currentSelectedPage:string="";
    //print to the user the total iterms per page
    currentItemsPerPage:string="";
    //the maximum buttons to show
    private maxSize:number = 3;
    //the number of pages you want to print
    private totalResults:number = 60;
    //the current page
    private currentPage:number = 2;

    constructor () {
        this.slides.push(
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg',text:'BMW 1'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg',text:'BMW 2'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg',text:'BMW 3'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg',text:'BMW 4'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'}
        );
    }

    private setCurrentPage(pageNo:number):void {
        this.currentPage = pageNo;
    };

    private currentPageChanged(event:any):void {
        this.currentSelectedPage = ' is : ' + event.page;
        this.currentItemsPerPage = ' is : ' +  event.itemsPerPage;
    };
}