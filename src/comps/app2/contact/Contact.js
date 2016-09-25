System.register(["@angular/core", "../../../../src/Conts", "../../../models/MailModel", "../../../services/CommBroker", './Contact.html!text'], function(exports_1, context_1) {
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
    var core_1, Conts_1, MailModel_1, CommBroker_1, Contact_html_text_1;
    var Contact;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (MailModel_1_1) {
                MailModel_1 = MailModel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Contact_html_text_1_1) {
                Contact_html_text_1 = Contact_html_text_1_1;
            }],
        execute: function() {
            Contact = (function () {
                function Contact(commBroker) {
                    this.commBroker = commBroker;
                    this.user = {
                        name: 'John',
                        address: {
                            address1: '11, High Street',
                            postcode: '1234'
                        }
                    };
                    this.contacts = ['Call me', 'Email me', 'Page me (old school)'];
                    this.model = new MailModel_1.MailModel(1, 'your name', true, this.contacts[0], 'how can we help you?');
                    this.submitted = false;
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Contact');
                }
                Contact.prototype.save = function (form, isValid) {
                    alert("status: " + isValid + " " + JSON.stringify(form));
                };
                Contact.prototype.onChange = function (event) {
                    if (event.target.value.length < 3)
                        alert('text too short for subject');
                };
                Contact = __decorate([
                    core_1.Component({
                        selector: 'Contact',
                        moduleId: __moduleName,
                        template: Contact_html_text_1.default,
                        styles: ["\n            .ng-invalid {\n              border-left: 5px solid #a94442; /* red */\n           }\n           .ng-valid[required] {\n                  border-left: 5px solid #42A948; /* green */\n           }\n           .form-control {\n                width: 20%;\n           }\n       "]
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], Contact);
                return Contact;
            }());
            exports_1("Contact", Contact);
        }
    }
});
