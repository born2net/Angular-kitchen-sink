System.register(['@angular/core', '@angular/platform-browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, platform_browser_1;
    var Sliderpanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            Sliderpanel = (function () {
                function Sliderpanel(viewContainer, doc) {
                    this.doc = doc;
                    this.dom = doc.body;
                    this.viewContainer = viewContainer;
                    this.el = viewContainer.element.nativeElement;
                }
                Sliderpanel.prototype.getElementByClass = function (element) {
                    return jQuery(this.dom).find('.' + element, this.el)[0];
                };
                Sliderpanel.prototype.removeAllClassesFrom = function (elementClass, selected) {
                    var element = this.getElementByClass(elementClass);
                    if (selected) {
                        jQuery(element).removeClass('selected');
                        return;
                    }
                    jQuery(element).removeClass('left');
                    jQuery(element).removeClass('right');
                    jQuery(element).removeClass('center');
                    jQuery(element).removeClass('transition');
                };
                Sliderpanel.prototype.addClassesTo = function (elementClass, classesToAdd) {
                    var element = this.getElementByClass(elementClass);
                    for (var i = 0; i < classesToAdd.length; i++) {
                        jQuery(element).addClass(classesToAdd[i]);
                    }
                };
                Sliderpanel.prototype.slideToPage = function (toClassName, i_direction) {
                    if (toClassName == 'selected')
                        return;
                    this.removeAllClassesFrom(toClassName);
                    this.addClassesTo(toClassName, ["page", i_direction]);
                    var parent = jQuery(this.getElementByClass(toClassName)).parent();
                    var grandparent = jQuery(parent).parent();
                    var offsetWidth = jQuery(grandparent).prop('offsetWidth');
                    this.removeAllClassesFrom(toClassName);
                    this.addClassesTo(toClassName, ['page', 'transition', 'center']);
                    this.removeAllClassesFrom('selected');
                    this.addClassesTo('selected', ['page', 'transition', i_direction === 'left' ? 'right' : 'left']);
                    this.removeAllClassesFrom('selected', true);
                    this.addClassesTo(toClassName, ['selected']);
                };
                Sliderpanel = __decorate([
                    core_1.Component({
                        selector: 'Sliderpanel',
                        template: "<ng-content></ng-content>"
                    }),
                    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object, Object])
                ], Sliderpanel);
                return Sliderpanel;
                var _a;
            }());
            exports_1("Sliderpanel", Sliderpanel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3NsaWRlcnBhbmVsL1NsaWRlcnBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUtJLHFCQUFZLGFBQStCLEVBQTRCLEdBQUc7b0JBQUgsUUFBRyxHQUFILEdBQUcsQ0FBQTtvQkFDdEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztnQkFDbEQsQ0FBQztnQkFFTyx1Q0FBaUIsR0FBekIsVUFBMEIsT0FBZTtvQkFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUVPLDBDQUFvQixHQUE1QixVQUE2QixZQUFpQixFQUFFLFFBQWtCO29CQUM5RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ25ELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ1gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDeEMsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFTyxrQ0FBWSxHQUFwQixVQUFxQixZQUFpQixFQUFFLFlBQXNCO29CQUMxRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ25ELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUM3QyxDQUFDO2dCQUNMLENBQUM7Z0JBRU0saUNBQVcsR0FBbEIsVUFBbUIsV0FBbUIsRUFBRSxXQUFtQjtvQkFDdkQsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLFVBQVUsQ0FBQzt3QkFDMUIsTUFBTSxDQUFDO29CQUVYLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFFdEQsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNsRSxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFDLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsS0FBSyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2pHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkF2REw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLDJCQUEyQjtxQkFDeEMsQ0FBQzsrQkFPZ0QsYUFBTSxDQUFDLDJCQUFRLENBQUM7OytCQVBoRTtnQkFxREYsa0JBQUM7O1lBQUQsQ0FuREEsQUFtREMsSUFBQTtZQW5ERCxxQ0FtREMsQ0FBQSIsImZpbGUiOiJjb21wcy9zbGlkZXJwYW5lbC9TbGlkZXJwYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgSW5qZWN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuLyoqXHJcbiBAY2xhc3MgU2xpZGVycGFuZWxcclxuIGV4YW1wbGU6IHRoaXMuc2xpZGVUb1BhZ2UoJ2NhbXBhaWduTmFtZVNlbGVjdG9yVmlldycsICdsZWZ0JylcclxuICoqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnU2xpZGVycGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNsaWRlcnBhbmVsIHtcclxuICAgIHByaXZhdGUgZWw6IGFueTtcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByaXZhdGUgZG9tOiBIVE1MQm9keUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2MpIHtcclxuICAgICAgICB0aGlzLmRvbSA9IGRvYy5ib2R5O1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5lbCA9IHZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RWxlbWVudEJ5Q2xhc3MoZWxlbWVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGpRdWVyeSh0aGlzLmRvbSkuZmluZCgnLicgKyBlbGVtZW50LCB0aGlzLmVsKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUFsbENsYXNzZXNGcm9tKGVsZW1lbnRDbGFzczogYW55LCBzZWxlY3RlZD86IGJvb2xlYW4pIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5Q2xhc3MoZWxlbWVudENsYXNzKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeShlbGVtZW50KS5yZW1vdmVDbGFzcygnbGVmdCcpO1xyXG4gICAgICAgIGpRdWVyeShlbGVtZW50KS5yZW1vdmVDbGFzcygncmlnaHQnKTtcclxuICAgICAgICBqUXVlcnkoZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2NlbnRlcicpO1xyXG4gICAgICAgIGpRdWVyeShlbGVtZW50KS5yZW1vdmVDbGFzcygndHJhbnNpdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQ2xhc3Nlc1RvKGVsZW1lbnRDbGFzczogYW55LCBjbGFzc2VzVG9BZGQ6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnRCeUNsYXNzKGVsZW1lbnRDbGFzcyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzVG9BZGQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLmFkZENsYXNzKGNsYXNzZXNUb0FkZFtpXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNsaWRlVG9QYWdlKHRvQ2xhc3NOYW1lOiBzdHJpbmcsIGlfZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodG9DbGFzc05hbWUgPT0gJ3NlbGVjdGVkJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIFBvc2l0aW9uIHRoZSBuZXcgcGFnZSBhdCB0aGUgc3RhcnRpbmcgcG9zaXRpb24gb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ2xhc3Nlc0Zyb20odG9DbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3Nlc1RvKHRvQ2xhc3NOYW1lLCBbXCJwYWdlXCIsIGlfZGlyZWN0aW9uXSk7XHJcbiAgICAgICAgLy8gUG9zaXRpb24gdGhlIG5ldyBwYWdlIGFuZCB0aGUgY3VycmVudCBwYWdlIGF0IHRoZSBlbmRpbmcgcG9zaXRpb24gb2YgdGhlaXIgYW5pbWF0aW9uIHdpdGggYSB0cmFuc2l0aW9uIGNsYXNzIGluZGljYXRpbmcgdGhlIGR1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24gYW5kIGZvcmNlIHJlZmxvdyBvZiBwYWdlIHNvIGl0IHJlbmRlcnNcclxuICAgICAgICB2YXIgcGFyZW50ID0galF1ZXJ5KHRoaXMuZ2V0RWxlbWVudEJ5Q2xhc3ModG9DbGFzc05hbWUpKS5wYXJlbnQoKTtcclxuICAgICAgICB2YXIgZ3JhbmRwYXJlbnQgPSBqUXVlcnkocGFyZW50KS5wYXJlbnQoKTtcclxuICAgICAgICB2YXIgb2Zmc2V0V2lkdGggPSBqUXVlcnkoZ3JhbmRwYXJlbnQpLnByb3AoJ29mZnNldFdpZHRoJyk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDbGFzc2VzRnJvbSh0b0NsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc2VzVG8odG9DbGFzc05hbWUsIFsncGFnZScsICd0cmFuc2l0aW9uJywgJ2NlbnRlciddKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbENsYXNzZXNGcm9tKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3Nlc1RvKCdzZWxlY3RlZCcsIFsncGFnZScsICd0cmFuc2l0aW9uJywgaV9kaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCddKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbENsYXNzZXNGcm9tKCdzZWxlY3RlZCcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3Nlc1RvKHRvQ2xhc3NOYW1lLCBbJ3NlbGVjdGVkJ10pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
