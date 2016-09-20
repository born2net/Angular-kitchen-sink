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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvVG9kbzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQU1JLGVBQWUsRUFDZixTQUFTLEVBQ1QsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUZQLGVBQWUsR0FBRyxTQUFTLEVBQzNCLFNBQVMsR0FBRyxTQUFTLEVBQ3JCLE9BQU8sR0FBRyxNQUFNLENBQUM7WUE4RHJCO2dCQUdJLGVBQVksV0FBdUIsRUFBVSxhQUE0QjtvQkFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVPLHNCQUFNLEdBQWQsVUFBZSxLQUFLO29CQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7Z0JBQ2xELENBQUM7Z0JBakVMO29CQUFDLCtCQUFjLENBQUM7d0JBQ1osS0FBSyxFQUFFOzRCQUNILE9BQU8sRUFBRSxLQUFLOzRCQUNkLGVBQWUsRUFBRSxTQUFTO3lCQUM3QjtxQkFDSixDQUFDO29CQUVELGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixNQUFNLEVBQUUsQ0FBQyxpQ0FBbUIsQ0FBQzt3QkFDN0IsUUFBUSxFQUFFLHF4RUEwQ087cUJBQ3BCLENBQUM7O3lCQUFBO2dCQVlGLFlBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELHlCQVVDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMS90b2Rvcy9Ub2RvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IFRvZG9TdGF0c01vZGVsIGZyb20gXCIuL1RvZG9TdGF0c01vZGVsXCI7XHJcbmltcG9ydCB7U3R5bGVEZWNvcmF0b3J9IGZyb20gJy4uLy4uLy4uL2NvbXBzL3N0eWxlZGVjb3JhdG9yL1N0eWxlRGVjb3JhdG9yJztcclxuaW1wb3J0IFRvZG9TdGF0c01vZGVsU3R5bGUgZnJvbSAnLi9Ub2RvU3RhdHNNb2RlbC5jc3MhdGV4dCc7XHJcblxyXG52YXIgYmFja2dyb3VuZENvbG9yID0gXCIjRkZGRkZGXCIsXHJcbiAgICBsaWdodEdyYXkgPSBcIiNFREVERURcIixcclxuICAgIHBhZGRpbmcgPSBcIjEwcHhcIjtcclxuXHJcbi8qKlxyXG4gKiBBIHJlYWxseSBjb29sIGV4YW1wbGUgb2YgdXNpbmcgYSBjdXN0b20gZGVjb3JhdG9yIGZvciBhIGNvbXBvbmVudCwgc2VlICBTdHlsZURlY29yYXRvciBzb3VyY2VcclxuICogcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vY3N0ZWZhbmFjaGUvbmcyLXN0eWxlclxyXG4gKiovXHJcbkBTdHlsZURlY29yYXRvcih7XHJcbiAgICBcImRpdlwiOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzFlbScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZjlmOScsXHJcbiAgICB9XHJcbn0pXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnVG9kbzInLFxyXG4gICAgbW9kdWxlSWQ6IF9fbW9kdWxlTmFtZSxcclxuICAgIHN0eWxlczogW1RvZG9TdGF0c01vZGVsU3R5bGVdLFxyXG4gICAgdGVtcGxhdGU6IGAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGg1PnRoaXMgY29tcG9uZW50IGlzIGRlY29yYXRvciB1c2luZyBhIGN1c3RvbSBTdHlsZURlY29yYXRvciA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvblByZXYoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdCBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkkgYW0gdG9kbzIgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBkYXRlLW5hZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGRhdGUtc3BsaXRcIj48aSBjbGFzcz1cImZhIGZhLXJlZnJlc2hcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwZGF0ZS10ZXh0XCI+VG90YWwgVG8tRG8gdXBkYXRlcyBmcm9tIHNlcnZlcjoge3t0b2RvU3RhdE1vZGVsLnVwZGF0ZXN9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwZGF0ZS1uYWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBkYXRlLXNwbGl0IHVwZGF0ZS1pbmZvXCI+PGkgY2xhc3M9XCJmYSBmYS1mb2xkZXItb3BlblwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBkYXRlLXRleHRcIj5Ub3RhbCBUby1EbyByZWFkcyBmcm9tIHNlcnZlcjoge3t0b2RvU3RhdE1vZGVsLnJlYWRzfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGRhdGUtbmFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwZGF0ZS1zcGxpdCB1cGRhdGUtc3VjY2Vzc1wiPjxpIGNsYXNzPVwiZmEgZmEtbGVhZlwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBkYXRlLXRleHRcIj5Ub3RhbCBUby1EbyBjcmVhdGVzIGZyb20gc2VydmVyOiB7e3RvZG9TdGF0TW9kZWwuY3JlYXRlc319PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBkYXRlLW5hZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGRhdGUtc3BsaXQgdXBkYXRlLWRhbmdlclwiPjxpIGNsYXNzPVwiZmEgZmEtd2FybmluZy1zaWduXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGRhdGUtdGV4dFwiPlRvdGFsIFRvLURvIGRlbGV0ZXMgZnJvbSBzZXJ2ZXI6IHt7dG9kb1N0YXRNb2RlbC5kZWxldGVzfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG8yIHtcclxuICAgIHByaXZhdGUgc2xpZGVyUGFuZWw6U2xpZGVycGFuZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2xpZGVyUGFuZWw6U2xpZGVycGFuZWwsIHByaXZhdGUgdG9kb1N0YXRNb2RlbDpUb2RvU3RhdHNNb2RlbCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUGFuZWwgPSBzbGlkZXJQYW5lbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUHJldihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUGFuZWwuc2xpZGVUb1BhZ2UoJ3RvZG8xJywgJ3JpZ2h0JylcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
