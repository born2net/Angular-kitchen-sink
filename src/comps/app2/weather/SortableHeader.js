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
    var SortableHeader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvd2VhdGhlci9Tb3J0YWJsZUhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFBQTtnQkF1QkEsQ0FBQztnQkFkRyxzQ0FBYSxHQUFiO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7NEJBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDM0IsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQzFCLENBQUM7b0JBQ0wsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQzNCLENBQUM7Z0JBQ0wsQ0FBQztnQkFsQkQ7b0JBQUMsWUFBSyxDQUFDLGdCQUFnQixDQUFDOztpRUFBQTtnQkFJeEI7b0JBQUMsWUFBSyxFQUFFOzs0REFBQTtnQkF4Qlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsNFZBT1g7d0JBQ0MsTUFBTSxFQUFFLENBQUMsb0ZBS1YsQ0FBQztxQkFDSCxDQUFDOztrQ0FBQTtnQkF3QkYscUJBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELDJDQXVCQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvd2VhdGhlci9Tb3J0YWJsZUhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGhbc29ydGFibGVIZWFkZXJdJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IChjbGljayk9XCJoZWFkZXJDbGlja2VkKClcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zb3J0XCIgW2hpZGRlbl09XCJzb3J0LmZpZWxkID09PSBmaWVsZE5hbWVcIj48L2k+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc29ydC1hc2NcIiBbaGlkZGVuXT1cInNvcnQuZmllbGQgIT09IGZpZWxkTmFtZSB8fCBzb3J0LmRlc2NcIj48L2k+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc29ydC1kZXNjXCIgW2hpZGRlbl09XCJzb3J0LmZpZWxkICE9PSBmaWVsZE5hbWUgfHwgIXNvcnQuZGVzY1wiPjwvaT5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUhlYWRlciB7XHJcblxyXG4gICAgLy8gbWFwIHRoZSBzb3J0YWJsZUhlYWRlciBpbnB1dCBpbnRvIGEgbG9jYWwgdmFyIG5hbWVkIGZpZWxkTmFtZVxyXG4gICAgQElucHV0KCdzb3J0YWJsZUhlYWRlcicpIGZpZWxkTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8vIG5vIG1hcHBpbmcganVzdCBjcmVhdGUgbG9jYWwgcmVmZXJlbmNlIHNvcnQgd2hpY2ggZ2V0cyBwYXNzZWQgaW5cclxuICAgIC8vIHRoZSBzb3J0IHBvaW50cyB0byBzYW1lIGluc3RhbmNlIGFzIHRoZSBvbmUgZnJvbSB0aGUgaG9zdCBjb21wb25lbnRcclxuICAgIEBJbnB1dCgpIHNvcnQ6IHtmaWVsZDogc3RyaW5nLCBkZXNjOiBib29sZWFufTtcclxuXHJcbiAgICBoZWFkZXJDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNvcnQuZmllbGQgPT09IHRoaXMuZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNvcnQuZGVzYyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0LmRlc2MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydC5maWVsZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuZGVzYyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNvcnQuZmllbGQgPSB0aGlzLmZpZWxkTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5zb3J0LmRlc2MgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
