System.register(['@angular/core', "./Filemenu"], function(exports_1, context_1) {
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
    var core_1, Filemenu_1;
    var FilemenuItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Filemenu_1_1) {
                Filemenu_1 = Filemenu_1_1;
            }],
        execute: function() {
            FilemenuItem = (function () {
                function FilemenuItem(fileMenu) {
                    this.m_fileMenu = fileMenu;
                    this.m_fileMenu.addFileMenuItem(this);
                }
                FilemenuItem.prototype.ngAfterViewInit = function () {
                };
                FilemenuItem = __decorate([
                    core_1.Component({
                        selector: 'FilemenuItem',
                        inputs: ['title:title', 'app:app'],
                        template: ""
                    }), 
                    __metadata('design:paramtypes', [Filemenu_1.Filemenu])
                ], FilemenuItem);
                return FilemenuItem;
            }());
            exports_1("FilemenuItem", FilemenuItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2ZpbGVtZW51L0ZpbGVtZW51SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUVJLHNCQUFZLFFBQWlCO29CQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsc0NBQWUsR0FBZjtnQkFDQSxDQUFDO2dCQWJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUM7d0JBQ2xDLFFBQVEsRUFBRSxFQUFFO3FCQUNmLENBQUM7O2dDQUFBO2dCQVVGLG1CQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx1Q0FTQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2ZpbGVtZW51L0ZpbGVtZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGaWxlbWVudX0gZnJvbSBcIi4vRmlsZW1lbnVcIjtcclxuXHJcbi8qKlxyXG4gRmlsZW1lbnUgbWFuYWdlcyB0aGUgdG9wIGhlYWRlciBmaWxlIG1lbnUgcGVyIGFwcGxpY2F0aW9uIGFzIGl0IG11dGF0ZXMgaXQncyBjb250ZW50IGRlcGVuZGluZ1xyXG4gb24gd2hpY2ggQXBwIGhhcyBsb2FkZWRcclxuIEBjbGFzcyBGaWxlbWVudVxyXG4gKiovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdGaWxlbWVudUl0ZW0nLFxyXG4gICAgaW5wdXRzOiBbJ3RpdGxlOnRpdGxlJywgJ2FwcDphcHAnXSxcclxuICAgIHRlbXBsYXRlOiBgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZW1lbnVJdGVtIHtcclxuICAgIHByaXZhdGUgbV9maWxlTWVudTpGaWxlbWVudTtcclxuICAgIGNvbnN0cnVjdG9yKGZpbGVNZW51OkZpbGVtZW51KSB7XHJcbiAgICAgICAgdGhpcy5tX2ZpbGVNZW51ID0gZmlsZU1lbnU7XHJcbiAgICAgICAgdGhpcy5tX2ZpbGVNZW51LmFkZEZpbGVNZW51SXRlbSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKXtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
