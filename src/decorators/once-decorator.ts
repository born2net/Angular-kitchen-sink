import {Subscriber} from "rxjs";
export function Once(milliseconds: number = 0) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            var sub = originalMethod.apply(this, args);
            setTimeout(() => {
                if (sub instanceof Subscriber) {
                    sub.unsubscribe();
                } else if (sub instanceof Function) {
                    sub()
                } else if (sub === null) {
                } else {
                    throw new Error('@Once did not receive something to unsubscribe from, did you forget to return an Observable maybe?');
                }
            }, milliseconds);
        };
        return descriptor;
    }
}