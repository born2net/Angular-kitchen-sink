System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvU3RhcnRDYXBWYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUEsMkJBQTBDLE9BQWtCO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBTkQsdUNBTUMsQ0FBQSIsImZpbGUiOiJ2YWxpZGF0b3JzL1N0YXJ0Q2FwVmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcnRDYXBWYWxpZGF0b3IoY29udHJvbDogTmdDb250cm9sKTogeyBbczogc3RyaW5nXTogYm9vbGVhbiB9IHtcclxuICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaCgvXltBLVpdLykpIHtcclxuICAgICAgICByZXR1cm4ge25vdENhcHBlZDogdHJ1ZX07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
