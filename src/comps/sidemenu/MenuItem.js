var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var Menu_1 = require("./Menu");
var MenuItem = (function () {
    function MenuItem(i_appMenu) {
        this.title = 'no name';
        this.m_appMenu = i_appMenu;
        this.m_appMenu.addMenuItem(this);
    }
    MenuItem.prototype.ngAfterViewInit = function () {
        var self = this;
    };
    MenuItem = __decorate([
        core_1.Component({
            inputs: ['localTabTitle:tabtitle', 'localFontAwesome:fontAwesome'],
            selector: 'MenuItem',
            template: ""
        }), 
        __metadata('design:paramtypes', [Menu_1.Menu])
    ], MenuItem);
    return MenuItem;
})();
exports.MenuItem = MenuItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3NpZGVtZW51L21lbnVpdGVtLnRzIl0sIm5hbWVzIjpbIk1lbnVJdGVtIiwiTWVudUl0ZW0uY29uc3RydWN0b3IiLCJNZW51SXRlbS5uZ0FmdGVyVmlld0luaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxxQkFBbUIsUUFBUSxDQUFDLENBQUE7QUFFNUI7SUFTSUEsa0JBQVlBLFNBQWNBO1FBSG5CQyxVQUFLQSxHQUFVQSxTQUFTQSxDQUFDQTtRQUk1QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0E7UUFDM0JBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ3JDQSxDQUFDQTtJQUVERCxrQ0FBZUEsR0FBZkE7UUFDSUUsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDcEJBLENBQUNBO0lBaEJMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsTUFBTUEsRUFBRUEsQ0FBQ0Esd0JBQXdCQSxFQUFFQSw4QkFBOEJBLENBQUNBO1lBQ2xFQSxRQUFRQSxFQUFFQSxVQUFVQTtZQUNwQkEsUUFBUUEsRUFBRUEsRUFBRUE7U0FDZkEsQ0FBQ0E7O2lCQWFEQTtJQUFEQSxlQUFDQTtBQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtBQVpZLGdCQUFRLFdBWXBCLENBQUEiLCJmaWxlIjoiY29tcHMvc2lkZW1lbnUvTWVudUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtNZW51fSBmcm9tIFwiLi9NZW51XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGlucHV0czogWydsb2NhbFRhYlRpdGxlOnRhYnRpdGxlJywgJ2xvY2FsRm9udEF3ZXNvbWU6Zm9udEF3ZXNvbWUnXSxcclxuICAgIHNlbGVjdG9yOiAnTWVudUl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6IGBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51SXRlbSB7XHJcbiAgICBwdWJsaWMgdGl0bGU6c3RyaW5nID0gJ25vIG5hbWUnO1xyXG4gICAgcHJpdmF0ZSBtX2FwcE1lbnU6TWVudTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpX2FwcE1lbnU6TWVudSkge1xyXG4gICAgICAgIHRoaXMubV9hcHBNZW51ID0gaV9hcHBNZW51O1xyXG4gICAgICAgIHRoaXMubV9hcHBNZW51LmFkZE1lbnVJdGVtKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
