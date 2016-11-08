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
//# sourceMappingURL=OrderBy.js.map