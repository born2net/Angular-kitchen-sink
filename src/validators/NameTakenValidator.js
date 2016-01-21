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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NameTakenValidator;
//# sourceMappingURL=NameTakenValidator.js.map