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
var Conts_1 = require("../../../../src/Conts");
var CommBroker_1 = require("../../../services/CommBroker");
var Notes1Props_1 = require("../notes/Notes1Props");
var Properties = (function () {
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
exports.Properties = Properties;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvcHJvcGVydGllcy9wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbIlByb3BlcnRpZXMiLCJQcm9wZXJ0aWVzLmNvbnN0cnVjdG9yIiwiUHJvcGVydGllcy5zZXRQcm9wVmlldyIsIlByb3BlcnRpZXMubmdPbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUNwRCxzQkFBcUIsdUJBQXVCLENBQUMsQ0FBQTtBQUM3QywyQkFBeUIsOEJBQThCLENBQUMsQ0FBQTtBQUN4RCw0QkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQUVqRDtJQTBCSUEsb0JBQW9CQSxVQUFxQkE7UUFBckJDLGVBQVVBLEdBQVZBLFVBQVVBLENBQVdBO1FBQ3JDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNuRUEsQ0FBQ0E7SUFFTUQsZ0NBQVdBLEdBQWxCQSxVQUFtQkEsS0FBS0E7UUFDcEJFLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVERixnQ0FBV0EsR0FBWEE7SUFDQUcsQ0FBQ0E7SUFuQ0xIO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxZQUFZQTtZQUN0QkEsVUFBVUEsRUFBRUEsQ0FBQ0EseUJBQVdBLENBQUNBO1lBQ3pCQSxRQUFRQSxFQUFFQSxxM0JBaUJDQTtTQUNkQSxDQUFDQTs7bUJBZURBO0lBQURBLGlCQUFDQTtBQUFEQSxDQXBDQSxBQW9DQ0EsSUFBQTtBQWJZLGtCQUFVLGFBYXRCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMi9wcm9wZXJ0aWVzL1Byb3BlcnRpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL0NvbnRzXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtOb3RlczFQcm9wc30gZnJvbSBcIi4uL25vdGVzL05vdGVzMVByb3BzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnUHJvcGVydGllcycsXHJcbiAgICBkaXJlY3RpdmVzOiBbTm90ZXMxUHJvcHNdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxoND5Qcm9wZXJ0aWVzPC9oND5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgPHVsIFtuZ1N3aXRjaF09XCJ2YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgKm5nU3dpdGNoV2hlbj1cIidub3RlczEnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5vdGVzMVByb3BzPjwvTm90ZXMxUHJvcHM+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSAqbmdTd2l0Y2hXaGVuPVwiJ25vdGVzMidcIj48aDE+Tm90ZXMgMjwvaDE+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpICpuZ1N3aXRjaFdoZW49XCInbm90ZXMzJ1wiPjxoMT5Ob3RlcyAzPC9oMT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgKm5nU3dpdGNoV2hlbj1cIidub3RlczQnXCI+PGgxPk5vdGVzIDQ8L2gxPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSAqbmdTd2l0Y2hXaGVuPVwiJ25vdGVzNSdcIj48aDE+Tm90ZXMgNTwvaDE+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpICpuZ1N3aXRjaFdoZW49XCInRGlnZydcIj48aDE+RGlnZzwvaDE+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpICpuZ1N3aXRjaFdoZW49XCInV2VhdGhlcidcIj48aDE+V2VhdGhlcjwvaDE+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpICpuZ1N3aXRjaFdoZW49XCInQ29udGFjdCdcIj48aDE+Q29udGFjdDwvaDE+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpICpuZ1N3aXRjaFdoZW49XCInTG9nb3V0J1wiPjxoMT5Mb2dvdXQ8L2gxPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0aWVzIHtcclxuICAgIHByaXZhdGUgdmFsdWU6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbUJyb2tlcjpDb21tQnJva2VyKSB7XHJcbiAgICAgICAgdGhpcy5jb21tQnJva2VyLnNldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuUHJvcGVydGllcywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFByb3BWaWV3KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
