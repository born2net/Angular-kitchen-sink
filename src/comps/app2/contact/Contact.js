System.register(["angular2/core", "src/Conts", 'angular2/common', "../../../models/MailModel", "../../../services/CommBroker"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Conts_1, common_1, MailModel_1, CommBroker_1;
    var Contact;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (MailModel_1_1) {
                MailModel_1 = MailModel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            }],
        execute: function() {
            Contact = (function () {
                function Contact(commBroker) {
                    this.commBroker = commBroker;
                    this.contacts = ['Call me', 'Email me', 'Page me (old school)'];
                    this.model = new MailModel_1.MailModel(1, 'your name', true, this.contacts[0], 'how can we help you?');
                    this.submitted = false;
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Contact');
                }
                Contact.prototype.onSubmit = function (event) {
                    console.log(event);
                    if (event.contactMethod.indexOf('Page') > -1) {
                        alert('Paging is really old, get a cell phone');
                        this.submitted = false;
                        return;
                    }
                    this.submitted = true;
                };
                Contact.prototype.onChange = function (event) {
                    if (event.target.value.length < 3)
                        alert('text too short for subject');
                };
                Contact = __decorate([
                    core_1.Component({
                        selector: 'Contact',
                        directives: [common_1.FORM_DIRECTIVES],
                        styles: ["\n            .ng-invalid {\n              border-left: 5px solid #a94442; /* red */\n           }\n           .ng-valid[required] {\n                  border-left: 5px solid #42A948; /* green */\n           }\n           .form-control {\n                width: 20%;\n           }\n       "],
                        template: "\n                <small>I am Contact component</small>\n                <ng-content></ng-content>\n                <div class=\"container\">\n                  <div [hidden]=\"submitted\">\n                    <h1>Contact form</h1>\n\n                    <!-- special tx to ng2-book via http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/ -->\n\n                    <!-- Importing FORM_DIRECTIVES automatically binds form to ngForm (which is a ControlGroup) and ngSubmit for us -->\n                    <!-- To create a new ControlGroup and Controls implicitly use: -->\n                    <!--  -->\n                    <!-- ngForm and -->\n                    <!-- ngControl -->\n                    <!-- But to bind to an existing ControlGroup and Controls use: -->\n                    <!--  -->\n                    <!-- ngFormModel and -->\n                    <!-- ngFormControl -->\n\n                    <form (ngSubmit)=\"onSubmit(contactForm.value)\" #contactForm=\"ngForm\">\n                      <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.name\" (change)=\"onChange($event)\" ngControl=\"name\" #name=\"ngForm\">\n                        <div [hidden]=\"name.valid\" class=\"alert alert-danger\">\n                          Name is required\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"subject\">Subject</label>\n                        <input type=\"text\" class=\"form-control\" (change)=\"onChange($event)\" [(ngModel)]=\"model.subject\" ngControl=\"subject\" >\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"contactMethod\">How should we contact you?</label>\n                        <select class=\"form-control\" required (change)=\"onChange($event)\" [(ngModel)]=\"model.contactMethod\" ngControl=\"contactMethod\" #contactMethod=\"ngForm\" >\n                          <option *ngFor=\"#p of contacts\" [value]=\"p\">\n                            {{p}}\n                          </option>\n                        </select>\n                        <div [hidden]=\"contactMethod.valid\" class=\"alert alert-danger\">\n                          contact method is required\n                        </div>\n                      </div>\n                      <label class=\"pull-left\">\n                      </label>\n                      <br/>\n                      <br/>\n                      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!contactForm.form.valid\">Submit</button>\n                    </form>\n                  </div>\n                  <div [hidden]=\"!submitted\">\n                    <h2>You submitted the following:</h2>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Name</div>\n                      <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Subject</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.subject }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Power</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.contactMethod }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Gender Male</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.male }}</div>\n                    </div>\n                    <br>\n                    <button class=\"btn btn-default\" (click)=\"submitted=false\">Edit</button>\n                  </div>\n                </div>\n                "
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], Contact);
                return Contact;
            })();
            exports_1("Contact", Contact);
        }
    }
});
//# sourceMappingURL=Contact.js.map