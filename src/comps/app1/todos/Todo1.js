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
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, (typeof (_a = typeof core_1.ChangeDetectorRef !== 'undefined' && core_1.ChangeDetectorRef) === 'function' && _a) || Object])
                ], Todo1);
                return Todo1;
                var _a;
            }());
            exports_1("Todo1", Todo1);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvVG9kbzEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBSUksZUFBWSxXQUF1QixFQUFVLEdBQXFCO29CQUFyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtvQkFDOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQ25DLENBQUM7Z0JBRU8sZ0NBQWdCLEdBQXhCO29CQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7Z0JBQy9CLENBQUM7Z0JBRU8sc0JBQU0sR0FBZCxVQUFlLEtBQUs7b0JBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQTtnQkFDakQsQ0FBQztnQkEvQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFFLGtqQkFVRztxQkFFaEIsQ0FBQzs7eUJBQUE7Z0JBa0JGLFlBQUM7O1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCx5QkFnQkMsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAxL3RvZG9zL1RvZG8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdUb2RvMScsXHJcbiAgICB0ZW1wbGF0ZTogYCA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25OZXh0KCRldmVudClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gZ29OZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hcnJvdy1yaWdodFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzbWFsbD5JIGFtIHRoZSB0b2RvMSBjb21wb25lbnQ8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25Gb3JjZURldGVjdGlvbigpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGdvTmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEZvcmNlIGNoYW5nZSBkZXRlY3Rpb24gb24gY29tcG9uZW50O1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICBgXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG8xIHtcclxuXHJcbiAgICBwcml2YXRlIHNsaWRlclBhbmVsOlNsaWRlcnBhbmVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNsaWRlclBhbmVsOlNsaWRlcnBhbmVsLCBwcml2YXRlIHJlZjpDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUGFuZWwgPSBzbGlkZXJQYW5lbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRm9yY2VEZXRlY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NkIGNvbXBsZXRlZCcpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk5leHQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNsaWRlclBhbmVsLnNsaWRlVG9QYWdlKCd0b2RvMicsICdsZWZ0JylcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
