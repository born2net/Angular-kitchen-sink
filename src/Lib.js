System.register(['@angular/core', "redux", 'redux-thunk', "angular2-redux-util"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, redux_1, redux_thunk_1, angular2_redux_util_1;
    var Lib;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (redux_thunk_1_1) {
                redux_thunk_1 = redux_thunk_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            }],
        execute: function() {
            Lib = (function () {
                function Lib() {
                }
                Lib.StoreFactory = function (reducerList) {
                    return function () {
                        var reducers = redux_1.combineReducers(reducerList);
                        var middlewareEnhancer = redux_1.applyMiddleware(redux_thunk_1.default);
                        var isDebug = window.devToolsExtension;
                        var applyDevTools = function () { return isDebug ? window.devToolsExtension() : function (f) { return f; }; };
                        var enhancers = redux_1.compose(middlewareEnhancer, applyDevTools());
                        var createStoreWithEnhancers = enhancers(redux_1.createStore);
                        var reduxAppStore = createStoreWithEnhancers(reducers);
                        return new angular2_redux_util_1.AppStore(reduxAppStore);
                    };
                };
                Lib.insertAt = function (immutable, item, index) {
                    var first = immutable.slice(0, index - 1).push(item);
                    var second = immutable.slice(index);
                    return first.conact(second);
                };
                Lib.LoadComponentAsync = function (name, path) {
                    return System.import(path).then(function (c) { return c[name]; });
                };
                Lib.log = function (msg) {
                    console.log(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") + ': ' + msg);
                };
                Lib.guid = function () {
                    function s4() {
                        return Math.floor((1 + Math.random()) * 0x10000)
                            .toString(16)
                            .substring(1);
                    }
                    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                        s4() + '-' + s4() + s4() + s4();
                };
                Lib.Xml2Json = function () {
                    var xmlToJSON = (function () {
                        this.version = "1.3";
                        var options = {
                            mergeCDATA: true,
                            grokAttr: true,
                            grokText: true,
                            normalize: true,
                            xmlns: true,
                            namespaceKey: '_ns',
                            textKey: '_text',
                            valueKey: '_value',
                            attrKey: '_attr',
                            cdataKey: '_cdata',
                            attrsAsObject: true,
                            stripAttrPrefix: true,
                            stripElemPrefix: true,
                            childrenAsArray: true
                        };
                        var prefixMatch = new RegExp('(?!xmlns)^.*:/');
                        var trimMatch = new RegExp('^\s+|\s+$g');
                        this.grokType = function (sValue) {
                            if (/^\s*$/.test(sValue)) {
                                return null;
                            }
                            if (/^(?:true|false)$/i.test(sValue)) {
                                return sValue.toLowerCase() === "true";
                            }
                            if (isFinite(sValue)) {
                                return parseFloat(sValue);
                            }
                            return sValue;
                        };
                        this.parseString = function (xmlString, opt) {
                            return this.parseXML(this.stringToXML(xmlString), opt);
                        };
                        this.parseXML = function (oXMLParent, opt) {
                            for (var key in opt) {
                                options[key] = opt[key];
                            }
                            var vResult = {}, nLength = 0, sCollectedTxt = "";
                            if (options.xmlns && oXMLParent.namespaceURI) {
                                vResult[options.namespaceKey] = oXMLParent.namespaceURI;
                            }
                            if (oXMLParent.attributes && oXMLParent.attributes.length > 0) {
                                var vAttribs = {};
                                for (nLength; nLength < oXMLParent.attributes.length; nLength++) {
                                    var oAttrib = oXMLParent.attributes.item(nLength);
                                    vContent = {};
                                    var attribName = '';
                                    if (options.stripAttrPrefix) {
                                        attribName = oAttrib.name.replace(prefixMatch, '');
                                    }
                                    else {
                                        attribName = oAttrib.name;
                                    }
                                    if (options.grokAttr) {
                                        vContent[options.valueKey] = this.grokType(oAttrib.value.replace(trimMatch, ''));
                                    }
                                    else {
                                        vContent[options.valueKey] = oAttrib.value.replace(trimMatch, '');
                                    }
                                    if (options.xmlns && oAttrib.namespaceURI) {
                                        vContent[options.namespaceKey] = oAttrib.namespaceURI;
                                    }
                                    if (options.attrsAsObject) {
                                        vAttribs[attribName] = vContent;
                                    }
                                    else {
                                        vResult[options.attrKey + attribName] = vContent;
                                    }
                                }
                                if (options.attrsAsObject) {
                                    vResult[options.attrKey] = vAttribs;
                                }
                                else {
                                }
                            }
                            if (oXMLParent.hasChildNodes()) {
                                for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
                                    oNode = oXMLParent.childNodes.item(nItem);
                                    if (oNode.nodeType === 4) {
                                        if (options.mergeCDATA) {
                                            sCollectedTxt += oNode.nodeValue;
                                        }
                                        else {
                                            if (vResult.hasOwnProperty(options.cdataKey)) {
                                                if (vResult[options.cdataKey].constructor !== Array) {
                                                    vResult[options.cdataKey] = [vResult[options.cdataKey]];
                                                }
                                                vResult[options.cdataKey].push(oNode.nodeValue);
                                            }
                                            else {
                                                if (options.childrenAsArray) {
                                                    vResult[options.cdataKey] = [];
                                                    vResult[options.cdataKey].push(oNode.nodeValue);
                                                }
                                                else {
                                                    vResult[options.cdataKey] = oNode.nodeValue;
                                                }
                                            }
                                        }
                                    }
                                    else if (oNode.nodeType === 3) {
                                        sCollectedTxt += oNode.nodeValue;
                                    }
                                    else if (oNode.nodeType === 1) {
                                        if (nLength === 0) {
                                            vResult = {};
                                        }
                                        if (options.stripElemPrefix) {
                                            sProp = oNode.nodeName.replace(prefixMatch, '');
                                        }
                                        else {
                                            sProp = oNode.nodeName;
                                        }
                                        vContent = xmlToJSON.parseXML(oNode);
                                        if (vResult.hasOwnProperty(sProp)) {
                                            if (vResult[sProp].constructor !== Array) {
                                                vResult[sProp] = [vResult[sProp]];
                                            }
                                            vResult[sProp].push(vContent);
                                        }
                                        else {
                                            if (options.childrenAsArray) {
                                                vResult[sProp] = [];
                                                vResult[sProp].push(vContent);
                                            }
                                            else {
                                                vResult[sProp] = vContent;
                                            }
                                            nLength++;
                                        }
                                    }
                                }
                            }
                            else if (!sCollectedTxt) {
                                if (options.childrenAsArray) {
                                    vResult[options.textKey] = [];
                                    vResult[options.textKey].push(null);
                                }
                                else {
                                    vResult[options.textKey] = null;
                                }
                            }
                            if (sCollectedTxt) {
                                if (options.grokText) {
                                    var value = this.grokType(sCollectedTxt.replace(trimMatch, ''));
                                    if (value !== null && value !== undefined) {
                                        vResult[options.textKey] = value;
                                    }
                                }
                                else if (options.normalize) {
                                    vResult[options.textKey] = sCollectedTxt.replace(trimMatch, '').replace(/\s+/g, " ");
                                }
                                else {
                                    vResult[options.textKey] = sCollectedTxt.replace(trimMatch, '');
                                }
                            }
                            return vResult;
                        };
                        this.xmlToString = function (xmlDoc) {
                            try {
                                var xmlString = xmlDoc.xml ? xmlDoc.xml : (new XMLSerializer()).serializeToString(xmlDoc);
                                return xmlString;
                            }
                            catch (err) {
                                return null;
                            }
                        };
                        this.stringToXML = function (xmlString) {
                            try {
                                var xmlDoc = null;
                                if (window.DOMParser) {
                                    var parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(xmlString, "text/xml");
                                    return xmlDoc;
                                }
                                else {
                                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                                    xmlDoc.async = false;
                                    xmlDoc.loadXML(xmlString);
                                    return xmlDoc;
                                }
                            }
                            catch (e) {
                                return null;
                            }
                        };
                        return this;
                    }).call({});
                    return xmlToJSON;
                };
                Lib.ReduxLoggerMiddleware = function (store) { return function (next) { return function (action) {
                    var result = next(action);
                    return result;
                }; }; };
                Lib = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Lib);
                return Lib;
            }());
            exports_1("Lib", Lib);
            if (!Object.assign) {
                Object.defineProperty(Object, "assign", {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: function (target) {
                        "use strict";
                        if (target === undefined || target === null) {
                            throw new TypeError("Cannot convert first argument to object");
                        }
                        var to = Object(target);
                        for (var i = 1; i < arguments.length; i++) {
                            var nextSource = arguments[i];
                            if (nextSource === undefined || nextSource === null) {
                                continue;
                            }
                            nextSource = Object(nextSource);
                            var keysArray = Object.keys(nextSource);
                            for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                                var nextKey = keysArray[nextIndex];
                                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                                if (desc !== undefined && desc.enumerable) {
                                    to[nextKey] = nextSource[nextKey];
                                }
                            }
                        }
                        return to;
                    }
                });
            }
        }
    }
});
//# sourceMappingURL=Lib.js.map