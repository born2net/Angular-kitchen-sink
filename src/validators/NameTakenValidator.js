System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvTmFtZVRha2VuVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BLDRCQUEyQyxPQUFpQjtRQUN4RCxJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2hDLFVBQVUsQ0FBQztnQkFDUCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7SUFYRCx3Q0FXQyxDQUFBIiwiZmlsZSI6InZhbGlkYXRvcnMvTmFtZVRha2VuVmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW50ZXJmYWNlIFZhbGlkYXRpb25SZXN1bHQge1xyXG4gICAgW2tleTpzdHJpbmddOmJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hbWVUYWtlblZhbGlkYXRvcihjb250cm9sOk5nQ29udHJvbCk6UHJvbWlzZTxWYWxpZGF0aW9uUmVzdWx0PiB7XHJcbiAgICBsZXQgcSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPT09ICdTZWFuJykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XCJ0YWtlblwiOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHE7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
