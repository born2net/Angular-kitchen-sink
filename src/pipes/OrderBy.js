System.register(['@angular/core', 'lodash'], function(exports_1, context_1) {
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
    var core_1, _;
    var OrderBy;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            OrderBy = (function () {
                function OrderBy() {
                }
                OrderBy.prototype.transform = function (input) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var field = args[0];
                    var desc = args[1] == undefined ? false : args[1];
                    if (input && field) {
                        return Array.from(input).sort(function (a, b) {
                            if (_.get(a, field) < _.get(b, field)) {
                                return desc ? 1 : -1;
                            }
                            if (_.get(a, field) > _.get(b, field)) {
                                return desc ? -1 : 1;
                            }
                            return 0;
                        });
                    }
                    return input;
                };
                OrderBy = __decorate([
                    core_1.Pipe({
                        name: 'OrderBy'
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrderBy);
                return OrderBy;
            }());
            exports_1("OrderBy", OrderBy);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL09yZGVyQnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQTtnQkFvQkEsQ0FBQztnQkFqQkcsMkJBQVMsR0FBVCxVQUFVLEtBQWU7b0JBQUUsY0FBYTt5QkFBYixXQUFhLENBQWIsc0JBQWEsQ0FBYixJQUFhO3dCQUFiLDZCQUFhOztvQkFDcEMsSUFBSSxLQUFLLEdBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFTLEVBQUUsQ0FBUzs0QkFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNwQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsQ0FBQzs0QkFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3BDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUN6QixDQUFDOzRCQUNELE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2IsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztvQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQXJCTDtvQkFBQyxXQUFJLENBQUM7d0JBQ0YsSUFBSSxFQUFFLFNBQVM7cUJBQ2xCLENBQUM7OzJCQUFBO2dCQXFCRixjQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCw2QkFvQkMsQ0FBQSIsImZpbGUiOiJwaXBlcy9PcmRlckJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ09yZGVyQnknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcmRlckJ5IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgLy8gdHJhbnNmb3JtKGlucHV0OiBPYmplY3RbXSwgW2ZpZWxkLCBkZXNjID0gZmFsc2VdOiBbc3RyaW5nLCBib29sZWFuXSk6IE9iamVjdFtdIHtcclxuICAgIHRyYW5zZm9ybShpbnB1dDogT2JqZWN0W10sIC4uLmFyZ3M6YW55W10pOiBPYmplY3RbXSB7XHJcbiAgICAgICAgdmFyIGZpZWxkID0gIGFyZ3NbMF07XHJcbiAgICAgICAgdmFyIGRlc2MgPSBhcmdzWzFdID09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJnc1sxXTtcclxuICAgICAgICBpZiAoaW5wdXQgJiYgZmllbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oaW5wdXQpLnNvcnQoKGE6IE9iamVjdCwgYjogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5nZXQoYSwgZmllbGQpIDwgXy5nZXQoYiwgZmllbGQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlc2MgPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5nZXQoYSwgZmllbGQpID4gXy5nZXQoYiwgZmllbGQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlc2MgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
