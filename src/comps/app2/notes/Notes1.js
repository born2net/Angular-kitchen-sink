System.register(['angular2/core', "../../sliderpanel/Sliderpanel", "../../modaldialog/ModalDialog", "../../../services/CommBroker", "./NotesBase", "../contact/Contact", "../../../pipes/CharCount"], function(exports_1) {
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
    var core_1, Sliderpanel_1, ModalDialog_1, CommBroker_1, NotesBase_1, Contact_1, CharCount_1;
    var Notes1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (ModalDialog_1_1) {
                ModalDialog_1 = ModalDialog_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (NotesBase_1_1) {
                NotesBase_1 = NotesBase_1_1;
            },
            function (Contact_1_1) {
                Contact_1 = Contact_1_1;
            },
            function (CharCount_1_1) {
                CharCount_1 = CharCount_1_1;
            }],
        execute: function() {
            Notes1 = (function (_super) {
                __extends(Notes1, _super);
                function Notes1(sliderPanel, commBroker) {
                    _super.call(this, sliderPanel, commBroker);
                    this.sliderPanel = sliderPanel;
                    this.commBroker = commBroker;
                    this.contacts = ['Call me', 'Email me', 'Page me (old school)'];
                    this.model = new Contact_1.MailModel(1, 'your name', true, this.contacts[0], 'how can we help you?');
                    this.submitted = false;
                    this.me = this;
                    this.slideLeft = 'notes2';
                }
                Notes1.prototype.onSubmit = function (event) {
                    console.log(event);
                    if (event.contactMethod.indexOf('page')) {
                        alert('Paging is really old, get a cell phone');
                        this.submitted = false;
                        return;
                    }
                    this.submitted = true;
                };
                Notes1.prototype.onChange = function (event) {
                    if (event.target.value.length < 3)
                        alert('text too short for subject');
                };
                Notes1 = __decorate([
                    core_1.Component({
                        selector: 'Notes1',
                        directives: [ModalDialog_1.ModalDialog],
                        pipes: [CharCount_1.CharCount],
                        styles: [".ng-valid[required] {\n          border-left: 5px solid #42A948; /* green */\n        }\n        .form-control {\n            width: 20%;\n        }\n        #totalChar {\n           border: none;\n        }\n        #notesArea {\n           width: 50%;\n           height: 200px;\n        }\n\n        .ng-invalid {\n          border-left: 5px solid #a94442; /* red */\n       }"],
                        template: " <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm goNext\">\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes1 component</small>\n                <div class=\"btn-group\" role=\"group\">\n                  <button (click)=\"openModal()\" type=\"button\" class=\"btn btn-default\">Open Modal</button>\n                </div>\n                <hr/>\n                <h1>Notes 1</h1>\n                <div class=\"container\">\n                  <div [hidden]=\"submitted\">\n                    <!-- Importing FORM_DIRECTIVES automatically binds form to ngForm (which is a ControlGroup) and ngSubmit for us -->\n                    <form (ngSubmit)=\"onSubmit(contactForm.value)\" #contactForm=\"ngForm\">\n                      <div class=\"form-group\">\n                        <label for=\"name\">Enter your notes</label>\n                        <textarea id=\"notesArea\" type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.name\" (change)=\"onChange($event)\" ngControl=\"name\" #name=\"ngForm\"></textarea>\n                        <span>Total characters via Pipes: {{model.name | CharCount}}</span>\n                        <div [hidden]=\"name.valid\" class=\"alert alert-danger\">\n                          Name is required\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"subject\">Subject</label>\n                        <input type=\"text\" class=\"form-control\" (change)=\"onChange($event)\" [(ngModel)]=\"model.subject\" ngControl=\"subject\" >\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"contactMethod\">How should we contact you?</label>\n                        <select class=\"form-control\" required (change)=\"onChange($event)\" [(ngModel)]=\"model.contactMethod\" ngControl=\"contactMethod\" #contactMethod=\"ngForm\" >\n                          <option *ngFor=\"#p of contacts\" [value]=\"p\">\n                            {{p}}\n                          </option>\n                        </select>\n                        <div [hidden]=\"contactMethod.valid\" class=\"alert alert-danger\">\n                          contact method is required\n                        </div>\n                      </div>\n                      <label class=\"pull-left\">\n                      </label>\n                      <br/>\n                      <br/>\n                      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!contactForm.form.valid\">Submit</button>\n                    </form>\n                  </div>\n                  <div [hidden]=\"!submitted\">\n                    <h2>You submitted the following:</h2>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Name</div>\n                      <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Subject</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.subject }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Power</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.contactMethod }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Gender Male</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.male }}</div>\n                    </div>\n                    <br>\n                    <button class=\"btn btn-default\" (click)=\"submitted=false\">Edit</button>\n                  </div>\n                </div>\n                <hr/>\n                <ModalDialog title=\"My owner is Notes1\" content=\"I am here to serve Notes1\" [owner]=\"me\">\n                </ModalDialog>\n                <ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes1);
                return Notes1;
            })(NotesBase_1.NotesBase);
            exports_1("Notes1", Notes1);
        }
    }
});
//# sourceMappingURL=Notes1.js.map