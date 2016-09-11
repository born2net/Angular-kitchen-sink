/**
 *  reference: http://www.bennadel.com/blog/3141-styling-the-void-state-using-animations-in-angular-2-rc-6.htm
 **/

import { animate } from "@angular/core";
import { Component } from "@angular/core";
import { state } from "@angular/core";
import { style } from "@angular/core";
import { transition } from "@angular/core";
import { trigger } from "@angular/core";

@Component({
    selector: "AnimateBox",
    styles: [`
            my-app {
                display: block ;
            }
            
            a {
                color: red ;
                cursor: pointer ;
                text-decoration: underline ;
                user-select: none ;
                    -moz-user-select: none ;
                    -webkit-user-select: none ;
            }
            
            div.container {
                border: 1px solid #CCCCCC ;
                border-radius: 4px 4px 4px 4px ;
                height: 300px ;
                width: 500px ;
                position: relative ;
            }
            
            div.box {
                background-color: #262626 ;
                border-radius: 4px 4px 4px 4px ;
                color: #FFFFFF ;
                font-size: 20px ;
                height: 100px ;
                left: 50% ;
                line-height: 100px ;
                margin: -50px 0px 0px -50px ;
                position: absolute ;
                text-align: center ;
                top: 50% ;
                width: 100px ;
            }
    `],
    animations: [
        trigger(
            "boxAnimation",
            [
                // Even though the "void" state is not rendered, per-say, we can style
                // it. This way, when we transition to and from the "void" state,
                // Angular will know what CSS properties to animate.
                state(
                    "void",
                    style({
                        borderRadius: 50,
                        opacity: 0.0,
                        transform: "rotate( 900deg )"
                    })
                ),

                // CAUTION: The non-void state needs to be styled for the Web Animations
                // API ** polyfill **. When running in Chrome, which has native support
                // for the Web Animations API, you do NOT need this state() block. If you
                // attempt to omit this in Firefox, however, you get the following error:
                // --
                // Animation to or from an underlying value is not yet supported.
                // --
                state(
                    "*",
                    style({
                        borderRadius: 4,
                        opacity: 1.0,
                        transform: "rotate( 0deg )"
                    })
                ),

                // Now, when we transition to and from the "void" state, we don't have
                // to provide additional styles - we only need to provide the relevant
                // animation duration and timing functions.
                transition(
                    "void => * , * => void",
                    [
                        animate( "1000ms ease-in-out" )
                    ]
                )
            ] // End: boxAnimation.
        )
    ],
    template:
        `
		<p>
			<a (click)="removeBox()">Remove Box</a>
		</p>

		<div class="container">
			<div *ngIf="isShowingBox">
				<div @boxAnimation class="box">
					Box
				</div>

			</div>
		</div>
	`
})
export class AnimateBox {

    public isShowingBox: boolean;


    // I initialize the component.
    constructor() {

        this.isShowingBox = true;

    }


    // ---
    // PUBLIC METHODS.
    // ---


    // I remove the box from the view-rendering; then, several seconds later, add it
    // back so that it can be removed again.
    public removeBox() : void {

        this.isShowingBox = false;

        // In a few seconds, reset the view.
        setTimeout(
            () : void => {

                this.isShowingBox = true;

            },
            2000
        );

    }

}