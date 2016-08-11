System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var SimpleList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SimpleList = (function () {
                function SimpleList(differs, changeDetector) {
                    this.changeDetector = changeDetector;
                    this.current = new core_1.EventEmitter();
                    this.linkResultPerItem = {};
                    this.differ = differs.find([]).create(null);
                }
                SimpleList.prototype.ngDoCheck = function () {
                    var changes = this.differ.diff(this.list);
                    if (changes) {
                    }
                };
                SimpleList.prototype.getContent = function (item) {
                    if (this.content) {
                        return this.content(item);
                    }
                    else {
                        return item;
                    }
                };
                SimpleList.prototype.getLink = function (item) {
                    if (this.link) {
                        var key = item;
                        if (typeof key === "object") {
                            key = JSON.stringify(key);
                        }
                        if (this.linkResultPerItem[key] == null) {
                            this.linkResultPerItem[key] = this.link(item);
                        }
                        return this.linkResultPerItem[key];
                    }
                    else {
                        return null;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SimpleList.prototype, "list", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function)
                ], SimpleList.prototype, "content", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function)
                ], SimpleList.prototype, "link", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SimpleList.prototype, "current", void 0);
                SimpleList = __decorate([
                    core_1.Component({
                        selector: 'simple-list',
                        template: "\n        <div *ngIf=\"!list\">\n            Loading...\n        </div>\n        <div *ngIf=\"list\">\n            <table class=\"table table-striped table-bordered table-hover\">\n                <tbody>\n                    <tr *ngFor=\"let item of list\" (mouseover)=\"current.next(item)\" (mouseout)=\"current.next(null)\">\n                        <td *ngIf=\"!link\">{{getContent(item)}}</td>\n                        <td *ngIf=\"link\"><a [routerLink]=\"getLink(item)\">{{getContent(item)}}</a></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.IterableDiffers, core_1.ChangeDetectorRef])
                ], SimpleList);
                return SimpleList;
            }());
            exports_1("SimpleList", SimpleList);
        }
    }
});
//# sourceMappingURL=Simplelist.js.map