System.register(["@angular/core", "../../sliderpanel/Sliderpanel", "./TodoStatsModel", '../../../comps/styledecorator/StyleDecorator', './TodoStatsModel.css!text'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Sliderpanel_1, TodoStatsModel_1, StyleDecorator_1, TodoStatsModel_css_text_1;
    var backgroundColor, lightGray, padding, Todo2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (TodoStatsModel_1_1) {
                TodoStatsModel_1 = TodoStatsModel_1_1;
            },
            function (StyleDecorator_1_1) {
                StyleDecorator_1 = StyleDecorator_1_1;
            },
            function (TodoStatsModel_css_text_1_1) {
                TodoStatsModel_css_text_1 = TodoStatsModel_css_text_1_1;
            }],
        execute: function() {
            backgroundColor = "#FFFFFF", lightGray = "#EDEDED", padding = "10px";
            Todo2 = (function () {
                function Todo2(sliderPanel, todoStatModel) {
                    this.todoStatModel = todoStatModel;
                    this.sliderPanel = sliderPanel;
                }
                Todo2.prototype.onPrev = function (event) {
                    this.sliderPanel.slideToPage('todo1', 'right');
                };
                Todo2 = __decorate([
                    StyleDecorator_1.StyleDecorator({
                        "div": {
                            padding: '1em',
                            backgroundColor: '#fff9f9',
                        }
                    }),
                    core_1.Component({
                        selector: 'Todo2',
                        moduleId: __moduleName,
                        styles: [TodoStatsModel_css_text_1.default],
                        template: " <div>\n                     <h5>this component is decorator using a custom StyleDecorator </h5>\n                     <hr>\n                     <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                    </button>\n                    <small>I am todo2 component</small>\n                    <ng-content></ng-content>\n                    <div class=\"container\">\n                        <div class=\"row\">\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split\"><i class=\"fa fa-refresh\"></i></div>\n                                <div class=\"update-text\">Total To-Do updates from server: {{todoStatModel.updates}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-info\"><i class=\"fa fa-folder-open\"></i></div>\n                                <div class=\"update-text\">Total To-Do reads from server: {{todoStatModel.reads}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-success\"><i class=\"fa fa-leaf\"></i></div>\n                                <div class=\"update-text\">Total To-Do creates from server: {{todoStatModel.creates}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-danger\"><i class=\"fa fa-warning-sign\"></i></div>\n                                <div class=\"update-text\">Total To-Do deletes from server: {{todoStatModel.deletes}}</div>\n                              </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                    "
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, TodoStatsModel_1.default])
                ], Todo2);
                return Todo2;
            }());
            exports_1("Todo2", Todo2);
        }
    }
});
//# sourceMappingURL=Todo2.js.map