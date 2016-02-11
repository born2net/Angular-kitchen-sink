var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var WikiService = (function () {
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
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], WikiService);
    return WikiService;
})();
exports.WikiService = WikiService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3dpa2lzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIldpa2lTZXJ2aWNlIiwiV2lraVNlcnZpY2UuY29uc3RydWN0b3IiLCJXaWtpU2VydmljZS5zZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFFckQ7SUFFSUEscUJBQW9CQSxLQUFZQTtRQUFaQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFPQTtJQUFHQSxDQUFDQTtJQUVwQ0QsNEJBQU1BLEdBQU5BLFVBQVFBLElBQVlBO1FBQ2hCRSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxzQkFBZUEsRUFBRUEsQ0FBQUE7UUFDbENBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLFlBQVlBLENBQUNBLENBQUNBO1FBQ25DQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMzQkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBO2FBQ1pBLEdBQUdBLENBQUNBLDJEQUEyREEsRUFBRUEsRUFBRUEsUUFBQUEsTUFBTUEsRUFBRUEsQ0FBQ0E7YUFDNUVBLFNBQVNBLEVBQUVBO2FBQ1hBLElBQUlBLENBQUNBLFVBQUNBLE9BQU9BLElBQUtBLE9BQUFBLE9BQU9BLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEVBQWpCQSxDQUFpQkEsQ0FBQ0EsQ0FBQ0E7SUFDOUNBLENBQUNBO0lBYkxGO1FBQUNBLGlCQUFVQSxFQUFFQTs7b0JBY1pBO0lBQURBLGtCQUFDQTtBQUFEQSxDQWRBLEFBY0NBLElBQUE7QUFiWSxtQkFBVyxjQWF2QixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL1dpa2lTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtVUkxTZWFyY2hQYXJhbXMsIEpzb25wfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpa2lTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbnA6IEpzb25wKSB7fVxyXG5cclxuICAgIHNlYXJjaCAodGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gICAgICAgIHNlYXJjaC5zZXQoJ2FjdGlvbicsICdvcGVuc2VhcmNoJyk7XHJcbiAgICAgICAgc2VhcmNoLnNldCgnc2VhcmNoJywgdGVybSk7XHJcbiAgICAgICAgc2VhcmNoLnNldCgnZm9ybWF0JywgJ2pzb24nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5qc29ucFxyXG4gICAgICAgICAgICAuZ2V0KCdodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHA/Y2FsbGJhY2s9SlNPTlBfQ0FMTEJBQ0snLCB7IHNlYXJjaCB9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkgLy8gb3B0aW9uYWwgdG8gY29udmVydCBPYnNlcnZhYmxlIHRvIFByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKHJlcXVlc3QpID0+IHJlcXVlc3QuanNvbigpWzFdKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
