System.register(["@angular/core", "angular2-redux-util"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_redux_util_1;
    var APP_START_TIME, AppdbAction;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            }],
        execute: function() {
            exports_1("APP_START_TIME", APP_START_TIME = 'APP_START_TIME');
            AppdbAction = (function (_super) {
                __extends(AppdbAction, _super);
                function AppdbAction() {
                    _super.apply(this, arguments);
                }
                AppdbAction.prototype.appStartTime = function () {
                    return { type: APP_START_TIME, value: Date.now() };
                };
                AppdbAction = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AppdbAction);
                return AppdbAction;
            }(angular2_redux_util_1.Actions));
            exports_1("AppdbAction", AppdbAction);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvQXBwZGJBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR2EsY0FBYzs7Ozs7Ozs7OztZQUFkLDRCQUFBLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQSxDQUFDO1lBSy9DO2dCQUFpQywrQkFBTztnQkFBeEM7b0JBQWlDLDhCQUFPO2dCQUt4QyxDQUFDO2dCQUhVLGtDQUFZLEdBQW5CO29CQUNJLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQUxMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQU1iLGtCQUFDO1lBQUQsQ0FMQSxBQUtDLENBTGdDLDZCQUFPLEdBS3ZDO1lBTEQscUNBS0MsQ0FBQSIsImZpbGUiOiJhY3Rpb25zL0FwcGRiQWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCJhbmd1bGFyMi1yZWR1eC11dGlsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQVBQX1NUQVJUX1RJTUUgPSAnQVBQX1NUQVJUX1RJTUUnO1xyXG5cclxuLyoqIGdsb2JhbCBhcHBsaWNhdGlvbiBhY3Rpb25zIGRlZmluZWQgaGVyZSAqKi9cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcGRiQWN0aW9uIGV4dGVuZHMgQWN0aW9ucyB7XHJcblxyXG4gICAgcHVibGljIGFwcFN0YXJ0VGltZSgpIHtcclxuICAgICAgICByZXR1cm4ge3R5cGU6IEFQUF9TVEFSVF9USU1FLCB2YWx1ZTogRGF0ZS5ub3coKX07XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
