var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var _ = require('lodash');
var OrderBy = (function () {
    function OrderBy() {
    }
    OrderBy.prototype.transform = function (input, _a) {
        var field = _a[0], _b = _a[1], desc = _b === void 0 ? false : _b;
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
})();
exports.OrderBy = OrderBy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL29yZGVyYnkudHMiXSwibmFtZXMiOlsiT3JkZXJCeSIsIk9yZGVyQnkuY29uc3RydWN0b3IiLCJPcmRlckJ5LnRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELElBQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBRTVCO0lBQUFBO0lBb0JBQyxDQUFDQTtJQWZHRCwyQkFBU0EsR0FBVEEsVUFBVUEsS0FBZUEsRUFBRUEsRUFBd0NBO1lBQXZDRSxLQUFLQSxzQkFBRUEsSUFBSUEsbUJBQUdBLEtBQUtBO1FBQzNDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsQ0FBU0EsRUFBRUEsQ0FBU0E7Z0JBQy9DQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDcENBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNwQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pCQSxDQUFDQTtnQkFDREEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDYkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDakJBLENBQUNBO0lBbEJMRjtRQUFDQSxXQUFJQSxDQUFDQTtZQUNGQSxJQUFJQSxFQUFFQSxTQUFTQTtTQUNsQkEsQ0FBQ0E7O2dCQWtCREE7SUFBREEsY0FBQ0E7QUFBREEsQ0FwQkEsQUFvQkNBLElBQUE7QUFqQlksZUFBTyxVQWlCbkIsQ0FBQSIsImZpbGUiOiJwaXBlcy9PcmRlckJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ09yZGVyQnknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcmRlckJ5IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKGlucHV0OiBPYmplY3RbXSwgW2ZpZWxkLCBkZXNjID0gZmFsc2VdOiBbc3RyaW5nLCBib29sZWFuXSk6IE9iamVjdFtdIHtcclxuICAgICAgICBpZiAoaW5wdXQgJiYgZmllbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oaW5wdXQpLnNvcnQoKGE6IE9iamVjdCwgYjogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5nZXQoYSwgZmllbGQpIDwgXy5nZXQoYiwgZmllbGQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlc2MgPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5nZXQoYSwgZmllbGQpID4gXy5nZXQoYiwgZmllbGQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlc2MgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
