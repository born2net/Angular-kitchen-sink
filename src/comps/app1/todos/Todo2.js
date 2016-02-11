"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var Sliderpanel_1 = require("../../sliderpanel/Sliderpanel");
var TodoStatsModel_1 = require("./TodoStatsModel");
var Todo2 = (function () {
    function Todo2(sliderPanel, todoStatModel) {
        this.todoStatModel = todoStatModel;
        this.sliderPanel = sliderPanel;
    }
    Todo2.prototype.onPrev = function (event) {
        this.sliderPanel.slideToPage('todo1', 'right');
    };
    Todo2 = __decorate([
        core_1.Component({
            selector: 'Todo2',
            styleUrls: ['../comps/app1/todos/TodoStatsModel.css'],
            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                    </button>\n                    <small>I am todo2 component</small>\n                    <ng-content></ng-content>\n                    <div class=\"container\">\n                        <div class=\"row\">\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split\"><i class=\"fa fa-refresh\"></i></div>\n                                <div class=\"update-text\">Total To-Do updates from server: {{todoStatModel.updates}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-info\"><i class=\"fa fa-folder-open\"></i></div>\n                                <div class=\"update-text\">Total To-Do reads from server: {{todoStatModel.reads}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-success\"><i class=\"fa fa-leaf\"></i></div>\n                                <div class=\"update-text\">Total To-Do creates from server: {{todoStatModel.creates}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-danger\"><i class=\"fa fa-warning-sign\"></i></div>\n                                <div class=\"update-text\">Total To-Do deletes from server: {{todoStatModel.deletes}}</div>\n                              </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    "
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, TodoStatsModel_1.default])
    ], Todo2);
    return Todo2;
}());
exports.Todo2 = Todo2;
//# sourceMappingURL=Todo2.js.map