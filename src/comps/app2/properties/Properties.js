///<reference path="../../../../typings/app.d.ts"/>
System.register(["angular2/core", "src/Conts", "../../../services/CommBroker", "../notes/Notes1Props"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Conts_1, CommBroker_1, Notes1Props_1;
    var Properties;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Notes1Props_1_1) {
                Notes1Props_1 = Notes1Props_1_1;
            }],
        execute: function() {
            Properties = (function () {
                function Properties(commBroker) {
                    this.commBroker = commBroker;
                    this.commBroker.setService(Conts_1.Consts.Services().Properties, this);
                }
                Properties.prototype.setPropView = function (value) {
                    this.value = value;
                };
                Properties.prototype.ngOnDestroy = function () {
                };
                Properties = __decorate([
                    core_1.Component({
                        selector: 'Properties',
                        directives: [Notes1Props_1.Notes1Props],
                        template: "\n                <h4>Properties</h4>\n                <hr/>\n                 <ul [ngSwitch]=\"value\">\n                  <li *ngSwitchWhen=\"'notes1'\">\n                    <Notes1Props></Notes1Props>\n                  </li>\n                  <li *ngSwitchWhen=\"'notes2'\"><h1>Notes 2</h1></li>\n                  <li *ngSwitchWhen=\"'notes3'\"><h1>Notes 3</h1></li>\n                  <li *ngSwitchWhen=\"'notes4'\"><h1>Notes 4</h1></li>\n                  <li *ngSwitchWhen=\"'notes5'\"><h1>Notes 5</h1></li>\n                  <li *ngSwitchWhen=\"'Digg'\"><h1>Digg</h1></li>\n                  <li *ngSwitchWhen=\"'Weather'\"><h1>Weather</h1></li>\n                  <li *ngSwitchWhen=\"'Contact'\"><h1>Contact</h1></li>\n                  <li *ngSwitchWhen=\"'Logout'\"><h1>Logout</h1></li>\n                </ul>\n                <ng-content></ng-content>\n              "
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], Properties);
                return Properties;
            })();
            exports_1("Properties", Properties);
        }
    }
});
//# sourceMappingURL=Properties.js.map