System.register(["@angular/core", "../../sliderpanel/Sliderpanel", "../../../services/CommBroker", "./NotesBase"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, Sliderpanel_1, CommBroker_1, NotesBase_1;
    var NotesService, Notes5;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (NotesBase_1_1) {
                NotesBase_1 = NotesBase_1_1;
            }],
        execute: function() {
            NotesService = (function () {
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
            }());
            Notes5 = (function (_super) {
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
                __decorate([
                    core_1.ViewChild('extensionAnchor', { read: core_1.ViewContainerRef }), 
                    __metadata('design:type', (typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object)
                ], Notes5.prototype, "extensionAnchor", void 0);
                Notes5 = __decorate([
                    core_1.Component({
                        selector: 'Notes5',
                        providers: [
                            NotesService, {
                                provide: 'NotesConfigValue',
                                useValue: { noteDefault: 'example of passing param to component via DI' }
                            }],
                        template: "<button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <hr/>\n                <small>I am Notes5 component..</small>\n                <span #extensionAnchor></span>\n                <hr/>\n                <h5>Example of ngAnimate with enter / leave states</h5>\n                <AnimateCards></AnimateCards>\n                <hr/>\n                <h5>Example of ngAnimate with default state animations</h5>\n                <AnimateBox></AnimateBox>\n                 <hr/>\n                "
                    }), 
                    __metadata('design:paramtypes', [NotesService, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes5);
                return Notes5;
                var _a;
            }(NotesBase_1.NotesBase));
            exports_1("Notes5", Notes5);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvTm90ZXM1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQ0ksc0JBQStDLE1BQTZCO29CQUE3QixXQUFNLEdBQU4sTUFBTSxDQUF1QjtnQkFDNUUsQ0FBQztnQkFFRCxzQ0FBZSxHQUFmO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFQTDtvQkFBQyxpQkFBVSxFQUFFOytCQUVJLGFBQU0sQ0FBQyxrQkFBa0IsQ0FBQzs7Z0NBRjlCO2dCQVFiLG1CQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFtQ0Q7Z0JBQTRCLDBCQUFTO2dCQUNqQyxnQkFBb0IsWUFBMEIsRUFBWSxXQUF3QixFQUFZLFVBQXNCO29CQUNoSCxrQkFBTSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBRGYsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQVksZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQVksZUFBVSxHQUFWLFVBQVUsQ0FBWTtvQkFFaEgsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMvQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRDtvQkFBQyxnQkFBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDLENBQUM7OytEQUFBO2dCQTlCM0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsU0FBUyxFQUFFOzRCQUNQLFlBQVksRUFBRTtnQ0FDVixPQUFPLEVBQUUsa0JBQWtCO2dDQUMzQixRQUFRLEVBQUUsRUFBQyxXQUFXLEVBQUUsOENBQThDLEVBQUM7NkJBQzFFLENBQUM7d0JBQ04sUUFBUSxFQUFFLHVuQkFhRztxQkFDaEIsQ0FBQzs7MEJBQUE7Z0JBVUYsYUFBQzs7WUFBRCxDQVRBLEFBU0MsQ0FUMkIscUJBQVMsR0FTcEM7WUFURCwyQkFTQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIEluamVjdCxcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgVmlld0NoaWxkXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTbGlkZXJwYW5lbH0gZnJvbSBcIi4uLy4uL3NsaWRlcnBhbmVsL1NsaWRlcnBhbmVsXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtOb3Rlc0Jhc2V9IGZyb20gXCIuL05vdGVzQmFzZVwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBJbiB0aGlzIGV4YW1wbGUgSSBzaG93IHRvIHRvIHBhc3MgcGFyYW1ldGVycyB0byBhIHNlcnZpY2UgdGhhdCBpcyBiZWluZyBpbmplY3RlZCB1c2luZ1xyXG4gKiB0aGUgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW4gYW5ndWxhcjIuXHJcbiAqIFRoZSBOb3Rlc1NlcnZpY2UgZ2V0cyBpbmplY3RlZCBpbnRvIHRoZSBOb3RlczUgY29tcG9uZW50LCBhbmQgaXQgaXMgcGFzc2VkIGluXHJcbiAqIGEgY29uc3RydWN0b3IgcGFyYW1ldGVyIHZhbHVlIG9mICdleGFtcGxlIG9mIHBhc3NpbmcgcGFyYW0gdG8gY29tcG9uZW50IHZpYSBESScuXHJcbiAqIFRoaXMgaXMgcG93ZXJmdWwgYXMgaXQgbGV0cyB1c1xyXG4gKiBpbnN0YW50aWF0ZSBjb21wb25lbnRzIHRocm91Z2ggdGhlIGFuZ3VsYXIgREkgc3lzdGVtIHdpdGggcGFyYW1zLlxyXG4gKi9cclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgTm90ZXNTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoXCJOb3Rlc0NvbmZpZ1ZhbHVlXCIpIHB1YmxpYyBjb25maWc6IHtub3RlRGVmYXVsdDogc3RyaW5nfSkge1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb25maWdWYWx1ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZy5ub3RlRGVmYXVsdCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiBEZW1vbnN0cmF0aW5nIHRoYXQgc2hvd3MgaG93IHRvIGNyZWF0ZSBhIGRpcmVjdGl2ZSBqdXN0IGxpa2VcclxuIHRoZSAqbmdGb3Igb3IgKm5nSWYgb2YgbmcyLCBhbmQgaW4gb3VyIGNhc2UgKkNvdW50RG93bi5cclxuXHJcbiBXaGF0IHRoaXMgbWVhbnMgaXMgdGhhdCB3ZSBhcmUgYWJsZSB0byBtYW51YWxseSBjcmVhdGUgYSB0ZW1wbGF0ZVxyXG4gYW5kIHVzaW5nIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpIHdlICBiaW5kXHJcbiB0aGUgdGVtcGxhdGUgaW50byB0aGUgY29tcG9uZW50LlxyXG5cclxuIFdoaWxlIGluIHByYWN0aWNhbGl0eSB3ZSBtb3N0bHkgdXNlIDxuZy1jb250ZW50PiB0byBhY2hpZXZlIHRoZSBzYW1lIGVmZmVjdFxyXG4gaXQgc3RpbGwgYSBncmVhdCBleGFtcGxlIGludG8gdGhlIGlubmVyIHdvcmtpbmdzIG9mIG5nMi5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTm90ZXM1JyxcclxuICAgIHByb3ZpZGVyczogWy8vIE5vdGVzU2VydmljZSBnZXQncyBwcm92aWRlZCB3aXRoIGEgbm90ZURlZmF1bHRcclxuICAgICAgICBOb3Rlc1NlcnZpY2UsIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogJ05vdGVzQ29uZmlnVmFsdWUnLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZToge25vdGVEZWZhdWx0OiAnZXhhbXBsZSBvZiBwYXNzaW5nIHBhcmFtIHRvIGNvbXBvbmVudCB2aWEgREknfVxyXG4gICAgICAgIH1dLFxyXG4gICAgdGVtcGxhdGU6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25QcmV2KCRldmVudClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LWxlZnQgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkkgYW0gTm90ZXM1IGNvbXBvbmVudC4uPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxzcGFuICNleHRlbnNpb25BbmNob3I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxoNT5FeGFtcGxlIG9mIG5nQW5pbWF0ZSB3aXRoIGVudGVyIC8gbGVhdmUgc3RhdGVzPC9oNT5cclxuICAgICAgICAgICAgICAgIDxBbmltYXRlQ2FyZHM+PC9BbmltYXRlQ2FyZHM+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGg1PkV4YW1wbGUgb2YgbmdBbmltYXRlIHdpdGggZGVmYXVsdCBzdGF0ZSBhbmltYXRpb25zPC9oNT5cclxuICAgICAgICAgICAgICAgIDxBbmltYXRlQm94PjwvQW5pbWF0ZUJveD5cclxuICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90ZXM1IGV4dGVuZHMgTm90ZXNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgTm90ZXNTZXJ2aWNlOiBOb3Rlc1NlcnZpY2UsIHByb3RlY3RlZCBzbGlkZXJQYW5lbDogU2xpZGVycGFuZWwsIHByb3RlY3RlZCBjb21tQnJva2VyOiBDb21tQnJva2VyKSB7XHJcbiAgICAgICAgc3VwZXIoc2xpZGVyUGFuZWwsIGNvbW1Ccm9rZXIpO1xyXG4gICAgICAgIE5vdGVzU2VydmljZS5zaG93Q29uZmlnVmFsdWUoKTtcclxuICAgICAgICB0aGlzLm1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnNsaWRlUmlnaHQgPSAnbm90ZXM0JztcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKCdleHRlbnNpb25BbmNob3InLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGV4dGVuc2lvbkFuY2hvcjogVmlld0NvbnRhaW5lclJlZjtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
