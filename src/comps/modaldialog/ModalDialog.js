System.register(["@angular/core", "@angular/platform-browser"], function(exports_1, context_1) {
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
    var ModalDialog;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            ModalDialog = (function () {
                function ModalDialog(viewContainer, doc) {
                    this.doc = doc;
                    this.viewContainer = viewContainer;
                    this.dom = doc.body;
                    this.el = this.viewContainer.element.nativeElement;
                }
                ModalDialog.prototype.ngAfterViewInit = function () {
                    this.owner.registerCaller(this);
                };
                ModalDialog.prototype.openModal = function () {
                    var modal = jQuery(this.dom).find('.modal', this.el)[0];
                    jQuery(modal).modal();
                };
                ModalDialog = __decorate([
                    core_1.Component({
                        selector: 'ModalDialog',
                        inputs: ['title:title', 'content:content', 'owner:owner'],
                        styles: ["\n            .modal-dialog {\n                width: 95%;\n                height: 95%;\n                padding: 0;\n            }\n\n            .modal-content {\n                height: 95%;\n                border-radius: 0;\n            }\n    "],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        template: "\n         <div class=\"modal modal-static fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n             aria-hidden=\"true\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button id=\"toggleProperties\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                aria-hidden=\"true\">&times;</button>\n                        <h4 class=\"modal-title\" id=\"myModalLabel\" data-localize=\"ModalTitle\">{{title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        {{content}}\n                        <small>I am ModalDialog component</small>\n                        <ng-content></ng-content>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-localize=\"close\">Close</button>\n                        <button type=\"button\" class=\"btn btn-primary\" data-localize=\"saveChanges\">Save changes</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }),
                    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object, Object])
                ], ModalDialog);
                return ModalDialog;
                var _a;
            }());
            exports_1("ModalDialog", ModalDialog);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL21vZGFsZGlhbG9nL01vZGFsRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQU1JLHFCQUFZLGFBQStCLEVBQTRCLEdBQUc7b0JBQUgsUUFBRyxHQUFILEdBQUcsQ0FBQTtvQkFDdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7Z0JBQ3ZELENBQUM7Z0JBRUQscUNBQWUsR0FBZjtvQkFDSyxJQUFJLENBQUMsS0FBeUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBRUQsK0JBQVMsR0FBVDtvQkFDSSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBM0RMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLENBQUM7d0JBQ3pELE1BQU0sRUFBRSxDQUFDLDRQQVdSLENBQUM7d0JBQ0YsYUFBYSxFQUFFLHdCQUFpQixDQUFDLFFBQVE7d0JBQ3pDLFFBQVEsRUFBRSx3dUNBc0JUO3FCQUNKLENBQUM7K0JBT2dELGFBQU0sQ0FBQywyQkFBUSxDQUFDOzsrQkFQaEU7Z0JBcUJGLGtCQUFDOztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQscUNBb0JDLENBQUEiLCJmaWxlIjoiY29tcHMvbW9kYWxkaWFsb2cvTW9kYWxEaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgSW5qZWN0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtJUmVnaXN0ZXJDYWxsZXJ9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lSZWdpc3RlckNhbGxlclwiO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ01vZGFsRGlhbG9nJyxcclxuICAgIGlucHV0czogWyd0aXRsZTp0aXRsZScsICdjb250ZW50OmNvbnRlbnQnLCAnb3duZXI6b3duZXInXSxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAgICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk1JTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgIGBdLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgbW9kYWwtc3RhdGljIGZhZGVcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cIm15TW9kYWxMYWJlbFwiXHJcbiAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVQcm9wZXJ0aWVzXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwibXlNb2RhbExhYmVsXCIgZGF0YS1sb2NhbGl6ZT1cIk1vZGFsVGl0bGVcIj57e3RpdGxlfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7Y29udGVudH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5JIGFtIE1vZGFsRGlhbG9nIGNvbXBvbmVudDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLWxvY2FsaXplPVwiY2xvc2VcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtbG9jYWxpemU9XCJzYXZlQ2hhbmdlc1wiPlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxEaWFsb2cge1xyXG4gICAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgICBwcml2YXRlIGRvbTogSFRNTEJvZHlFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBvd25lcjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jKSB7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmRvbSA9IGRvYy5ib2R5O1xyXG4gICAgICAgIHRoaXMuZWwgPSB0aGlzLnZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBJUmVnaXN0ZXJDYWxsZXIpLnJlZ2lzdGVyQ2FsbGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgICB2YXIgbW9kYWwgPSBqUXVlcnkodGhpcy5kb20pLmZpbmQoJy5tb2RhbCcsIHRoaXMuZWwpWzBdO1xyXG4gICAgICAgIGpRdWVyeShtb2RhbCkubW9kYWwoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
