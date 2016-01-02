import {Injectable} from 'angular2/core';

@Injectable()
export class LocalStorage {

    getItem(key: string, defaultValue?: any): any {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            return defaultValue;
        }
    }

    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

}