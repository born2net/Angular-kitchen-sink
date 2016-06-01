System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var SortableHeader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SortableHeader = (function () {
                function SortableHeader() {
                }
                SortableHeader.prototype.headerClicked = function () {
                    if (this.sort.field === this.fieldName) {
                        if (this.sort.desc === true) {
                            this.sort.desc = false;
                            this.sort.field = null;
                        }
                        else {
                            this.sort.desc = true;
                        }
                    }
                    else {
                        this.sort.field = this.fieldName;
                        this.sort.desc = false;
                    }
                };
                __decorate([
                    core_1.Input('sortableHeader'), 
                    __metadata('design:type', String)
                ], SortableHeader.prototype, "fieldName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SortableHeader.prototype, "sort", void 0);
                SortableHeader = __decorate([
                    core_1.Component({
                        selector: 'th[sortableHeader]',
                        directives: [common_1.COMMON_DIRECTIVES],
                        template: "\n    <div (click)=\"headerClicked()\">\n      <i class=\"fa fa-sort\" [hidden]=\"sort.field === fieldName\"></i>\n      <i class=\"fa fa-sort-asc\" [hidden]=\"sort.field !== fieldName || sort.desc\"></i>\n      <i class=\"fa fa-sort-desc\" [hidden]=\"sort.field !== fieldName || !sort.desc\"></i>\n      <ng-content></ng-content>\n    </div>\n  ",
                        styles: ["\n        div {\n          cursor: pointer;\n          width: 80px;\n        }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SortableHeader);
                return SortableHeader;
            }());
            exports_1("SortableHeader", SortableHeader);
        }
    }
});
//# sourceMappingURL=SortableHeader.js.map