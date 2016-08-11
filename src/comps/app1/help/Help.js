System.register(["@angular/core", "./contributors/contributors", "../../../services/CommBroker", "../../../Conts"], function(exports_1, context_1) {
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
    var core_1, contributors_1, CommBroker_1, Conts_1;
    var Help;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contributors_1_1) {
                contributors_1 = contributors_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            Help = (function () {
                function Help(commBroker) {
                    this.commBroker = commBroker;
                }
                Help.prototype.ngOnInit = function () {
                    this.commBroker.getService(Conts_1.Consts.Services().App).appResized();
                };
                Help = __decorate([
                    core_1.Component({
                        selector: 'Help',
                        providers: [contributors_1.Contributors],
                        template: " <small>I am Help component and using\n                <a href=\"https://github.com/valor-software/ng2-bootstrap\" target=\"_blank\">ng2-bootstrap</a></small>\n                <br/>\n                <alert type=\"info\">Welcome to Angular2 Bootstrap starter pack!</alert>\n                <!--<rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\" [titles]=\"['one','two','three']\" ></rating>-->\n                <br/>\n                  <tabs>\n                    <tab [tabtitle]=\"'About this app'\">\n                      <h4>\n                        This App was created as both a starting point for anyone looking to create a scalable application in Angular 2\n                      as it focuses on key concepts of object oriented / component programming.</h4>\n                      <hr/>\n                      <h4>We also try and touch all the major aspects\n                      of the language to give new comments a sample code base to reference for help (well at least until Angular 2 takes over\n                      the universe | Angular 2 - one framework baby!!!).</h4>\n                      <hr/>\n                      <h5>Want to help? visit me on Github</h5>\n                      <center>\n                        <a id=\"largeGit\" href=\"https://github.com/born2net/ng2Boilerplate\" target=\"_blank\" class=\"fa fa-github\"></a>\n                      </center>\n\n                    </tab>\n                    <tab [tabtitle]=\"'Contributors'\" >\n                      <Contributors></Contributors>\n                    </tab>\n                    <tab tabtitle=\"Angular 2 Resources\">\n                      <div class=\"container\">\n                        <div class=\"notice notice-info\">\n                          <strong>videos</strong> <a target=\"_blank\" href=\"https://youtube.com\">Watch the video tutorial on this project</a>\n                        </div>\n                        <div class=\"notice notice-success\">\n                          <strong>home page</strong> <a target=\"_blank\" href=\"https://angular.io/\">Angular 2 home page</a>\n                        </div>\n                        <div class=\"notice notice-danger\">\n                          <strong>docs</strong> <a target=\"_blank\" href=\"https://angular.io/docs/js/latest//\">Angular 2 docs</a>\n                        </div>\n                        <div class=\"notice notice-info\">\n                          <strong>videos</strong> <a target=\"_blank\" href=\"https://egghead.io/technologies/angular2\">EggHead Angular 2 tutorials</a>\n                        </div>\n                        <div class=\"notice notice-warning\">\n                          <strong>books</strong> <a target=\"_blank\" href=\"https://pragprog.com/book/smreactjs/reactive-programming-with-rxjs\">rx.js book</a>\n                        </div>\n                        <div class=\"notice notice-warning\">\n                          <strong>books</strong> <a target=\"_blank\" href=\"https://www.ng-book.com/2/\">ng2 book</a>\n                        </div>\n                      </div>\n                    </tab>\n                  </tabs>\n                "
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], Help);
                return Help;
            }());
            exports_1("Help", Help);
        }
    }
});
//# sourceMappingURL=Help.js.map