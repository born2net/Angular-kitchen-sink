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
    var AddPartsView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AddPartsView = (function () {
                function AddPartsView() {
                    this.add = new core_1.EventEmitter();
                }
                AddPartsView.prototype.onSubmit = function ($event, value) {
                    $event.preventDefault();
                    this.add.emit(value);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], AddPartsView.prototype, "add", void 0);
                AddPartsView = __decorate([
                    core_1.Component({
                        selector: 'add-part',
                        template: "\n        <form class=\"form-inline\" (submit)=\"onSubmit($event,name.value);name.value=''\">\n            <div class=\"form-group\">\n                <input #name type=\"text\" class=\"form-control\" placeholder=\"Part Name\" autocomplete=\"off\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Add</button>\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddPartsView);
                return AddPartsView;
                var _a;
            }());
            exports_1("AddPartsView", AddPartsView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9hZGQtcGFydC12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQUE7b0JBRWMsUUFBRyxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFNekQsQ0FBQztnQkFKVywrQkFBUSxHQUFoQixVQUFpQixNQUFNLEVBQUUsS0FBSztvQkFDMUIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFMRDtvQkFBQyxhQUFNLEVBQUU7O3lEQUFBO2dCQWJiO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSxpWEFPVDtxQkFDSixDQUFDOztnQ0FBQTtnQkFTRixtQkFBQzs7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHVDQVFDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL2FkZC1wYXJ0LXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FkZC1wYXJ0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLWlubGluZVwiIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50LG5hbWUudmFsdWUpO25hbWUudmFsdWU9JydcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAjbmFtZSB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXJ0IE5hbWVcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkUGFydHNWaWV3IHtcclxuXHJcbiAgICBAT3V0cHV0KCkgYWRkOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHByaXZhdGUgb25TdWJtaXQoJGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuYWRkLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
