// ref: http://blog.wolksoftware.com/decorators-reflection-javascript-typescript
// ref: https://medium.com/@NetanelBasal/javascript-make-your-code-cleaner-with-decorators-d34fc72af947#.fe9f2rfb8

export function timeout( milliseconds: number = 0 ) {

    return function( target, key, descriptor ) {

        var originalMethod = descriptor.value;

        descriptor.value = function (...args) {

            setTimeout(() => {
                originalMethod.apply(this, args);
            }, milliseconds);

        };

        return descriptor;
    }


}