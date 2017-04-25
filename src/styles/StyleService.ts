import {Injectable} from "@angular/core";
import {LocalStorage} from "../services/LocalStorage";
import {StyleModel} from "../models/StyleModel";
import {CommBroker} from "../services/CommBroker";
import {Consts} from "../Conts";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class StyleService {
    private localStorage:LocalStorage;
    private styleModel:StyleModel;

    constructor(private commBroker:CommBroker, public toastrService: ToastrService) {
        this.model = new StyleModel();
        this.localStorage = new LocalStorage();
        this.commBroker.setService(Consts.Services().StyleService, this);

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
        this.model.selectedTheme = styleName;
        switch (styleName) {
            case 'lite':
            {
                this.loadCss('../styles/style.css');
                break;
            }
            case 'dark':
            {
                this.loadCss('../styles/style_dark.css');
                break;
            }
        }
    }

    private loadCss(url:string) {
        if (url.indexOf('_') == -1)
            return;
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
            if (self.model.remember)
                this.toastrService.success('reload the application to see the full effect of the theme...');
        }, 10)
    }

    public get model():StyleModel {
        return this.styleModel;
    }

    public set model(styleModel:StyleModel) {
        this.styleModel = styleModel;
    }
}
