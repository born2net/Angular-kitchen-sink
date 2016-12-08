import {
    Injectable,
    ElementRef
} from "@angular/core";

let $: any = window["$"];

interface PositionDescription {
    horizontal: string;
    vertical: string;
}

@Injectable()
export class PositionService {

    private isStaticPositioned(nativeEl:any):any {
        return ($(nativeEl).css("position") || "static" ) === "static";
    }

    /**
     * Provides coordinates for the targetEl in relation to hostEl
     */
    public positionElements(
        hostEl: any,
        targetEl: any,
        positionStr: string = "top",
        bufferDistance: number = 0,
        appendToBody: any): {top: number, left: number} {
        let position = this.breakPositionString(positionStr),
            $hostEl = $(hostEl),
            $targetEl = $(targetEl),
            hostElPos = appendToBody ? $hostEl.offset() : $hostEl.position();

        let shiftWidth: {[key:string]: any} = {
            center: function () {
                return hostElPos.left + ($hostEl.width() / 2) - ($targetEl.innerWidth() / 2);
            },
            left: function () {
                return hostElPos.left - $targetEl.innerWidth() - bufferDistance;
            },
            right: function () {
                return hostElPos.left + $hostEl.width() + bufferDistance;
            }
        };

        let shiftHeight:{[key:string]: any} = {
            center: function ():number {
                return hostElPos.top + ($hostEl.height() / 2) - ($targetEl.innerHeight() / 2);
            },
            top: function ():number {
                return hostElPos.top - $targetEl.innerHeight() - bufferDistance;
            },
            bottom: function ():number {
                return hostElPos.top + $hostEl.height() + bufferDistance;
            }
        };

        return {
            top: shiftHeight[position.vertical](),
            left: shiftWidth[position.horizontal]()
        };
    }

    private breakPositionString (positionStr: string): PositionDescription {
        let positionStrParts = positionStr.split("-");

        if (positionStrParts.length > 1) {
            return {
                horizontal: positionStrParts[0],
                vertical: positionStrParts[1]
            };
        }
        else if (positionStr === "top" || positionStr === "bottom") {
            return {
                horizontal: "center",
                vertical: positionStr
            };
        }
        else if (positionStr === "left" || positionStr === "right") {
            return {
                horizontal: positionStr,
                vertical: "center"
            };
        }
        return {
            horizontal: "center",
            vertical: "center"
        };
    }
}