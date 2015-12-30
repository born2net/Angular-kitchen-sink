System.register(["angular2/core"], function(exports_1) {
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
    var Properties;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Properties = (function () {
                function Properties() {
                    this.value = 1;
                    this.c = 1;
                }
                Properties.prototype.onClick = function () {
                    this.c++;
                    this.value = this.c;
                    console.log(this.c);
                };
                Properties.prototype.ngOnDestroy = function () {
                };
                Properties = __decorate([
                    core_1.Component({
                        selector: 'Properties',
                        template: "\n                 <ul [ngSwitch]=\"value\">\n                  <li *ngSwitchWhen=\"1\">is 1111111111111</li>\n                  <li *ngSwitchWhen=\"2\"><h1>dDDDD</h1>is 2dd</li>\n                  <li *ngSwitchWhen=\"3\">\n                  <div style=\"height:  400px ;overflow-y: scroll\">\n                  <h1>3333333333333333333333333</h1>\n\n                  </div>\n                  </li>\n                  <li *ngSwitchWhen=\"4\">is 4</li>\n                </ul>\n                <button (click)=\"onClick()\">Click me</button>\n                <ng-content></ng-content>\n              "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Properties);
                return Properties;
            })();
            exports_1("Properties", Properties);
        }
    }
});
//# sourceMappingURL=Properties.js.map