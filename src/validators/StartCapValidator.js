System.register([], function(exports_1) {
    function StartCapValidator(control) {
        if (!control.value.match(/^[A-Z]/)) {
            return { notCapped: true };
        }
        else {
            return null;
        }
    }
    exports_1("default", StartCapValidator);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=StartCapValidator.js.map