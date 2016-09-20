System.register(["../../../../src/Conts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Conts_1;
    var NotesBase;
    return {
        setters:[
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            NotesBase = (function () {
                function NotesBase(sliderPanel, commBroker) {
                    this.sliderPanel = sliderPanel;
                    this.commBroker = commBroker;
                    this.me = this;
                }
                NotesBase.prototype.openModal = function () {
                    this.modalDialog.openModal();
                };
                NotesBase.prototype.onPrev = function (event) {
                    this.sliderPanel.slideToPage(this.slideRight, 'right');
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView(this.slideRight);
                };
                NotesBase.prototype.onNext = function (event) {
                    this.sliderPanel.slideToPage(this.slideLeft, 'left');
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView(this.slideLeft);
                };
                NotesBase.prototype.registerCaller = function (caller) {
                    this.modalDialog = caller;
                };
                return NotesBase;
            }());
            exports_1("NotesBase", NotesBase);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvTm90ZXNCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBT0E7Z0JBTUksbUJBQXNCLFdBQXVCLEVBQVksVUFBcUI7b0JBQXhELGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUFZLGVBQVUsR0FBVixVQUFVLENBQVc7b0JBQzFFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixDQUFDO2dCQUVTLDZCQUFTLEdBQW5CO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRVMsMEJBQU0sR0FBaEIsVUFBaUIsS0FBSztvQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsY0FBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzFGLENBQUM7Z0JBRVMsMEJBQU0sR0FBaEIsVUFBaUIsS0FBSztvQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsY0FBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pGLENBQUM7Z0JBRU0sa0NBQWMsR0FBckIsVUFBc0IsTUFBVTtvQkFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0wsZ0JBQUM7WUFBRCxDQTNCQSxBQTJCQyxJQUFBO1lBM0JELGlDQTJCQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXNCYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtNb2RhbERpYWxvZ30gZnJvbSBcIi4uLy4uL21vZGFsZGlhbG9nL01vZGFsRGlhbG9nXCI7XHJcbmltcG9ydCB7SVJlZ2lzdGVyQ2FsbGVyfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9JUmVnaXN0ZXJDYWxsZXJcIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge0NvbnN0c30gZnJvbSBcIi4uLy4uLy4uLy4uL3NyYy9Db250c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGVzQmFzZSBpbXBsZW1lbnRzIElSZWdpc3RlckNhbGxlciB7XHJcbiAgICBwcm90ZWN0ZWQgbW9kYWxEaWFsb2c6TW9kYWxEaWFsb2c7XHJcbiAgICBwcm90ZWN0ZWQgbWU6YW55O1xyXG4gICAgcHJvdGVjdGVkIHNsaWRlTGVmdDphbnk7XHJcbiAgICBwcm90ZWN0ZWQgc2xpZGVSaWdodDphbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNsaWRlclBhbmVsOlNsaWRlcnBhbmVsLCBwcm90ZWN0ZWQgY29tbUJyb2tlcjpDb21tQnJva2VyKSB7XHJcbiAgICAgICAgdGhpcy5tZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9wZW5Nb2RhbCgpe1xyXG4gICAgICAgIHRoaXMubW9kYWxEaWFsb2cub3Blbk1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uUHJldihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUGFuZWwuc2xpZGVUb1BhZ2UodGhpcy5zbGlkZVJpZ2h0LCAncmlnaHQnKTtcclxuICAgICAgICB0aGlzLmNvbW1Ccm9rZXIuZ2V0U2VydmljZShDb25zdHMuU2VydmljZXMoKS5Qcm9wZXJ0aWVzKS5zZXRQcm9wVmlldyh0aGlzLnNsaWRlUmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk5leHQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNsaWRlclBhbmVsLnNsaWRlVG9QYWdlKHRoaXMuc2xpZGVMZWZ0LCAnbGVmdCcpO1xyXG4gICAgICAgIHRoaXMuY29tbUJyb2tlci5nZXRTZXJ2aWNlKENvbnN0cy5TZXJ2aWNlcygpLlByb3BlcnRpZXMpLnNldFByb3BWaWV3KHRoaXMuc2xpZGVMZWZ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJDYWxsZXIoY2FsbGVyOmFueSk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RhbERpYWxvZyA9IGNhbGxlcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
