var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var tabs_1 = require('../tabs/tabs');
var Tab = (function () {
    function Tab(tabs) {
        this.active = this.active || false;
        tabs.addTab(this);
    }
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            inputs: [
                'title:tabtitle',
                'active'
            ],
            styles: ["\n    .pane{\n      padding: 1em;\n    }\n  "],
            template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [tabs_1.Tabs])
    ], Tab);
    return Tab;
})();
exports.Tab = Tab;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3RhYnMvdGFiLnRzIl0sIm5hbWVzIjpbIlRhYiIsIlRhYi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHFCQUFtQixjQUFjLENBQUMsQ0FBQTtBQUVsQztJQTJCSUEsYUFBb0JBLElBQVNBO1FBRjdCQyxXQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQTtRQUkxQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDdEJBLENBQUNBO0lBOUJMRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsS0FBS0E7WUFDZkEsTUFBTUEsRUFBRUE7Z0JBQ0pBLGdCQUFnQkE7Z0JBQ2hCQSxRQUFRQTthQUNYQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSw4Q0FJVkEsQ0FBQ0E7WUFDQUEsUUFBUUEsRUFBRUEsa0dBSVhBO1NBQ0ZBLENBQUNBO1FBV2NBLFdBQUNBLFdBQUlBLEVBQUVBLENBQUFBOztZQUl0QkE7SUFBREEsVUFBQ0E7QUFBREEsQ0EvQkEsQUErQkNBLElBQUE7QUFSWSxXQUFHLE1BUWYsQ0FBQSIsImZpbGUiOiJjb21wcy90YWJzL3RhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtUYWJzfSBmcm9tICcuLi90YWJzL3RhYnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RhYicsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAndGl0bGU6dGFidGl0bGUnLFxyXG4gICAgICAgICdhY3RpdmUnXHJcbiAgICBdLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgLnBhbmV7XHJcbiAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIH1cclxuICBgXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtoaWRkZW5dPVwiIWFjdGl2ZVwiIGNsYXNzPVwicGFuZVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcblxyXG4vKipcclxuIEFkZCB0aGlzIFRhYiBhcyBwYXJ0IG9mIGl0J3MgcGFyZW50cyBUYWJzIGNvbXBvbmVudFxyXG4gdXNlIEBIb3N0IHRvIG1ha2Ugc3VyZSB3ZSBvbmx5IGxvb2sgZm9yIGEgcGFyZW50IFRhYnMgZGVwZW5kZW5jeSBpbmplY3RvclxyXG4gYW5kIGRvbid0IGdvIGFueSBmdXJ0aGVyIHRvIHByZXZlbnQgbG9va3VwIG9mIHdyb25nIFRhYnMgdW5kZXIgbWlzY29uZmlndXJhdGlvblxyXG4gKiovXHJcbmV4cG9ydCBjbGFzcyBUYWIge1xyXG4gICAgdGl0bGU6c3RyaW5nO1xyXG4gICAgYWN0aXZlID0gdGhpcy5hY3RpdmUgfHwgZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEhvc3QoKSB0YWJzOlRhYnMpIHtcclxuICAgICAgICAvL3RoaXMudGl0bGUgPSAndGFiJztcclxuICAgICAgICB0YWJzLmFkZFRhYih0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
