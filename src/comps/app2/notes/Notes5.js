var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Sliderpanel_1 = require("../../sliderpanel/Sliderpanel");
var CommBroker_1 = require("../../../services/CommBroker");
var NotesBase_1 = require("./NotesBase");
var CountDown_1 = require("../../countdown/CountDown");
var NotesService = (function () {
    function NotesService(config) {
        this.config = config;
    }
    NotesService.prototype.showConfigValue = function () {
        console.log(this.config.noteDefault);
    };
    NotesService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject("NotesConfigValue")), 
        __metadata('design:paramtypes', [Object])
    ], NotesService);
    return NotesService;
})();
var Notes5 = (function (_super) {
    __extends(Notes5, _super);
    function Notes5(NotesService, sliderPanel, commBroker) {
        _super.call(this, sliderPanel, commBroker);
        this.NotesService = NotesService;
        this.sliderPanel = sliderPanel;
        this.commBroker = commBroker;
        NotesService.showConfigValue();
        this.me = this;
        this.slideRight = 'notes4';
    }
    Notes5 = __decorate([
        core_1.Component({
            selector: 'Notes5',
            directives: [CountDown_1.CountDown],
            providers: [
                NotesService,
                core_1.provide("NotesConfigValue", { useValue: { noteDefault: 'example of passing param to component via DI' } }),
            ],
            template: "<button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <hr/>\n                <small>I am notes5 component</small>\n                <div>\n                   <small>I am CountDown component</small>\n                    <h2>CountDown</h2>\n                    <div class=\"timer\" *CountDown=\"#timer=timerApi\">\n                      <div class=\"time\">{{ timer.getTime() }}</div>\n                      <div class=\"controls\">\n                        <button (click)=\"timer.toggle()\">Toggle</button>\n                        <button (click)=\"timer.reset()\">Reset</button>\n                      </div>\n                    </div>\n                </div>\n                <label>A unique example of how to <u>manually</u> create and bind a Template to a view using our very own *CountDown directive (note that asterisk)</label>\n                <br/>\n                <label>Check the code to learn more...</label>\n\n\n                "
        }), 
        __metadata('design:paramtypes', [NotesService, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes5);
    return Notes5;
})(NotesBase_1.NotesBase);
exports.Notes5 = Notes5;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXM1LnRzIl0sIm5hbWVzIjpbIk5vdGVzU2VydmljZSIsIk5vdGVzU2VydmljZS5jb25zdHJ1Y3RvciIsIk5vdGVzU2VydmljZS5zaG93Q29uZmlnVmFsdWUiLCJOb3RlczUiLCJOb3RlczUuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBQ3JFLDRCQUEwQiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzFELDJCQUF5Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3hELDBCQUF3QixhQUFhLENBQUMsQ0FBQTtBQUN0QywwQkFBd0IsMkJBQTJCLENBQUMsQ0FBQTtBQVdwRDtJQUVJQSxzQkFDbUJBLE1BQTRCQTtRQUE1QkMsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBc0JBO0lBQy9DQSxDQUFDQTtJQUVERCxzQ0FBZUEsR0FBZkE7UUFFSUUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7SUFDekNBLENBQUNBO0lBVExGO1FBQUNBLGlCQUFVQSxFQUFFQTtRQUVHQSxXQUFDQSxhQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUFBOztxQkFRMUNBO0lBQURBLG1CQUFDQTtBQUFEQSxDQVZBLEFBVUNBLElBQUE7QUFjRDtJQWdDNEJHLDBCQUFTQTtJQUNqQ0EsZ0JBQW9CQSxZQUF5QkEsRUFDdkJBLFdBQXVCQSxFQUN2QkEsVUFBcUJBO1FBQ3ZDQyxrQkFBTUEsV0FBV0EsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFIZkEsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO1FBQ3ZCQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7UUFDdkJBLGVBQVVBLEdBQVZBLFVBQVVBLENBQVdBO1FBRXZDQSxZQUFZQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtRQUMvQkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDZkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsUUFBUUEsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBeENMRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7WUFDbEJBLFVBQVVBLEVBQUVBLENBQUNBLHFCQUFTQSxDQUFDQTtZQUN2QkEsU0FBU0EsRUFBRUE7Z0JBRVBBLFlBQVlBO2dCQUNaQSxjQUFPQSxDQUFDQSxrQkFBa0JBLEVBQUVBLEVBQUNBLFFBQVFBLEVBQUVBLEVBQUNBLFdBQVdBLEVBQUVBLDhDQUE4Q0EsRUFBQ0EsRUFBQ0EsQ0FBQ0E7YUFDekdBO1lBQ0RBLFFBQVFBLEVBQUVBLDJqQ0FxQkdBO1NBQ2hCQSxDQUFDQTs7ZUFXREE7SUFBREEsYUFBQ0E7QUFBREEsQ0F6Q0EsQUF5Q0NBLEVBVDJCLHFCQUFTLEVBU3BDO0FBVFksY0FBTSxTQVNsQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgSW5qZWN0YWJsZSwgcHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7U2xpZGVycGFuZWx9IGZyb20gXCIuLi8uLi9zbGlkZXJwYW5lbC9TbGlkZXJwYW5lbFwiO1xyXG5pbXBvcnQge0NvbW1Ccm9rZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcbmltcG9ydCB7Tm90ZXNCYXNlfSBmcm9tIFwiLi9Ob3Rlc0Jhc2VcIjtcclxuaW1wb3J0IHtDb3VudERvd259IGZyb20gXCIuLi8uLi9jb3VudGRvd24vQ291bnREb3duXCI7XHJcblxyXG4vKipcclxuICogSW4gdGhpcyBleGFtcGxlIEkgc2hvdyB0byB0byBwYXNzIHBhcmFtZXRlcnMgdG8gYSBzZXJ2aWNlIHRoYXQgaXMgYmVpbmcgaW5qZWN0ZWQgdXNpbmdcclxuICogdGhlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGluIGFuZ3VsYXIyLlxyXG4gKiBUaGUgTm90ZXNTZXJ2aWNlIGdldHMgaW5qZWN0ZWQgaW50byB0aGUgTm90ZXM1IGNvbXBvbmVudCwgYW5kIGl0IGlzIHBhc3NlZCBpblxyXG4gKiBhIGNvbnN0cnVjdG9yIHBhcmFtZXRlciB2YWx1ZSBvZiAnZXhhbXBsZSBvZiBwYXNzaW5nIHBhcmFtIHRvIGNvbXBvbmVudCB2aWEgREknLlxyXG4gKiBUaGlzIGlzIHBvd2VyZnVsIGFzIGl0IGxldHMgdXNcclxuICogaW5zdGFudGlhdGUgY29tcG9uZW50cyB0aHJvdWdoIHRoZSBhbmd1bGFyIERJIHN5c3RlbSB3aXRoIHBhcmFtcy5cclxuICovXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmNsYXNzIE5vdGVzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KFwiTm90ZXNDb25maWdWYWx1ZVwiKVxyXG4gICAgICAgICAgICAgICAgcHVibGljIGNvbmZpZzp7bm90ZURlZmF1bHQ6IHN0cmluZ30pIHtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q29uZmlnVmFsdWUoKSB7XHJcbiAgICAgICAgLy8gc2hvdyB0aGUgcGFzc2VkIGluIHBhcmFtIHZpYSBwcm92aWRlKFwiTm90ZXNDb25maWdWYWx1ZVwiLGFzdGVyaXNrbHVlOiB7bm90ZURlZmF1bHQ6ICdleGFtcGxlIG9mIHBhc3NpbmcgcGFyYW0gdG8gY29tcG9uZW50IHZpYSBESSd9fSksXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb25maWcubm90ZURlZmF1bHQpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gVGhpcyBpcyBhIHBvd2VyZnVsIGRlbW9uc3RyYXRpbmcgdGhhdCBzaG93cyBob3cgdG8gY3JlYXRlIGEgZGlyZWN0aXZlIGp1c3QgbGlrZVxyXG4gdGhlICpuZ0ZvciBvciAqbmdJZiBvZiBuZzIsIGFuZCBpbiBvdXIgY2FzZSAqQ291bnREb3duLlxyXG5cclxuIFdoYXQgdGhpcyBtZWFucyBpcyB0aGF0IHdlIGFyZSBhYmxlIHRvIG1hbnVhbGx5IGNyZWF0ZSBhIHRlbXBsYXRlXHJcbiBhbmQgdXNpbmcgdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZikgd2UgIGJpbmRcclxuIHRoZSB0ZW1wbGF0ZSBpbnRvIHRoZSBjb21wb25lbnQuXHJcblxyXG4gV2hpbGUgaW4gcHJhY3RpY2FsaXR5IHdlIG1vc3RseSB1c2UgPG5nLWNvbnRlbnQ+IHRvIGFjaGlldmUgdGhlIHNhbWUgZWZmZWN0XHJcbiBpdCBzdGlsbCBhIGdyZWF0IGV4YW1wbGUgaW50byB0aGUgaW5uZXIgd29ya2luZ3Mgb2YgbmcyLlxyXG4gKi9cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTm90ZXM1JyxcclxuICAgIGRpcmVjdGl2ZXM6IFtDb3VudERvd25dLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgLy8gTm90ZXNTZXJ2aWNlIGdldCdzIHByb3ZpZGVkIHdpdGggYSBub3RlRGVmYXVsdFxyXG4gICAgICAgIE5vdGVzU2VydmljZSxcclxuICAgICAgICBwcm92aWRlKFwiTm90ZXNDb25maWdWYWx1ZVwiLCB7dXNlVmFsdWU6IHtub3RlRGVmYXVsdDogJ2V4YW1wbGUgb2YgcGFzc2luZyBwYXJhbSB0byBjb21wb25lbnQgdmlhIERJJ319KSxcclxuICAgIF0sXHJcbiAgICB0ZW1wbGF0ZTogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvblByZXYoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdCBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBub3RlczUgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBDb3VudERvd24gY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+Q291bnREb3duPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZXJcIiAqQ291bnREb3duPVwiI3RpbWVyPXRpbWVyQXBpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPnt7IHRpbWVyLmdldFRpbWUoKSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRpbWVyLnRvZ2dsZSgpXCI+VG9nZ2xlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRpbWVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5BIHVuaXF1ZSBleGFtcGxlIG9mIGhvdyB0byA8dT5tYW51YWxseTwvdT4gY3JlYXRlIGFuZCBiaW5kIGEgVGVtcGxhdGUgdG8gYSB2aWV3IHVzaW5nIG91ciB2ZXJ5IG93biAqQ291bnREb3duIGRpcmVjdGl2ZSAobm90ZSB0aGF0IGFzdGVyaXNrKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNoZWNrIHRoZSBjb2RlIHRvIGxlYXJuIG1vcmUuLi48L2xhYmVsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90ZXM1IGV4dGVuZHMgTm90ZXNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgTm90ZXNTZXJ2aWNlOk5vdGVzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBzbGlkZXJQYW5lbDpTbGlkZXJwYW5lbCxcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBjb21tQnJva2VyOkNvbW1Ccm9rZXIpIHtcclxuICAgICAgICBzdXBlcihzbGlkZXJQYW5lbCwgY29tbUJyb2tlcik7XHJcbiAgICAgICAgTm90ZXNTZXJ2aWNlLnNob3dDb25maWdWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMubWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9ICdub3RlczQnO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
