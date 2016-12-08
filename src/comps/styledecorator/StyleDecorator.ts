import {
    Component
} from "@angular/core";

export function StyleDecorator(value: Object) {


    function toDash(str) {
        return str.replace(/([A-Z])/g, function ($1) {
            return "-" + $1.toLowerCase();
        });
    }

    var __ref__ = window['Reflect'], builtStyles = goInto("", value);

    function goInto(prefix, def: Object) {
        var queue = [];
        var result = (prefix && prefix !== "") ? prefix + " { " : "";
        for (var key in def) {
            if (typeof def[key] === "object") {
                queue.push({
                    key: key,
                    value: def[key]
                });
            } else {
                result += toDash(key) + ":" + def[key] + ";";
            }
        }
        result += (prefix && prefix !== "") ? "}" : "";
        if (queue && queue.length > 0) {
            for (var sub of queue) {
                result += goInto(prefix + (sub.key[0] === '&' ? sub.key.substr(1) : " " + sub.key), sub.value);
            }
        }
        return result;
    }

    function parseMeta(metaInformation) {
        for (var metadata of metaInformation) {
            if (metadata instanceof Component) {
                metadata.styles = [builtStyles];
            }
        }
    }

    return function (target) {
        var metaInformation = __ref__.getOwnMetadata('annotations', target);
        if (metaInformation) {
            parseMeta(metaInformation);
        }
    }
}
