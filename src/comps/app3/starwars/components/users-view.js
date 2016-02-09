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
var Simplelist_1 = require("../../../simplelist/Simplelist");
var UsersView = (function () {
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
        __metadata('design:type', core_1.EventEmitter)
    ], UsersView.prototype, "current", void 0);
    UsersView = __decorate([
        core_1.Component({
            selector: 'users',
            template: "\n        <simple-list\n            [list]=\"data\"\n            [content]=\"getContent\"\n            (current)=\"current.next($event)\"></simple-list>\n    ",
            directives: [Simplelist_1.SimpleList],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], UsersView);
    return UsersView;
})();
exports.UsersView = UsersView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy91c2Vycy12aWV3LnRzIl0sIm5hbWVzIjpbIlVzZXJzVmlldyIsIlVzZXJzVmlldy5jb25zdHJ1Y3RvciIsIlVzZXJzVmlldy5nZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBOEUsZUFDOUUsQ0FBQyxDQUQ0RjtBQUM3RiwyQkFBeUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUUxRDtJQUFBQTtRQVlhQyxTQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNUQSxZQUFPQSxHQUFxQkEsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO0lBSTdEQSxDQUFDQTtJQUZHRCw4QkFBVUEsR0FBVkEsVUFBV0EsSUFBUUEsSUFBV0UsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFIakRGO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFDQSwyQkFBSUEsVUFBTUE7SUFDbkJBO1FBQUNBLGFBQU1BLEVBQUVBOztPQUFDQSw4QkFBT0EsVUFBd0NBO0lBYjdEQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsT0FBT0E7WUFDakJBLFFBQVFBLEVBQUVBLGdLQUtUQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSx1QkFBVUEsQ0FBQ0E7WUFDeEJBLGVBQWVBLEVBQUNBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7U0FDakRBLENBQUNBOztrQkFPREE7SUFBREEsZ0JBQUNBO0FBQURBLENBakJBLEFBaUJDQSxJQUFBO0FBTlksaUJBQVMsWUFNckIsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAzL3N0YXJ3YXJzL2NvbXBvbmVudHMvdXNlcnMtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQge1NpbXBsZUxpc3R9IGZyb20gXCIuLi8uLi8uLi9zaW1wbGVsaXN0L1NpbXBsZWxpc3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1c2VycycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzaW1wbGUtbGlzdFxyXG4gICAgICAgICAgICBbbGlzdF09XCJkYXRhXCJcclxuICAgICAgICAgICAgW2NvbnRlbnRdPVwiZ2V0Q29udGVudFwiXHJcbiAgICAgICAgICAgIChjdXJyZW50KT1cImN1cnJlbnQubmV4dCgkZXZlbnQpXCI+PC9zaW1wbGUtbGlzdD5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbU2ltcGxlTGlzdF0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc1ZpZXcge1xyXG4gICAgQElucHV0KCkgZGF0YSA9IHt9O1xyXG4gICAgQE91dHB1dCgpIGN1cnJlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgZ2V0Q29udGVudCh1c2VyOmFueSk6c3RyaW5nIHsgcmV0dXJuIHVzZXIubmFtZTsgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
