System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MailModel;
    return {
        setters:[],
        execute: function() {
            MailModel = (function () {
                function MailModel(id, name, male, contactMethod, subject) {
                    this.id = id;
                    this.name = name;
                    this.male = male;
                    this.contactMethod = contactMethod;
                    this.subject = subject;
                }
                return MailModel;
            }());
            exports_1("MailModel", MailModel);
        }
    }
});
