System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var NotesDetailsItems;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NotesDetailsItems = (function () {
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
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
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
                        template: "<br/>\n    <button (click)=\"onClick()\">click me</button>\n    <p>content from parent is: {{content(random)}}</p>\n    <ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_b = typeof core_1.NgZone !== 'undefined' && core_1.NgZone) === 'function' && _b) || Object])
                ], NotesDetailsItems);
                return NotesDetailsItems;
                var _a, _b;
            }());
            exports_1("NotesDetailsItems", NotesDetailsItems);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvTm90ZXNEZXRhaWxzSXRlbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFVSSwyQkFBb0IsSUFBVztvQkFBWCxTQUFJLEdBQUosSUFBSSxDQUFPO29CQVIvQixXQUFNLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUk5QyxZQUFPLEdBQVUsS0FBSyxDQUFDO29CQUtuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUN4QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELG1DQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELHVDQUFXLEdBQVg7Z0JBQ0EsQ0FBQztnQkFyQkQ7b0JBQUMsYUFBTSxFQUFFOztpRUFBQTtnQkFFVDtvQkFBQyxZQUFLLEVBQUU7O2tFQUFBO2dCQUVSO29CQUFDLFlBQUssRUFBRTs7a0VBQUE7Z0JBWlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsbUpBR2dCO3FCQUM3QixDQUFDOztxQ0FBQTtnQkF3QkYsd0JBQUM7O1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCxpREF1QkMsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAyL25vdGVzL05vdGVzRGV0YWlsc0l0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbm90ZXMtZGV0YWlscy1pdGVtJyxcclxuICAgIHRlbXBsYXRlOiBgPGJyLz5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiPmNsaWNrIG1lPC9idXR0b24+XHJcbiAgICA8cD5jb250ZW50IGZyb20gcGFyZW50IGlzOiB7e2NvbnRlbnQocmFuZG9tKX19PC9wPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGVzRGV0YWlsc0l0ZW1zIHtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgc2VsZWN0OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQElucHV0KClcclxuICAgIGNvbnRlbnQ6KChhbnkpPT5zdHJpbmcpO1xyXG4gICAgQElucHV0KClcclxuICAgIG15VmFsdWU6c3RyaW5nID0gJ3ZhbCc7XHJcblxyXG4gICAgcHJpdmF0ZSByYW5kb206YW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTpOZ1pvbmUpIHtcclxuICAgICAgICB0aGlzLnJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3JjZSB1cGRhdGUgem9uZSBVSScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLm15VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
