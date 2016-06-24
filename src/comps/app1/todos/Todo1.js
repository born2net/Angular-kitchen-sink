System.register(["@angular/core", "../../sliderpanel/Sliderpanel"], function(exports_1, context_1) {
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
    var core_1, Sliderpanel_1;
    var Todo1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            }],
        execute: function() {
            Todo1 = (function () {
                function Todo1(sliderPanel, ref) {
                    this.ref = ref;
                    this.sliderPanel = sliderPanel;
                }
                Todo1.prototype.onForceDetection = function () {
                    this.ref.markForCheck();
                    console.log('cd completed');
                };
                Todo1.prototype.onNext = function (event) {
                    this.sliderPanel.slideToPage('todo2', 'left');
                };
                Todo1 = __decorate([
                    core_1.Component({
                        selector: 'Todo1',
                        template: " <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm goNext\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>                \n                <small>I am the todo1 component</small>\n               <br/>\n                <br/>\n                 <button type=\"button\" (click)=\"onForceDetection()\" class=\"btn btn-default btn-sm goNext\">\n                    Force change detection on component;\n                </button>\n                <ng-content></ng-content>\n                "
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, core_1.ChangeDetectorRef])
                ], Todo1);
                return Todo1;
            }());
            exports_1("Todo1", Todo1);
        }
    }
});
//# sourceMappingURL=Todo1.js.map