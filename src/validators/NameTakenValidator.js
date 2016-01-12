System.register([], function(exports_1) {
    function NameTakenValidator(control) {
        var q = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'Sean') {
                    resolve({ "taken": true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
        return q;
    }
    exports_1("default", NameTakenValidator);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=NameTakenValidator.js.map