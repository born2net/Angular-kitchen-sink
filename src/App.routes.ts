// for routing examples see: http://plnkr.co/edit/TU73YA7kD7ZMyD8wEsUd?p=preview

import { Routes, RouterModule } from '@angular/router';
import {EntryPanel} from "./comps/entry/EntryPanel";
import {AppManager} from "./comps/appmanager/AppManager";
import {Welcome} from "./comps/welcome/Welcome";
import {App1} from "./comps/app1/App1";
import {App2} from "./comps/app2/App2";
import {App3} from "./comps/app3/App3";
import {Todos} from "./comps/app1/todos/Todos";
import {LoginPanel} from "./comps/entry/LoginPanel";
import {ForgotPass} from "./comps/entry/ForgotPass";
import {Digg} from "./comps/digg/Digg";
import {Help} from "./comps/app1/help/Help";
import {Logout} from "./comps/logout/Logout";
import {Settings} from "./comps/app1/settings/Settings";
import {LogoutDeactivate} from "./comps/logout/LogoutDeactivate";

const appRoutes:Routes = [
    {path: '', component: EntryPanel},
    {path: 'AppManager', component: AppManager},
    {path: 'Welcome', component: Welcome},
    {path: 'Login', component: EntryPanel},
    {path: 'Login/:id', component: LoginPanel},
    {path: 'ForgotPass', component: ForgotPass},
    {
        path: 'App1', component: App1,
        children: [
            {path: '', component: App1},
            {path: 'Todos', component: Todos},
            {path: 'Digg', component: Digg},
            {path: 'Settings', component: Settings},
            {path: 'Help', component: Help},
            {path: 'Logout', component: Logout, canDeactivate: [LogoutDeactivate]}
        ]
    },
    {path: 'App2', component: App2},
    {path: 'App3', component: App3},
    {
        path: 'EntryPanelNoId', component: EntryPanel,
        children: [
            {path: 'Another2', component: LoginPanel},
            {path: 'Another3', component: ForgotPass},
            {path: 'Login', component: LoginPanel}

        ]
    },
    {
        path: 'EntryPanel/:id', component: EntryPanel, children: [
        {path: '', component: AppManager},
        {path: ':id', component: AppManager}

    ]
    },
    {
        path: 'crisis-center', component: Welcome,
        children: [
            {path: '', component: AppManager},
            {path: ':id', component: AppManager}

        ]
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

// export const APP_ROUTER_PROVIDERS = [
//     provideRouter(routes, { enableTracing: false })
// ];
