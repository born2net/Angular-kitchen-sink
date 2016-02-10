import {Component} from "angular2/core";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import TodoStatsModel from "./TodoStatsModel";

@Component({
    selector: 'Todo2',
    styleUrls: ['../comps/app1/todos/TodoStatsModel.css'],
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left "></span>
                    </button>
                    <small>I am todo2 component</small>
                    <ng-content></ng-content>
                    <div class="container">
                        <div class="row">

                            <div class="col-md-12">
                              <div class="update-nag">
                                <div class="update-split"><i class="fa fa-refresh"></i></div>
                                <div class="update-text">Total To-Do updates from server: {{todoStatModel.updates}}</div>
                              </div>
                            </div>

                            <div class="col-md-12">
                              <div class="update-nag">
                                <div class="update-split update-info"><i class="fa fa-folder-open"></i></div>
                                <div class="update-text">Total To-Do reads from server: {{todoStatModel.reads}}</div>
                              </div>
                            </div>

                            <div class="col-md-12">
                              <div class="update-nag">
                                <div class="update-split update-success"><i class="fa fa-leaf"></i></div>
                                <div class="update-text">Total To-Do creates from server: {{todoStatModel.creates}}</div>
                              </div>
                            </div>

                            <div class="col-md-12">
                              <div class="update-nag">
                                <div class="update-split update-danger"><i class="fa fa-warning-sign"></i></div>
                                <div class="update-text">Total To-Do deletes from server: {{todoStatModel.deletes}}</div>
                              </div>
                            </div>

                        </div>
                    </div>
                    `
})

export class Todo2 {
    private sliderPanel:Sliderpanel;

    constructor(sliderPanel:Sliderpanel, private todoStatModel:TodoStatsModel) {
        this.sliderPanel = sliderPanel;
    }

    private onPrev(event) {
        this.sliderPanel.slideToPage('todo1', 'right')
    }
}


