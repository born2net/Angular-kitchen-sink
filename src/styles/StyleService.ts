///<reference path="../../typings/app.d.ts"/>

import {Injectable} from "angular2/core";
import {LocalStorage} from "../services/LocalStorage";
import {StyleModel} from "../models/StyleModel";

@Injectable()
export class StyleService {
    private localStorage:LocalStorage;
    private styleModel:StyleModel;

    constructor() {
        this.model = new StyleModel();
        this.localStorage = new LocalStorage();

        let styleData = this.localStorage.getItem('style_data', {
            theme: 'lite',
            remember: true
        });
        this.model.remember = styleData.remember;
        this.model.theme = styleData.theme;

        if (this.model.remember == false)
            return;
         this.loadTheme(this.model.theme);
    }

    private loadTheme(styleName:string):void {

        switch (styleName) {
            case 'lite':
            {
                this.loadCss('style.css');
                break;
            }
            case 'dark':
            {
                this.loadCss('style_dark.css');
                break;
            }
            case 'polymer':
            {
                this.loadMaterial();
                break;
            }
        }
    }

    private loadMaterial() {

        // you can check manually if a module has downloaded using system.js
        //System.has(`${window.location.origin}/src/styles/material-design/js/material.min.js`)

        this.loadCss('src/styles/material-design/css/bootstrap-material-design.css');
        this.loadCss('src/styles/material-design/css/ripples.min.css');

        var a:Promise<any> = System.import('src/styles/material-design/js/material.min.js');
        var b:Promise<any> = System.import('src/styles/material-design/js/ripples.min.js');
        Promise.all([a, b]).then(function (e) {
            //todo: fix to apply on ngInit per component
            setInterval(function(){
                console.log('loading material');
                jQuery.material.init();
            },3000)
        })
    }

    private loadCss(url:string) {
        //jQuery('.customStyles').remove();
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.className = 'customStyles';
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    public onUpdate() {
        var self = this;
        setTimeout(e=> {
            self.localStorage.setItem('style_data', {
                theme: self.model.theme,
                remember: self.model.remember
            });
            this.loadTheme(self.model.theme);
            bootbox.alert('reload the application to see the full effect of the theme...');
        }, 10)
    }

    public get model():StyleModel {
        return this.styleModel;
    }

    public set model(styleModel:StyleModel) {
        this.styleModel = styleModel;
    }
}
