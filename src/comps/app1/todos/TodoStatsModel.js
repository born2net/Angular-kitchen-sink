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
    var TodoStatsModel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoStatsModel = (function () {
                function TodoStatsModel() {
                    this.updates = 0;
                    this.deletes = 0;
                    this.reads = 0;
                    this.creates = 0;
                }
                TodoStatsModel = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TodoStatsModel);
                return TodoStatsModel;
            }());
            exports_1("default", TodoStatsModel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvVG9kb1N0YXRzTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtvQkFDSSxZQUFPLEdBQUcsQ0FBQyxDQUFDO29CQUNaLFlBQU8sR0FBRyxDQUFDLENBQUM7b0JBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztvQkFDVixZQUFPLEdBQUcsQ0FBQyxDQUFBO2dCQUNmLENBQUM7Z0JBTkQ7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBTWIscUJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELG9DQUtDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMS90b2Rvcy9Ub2RvU3RhdHNNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1N0YXRzTW9kZWwge1xyXG4gICAgdXBkYXRlcyA9IDA7XHJcbiAgICBkZWxldGVzID0gMDtcclxuICAgIHJlYWRzID0gMDtcclxuICAgIGNyZWF0ZXMgPSAwXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
