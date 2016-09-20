System.register(["@angular/core", "../../../models/StyleModel", "../../../styles/StyleService"], function(exports_1, context_1) {
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
    var core_1, StyleModel_1, StyleService_1;
    var Settings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (StyleModel_1_1) {
                StyleModel_1 = StyleModel_1_1;
            },
            function (StyleService_1_1) {
                StyleService_1 = StyleService_1_1;
            }],
        execute: function() {
            Settings = (function () {
                function Settings(styleService) {
                    this.styleService = styleService;
                }
                Settings = __decorate([
                    core_1.Component({
                        selector: 'Settings',
                        providers: [StyleModel_1.StyleModel],
                        template: "\n                <small>I am Settings component</small>\n                <hr/>\n                <h3>Choose your theme</h3>\n                <hr/>\n                  <div class=\"clearfix\" style=\"padding-bottom: 13px\">\n                  </div>\n                  <select class=\"form-control\"\n                    [(ngModel)]=\"styleService.model.theme\"\n                    (change)=\"styleService.model.theme=$event.value; styleService.onUpdate()\">\n                      <option *ngFor=\"let theme of styleService.model.themes\">{{theme}}</option>\n                  </select>\n                  <hr/>\n                  <h3>Auto load theme on start</h3>\n                  <div class=\"clearfix\" style=\"padding-bottom: 30px\">\n                  <div style=\"position: relative\" class=\"material-switch pull-left\">\n                    <input id=\"changeStyle\" name=\"someSwitchOption003\"\n                     [(ngModel)]=\"styleService.model.remember\"\n                     (change)=\"styleService.onUpdate()\" type=\"checkbox\"/>\n                    <label for=\"changeStyle\" class=\"label-primary\"></label>\n                  </div>\n                  <div class=\"clearfix\" style=\"padding-bottom: 13px\">\n                  <h1 style=\"color: gray\">{{styleService.model.remember == true ? 'On' : 'Off'}}</h1>\n                "
                    }), 
                    __metadata('design:paramtypes', [StyleService_1.StyleService])
                ], Settings);
                return Settings;
            }());
            exports_1("Settings", Settings);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvc2V0dGluZ3MvU2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQ0E7Z0JBQ0ksa0JBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQTlCckQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsU0FBUyxFQUFFLENBQUMsdUJBQVUsQ0FBQzt3QkFDdkIsUUFBUSxFQUFFLDYwQ0F1Qkc7cUJBQ2hCLENBQUM7OzRCQUFBO2dCQUlGLGVBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELCtCQUVDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMS9zZXR0aW5ncy9TZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdHlsZU1vZGVsfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1N0eWxlTW9kZWxcIjtcclxuaW1wb3J0IHtTdHlsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvU3R5bGVTZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1NldHRpbmdzJyxcclxuICAgIHByb3ZpZGVyczogW1N0eWxlTW9kZWxdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxzbWFsbD5JIGFtIFNldHRpbmdzIGNvbXBvbmVudDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNob29zZSB5b3VyIHRoZW1lPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDEzcHhcIj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic3R5bGVTZXJ2aWNlLm1vZGVsLnRoZW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInN0eWxlU2VydmljZS5tb2RlbC50aGVtZT0kZXZlbnQudmFsdWU7IHN0eWxlU2VydmljZS5vblVwZGF0ZSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB0aGVtZSBvZiBzdHlsZVNlcnZpY2UubW9kZWwudGhlbWVzXCI+e3t0aGVtZX19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+QXV0byBsb2FkIHRoZW1lIG9uIHN0YXJ0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMzBweFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCIgY2xhc3M9XCJtYXRlcmlhbC1zd2l0Y2ggcHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hhbmdlU3R5bGVcIiBuYW1lPVwic29tZVN3aXRjaE9wdGlvbjAwM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic3R5bGVTZXJ2aWNlLm1vZGVsLnJlbWVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzdHlsZVNlcnZpY2Uub25VcGRhdGUoKVwiIHR5cGU9XCJjaGVja2JveFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hhbmdlU3R5bGVcIiBjbGFzcz1cImxhYmVsLXByaW1hcnlcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMTNweFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9XCJjb2xvcjogZ3JheVwiPnt7c3R5bGVTZXJ2aWNlLm1vZGVsLnJlbWVtYmVyID09IHRydWUgPyAnT24nIDogJ09mZid9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3Mge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHlsZVNlcnZpY2U6U3R5bGVTZXJ2aWNlKSB7fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
