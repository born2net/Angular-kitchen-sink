System.register(["@angular/core", "./Menu"], function(exports_1, context_1) {
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
    var core_1, Menu_1;
    var MenuItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Menu_1_1) {
                Menu_1 = Menu_1_1;
            }],
        execute: function() {
            MenuItem = (function () {
                function MenuItem(i_appMenu) {
                    this.title = 'no name';
                    this.m_appMenu = i_appMenu;
                    this.m_appMenu.addMenuItem(this);
                }
                MenuItem.prototype.ngAfterViewInit = function () {
                    var self = this;
                };
                MenuItem = __decorate([
                    core_1.Component({
                        inputs: ['localTabTitle:tabtitle', 'localFontAwesome:fontAwesome'],
                        selector: 'MenuItem',
                        template: ""
                    }), 
                    __metadata('design:paramtypes', [Menu_1.Menu])
                ], MenuItem);
                return MenuItem;
            }());
            exports_1("MenuItem", MenuItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3NpZGVtZW51L01lbnVJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBSUksa0JBQVksU0FBYztvQkFIbkIsVUFBSyxHQUFVLFNBQVMsQ0FBQztvQkFJNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVELGtDQUFlLEdBQWY7b0JBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixDQUFDO2dCQWhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLE1BQU0sRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixDQUFDO3dCQUNsRSxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLEVBQUU7cUJBQ2YsQ0FBQzs7NEJBQUE7Z0JBYUYsZUFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsK0JBWUMsQ0FBQSIsImZpbGUiOiJjb21wcy9zaWRlbWVudS9NZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge01lbnV9IGZyb20gXCIuL01lbnVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgaW5wdXRzOiBbJ2xvY2FsVGFiVGl0bGU6dGFidGl0bGUnLCAnbG9jYWxGb250QXdlc29tZTpmb250QXdlc29tZSddLFxyXG4gICAgc2VsZWN0b3I6ICdNZW51SXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogYGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVJdGVtIHtcclxuICAgIHB1YmxpYyB0aXRsZTpzdHJpbmcgPSAnbm8gbmFtZSc7XHJcbiAgICBwcml2YXRlIG1fYXBwTWVudTpNZW51O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlfYXBwTWVudTpNZW51KSB7XHJcbiAgICAgICAgdGhpcy5tX2FwcE1lbnUgPSBpX2FwcE1lbnU7XHJcbiAgICAgICAgdGhpcy5tX2FwcE1lbnUuYWRkTWVudUl0ZW0odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
