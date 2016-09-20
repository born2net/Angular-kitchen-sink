System.register(["@angular/core", "highcharts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Highcharts;
    var MyChart;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Highcharts_1) {
                Highcharts = Highcharts_1;
            }],
        execute: function() {
            window['Highcharts'] = Highcharts;
            MyChart = (function () {
                function MyChart() {
                    this.chartBar = {
                        chart: {
                            type: 'line'
                        },
                        xAxis: {
                            categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
                        credits: {
                            enabled: false
                        },
                        series: [
                            {
                                name: 'NC',
                                data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
                            }, {
                                name: 'OK',
                                data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
                            }, {
                                name: 'KO',
                                data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
                            }, {
                                name: 'VALID',
                                data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
                            }, {
                                name: 'CHECK',
                                data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
                            }, {
                                name: 'COR',
                                data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
                            }
                        ]
                    };
                }
                MyChart.prototype.ngOnInit = function () {
                    var _this = this;
                    setInterval(function () {
                        _this.chartBar = {
                            chart: {
                                type: 'pie'
                            },
                            xAxis: {
                                categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                            },
                            credits: {
                                enabled: false
                            },
                            series: [
                                {
                                    name: 'NC',
                                    data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
                                }, {
                                    name: 'OK',
                                    data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
                                }, {
                                    name: 'KO',
                                    data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
                                }, {
                                    name: 'VALID',
                                    data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
                                }, {
                                    name: 'CHECK',
                                    data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
                                }, {
                                    name: 'COR',
                                    data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
                                }
                            ]
                        };
                    }, 3000);
                };
                MyChart = __decorate([
                    core_1.Component({
                        selector: 'MyChart',
                        template: "\n        <div style=\"width: 100%; height: 80%\">\n            <!-- <div [ng2-highcharts]=\"chartOptions\" class=\"graph\"></div> -->\n             <div [ng2-highcharts]=\"chartBar\" class=\"graph\"></div>\n        </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyChart);
                return MyChart;
            }());
            exports_1("MyChart", MyChart);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvaGVscC9jb250cmlidXRvcnMvTXlDaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7WUFZbEM7Z0JBQ0k7b0JBeUJBLGFBQVEsR0FBRzt3QkFDUCxLQUFLLEVBQUU7NEJBQ0gsSUFBSSxFQUFFLE1BQU07eUJBQ2Y7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7eUJBQ2pEO3dCQUNELE9BQU8sRUFBRTs0QkFDTCxPQUFPLEVBQUUsS0FBSzt5QkFDakI7d0JBQ0QsTUFBTSxFQUFFOzRCQUNKO2dDQUNJLElBQUksRUFBRSxJQUFJO2dDQUNWLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ2hFLEVBQUU7Z0NBQ0MsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDckUsRUFBRTtnQ0FDQyxJQUFJLEVBQUUsSUFBSTtnQ0FDVixJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcs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RSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztpQ0FDeEU7NkJBQ0o7eUJBQ0osQ0FBQztvQkFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQztnQkF4R0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLHdPQU1UO3FCQUNKLENBQUM7OzJCQUFBO2dCQWdHRixjQUFDO1lBQUQsQ0EvRkEsQUErRkMsSUFBQTtZQS9GRCw2QkErRkMsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAxL2hlbHAvY29udHJpYnV0b3JzL015Q2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgT25Jbml0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgSGlnaGNoYXJ0cyBmcm9tIFwiaGlnaGNoYXJ0c1wiO1xyXG53aW5kb3dbJ0hpZ2hjaGFydHMnXSA9IEhpZ2hjaGFydHM7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTXlDaGFydCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA4MCVcIj5cclxuICAgICAgICAgICAgPCEtLSA8ZGl2IFtuZzItaGlnaGNoYXJ0c109XCJjaGFydE9wdGlvbnNcIiBjbGFzcz1cImdyYXBoXCI+PC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgPGRpdiBbbmcyLWhpZ2hjaGFydHNdPVwiY2hhcnRCYXJcIiBjbGFzcz1cImdyYXBoXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlDaGFydCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgfVxyXG4gICAgLy9jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAvLyAgICBjaGFydDoge1xyXG4gICAgLy8gICAgICAgIHR5cGU6ICdwaWUnXHJcbiAgICAvLyAgICB9LFxyXG4gICAgLy8gICAgdGl0bGU6IHtcclxuICAgIC8vICAgICAgICB0ZXh0OiAnRnJ1aXQgQ29uc3VtcHRpb24nXHJcbiAgICAvLyAgICB9LFxyXG4gICAgLy8gICAgeEF4aXM6IHtcclxuICAgIC8vICAgICAgICBjYXRlZ29yaWVzOiBbJ0FwcGxlcycsICdCYW5hbmFzJywgJ09yYW5nZXMnXVxyXG4gICAgLy8gICAgfSxcclxuICAgIC8vICAgIHlBeGlzOiB7XHJcbiAgICAvLyAgICAgICAgdGl0bGU6IHtcclxuICAgIC8vICAgICAgICAgICAgdGV4dDogJ0ZydWl0IGVhdGVuJ1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0sXHJcbiAgICAvLyAgICBzZXJpZXM6IFt7XHJcbiAgICAvLyAgICAgICAgbmFtZTogJ0phbmUnLFxyXG4gICAgLy8gICAgICAgIGRhdGE6IFsxLCAwLCA0XVxyXG4gICAgLy8gICAgfSwge1xyXG4gICAgLy8gICAgICAgIG5hbWU6ICdKb2huJyxcclxuICAgIC8vICAgICAgICBkYXRhOiBbNSwgNywgM11cclxuICAgIC8vICAgIH1dXHJcbiAgICAvL307XHJcbiAgICBjaGFydEJhciA9IHtcclxuICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHhBeGlzOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRpdHM6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTkMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzcwNTcsIDY4NTgsIDY2NDMsIDY1NzAsIDYxMTUsIDEwNywgMzEsIDYzNSwgMjAzLCAyLCAyXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnT0snLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzU0MDQ3LCA1MjQ4NCwgNTA1OTEsIDQ5NDc5LCA0NjY3NywgMzMsIDE1NiwgOTQ3LCA0MDgsIDYsIDJdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdLTycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMTEzODgsIDExMTE1LCAxMDc0MiwgMTA3NTcsIDEwMjkwLCA5NzMsIDkxNCwgNDA1NCwgNzMyLCAzNCwgMl1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1ZBTElEJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs4ODM2LCA4NTA5LCA4MjU1LCA3NzYwLCA3NjIxLCA5NzMsIDkxNCwgNDA1NCwgNzMyLCAzNCwgMl1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NIRUNLJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsxMTUsIDE2MiwgMTUwLCAxODcsIDE3MiwgOTczLCA5MTQsIDQwNTQsIDczMiwgMzQsIDJdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdDT1InLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzEyNTY2LCAxMjExNiwgMTE0NDYsIDEwNzQ5LCAxMDQzOSwgOTczLCA5MTQsIDQwNTQsIDczMiwgMzQsIDJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcnRCYXIgPSB7XHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaWUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTkMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbNzA1NywgNjg1OCwgNjY0MywgNjU3MCwgNjExNSwgMTA3LCAzMSwgNjM1LCAyMDMsIDIsIDJdXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnT0snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbNTQwNDcsIDUyNDg0LCA1MDU5MSwgNDk0NzksIDQ2Njc3LCAzMywgMTU2LCA5NDcsIDQwOCwgNiwgMl1cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdLTycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFsxMTM4OCwgMTExMTUsIDEwNzQyLCAxMDc1NywgMTAyOTAsIDk3MywgOTE0LCA0MDU0LCA3MzIsIDM0LCAyXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1ZBTElEJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzg4MzYsIDg1MDksIDgyNTUsIDc3NjAsIDc2MjEsIDk3MywgOTE0LCA0MDU0LCA3MzIsIDM0LCAyXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NIRUNLJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzExNSwgMTYyLCAxNTAsIDE4NywgMTcyLCA5NzMsIDkxNCwgNDA1NCwgNzMyLCAzNCwgMl1cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDT1InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMTI1NjYsIDEyMTE2LCAxMTQ0NiwgMTA3NDksIDEwNDM5LCA5NzMsIDkxNCwgNDA1NCwgNzMyLCAzNCwgMl1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
