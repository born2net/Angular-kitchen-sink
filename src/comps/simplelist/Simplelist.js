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
var router_1 = require('angular2/router');
var common_directives_1 = require("angular2/src/common/common_directives");
var SimpleList = (function () {
    function SimpleList() {
        this.current = new core_1.EventEmitter();
        this.linkResultPerItem = {};
    }
    SimpleList.prototype.getContent = function (item) {
        if (this.content) {
            return this.content(item);
        }
        else {
            return item;
        }
    };
    SimpleList.prototype.getLink = function (item) {
        if (this.link) {
            var key = item;
            if (typeof key === "object") {
                key = JSON.stringify(key);
            }
            if (this.linkResultPerItem[key] == null) {
                this.linkResultPerItem[key] = this.link(item);
            }
            return this.linkResultPerItem[key];
        }
        else {
            return null;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SimpleList.prototype, "list", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], SimpleList.prototype, "content", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], SimpleList.prototype, "link", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SimpleList.prototype, "current", void 0);
    SimpleList = __decorate([
        core_1.Component({
            selector: 'simple-list',
            template: "\n        <div *ngIf=\"!list\">\n            Loading...\n        </div>\n        <div *ngIf=\"list\">\n            <table class=\"table table-striped table-bordered table-hover\">\n                <tbody>\n                    <tr *ngFor=\"#item of list\" (mouseover)=\"current.next(item)\" (mouseout)=\"current.next(null)\">\n                        <td *ngIf=\"!link\">{{getContent(item)}}</td>\n                        <td *ngIf=\"link\"><a [routerLink]=\"getLink(item)\">{{getContent(item)}}</a></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ",
            directives: [router_1.RouterLink, common_directives_1.COMMON_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleList);
    return SimpleList;
})();
exports.SimpleList = SimpleList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3NpbXBsZWxpc3Qvc2ltcGxlbGlzdC50cyJdLCJuYW1lcyI6WyJTaW1wbGVMaXN0IiwiU2ltcGxlTGlzdC5jb25zdHJ1Y3RvciIsIlNpbXBsZUxpc3QuZ2V0Q29udGVudCIsIlNpbXBsZUxpc3QuZ2V0TGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBQ3JFLHVCQUF5QixpQkFDekIsQ0FBQyxDQUR5QztBQUMxQyxrQ0FBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUV4RTtJQTBCSUE7UUFGVUMsWUFBT0EsR0FBc0JBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtRQWNsREEsc0JBQWlCQSxHQUFHQSxFQUFFQSxDQUFDQTtJQVgvQkEsQ0FBQ0E7SUFFREQsK0JBQVVBLEdBQVZBLFVBQVdBLElBQUlBO1FBQ1hFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO1lBQ2ZBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNKQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFJREYsNEJBQU9BLEdBQVBBLFVBQVFBLElBQUlBO1FBQ1JHLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ1pBLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBO1lBQ2ZBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO2dCQUMxQkEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLENBQUNBO1lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BDQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ2xEQSxDQUFDQTtZQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3ZDQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNKQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUEvQkRIO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFDQSw0QkFBSUEsVUFBT0E7SUFDcEJBO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFDQSwrQkFBT0EsVUFBaUJBO0lBQ2pDQTtRQUFDQSxZQUFLQSxFQUFFQTs7T0FBQ0EsNEJBQUlBLFVBQWNBO0lBQzNCQTtRQUFDQSxhQUFNQSxFQUFFQTs7T0FBQ0EsK0JBQU9BLFVBQXlDQTtJQXhCOURBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtZQUN2QkEsUUFBUUEsRUFBRUEsMGxCQWNUQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSxtQkFBVUEsRUFBRUEscUNBQWlCQSxDQUFDQTtTQUM5Q0EsQ0FBQ0E7O21CQW9DREE7SUFBREEsaUJBQUNBO0FBQURBLENBdERBLEFBc0RDQSxJQUFBO0FBbkNZLGtCQUFVLGFBbUN0QixDQUFBIiwiZmlsZSI6ImNvbXBzL3NpbXBsZWxpc3QvU2ltcGxlbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcclxuaW1wb3J0IHtDT01NT05fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb21tb24vY29tbW9uX2RpcmVjdGl2ZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaW1wbGUtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhbGlzdFwiPlxyXG4gICAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImxpc3RcIj5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjaXRlbSBvZiBsaXN0XCIgKG1vdXNlb3Zlcik9XCJjdXJyZW50Lm5leHQoaXRlbSlcIiAobW91c2VvdXQpPVwiY3VycmVudC5uZXh0KG51bGwpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cIiFsaW5rXCI+e3tnZXRDb250ZW50KGl0ZW0pfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJsaW5rXCI+PGEgW3JvdXRlckxpbmtdPVwiZ2V0TGluayhpdGVtKVwiPnt7Z2V0Q29udGVudChpdGVtKX19PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmssIENPTU1PTl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlTGlzdCB7XHJcblxyXG4gICAgQElucHV0KCkgbGlzdDphbnlbXTtcclxuICAgIEBJbnB1dCgpIGNvbnRlbnQ6KChhbnkpPT5zdHJpbmcpO1xyXG4gICAgQElucHV0KCkgbGluazooYW55KT0+YW55W107XHJcbiAgICBAT3V0cHV0KCkgY3VycmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGVudChpdGVtKTpzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd29yayBhcm91bmQgYSBwcm9ibGVtIHdpdGggY2hhbmdpbmcgbGlua3MgZm9yIGl0ZW1zIChBbmd1bGFyMi1iZXRhIGRvZXNuJ3QgbGlrZSB0aGF0KVxyXG4gICAgcHJpdmF0ZSBsaW5rUmVzdWx0UGVySXRlbSA9IHt9O1xyXG4gICAgZ2V0TGluayhpdGVtKTooYW55KT0+YW55W10ge1xyXG4gICAgICAgIGlmICh0aGlzLmxpbmspIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGl0ZW07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBKU09OLnN0cmluZ2lmeShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbmtSZXN1bHRQZXJJdGVtW2tleV09PW51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlua1Jlc3VsdFBlckl0ZW1ba2V5XSA9IHRoaXMubGluayhpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rUmVzdWx0UGVySXRlbVtrZXldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
