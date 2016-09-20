System.register(["@angular/core", "../../../../src/Conts", "../../../services/CommBroker"], function(exports_1, context_1) {
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
    var core_1, Conts_1, CommBroker_1;
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
                        template: "      \n                <h4>Properties</h4>\n                <hr/>\n                 <ul [ngSwitch]=\"value\">\n                  <li *ngSwitchCase=\"'notes1'\">\n                    <Notes1Props></Notes1Props>\n                  </li>\n                  <li *ngSwitchCase=\"'notes2'\"><h1>Notes 2</h1></li>\n                  <li *ngSwitchCase=\"'notes3'\"><h1>Notes 3</h1></li>\n                  <li *ngSwitchCase=\"'notes4'\"><h1>Notes 4</h1></li>\n                  <li *ngSwitchCase=\"'notes5'\"><h1>Notes 5</h1></li>\n                  <li *ngSwitchCase=\"'Digg'\"><h1>Digg</h1></li>\n                  <li *ngSwitchCase=\"'Weather'\"><h1>Weather</h1></li>\n                  <li *ngSwitchCase=\"'Contact'\"><h1>Contact</h1></li>\n                  <li *ngSwitchCase=\"'Logout'\"><h1>Logout</h1></li>\n                </ul>\n                <ng-content></ng-content>\n              "
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], Properties);
                return Properties;
            }());
            exports_1("Properties", Properties);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvcHJvcGVydGllcy9Qcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUdJLG9CQUFvQixVQUFxQjtvQkFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztvQkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsY0FBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFFTSxnQ0FBVyxHQUFsQixVQUFtQixLQUFLO29CQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxnQ0FBVyxHQUFYO2dCQUNBLENBQUM7Z0JBbENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSwyM0JBaUJDO3FCQUNkLENBQUM7OzhCQUFBO2dCQWVGLGlCQUFDO1lBQUQsQ0FiQSxBQWFDLElBQUE7WUFiRCxtQ0FhQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvcHJvcGVydGllcy9Qcm9wZXJ0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL0NvbnRzXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtOb3RlczFQcm9wc30gZnJvbSBcIi4uL25vdGVzL05vdGVzMVByb3BzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnUHJvcGVydGllcycsXHJcbiAgICB0ZW1wbGF0ZTogYCAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg0PlByb3BlcnRpZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICA8dWwgW25nU3dpdGNoXT1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSAqbmdTd2l0Y2hDYXNlPVwiJ25vdGVzMSdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Tm90ZXMxUHJvcHM+PC9Ob3RlczFQcm9wcz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpICpuZ1N3aXRjaENhc2U9XCInbm90ZXMyJ1wiPjxoMT5Ob3RlcyAyPC9oMT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgKm5nU3dpdGNoQ2FzZT1cIidub3RlczMnXCI+PGgxPk5vdGVzIDM8L2gxPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSAqbmdTd2l0Y2hDYXNlPVwiJ25vdGVzNCdcIj48aDE+Tm90ZXMgNDwvaDE+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpICpuZ1N3aXRjaENhc2U9XCInbm90ZXM1J1wiPjxoMT5Ob3RlcyA1PC9oMT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgKm5nU3dpdGNoQ2FzZT1cIidEaWdnJ1wiPjxoMT5EaWdnPC9oMT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgKm5nU3dpdGNoQ2FzZT1cIidXZWF0aGVyJ1wiPjxoMT5XZWF0aGVyPC9oMT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgKm5nU3dpdGNoQ2FzZT1cIidDb250YWN0J1wiPjxoMT5Db250YWN0PC9oMT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgKm5nU3dpdGNoQ2FzZT1cIidMb2dvdXQnXCI+PGgxPkxvZ291dDwvaDE+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb3BlcnRpZXMge1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tQnJva2VyOkNvbW1Ccm9rZXIpIHtcclxuICAgICAgICB0aGlzLmNvbW1Ccm9rZXIuc2V0U2VydmljZShDb25zdHMuU2VydmljZXMoKS5Qcm9wZXJ0aWVzLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UHJvcFZpZXcodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
