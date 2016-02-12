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
var NotesDetailsItems_1 = require("./NotesDetailsItems");
var NotesDetails = (function () {
    function NotesDetails(items) {
        this.items = items;
    }
    NotesDetails.prototype.ngAfterContentInit = function () {
        var self = this;
        self.items.changes.subscribe(function (e) {
            console.log("I see " + self.items.length + " items");
        });
    };
    NotesDetails = __decorate([
        core_1.Component({
            selector: 'notes-details',
            template: "\n                I see {{items?.length}} items. <ng-content></ng-content>\n                <small>I am NotesDetails (constructor based QueryList)</small>\n                "
        }),
        __param(0, core_1.Query(NotesDetailsItems_1.NotesDetailsItems)), 
        __metadata('design:paramtypes', [core_1.QueryList])
    ], NotesDetails);
    return NotesDetails;
})();
exports.NotesDetails = NotesDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXNkZXRhaWxzLnRzIl0sIm5hbWVzIjpbIk5vdGVzRGV0YWlscyIsIk5vdGVzRGV0YWlscy5jb25zdHJ1Y3RvciIsIk5vdGVzRGV0YWlscy5uZ0FmdGVyQ29udGVudEluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEwQyxlQUFlLENBQUMsQ0FBQTtBQUMxRCxrQ0FBZ0MscUJBQXFCLENBQUMsQ0FBQTtBQUl0RDtJQVVJQSxzQkFBc0NBLEtBQWtDQTtRQUNwRUMsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBRURELHlDQUFrQkEsR0FBbEJBO1FBQ0lFLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBRWhCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxDQUFDQTtZQUMzQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsV0FBU0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsV0FBUUEsQ0FBQ0EsQ0FBQUE7UUFDbkRBLENBQUNBLENBQUNBLENBQUFBO0lBQ05BLENBQUNBO0lBcEJMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsZUFBZUE7WUFDekJBLFFBQVFBLEVBQUVBLDhLQUdHQTtTQUNoQkEsQ0FBQ0E7UUFJY0EsV0FBQ0EsWUFBS0EsQ0FBQ0EscUNBQWlCQSxDQUFDQSxDQUFBQTs7cUJBV3hDQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7QUFkWSxvQkFBWSxlQWN4QixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXNEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFF1ZXJ5LCBRdWVyeUxpc3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge05vdGVzRGV0YWlsc0l0ZW1zfSBmcm9tIFwiLi9Ob3Rlc0RldGFpbHNJdGVtc1wiO1xyXG5cclxuLy8gbm90aWNlIHRoZSBvcHRpb25hbCB7e2l0ZW1zPy5sZW5ndGh9fSBkZWNlbGVyYXRpb25cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdub3Rlcy1kZXRhaWxzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgICBJIHNlZSB7e2l0ZW1zPy5sZW5ndGh9fSBpdGVtcy4gPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkkgYW0gTm90ZXNEZXRhaWxzIChjb25zdHJ1Y3RvciBiYXNlZCBRdWVyeUxpc3QpPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGVzRGV0YWlscyB7XHJcbiAgICBpdGVtczpRdWVyeUxpc3Q8Tm90ZXNEZXRhaWxzSXRlbXM+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBRdWVyeShOb3Rlc0RldGFpbHNJdGVtcykgaXRlbXM6UXVlcnlMaXN0PE5vdGVzRGV0YWlsc0l0ZW1zPikge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIGFjdCB1cG9uIGNoYW5nZXMgaW4gaGlkZS9zaG93IG9mIG15IGNoaWxkcmVuXHJcbiAgICAgICAgc2VsZi5pdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgoZSk9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJIHNlZSAke3NlbGYuaXRlbXMubGVuZ3RofSBpdGVtc2ApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
