System.register(["@angular/core", "angular2-redux-util", "lodash"], function(exports_1, context_1) {
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
    var core_1, angular2_redux_util_1, _;
    var ADD_PART, PartActions;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            exports_1("ADD_PART", ADD_PART = 'ADD_PART');
            PartActions = (function (_super) {
                __extends(PartActions, _super);
                function PartActions() {
                    _super.apply(this, arguments);
                    this.id = 11;
                }
                PartActions.prototype.addPart = function (name) {
                    return { type: ADD_PART, id: _.uniqueId(), name: name };
                };
                PartActions = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PartActions);
                return PartActions;
            }(angular2_redux_util_1.Actions));
            exports_1("PartActions", PartActions);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvYWN0aW9ucy9wYXJ0LWFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSWEsUUFBUTs7Ozs7Ozs7Ozs7OztZQUFSLHNCQUFBLFFBQVEsR0FBRyxVQUFVLENBQUEsQ0FBQztZQUduQztnQkFBaUMsK0JBQU87Z0JBQXhDO29CQUFpQyw4QkFBTztvQkFDNUIsT0FBRSxHQUFVLEVBQUUsQ0FBQztnQkFLM0IsQ0FBQztnQkFIRyw2QkFBTyxHQUFQLFVBQVEsSUFBSTtvQkFDUixNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBQSxJQUFJLEVBQUMsQ0FBQztnQkFDcEQsQ0FBQztnQkFOTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFPYixrQkFBQztZQUFELENBTkEsQUFNQyxDQU5nQyw2QkFBTyxHQU12QztZQU5ELHFDQU1DLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9hY3Rpb25zL3BhcnQtYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBY3Rpb25zfSBmcm9tIFwiYW5ndWxhcjItcmVkdXgtdXRpbFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUEFSVCA9ICdBRERfUEFSVCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYXJ0QWN0aW9ucyBleHRlbmRzIEFjdGlvbnMge1xyXG4gICAgcHJpdmF0ZSBpZDpudW1iZXIgPSAxMTtcclxuXHJcbiAgICBhZGRQYXJ0KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4ge3R5cGU6IEFERF9QQVJULCBpZDogXy51bmlxdWVJZCgpLCBuYW1lfTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
