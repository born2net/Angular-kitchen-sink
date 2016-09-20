System.register(["../Conts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Conts_1;
    var RefreshTheme;
    return {
        setters:[
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            RefreshTheme = (function () {
                function RefreshTheme() {
                    setTimeout(function (e) {
                        if (document['commBroker']) {
                            document['commBroker'].getService(Conts_1.Consts.Services().StyleService).refreshTheme();
                        }
                    }, 50);
                }
                return RefreshTheme;
            }());
            exports_1("RefreshTheme", RefreshTheme);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9SZWZyZXNoVGhlbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFFQTtnQkFDSTtvQkFDSSxVQUFVLENBQUMsVUFBQSxDQUFDO3dCQUNSLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNyRixDQUFDO29CQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUNMLG1CQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx1Q0FRQyxDQUFBIiwiZmlsZSI6InN0eWxlcy9SZWZyZXNoVGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1Ccm9rZXJ9IGZyb20gXCIuLi9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vQ29udHNcIjtcclxuZXhwb3J0IGNsYXNzIFJlZnJlc2hUaGVtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGU9PiB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudFsnY29tbUJyb2tlciddKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFsnY29tbUJyb2tlciddLmdldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuU3R5bGVTZXJ2aWNlKS5yZWZyZXNoVGhlbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhhbXBsZSBiZWxvdyBvZiBkb2luZyBjbGFzcyBkZWNvcmF0aW9uLCB3aGljaCB3ZSBjYW4ndCB1c2UgYmVjYXVzZSB3ZSBuZWVkIHRvIGluamVjdFxyXG4vLyBpbiBjb25zdHJ1Y3RvciBhcyB3ZWxsLCBzbyB3ZSBtdXN0IGV4dGVuZC4uLlxyXG5cclxuLy9leHBvcnQgZnVuY3Rpb24gUmVmcmVzaFRoZW1lKHRoZW1lOnN0cmluZykge1xyXG4vLyAgICByZXR1cm4gZnVuY3Rpb24gPFRGdW5jdGlvbiBleHRlbmRzIEZ1bmN0aW9uPihUYXJnZXQ6VEZ1bmN0aW9uKTpURnVuY3Rpb24ge1xyXG4vLyAgICAgICAgdmFyIG5ld0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgIFRhcmdldC5hcHBseSh0aGlzKTtcclxuLy8gICAgICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xyXG4vLyAgICAgICAgfTtcclxuLy8gICAgICAgIG5ld0NvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGFyZ2V0LnByb3RvdHlwZSk7XHJcbi8vICAgICAgICBuZXdDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUYXJnZXQ7XHJcbi8vICAgICAgICByZXR1cm4gPGFueT4gbmV3Q29uc3RydWN0b3I7XHJcbi8vICAgIH1cclxuLy99XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
