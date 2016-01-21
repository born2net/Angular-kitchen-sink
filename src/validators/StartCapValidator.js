function StartCapValidator(control) {
    if (!control.value.match(/^[A-Z]/)) {
        return { notCapped: true };
    }
    else {
        return null;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StartCapValidator;
//# sourceMappingURL=StartCapValidator.js.map