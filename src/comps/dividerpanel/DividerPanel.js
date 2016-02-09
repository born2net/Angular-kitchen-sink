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
var Conts_1 = require("../../Conts");
var DividerPanel = (function () {
    function DividerPanel() {
        this.panelOpen = true;
    }
    DividerPanel.prototype.onToggleSidePanel = function () {
        var self = this;
        if (jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).hasClass('propPanelIsOpen')) {
            this.panelOpen = false;
            ;
            jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).toggleClass('propPanelIsOpen');
            jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).addClass('hidden-xs hidden-sm hidden-md');
            jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).removeClass('col-xs-9 col-sm-9 col-md-9');
            jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).addClass('col-xs-12 col-md-12');
        }
        else {
            this.panelOpen = true;
            jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).toggleClass('propPanelIsOpen');
            jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).addClass('col-xs-9 col-sm-9 col-md-9');
            setTimeout(function () {
                jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).hide();
                jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).removeClass('col-xs-12 col-md-12');
                jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).removeClass('hidden-xs hidden-sm hidden-md');
                jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).fadeIn('fast');
            }, 500);
        }
    };
    DividerPanel = __decorate([
        core_1.Component({
            selector: 'DividerPanel',
            styles: ["\n        #togglePanel {\n                position: fixed;\n                margin: 10px;\n                right: -5px;\n                top: 50px;\n                z-index: 1050;\n                height: 30px;\n                width: 30px;\n                text-align: center;\n                padding: 6px 0;\n                font-size: 11px;\n                outline:none;\n                border-radius: 15px !important;\n        }\n        #togglePanel > span {\n           opacity: 0.5;\n           position: relative;\n           top: -3px;\n           font-size: 2em;\n        }\n    "],
            template: "\n                <button id=\"togglePanel\" (click)=\"onToggleSidePanel($event)\" class=\"propPanelIsOpen btn btn-default btn-sm hidden-lg\">\n                    <span [ngClass]=\"{'fa-arrow-circle-right': panelOpen, 'fa-arrow-circle-left': !panelOpen}\"  class=\"fa\"></span>\n                  </button>\n                <ng-content></ng-content>\n              "
        }), 
        __metadata('design:paramtypes', [])
    ], DividerPanel);
    return DividerPanel;
})();
exports.DividerPanel = DividerPanel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2RpdmlkZXJwYW5lbC9kaXZpZGVycGFuZWwudHMiXSwibmFtZXMiOlsiRGl2aWRlclBhbmVsIiwiRGl2aWRlclBhbmVsLmNvbnN0cnVjdG9yIiwiRGl2aWRlclBhbmVsLm9uVG9nZ2xlU2lkZVBhbmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsc0JBQXFCLGFBQWEsQ0FBQyxDQUFBO0FBRW5DO0lBa0NJQTtRQUNJQyxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFFREQsd0NBQWlCQSxHQUFqQkE7UUFDSUUsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLGNBQU1BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEVBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBO1lBQUFBLENBQUNBO1lBQ3hCQSxNQUFNQSxDQUFDQSxjQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO1lBQ25FQSxNQUFNQSxDQUFDQSxjQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSwrQkFBK0JBLENBQUNBLENBQUNBO1lBQ2pGQSxNQUFNQSxDQUFDQSxjQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSw0QkFBNEJBLENBQUNBLENBQUNBO1lBQ2pGQSxNQUFNQSxDQUFDQSxjQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO1FBQzNFQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNKQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUN0QkEsTUFBTUEsQ0FBQ0EsY0FBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtZQUNuRUEsTUFBTUEsQ0FBQ0EsY0FBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsNEJBQTRCQSxDQUFDQSxDQUFDQTtZQUM5RUEsVUFBVUEsQ0FBQ0E7Z0JBQ1AsTUFBTSxDQUFDLGNBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLGNBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDMUUsTUFBTSxDQUFDLGNBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUMsK0JBQStCLENBQUMsQ0FBQztnQkFDcEYsTUFBTSxDQUFDLGNBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUQsQ0FBQyxFQUFFQSxHQUFHQSxDQUFDQSxDQUFBQTtRQUNYQSxDQUFDQTtJQUNMQSxDQUFDQTtJQXpETEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGNBQWNBO1lBQ3hCQSxNQUFNQSxFQUFFQSxDQUFDQSxrbEJBcUJSQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSxnWEFLQ0E7U0FDZEEsQ0FBQ0E7O3FCQTRCREE7SUFBREEsbUJBQUNBO0FBQURBLENBMURBLEFBMERDQSxJQUFBO0FBMUJZLG9CQUFZLGVBMEJ4QixDQUFBIiwiZmlsZSI6ImNvbXBzL2RpdmlkZXJwYW5lbC9EaXZpZGVyUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0NvbnN0c30gZnJvbSBcIi4uLy4uL0NvbnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnRGl2aWRlclBhbmVsJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAjdG9nZ2xlUGFuZWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC01cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3RvZ2dsZVBhbmVsID4gc3BhbiB7XHJcbiAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICB0b3A6IC0zcHg7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgYF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZVBhbmVsXCIgKGNsaWNrKT1cIm9uVG9nZ2xlU2lkZVBhbmVsKCRldmVudClcIiBjbGFzcz1cInByb3BQYW5lbElzT3BlbiBidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGhpZGRlbi1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsnZmEtYXJyb3ctY2lyY2xlLXJpZ2h0JzogcGFuZWxPcGVuLCAnZmEtYXJyb3ctY2lyY2xlLWxlZnQnOiAhcGFuZWxPcGVufVwiICBjbGFzcz1cImZhXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGl2aWRlclBhbmVsIHtcclxuICAgIHByaXZhdGUgcGFuZWxPcGVuOmJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBhbmVsT3BlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGVTaWRlUGFuZWwoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChqUXVlcnkoQ29uc3RzLkVsZW1zKCkuVE9HR0xFX1BBTkVMKS5oYXNDbGFzcygncHJvcFBhbmVsSXNPcGVuJykpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbE9wZW4gPSBmYWxzZTs7XHJcbiAgICAgICAgICAgIGpRdWVyeShDb25zdHMuRWxlbXMoKS5UT0dHTEVfUEFORUwpLnRvZ2dsZUNsYXNzKCdwcm9wUGFuZWxJc09wZW4nKTtcclxuICAgICAgICAgICAgalF1ZXJ5KENvbnN0cy5FbGVtcygpLlBST1BfUEFORUxfV1JBUCkuYWRkQ2xhc3MoJ2hpZGRlbi14cyBoaWRkZW4tc20gaGlkZGVuLW1kJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeShDb25zdHMuRWxlbXMoKS5NQUlOX1BBTkVMX1dSQVApLnJlbW92ZUNsYXNzKCdjb2wteHMtOSBjb2wtc20tOSBjb2wtbWQtOScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoQ29uc3RzLkVsZW1zKCkuTUFJTl9QQU5FTF9XUkFQKS5hZGRDbGFzcygnY29sLXhzLTEyIGNvbC1tZC0xMicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgalF1ZXJ5KENvbnN0cy5FbGVtcygpLlRPR0dMRV9QQU5FTCkudG9nZ2xlQ2xhc3MoJ3Byb3BQYW5lbElzT3BlbicpO1xyXG4gICAgICAgICAgICBqUXVlcnkoQ29uc3RzLkVsZW1zKCkuTUFJTl9QQU5FTF9XUkFQKS5hZGRDbGFzcygnY29sLXhzLTkgY29sLXNtLTkgY29sLW1kLTknKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoQ29uc3RzLkVsZW1zKCkuUFJPUF9QQU5FTF9XUkFQKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoQ29uc3RzLkVsZW1zKCkuTUFJTl9QQU5FTF9XUkFQKS5yZW1vdmVDbGFzcygnY29sLXhzLTEyIGNvbC1tZC0xMicpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KENvbnN0cy5FbGVtcygpLlBST1BfUEFORUxfV1JBUCkucmVtb3ZlQ2xhc3MoJ2hpZGRlbi14cyBoaWRkZW4tc20gaGlkZGVuLW1kJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoQ29uc3RzLkVsZW1zKCkuUFJPUF9QQU5FTF9XUkFQKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
