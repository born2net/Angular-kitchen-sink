import {CommBroker} from "../services/CommBroker";
import {Consts} from "../Conts";
export class RefreshTheme {
    constructor() {
        setTimeout(e=> {
            if (document['commBroker']) {
                document['commBroker'].getService(Consts.Services().StyleService).refreshTheme();
            }
        }, 50);
    }
}

// example below of doing class decoration, which we can't use because we need to inject
// in constructor as well, so we must extend...

//export function RefreshTheme(theme:string) {
//    return function <TFunction extends Function>(Target:TFunction):TFunction {
//        var newConstructor = function () {
//            Target.apply(this);
//            Object.freeze(this);
//        };
//        newConstructor.prototype = Object.create(Target.prototype);
//        newConstructor.prototype.constructor = Target;
//        return <any> newConstructor;
//    }
//}

