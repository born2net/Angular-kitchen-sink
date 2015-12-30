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
    var MailModel, Contact;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MailModel = (function () {
                function MailModel(id, name, male, power, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.male = male;
                    this.power = power;
                    this.alterEgo = alterEgo;
                }
                return MailModel;
            })();
            exports_1("MailModel", MailModel);
            Contact = (function () {
                function Contact() {
                    this.contacts = ['Call me', 'Email me', 'Page me (old school)'];
                    this.model = new MailModel(1, 'your name', true, this.contacts[0], 'how can we help you?');
                    this.submitted = false;
                }
                Contact.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                Contact.prototype.onChange = function (event) {
                };
                Contact = __decorate([
                    core_1.Component({
                        selector: 'Contact',
                        styles: [".ng-valid[required] {\n          border-left: 5px solid #42A948; /* green */\n        }\n        .form-control {\n            width: 20%;\n        }\n\n        .ng-invalid {\n          border-left: 5px solid #a94442; /* red */\n       }"],
                        template: "\n                <small>I am Contact component</small>\n                <ng-content></ng-content>\n                <div class=\"container\">\n                  <div [hidden]=\"submitted\">\n                    <h1>Contact form</h1>\n                    <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n                      <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" class=\"form-control\" required\n                          [(ngModel)]=\"model.name\"\n                          (change)=\"onChange($event)\"\n                            ngControl=\"name\"  #name=\"ngForm\" >\n                        <div [hidden]=\"name.valid\" class=\"alert alert-danger\">\n                          Name is required\n                        </div>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"alterEgo\">Subject</label>\n                        <input type=\"text\" class=\"form-control\"\n                        (change)=\"onChange($event)\"\n                          [(ngModel)]=\"model.alterEgo\"\n                            ngControl=\"alterEgo\" >\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"power\">How should we contact you?</label>\n                        <select class=\"form-control\" required\n                        (change)=\"onChange($event)\"\n                          [(ngModel)]=\"model.power\"\n                            ngControl=\"power\" #power=\"ngForm\" >\n                          <option *ngFor=\"#p of contacts\" [value]=\"p\">\n                            {{p}}\n                          </option>\n                        </select>\n                        <div [hidden]=\"power.valid\" class=\"alert alert-danger\">\n                          Power is required\n                        </div>\n                      </div>\n                      <label class=\"pull-left\">\n                      </label>\n                      <br/>\n                      <br/>\n\n\n                      <button type=\"submit\" class=\"btn btn-default\"\n                              [disabled]=\"!heroForm.form.valid\">Submit</button>\n                    </form>\n                  </div>\n\n                  <div [hidden]=\"!submitted\">\n                    <h2>You submitted the following:</h2>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Name</div>\n                      <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Subject</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.alterEgo }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Power</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.power }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Gender Male</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.male }}</div>\n                    </div>\n                    <br>\n                    <button class=\"btn btn-default\" (click)=\"submitted=false\">Edit</button>\n                  </div>\n                </div>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Contact);
                return Contact;
            })();
            exports_1("Contact", Contact);
        }
    }
});
//# sourceMappingURL=Contact.js.map