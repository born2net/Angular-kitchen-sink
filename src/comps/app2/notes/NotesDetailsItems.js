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
var NotesDetailsItems = (function () {
    function NotesDetailsItems(zone) {
        this.zone = zone;
        this.select = new core_1.EventEmitter();
        this.myValue = 'val';
        this.random = Math.random();
        this.zone.run(function () {
            console.log('force update zone UI');
        });
    }
    NotesDetailsItems.prototype.onClick = function () {
        this.select.emit(this.myValue);
    };
    NotesDetailsItems.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NotesDetailsItems.prototype, "select", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], NotesDetailsItems.prototype, "content", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NotesDetailsItems.prototype, "myValue", void 0);
    NotesDetailsItems = __decorate([
        core_1.Component({
            selector: 'notes-details-item',
            changeDetection: core_1.ChangeDetectionStrategy.CheckAlways,
            template: "<br/>\n    <button (click)=\"onClick()\">click me</button>\n    <p>content from parent is: {{content(random)}}</p>\n    <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], NotesDetailsItems);
    return NotesDetailsItems;
})();
exports.NotesDetailsItems = NotesDetailsItems;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXNkZXRhaWxzaXRlbXMudHMiXSwibmFtZXMiOlsiTm90ZXNEZXRhaWxzSXRlbXMiLCJOb3Rlc0RldGFpbHNJdGVtcy5jb25zdHJ1Y3RvciIsIk5vdGVzRGV0YWlsc0l0ZW1zLm9uQ2xpY2siLCJOb3Rlc0RldGFpbHNJdGVtcy5uZ09uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXNGLGVBQWUsQ0FBQyxDQUFBO0FBR3RHO0lBa0JJQSwyQkFBb0JBLElBQVdBO1FBQVhDLFNBQUlBLEdBQUpBLElBQUlBLENBQU9BO1FBUi9CQSxXQUFNQSxHQUFxQkEsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO1FBSTlDQSxZQUFPQSxHQUFVQSxLQUFLQSxDQUFDQTtRQUtuQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7UUFDNUJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBO1lBQ1ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7UUFDeENBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBRURELG1DQUFPQSxHQUFQQTtRQUNJRSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFFREYsdUNBQVdBLEdBQVhBO0lBQ0FHLENBQUNBO0lBckJESDtRQUFDQSxhQUFNQSxFQUFFQTs7T0FDVEEscUNBQU1BLFVBQXdDQTtJQUM5Q0E7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQ1JBLHNDQUFPQSxVQUFpQkE7SUFDeEJBO1FBQUNBLFlBQUtBLEVBQUVBOztPQUNSQSxzQ0FBT0EsVUFBZ0JBO0lBZDNCQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsb0JBQW9CQTtZQUM5QkEsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxXQUFXQTtZQUNwREEsUUFBUUEsRUFBRUEsbUpBR2dCQTtTQUM3QkEsQ0FBQ0E7OzBCQXdCREE7SUFBREEsd0JBQUNBO0FBQURBLENBL0JBLEFBK0JDQSxJQUFBO0FBdkJZLHlCQUFpQixvQkF1QjdCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMi9ub3Rlcy9Ob3Rlc0RldGFpbHNJdGVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1RpbWVJbnRlcnZhbH0gZnJvbSBcInJ4anMvUnguS2l0Y2hlblNpbmtcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdub3Rlcy1kZXRhaWxzLWl0ZW0nLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5DaGVja0Fsd2F5cyxcclxuICAgIHRlbXBsYXRlOiBgPGJyLz5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiPmNsaWNrIG1lPC9idXR0b24+XHJcbiAgICA8cD5jb250ZW50IGZyb20gcGFyZW50IGlzOiB7e2NvbnRlbnQocmFuZG9tKX19PC9wPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGVzRGV0YWlsc0l0ZW1zIHtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgc2VsZWN0OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQElucHV0KClcclxuICAgIGNvbnRlbnQ6KChhbnkpPT5zdHJpbmcpO1xyXG4gICAgQElucHV0KClcclxuICAgIG15VmFsdWU6c3RyaW5nID0gJ3ZhbCc7XHJcblxyXG4gICAgcHJpdmF0ZSByYW5kb206YW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTpOZ1pvbmUpIHtcclxuICAgICAgICB0aGlzLnJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3JjZSB1cGRhdGUgem9uZSBVSScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLm15VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
