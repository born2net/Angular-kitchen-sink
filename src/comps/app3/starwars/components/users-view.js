System.register(["@angular/core"], function(exports_1, context_1) {
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
    var UsersView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UsersView = (function () {
                function UsersView() {
                    this.data = {};
                    this.current = new core_1.EventEmitter();
                }
                UsersView.prototype.getContent = function (user) { return user.name; };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UsersView.prototype, "data", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], UsersView.prototype, "current", void 0);
                UsersView = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "\n        <simple-list\n            [list]=\"data\"\n            [content]=\"getContent\"\n            (current)=\"current.emit($event)\"></simple-list>\n    ",
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [])
                ], UsersView);
                return UsersView;
                var _a;
            }());
            exports_1("UsersView", UsersView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy91c2Vycy12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQUE7b0JBQ2EsU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFDVCxZQUFPLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUk3RCxDQUFDO2dCQUZHLDhCQUFVLEdBQVYsVUFBVyxJQUFRLElBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUhqRDtvQkFBQyxZQUFLLEVBQUU7O3VEQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7MERBQUE7Z0JBWmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFFLGdLQUtUO3dCQUNELGVBQWUsRUFBQyw4QkFBdUIsQ0FBQyxNQUFNO3FCQUNqRCxDQUFDOzs2QkFBQTtnQkFPRixnQkFBQzs7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELGlDQU1DLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL3VzZXJzLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTaW1wbGVMaXN0fSBmcm9tIFwiLi4vLi4vLi4vc2ltcGxlbGlzdC9TaW1wbGVsaXN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXNlcnMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8c2ltcGxlLWxpc3RcclxuICAgICAgICAgICAgW2xpc3RdPVwiZGF0YVwiXHJcbiAgICAgICAgICAgIFtjb250ZW50XT1cImdldENvbnRlbnRcIlxyXG4gICAgICAgICAgICAoY3VycmVudCk9XCJjdXJyZW50LmVtaXQoJGV2ZW50KVwiPjwvc2ltcGxlLWxpc3Q+XHJcbiAgICBgLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlcnNWaWV3IHtcclxuICAgIEBJbnB1dCgpIGRhdGEgPSB7fTtcclxuICAgIEBPdXRwdXQoKSBjdXJyZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGdldENvbnRlbnQodXNlcjphbnkpOnN0cmluZyB7IHJldHVybiB1c2VyLm5hbWU7IH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
