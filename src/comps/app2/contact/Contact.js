System.register(["@angular/core", "../../../../src/Conts", "../../../models/MailModel", "../../../services/CommBroker", './Contact.html!text'], function(exports_1, context_1) {
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
    var core_1, Conts_1, MailModel_1, CommBroker_1, Contact_html_text_1;
    var Contact;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (MailModel_1_1) {
                MailModel_1 = MailModel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Contact_html_text_1_1) {
                Contact_html_text_1 = Contact_html_text_1_1;
            }],
        execute: function() {
            Contact = (function () {
                function Contact(commBroker) {
                    this.commBroker = commBroker;
                    this.user = {
                        name: 'John',
                        address: {
                            address1: '11, High Street',
                            postcode: '1234'
                        }
                    };
                    this.contacts = ['Call me', 'Email me', 'Page me (old school)'];
                    this.model = new MailModel_1.MailModel(1, 'your name', true, this.contacts[0], 'how can we help you?');
                    this.submitted = false;
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Contact');
                }
                Contact.prototype.save = function (form, isValid) {
                    alert("status: " + isValid + " " + JSON.stringify(form));
                };
                Contact.prototype.onChange = function (event) {
                    if (event.target.value.length < 3)
                        alert('text too short for subject');
                };
                Contact = __decorate([
                    core_1.Component({
                        selector: 'Contact',
                        moduleId: __moduleName,
                        template: Contact_html_text_1.default,
                        styles: ["\n            .ng-invalid {\n              border-left: 5px solid #a94442; /* red */\n           }\n           .ng-valid[required] {\n                  border-left: 5px solid #42A948; /* green */\n           }\n           .form-control {\n                width: 20%;\n           }\n       "]
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], Contact);
                return Contact;
            }());
            exports_1("Contact", Contact);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvY29udGFjdC9Db250YWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0NBO2dCQUVJLGlCQUFvQixVQUFxQjtvQkFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztvQkFJbEMsU0FBSSxHQUFRO3dCQUNmLElBQUksRUFBRSxNQUFNO3dCQUNaLE9BQU8sRUFBRTs0QkFDTCxRQUFRLEVBQUUsaUJBQWlCOzRCQUMzQixRQUFRLEVBQUUsTUFBTTt5QkFDbkI7cUJBQ0osQ0FBQTtvQkFPTyxhQUFRLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixDQUFDLENBQUM7b0JBQ25FLFVBQUssR0FBRyxJQUFJLHFCQUFTLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO29CQUN0RixjQUFTLEdBQUcsS0FBSyxDQUFDO29CQWxCZCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwRixDQUFDO2dCQVVNLHNCQUFJLEdBQVgsVUFBWSxJQUFTLEVBQUUsT0FBZTtvQkFDbEMsS0FBSyxDQUFDLGFBQVcsT0FBTyxTQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQztnQkFFeEQsQ0FBQztnQkFvQkQsMEJBQVEsR0FBUixVQUFTLEtBQUs7b0JBQ1YsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDOUIsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBekVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsMkJBQWU7d0JBQ3pCLE1BQU0sRUFBRSxDQUFDLG1TQVVMLENBQUM7cUJBQ1IsQ0FBQzs7MkJBQUE7Z0JBMkRGLGNBQUM7WUFBRCxDQXpDQSxBQXlDQyxJQUFBO1lBekNELDZCQXlDQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvY29udGFjdC9Db250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL0NvbnRzXCI7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtNYWlsTW9kZWx9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvTWFpbE1vZGVsXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0ICBDb250YWN0VGVtcGxhdGUgZnJvbSAnLi9Db250YWN0Lmh0bWwhdGV4dCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnQ29udGFjdCcsXHJcbiAgICBtb2R1bGVJZDogX19tb2R1bGVOYW1lLFxyXG4gICAgdGVtcGxhdGU6IENvbnRhY3RUZW1wbGF0ZSxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAgICAgLm5nLWludmFsaWQge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5uZy12YWxpZFtyZXF1aXJlZF0ge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICBgXVxyXG59KVxyXG5cclxuLyoqXHJcbiBUaGUgQ29udGFjdCBjb21wb25lbnQgZGVtb25zdHJhdGVzIHRoZSB1c2FnZSBvZiBmb3Jtcy5cclxuIFVzYWdlIGlzIGltcGxpY2l0IGFzIGRvbmUgcHVyZWx5IHRocm91Z2ggdGhlIFZpZXcuXHJcblxyXG4gdGhpcyBpcyBhIHRlbXBsYXRlLWRyaXZlbiBhcHByb2FjaCB3aGljaCBhbGxvd3MgdXMgdG8gYnVpbGQgZm9ybXMgd2l0aCB2ZXJ5IGxpdHRsZSBjb2RlXHJcbiB0byB1c2UgcmVhY3RpdmUgYXBwcm9hY2ggc2VlIE5vdGVzMSBjb21wb25lbnRcclxuXHJcbiBTdWdnZXN0aW9uOiBJIHJlY29tbWVuZCB5b3UgdXNlIGV4cGxpY2l0IEZvcm0gY3JlYXRpb24gdmlhXHJcbiBtYW51YWwgaW5zdGFuY2UgY3JlYXRpb24gb2YgQ29udHJvbHNcclxuXHJcbiByZWY6OlxyXG4gaHR0cDovL2Jsb2cudGhvdWdodHJhbS5pby9hbmd1bGFyLzIwMTYvMDMvMjEvdGVtcGxhdGUtZHJpdmVuLWZvcm1zLWluLWFuZ3VsYXItMi5odG1sXHJcbiBodHRwOi8vYmxvZy50aG91Z2h0cmFtLmlvL2FuZ3VsYXIvMjAxNi8wNi8yMi9tb2RlbC1kcml2ZW4tZm9ybXMtaW4tYW5ndWxhci0yLmh0bWxcclxuXHJcbiAqKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHRoaXMuY29tbUJyb2tlci5nZXRTZXJ2aWNlKENvbnN0cy5TZXJ2aWNlcygpLlByb3BlcnRpZXMpLnNldFByb3BWaWV3KCdDb250YWN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZXI6VXNlciA9IHtcclxuICAgICAgICBuYW1lOiAnSm9obicsXHJcbiAgICAgICAgYWRkcmVzczoge1xyXG4gICAgICAgICAgICBhZGRyZXNzMTogJzExLCBIaWdoIFN0cmVldCcsXHJcbiAgICAgICAgICAgIHBvc3Rjb2RlOiAnMTIzNCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoZm9ybTpVc2VyLCBpc1ZhbGlkOmJvb2xlYW4pIHtcclxuICAgICAgICBhbGVydChgc3RhdHVzOiAke2lzVmFsaWR9ICR7SlNPTi5zdHJpbmdpZnkoZm9ybSl9YCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29udGFjdHMgPSBbJ0NhbGwgbWUnLCAnRW1haWwgbWUnLCAnUGFnZSBtZSAob2xkIHNjaG9vbCknXTtcclxuICAgIG1vZGVsID0gbmV3IE1haWxNb2RlbCgxLCAneW91ciBuYW1lJywgdHJ1ZSwgdGhpcy5jb250YWN0c1swXSwgJ2hvdyBjYW4gd2UgaGVscCB5b3U/Jyk7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgIHJlZ2lzdGVyRm9ybTpGb3JtR3JvdXA7XHJcblxyXG5cclxuICAgIC8vIG5nT25Jbml0KCkge1xyXG4gICAgLy8gICAgIHRoaXMucmVnaXN0ZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAvLyAgICAgICAgIGZpcnN0bmFtZTogW10sXHJcbiAgICAvLyAgICAgICAgIGxhc3RuYW1lOiBbXSxcclxuICAgIC8vICAgICAgICAgYWRkcmVzczogdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAvLyAgICAgICAgICAgICBzdHJlZXQ6IFtdLFxyXG4gICAgLy8gICAgICAgICAgICAgemlwOiBbXSxcclxuICAgIC8vICAgICAgICAgICAgIGNpdHk6IFtdXHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDMpXHJcbiAgICAgICAgICAgIGFsZXJ0KCd0ZXh0IHRvbyBzaG9ydCBmb3Igc3ViamVjdCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgYWRkcmVzcz86e1xyXG4gICAgICAgIGFkZHJlc3MxPzpzdHJpbmc7XHJcbiAgICAgICAgcG9zdGNvZGU/OnN0cmluZztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
