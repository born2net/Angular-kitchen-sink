System.register([], function(exports_1) {
    function StartCapValidator(control) {
        if (!control.value.match(/^[A-Z]/)) {
            return { notCapped: true };
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