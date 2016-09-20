System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var WikiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            WikiService = (function () {
                function WikiService(jsonp) {
                    this.jsonp = jsonp;
                }
                WikiService.prototype.search = function (term) {
                    var search = new http_1.URLSearchParams();
                    search.set('action', 'opensearch');
                    search.set('search', term);
                    search.set('format', 'json');
                    return this.jsonp
                        .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search: search })
                        .toPromise()
                        .then(function (request) { return request.json()[1]; });
                };
                WikiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Jsonp !== 'undefined' && http_1.Jsonp) === 'function' && _a) || Object])
                ], WikiService);
                return WikiService;
                var _a;
            }());
            exports_1("WikiService", WikiService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1dpa2lTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQ0kscUJBQW9CLEtBQVk7b0JBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztnQkFBRyxDQUFDO2dCQUVwQyw0QkFBTSxHQUFOLFVBQVEsSUFBWTtvQkFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUE7b0JBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSzt5QkFDWixHQUFHLENBQUMsMkRBQTJELEVBQUUsRUFBRSxRQUFBLE1BQU0sRUFBRSxDQUFDO3lCQUM1RSxTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBYkw7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBY2Isa0JBQUM7O1lBQUQsQ0FiQSxBQWFDLElBQUE7WUFiRCxxQ0FhQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL1dpa2lTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtVUkxTZWFyY2hQYXJhbXMsIEpzb25wfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpa2lTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbnA6IEpzb25wKSB7fVxyXG5cclxuICAgIHNlYXJjaCAodGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gICAgICAgIHNlYXJjaC5zZXQoJ2FjdGlvbicsICdvcGVuc2VhcmNoJyk7XHJcbiAgICAgICAgc2VhcmNoLnNldCgnc2VhcmNoJywgdGVybSk7XHJcbiAgICAgICAgc2VhcmNoLnNldCgnZm9ybWF0JywgJ2pzb24nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5qc29ucFxyXG4gICAgICAgICAgICAuZ2V0KCdodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHA/Y2FsbGJhY2s9SlNPTlBfQ0FMTEJBQ0snLCB7IHNlYXJjaCB9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkgLy8gb3B0aW9uYWwgdG8gY29udmVydCBPYnNlcnZhYmxlIHRvIFByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKHJlcXVlc3QpID0+IHJlcXVlc3QuanNvbigpWzFdKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
