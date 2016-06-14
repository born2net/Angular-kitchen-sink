import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';

import {Logout} from "./Logout";

@Injectable()
export class LogoutDeactivate implements CanDeactivate<Logout> {
    canDeactivate(component: Logout): any {
        return component.canDeactivate();
    }
}
