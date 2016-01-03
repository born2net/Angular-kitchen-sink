System.register([], function(exports_1) {
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
            })();
            exports_1("MailModel", MailModel);
        }
    }
});
//# sourceMappingURL=MailModel.js.map