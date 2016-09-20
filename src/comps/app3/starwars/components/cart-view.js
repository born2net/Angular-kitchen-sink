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
    var CartView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CartView = (function () {
                function CartView() {
                    this.parts = [];
                    this.removeFromCart = new core_1.EventEmitter();
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CartView.prototype, "parts", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], CartView.prototype, "removeFromCart", void 0);
                CartView = __decorate([
                    core_1.Component({
                        selector: 'cart',
                        template: "\n        <p [class.hidden]=\"parts.length>0\" class=\"text-muted\">Empty :(</p>\n        <table>\n            <tr *ngFor=\"let part of parts\">\n                <td>\n                    <button style=\"margin-right:10px;margin-bottom:3px;margin-top:3px\"\n                        (click)=\"removeFromCart.emit(part.id)\">remove\n                    </button>\n                </td>\n                <td>{{part.name}}</td>\n            </tr>\n        </table>\n    ",
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [])
                ], CartView);
                return CartView;
                var _a;
            }());
            exports_1("CartView", CartView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9jYXJ0LXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBRWEsVUFBSyxHQUFHLEVBQUUsQ0FBQztvQkFDVixtQkFBYyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFFckUsQ0FBQztnQkFIRztvQkFBQyxZQUFLLEVBQUU7O3VEQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7Z0VBQUE7Z0JBcEJiO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFFBQVEsRUFBRSxvZEFZVDt3QkFDRCxlQUFlLEVBQUMsOEJBQXVCLENBQUMsTUFBTTtxQkFDakQsQ0FBQzs7NEJBQUE7Z0JBTUYsZUFBQzs7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELCtCQUtDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL2NhcnQtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhcnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8cCBbY2xhc3MuaGlkZGVuXT1cInBhcnRzLmxlbmd0aD4wXCIgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+RW1wdHkgOig8L3A+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHBhcnQgb2YgcGFydHNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjEwcHg7bWFyZ2luLWJvdHRvbTozcHg7bWFyZ2luLXRvcDozcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlRnJvbUNhcnQuZW1pdChwYXJ0LmlkKVwiPnJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57e3BhcnQubmFtZX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgYCxcclxuICAgIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcnRWaWV3IHtcclxuXHJcbiAgICBASW5wdXQoKSBwYXJ0cyA9IFtdO1xyXG4gICAgQE91dHB1dCgpIHJlbW92ZUZyb21DYXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
