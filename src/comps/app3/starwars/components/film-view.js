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
var FilmView = (function () {
    function FilmView() {
        this.data = null;
        this.loading = false;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FilmView.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FilmView.prototype, "loading", void 0);
    FilmView = __decorate([
        core_1.Component({
            selector: 'film',
            template: "\n        <label>{{data?.title}}</label><span *ngIf=\"loading\" class=\"blink\">loading...</span>\n        <p>{{data?.opening_crawl}}</p>\n    ",
            styles: ["\n        .blink {\n            margin-left:10px;\n            animation: blink .75s linear infinite;\n        }\n        @keyframes blink {\n            0% { opacity: 1; }\n            50% { opacity: 1; }\n            50.01% { opacity: 0; }\n            100% { opacity: 0; }\n        }\n    "],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], FilmView);
    return FilmView;
})();
exports.FilmView = FilmView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9maWxtLXZpZXcudHMiXSwibmFtZXMiOlsiRmlsbVZpZXciLCJGaWxtVmlldy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQThFLGVBRTlFLENBQUMsQ0FGNEY7QUFFN0Y7SUFBQUE7UUFzQmFDLFNBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ1pBLFlBQU9BLEdBQUdBLEtBQUtBLENBQUNBO0lBRTdCQSxDQUFDQTtJQUhHRDtRQUFDQSxZQUFLQSxFQUFFQTs7T0FBQ0EsMEJBQUlBLFVBQVFBO0lBQ3JCQTtRQUFDQSxZQUFLQSxFQUFFQTs7T0FBQ0EsNkJBQU9BLFVBQVNBO0lBdkI3QkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLE1BQU1BO1lBQ2hCQSxRQUFRQSxFQUFFQSxpSkFHVEE7WUFDREEsTUFBTUEsRUFBRUEsQ0FBQ0Esc1NBV1JBLENBQUNBO1lBQ0ZBLGVBQWVBLEVBQUNBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7U0FDakRBLENBQUNBOztpQkFNREE7SUFBREEsZUFBQ0E7QUFBREEsQ0F6QkEsQUF5QkNBLElBQUE7QUFMWSxnQkFBUSxXQUtwQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9maWxtLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWxtJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGxhYmVsPnt7ZGF0YT8udGl0bGV9fTwvbGFiZWw+PHNwYW4gKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJibGlua1wiPmxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgPHA+e3tkYXRhPy5vcGVuaW5nX2NyYXdsfX08L3A+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5ibGluayB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYmxpbmsgLjc1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgYmxpbmsge1xyXG4gICAgICAgICAgICAwJSB7IG9wYWNpdHk6IDE7IH1cclxuICAgICAgICAgICAgNTAlIHsgb3BhY2l0eTogMTsgfVxyXG4gICAgICAgICAgICA1MC4wMSUgeyBvcGFjaXR5OiAwOyB9XHJcbiAgICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbiAgICAgICAgfVxyXG4gICAgYF0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxtVmlldyB7XHJcblxyXG4gICAgQElucHV0KCkgZGF0YSA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
