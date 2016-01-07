import {Injectable} from 'angular2/core';
import {URLSearchParams, Jsonp} from 'angular2/http';

@Injectable()
export class WikiService {
    constructor(private jsonp: Jsonp) {}

    search (term: string) {
        var search = new URLSearchParams()
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');
        return this.jsonp
            .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
            .toPromise() // optional to convert Observable to Promise
            .then((request) => request.json()[1]);
    }
}