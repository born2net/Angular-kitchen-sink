/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Tooltip} from './tooltip.directive';
import {TooltipContainer} from './tooltip-container.component';

/*Angular 2 Tooltip Example*/
@Component({
    selector: 'my-app',
    template:`

                    <h4 style="color: #e85c45">Angular 2 Tooltip Example</h4>
                    <p>
                    Angular 2 rating <a href="#" tooltipPlacement="left" tooltip="stars (left)!">stars</a> will allow
                    the <a href="#" tooltipPlacement="right" tooltip="visitors (right)!">visitors</a>
                    of your website to <a href="#" tooltipPlacement="bottom" tooltip="rate (bottom)!">rate</a>
                    a <a href="#" tooltipPopupDelay='1000' tooltip='document (delay = 1000)'>document</a>
                    , <a href="#" tooltipPlacement="top" tooltip="image (top)!"> image </a> or something else by clicking on the stars.
                    </p>

                    <h4 style="color: #e86f4a">Angular 2 (Form) Tooltip Example</h4>
                    <form role="form">
                      <div class="form-group">
                        <label>Tooltip on <b>Input</b>: </label>
                        <input type="text" value="Show the tooltip !"
                         tooltip="Please enter a value : ) (i'm a tooltip)"
                         tooltipPlacement="bottom"
                         class="form-control" />
                      </div>
                    </form>

             `,
    directives: [Tooltip, TooltipContainer, CORE_DIRECTIVES, FORM_DIRECTIVES],
    styles: [`
                /* Specify styling for tooltip contents */
                .tooltip.customClass .tooltip-inner {
                    color: #880000;
                    background-color: #ffff66;
                    box-shadow: 0 6px 12px rgba(0,0,0,.175);
                }
                /* Hide arrow */
                .tooltip.customClass .tooltip-arrow {
                    display: none;
                }
             `]
})
export class Angular2Tooltip {

}