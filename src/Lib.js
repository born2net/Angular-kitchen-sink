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
                Lib.DevMode = function () {
                    if (window.location.href.indexOf('localhost') > -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
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

//# sourceMappingURL=data:application/json;base64,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QVEsQ0FBQzs0QkFDYixDQUFDOzRCQUNELFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBRWhDLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ3hDLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUM7Z0NBQzNFLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDbkMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztnQ0FDaEUsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQ0FDeEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQ0FDdEMsQ0FBQzs0QkFDTCxDQUFDO3dCQUNMLENBQUM7d0JBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDZCxDQUFDO2lCQUNKLENBQUMsQ0FBQztZQUNQLENBQUMiLCJmaWxlIjoiTGliLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbW1vbiBMaWJyYXJ5ICoqL1xyXG5cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2V9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHtBcHBTdG9yZX0gZnJvbSBcImFuZ3VsYXIyLXJlZHV4LXV0aWxcIjtcclxuaW1wb3J0IHtMb2dnZXJNaWRkbGV3YXJlfSBmcm9tIFwiYW5ndWxhcjItcmVkdXgtdXRpbFwiO1xyXG5cclxuLy9pbXBvcnQgKiBhcyB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGliIHtcclxuXHJcbiAgICBzdGF0aWMgU3RvcmVGYWN0b3J5KHJlZHVjZXJMaXN0Ok9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJMaXN0KTtcclxuICAgICAgICAgICAgLy9jb25zdCBtaWRkbGV3YXJlRW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUoPGFueT50aHVua01pZGRsZXdhcmUsIExvZ2dlck1pZGRsZXdhcmUpOyAvLyB0byBlbmFibGUgbG9nZ2VyXHJcbiAgICAgICAgICAgIGNvbnN0IG1pZGRsZXdhcmVFbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSg8YW55PnRodW5rTWlkZGxld2FyZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRGVidWcgPSB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb247XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcGx5RGV2VG9vbHMgPSAoKSA9PiBpc0RlYnVnID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGY7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuaGFuY2VycyA9IGNvbXBvc2UobWlkZGxld2FyZUVuaGFuY2VyLCBhcHBseURldlRvb2xzKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhFbmhhbmNlcnMgPSBlbmhhbmNlcnMoY3JlYXRlU3RvcmUpO1xyXG4gICAgICAgICAgICBjb25zdCByZWR1eEFwcFN0b3JlID0gY3JlYXRlU3RvcmVXaXRoRW5oYW5jZXJzKHJlZHVjZXJzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcHBTdG9yZShyZWR1eEFwcFN0b3JlKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBEZXZNb2RlKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2xvY2FsaG9zdCcpID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5zZXJ0QXQoaW1tdXRhYmxlLCBpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIGxldCBmaXJzdCA9IGltbXV0YWJsZS5zbGljZSgwLCBpbmRleCAtIDEpLnB1c2goaXRlbSlcclxuICAgICAgICBsZXQgc2Vjb25kID0gaW1tdXRhYmxlLnNsaWNlKGluZGV4KVxyXG4gICAgICAgIHJldHVybiBmaXJzdC5jb25hY3Qoc2Vjb25kKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgTG9hZENvbXBvbmVudEFzeW5jKG5hbWU6c3RyaW5nLCBwYXRoOnN0cmluZykge1xyXG5cclxuICAgICAgICByZXR1cm4gU3lzdGVtLmltcG9ydChwYXRoKS50aGVuKGMgPT4gY1tuYW1lXSk7XHJcblxyXG4gICAgICAgIC8vIGpzcG0gYnVuZGxlIHNyYy9jb21wcy9hcHAxL0FwcDEuanMgLi9kaXN0L3B1YmxpYy9tYWluLWJ1bmRsZS5qcyAtLXNraXAtc291cmNlLW1hcHMgLS1pbmplY3RcclxuXHJcbiAgICAgICAgLy8gYnVuZGxlczoge1xyXG4gICAgICAgIC8vICAgICBcIm1haW4tYnVuZGxlXCI6IFtcclxuICAgICAgICAvLyAgICAgICAgIFwiZGlzdC9wdWJsaWMvQXBwMVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJtYWluLWJ1bmRsZS9BcHAxXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImRpc3QvcHVibGljL0FwcDEudHNcIixcclxuICAgICAgICAvLyAgICAgICAgIFwiL2Rpc3QvcHVibGljL0FwcDFcIixcclxuICAgICAgICAvLyAgICAgICAgIFwiQXBwMVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJwdWJsaWMvQXBwMVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJkaXN0L3B1YmxpYy9BcHAxXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcInNyYy9jb21wcy9hcHAxL0FwcDEuanNcIlxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gU3lzdGVtLmltcG9ydCgnL2Rpc3QvcHVibGljL291dC5qcycpXHJcbiAgICAgICAgLy8gICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gICAgICAgIGFsZXJ0KCdwcm9iIGxvYWRpbmcgb3V0LmpzICcgKyBlKTtcclxuICAgICAgICAvLyAgICB9KS50aGVuKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gICAgICAgIGFsZXJ0KGUpO1xyXG4gICAgICAgIC8vICAgICAgICBhbGVydChlW25hbWVdKTtcclxuICAgICAgICAvLyAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgIC8vICAgICAgICByZXR1cm4gU3lzdGVtLmltcG9ydCgnQXBwMScpLnRoZW4oYyA9PiBjW25hbWVdKTtcclxuICAgICAgICAvLyAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9nKG1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkucmVwbGFjZSgvLiooXFxkezJ9OlxcZHsyfTpcXGR7Mn0pLiovLCBcIiQxXCIpICsgJzogJyArIG1zZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGd1aWQoKTpzdHJpbmcge1xyXG4gICAgICAgIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXHJcbiAgICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFJlZHV4TG9nZ2VyTWlkZGxld2FyZSA9IHN0b3JlID0+IG5leHQgPT4gYWN0aW9uID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc3BhdGNoaW5nXCIsIGFjdGlvbi50eXBlKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJuZXh0IHN0YXRlXCIsIHN0b3JlLmdldFN0YXRlKCkpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIFhtbDJKc29uKCkge1xyXG4gICAgICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL21ldGF0cmliYWwveG1sVG9KU09OXHJcbiAgICAgICAgdmFyIHhtbFRvSlNPTiA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjEuM1wiO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7IC8vIHNldCB1cCB0aGUgZGVmYXVsdCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBtZXJnZUNEQVRBOiB0cnVlLCAvLyBleHRyYWN0IGNkYXRhIGFuZCBtZXJnZSB3aXRoIHRleHRcclxuICAgICAgICAgICAgICAgIGdyb2tBdHRyOiB0cnVlLCAvLyBjb252ZXJ0IHRydXRoeSBhdHRyaWJ1dGVzIHRvIGJvb2xlYW4sIGV0Y1xyXG4gICAgICAgICAgICAgICAgZ3Jva1RleHQ6IHRydWUsIC8vIGNvbnZlcnQgdHJ1dGh5IHRleHQvYXR0ciB0byBib29sZWFuLCBldGNcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZTogdHJ1ZSwgLy8gY29sbGFwc2UgbXVsdGlwbGUgc3BhY2VzIHRvIHNpbmdsZSBzcGFjZVxyXG4gICAgICAgICAgICAgICAgeG1sbnM6IHRydWUsIC8vIGluY2x1ZGUgbmFtZXNwYWNlcyBhcyBhdHRyaWJ1dGUgaW4gb3V0cHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2VLZXk6ICdfbnMnLCAvLyB0YWcgbmFtZSBmb3IgbmFtZXNwYWNlIG9iamVjdHNcclxuICAgICAgICAgICAgICAgIHRleHRLZXk6ICdfdGV4dCcsIC8vIHRhZyBuYW1lIGZvciB0ZXh0IG5vZGVzXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUtleTogJ192YWx1ZScsIC8vIHRhZyBuYW1lIGZvciBhdHRyaWJ1dGUgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBhdHRyS2V5OiAnX2F0dHInLCAvLyB0YWcgZm9yIGF0dHIgZ3JvdXBzXHJcbiAgICAgICAgICAgICAgICBjZGF0YUtleTogJ19jZGF0YScsIC8vIHRhZyBmb3IgY2RhdGEgbm9kZXMgKGlnbm9yZWQgaWYgbWVyZ2VDREFUQSBpcyB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYXR0cnNBc09iamVjdDogdHJ1ZSwgLy8gaWYgZmFsc2UsIGtleSBpcyB1c2VkIGFzIHByZWZpeCB0byBuYW1lLCBzZXQgcHJlZml4IHRvICcnIHRvIG1lcmdlIGNoaWxkcmVuIGFuZCBhdHRycy5cclxuICAgICAgICAgICAgICAgIHN0cmlwQXR0clByZWZpeDogdHJ1ZSwgLy8gcmVtb3ZlIG5hbWVzcGFjZSBwcmVmaXhlcyBmcm9tIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgICAgIHN0cmlwRWxlbVByZWZpeDogdHJ1ZSwgLy8gZm9yIGVsZW1lbnRzIG9mIHNhbWUgbmFtZSBpbiBkaWZmIG5hbWVzcGFjZXMsIHlvdSBjYW4gZW5hYmxlIG5hbWVzcGFjZXMgYW5kIGFjY2VzcyB0aGUgbnNrZXkgcHJvcGVydHlcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuQXNBcnJheTogdHJ1ZSAvLyBmb3JjZSBjaGlsZHJlbiBpbnRvIGFycmF5c1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIHByZWZpeE1hdGNoOmFueSA9IG5ldyBSZWdFeHAoJyg/IXhtbG5zKV4uKjovJyk7XHJcbiAgICAgICAgICAgIHZhciB0cmltTWF0Y2g6YW55ID0gbmV3IFJlZ0V4cCgnXlxccyt8XFxzKyRnJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyb2tUeXBlID0gZnVuY3Rpb24gKHNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKC9eXFxzKiQvLnRlc3Qoc1ZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKC9eKD86dHJ1ZXxmYWxzZSkkL2kudGVzdChzVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0Zpbml0ZShzVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzVmFsdWU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlU3RyaW5nID0gZnVuY3Rpb24gKHhtbFN0cmluZywgb3B0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVhNTCh0aGlzLnN0cmluZ1RvWE1MKHhtbFN0cmluZyksIG9wdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VYTUwgPSBmdW5jdGlvbiAob1hNTFBhcmVudCwgb3B0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6ZSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb3B0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1trZXldID0gb3B0W2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZSZXN1bHQgPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICBuTGVuZ3RoID0gMCxcclxuICAgICAgICAgICAgICAgICAgICBzQ29sbGVjdGVkVHh0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBwYXJzZSBuYW1lc3BhY2UgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnhtbG5zICYmIG9YTUxQYXJlbnQubmFtZXNwYWNlVVJJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdlJlc3VsdFtvcHRpb25zLm5hbWVzcGFjZUtleV0gPSBvWE1MUGFyZW50Lm5hbWVzcGFjZVVSSTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBwYXJzZSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBhdHRyaWJ1dGVzIHByb3BlcnR5IGluc3RlYWQgb2YgaGFzQXR0cmlidXRlcyBtZXRob2QgdG8gc3VwcG9ydCBvbGRlciBicm93c2Vyc1xyXG4gICAgICAgICAgICAgICAgaWYgKG9YTUxQYXJlbnQuYXR0cmlidXRlcyAmJiBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2QXR0cmlicyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKG5MZW5ndGg7IG5MZW5ndGggPCBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBuTGVuZ3RoKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9BdHRyaWIgPSBvWE1MUGFyZW50LmF0dHJpYnV0ZXMuaXRlbShuTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdkNvbnRlbnQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYk5hbWUgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnN0cmlwQXR0clByZWZpeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmliTmFtZSA9IG9BdHRyaWIubmFtZS5yZXBsYWNlKHByZWZpeE1hdGNoLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmliTmFtZSA9IG9BdHRyaWIubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZ3Jva0F0dHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZDb250ZW50W29wdGlvbnMudmFsdWVLZXldID0gdGhpcy5ncm9rVHlwZShvQXR0cmliLnZhbHVlLnJlcGxhY2UodHJpbU1hdGNoLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdkNvbnRlbnRbb3B0aW9ucy52YWx1ZUtleV0gPSBvQXR0cmliLnZhbHVlLnJlcGxhY2UodHJpbU1hdGNoLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnhtbG5zICYmIG9BdHRyaWIubmFtZXNwYWNlVVJJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Q29udGVudFtvcHRpb25zLm5hbWVzcGFjZUtleV0gPSBvQXR0cmliLm5hbWVzcGFjZVVSSTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXR0cnNBc09iamVjdCkgeyAvLyBhdHRyaWJ1dGVzIHdpdGggc2FtZSBsb2NhbCBuYW1lIG11c3QgZW5hYmxlIHByZWZpeGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2QXR0cmlic1thdHRyaWJOYW1lXSA9IHZDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdlJlc3VsdFtvcHRpb25zLmF0dHJLZXkgKyBhdHRyaWJOYW1lXSA9IHZDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hdHRyc0FzT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZSZXN1bHRbb3B0aW9ucy5hdHRyS2V5XSA9IHZBdHRyaWJzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciB0aGUgY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIGlmIChvWE1MUGFyZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG9Ob2RlLCBzUHJvcCwgdkNvbnRlbnQsIG5JdGVtID0gMDsgbkl0ZW0gPCBvWE1MUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBuSXRlbSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9Ob2RlID0gb1hNTFBhcmVudC5jaGlsZE5vZGVzLml0ZW0obkl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9Ob2RlLm5vZGVUeXBlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5tZXJnZUNEQVRBKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc0NvbGxlY3RlZFR4dCArPSBvTm9kZS5ub2RlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2UmVzdWx0Lmhhc093blByb3BlcnR5KG9wdGlvbnMuY2RhdGFLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2UmVzdWx0W29wdGlvbnMuY2RhdGFLZXldLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdlJlc3VsdFtvcHRpb25zLmNkYXRhS2V5XSA9IFt2UmVzdWx0W29wdGlvbnMuY2RhdGFLZXldXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2UmVzdWx0W29wdGlvbnMuY2RhdGFLZXldLnB1c2gob05vZGUubm9kZVZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2hpbGRyZW5Bc0FycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2UmVzdWx0W29wdGlvbnMuY2RhdGFLZXldID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2UmVzdWx0W29wdGlvbnMuY2RhdGFLZXldLnB1c2gob05vZGUubm9kZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZSZXN1bHRbb3B0aW9ucy5jZGF0YUtleV0gPSBvTm9kZS5ub2RlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLyogbm9kZVR5cGUgaXMgXCJDREFUQVNlY3Rpb25cIiAoNCkgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob05vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNDb2xsZWN0ZWRUeHQgKz0gb05vZGUubm9kZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IC8qIG5vZGVUeXBlIGlzIFwiVGV4dFwiICgzKSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvTm9kZS5ub2RlVHlwZSA9PT0gMSkgeyAvKiBub2RlVHlwZSBpcyBcIkVsZW1lbnRcIiAoMSkgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobkxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZSZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBub2RlTmFtZSB0byBzdXBwb3J0IGJyb3dzZXIgKElFKSBpbXBsZW1lbnRhdGlvbiB3aXRoIG5vICdsb2NhbE5hbWUnIHByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zdHJpcEVsZW1QcmVmaXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzUHJvcCA9IG9Ob2RlLm5vZGVOYW1lLnJlcGxhY2UocHJlZml4TWF0Y2gsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc1Byb3AgPSBvTm9kZS5ub2RlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Q29udGVudCA9IHhtbFRvSlNPTi5wYXJzZVhNTChvTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZSZXN1bHQuaGFzT3duUHJvcGVydHkoc1Byb3ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZSZXN1bHRbc1Byb3BdLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2UmVzdWx0W3NQcm9wXSA9IFt2UmVzdWx0W3NQcm9wXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZSZXN1bHRbc1Byb3BdLnB1c2godkNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2hpbGRyZW5Bc0FycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZSZXN1bHRbc1Byb3BdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZSZXN1bHRbc1Byb3BdLnB1c2godkNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZSZXN1bHRbc1Byb3BdID0gdkNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5MZW5ndGgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNDb2xsZWN0ZWRUeHQpIHsgLy8gbm8gY2hpbGRyZW4gYW5kIG5vIHRleHQsIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2hpbGRyZW5Bc0FycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZSZXN1bHRbb3B0aW9ucy50ZXh0S2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2UmVzdWx0W29wdGlvbnMudGV4dEtleV0ucHVzaChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2UmVzdWx0W29wdGlvbnMudGV4dEtleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc0NvbGxlY3RlZFR4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmdyb2tUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ3Jva1R5cGUoc0NvbGxlY3RlZFR4dC5yZXBsYWNlKHRyaW1NYXRjaCwgJycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZSZXN1bHRbb3B0aW9ucy50ZXh0S2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm5vcm1hbGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2UmVzdWx0W29wdGlvbnMudGV4dEtleV0gPSBzQ29sbGVjdGVkVHh0LnJlcGxhY2UodHJpbU1hdGNoLCAnJykucmVwbGFjZSgvXFxzKy9nLCBcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdlJlc3VsdFtvcHRpb25zLnRleHRLZXldID0gc0NvbGxlY3RlZFR4dC5yZXBsYWNlKHRyaW1NYXRjaCwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdlJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgeG1sRG9jdW1lbnQgdG8gYSBzdHJpbmdcclxuICAgICAgICAgICAgLy8gUmV0dXJucyBudWxsIG9uIGZhaWx1cmVcclxuICAgICAgICAgICAgdGhpcy54bWxUb1N0cmluZyA9IGZ1bmN0aW9uICh4bWxEb2MpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhtbFN0cmluZyA9IHhtbERvYy54bWwgPyB4bWxEb2MueG1sIDogKG5ldyBYTUxTZXJpYWxpemVyKCkpLnNlcmlhbGl6ZVRvU3RyaW5nKHhtbERvYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhtbFN0cmluZztcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIFhNTCBOb2RlIFN0cnVjdHVyZVxyXG4gICAgICAgICAgICAvLyBSZXR1cm5zIG51bGwgb24gZmFpbHVyZVxyXG4gICAgICAgICAgICB0aGlzLnN0cmluZ1RvWE1MID0gZnVuY3Rpb24gKHhtbFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeG1sRG9jID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5ET01QYXJzZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCBcInRleHQveG1sXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhtbERvYztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxEb2MgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbERvYy5hc3luYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxEb2MubG9hZFhNTCh4bWxTdHJpbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhtbERvYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0pLmNhbGwoe30pO1xyXG4gICAgICAgIHJldHVybiB4bWxUb0pTT047XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbi8vIHBvbHlmaWxsIGZvciBPYmplY3QuYXNzaWduIChub3QgcGFydCBvZiBUUyB5ZXQpXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ25cclxuaWYgKCFPYmplY3QuYXNzaWduKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LCBcImFzc2lnblwiLCB7XHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQgfHwgdGFyZ2V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRTb3VyY2UgPT09IHVuZGVmaW5lZCB8fCBuZXh0U291cmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXh0U291cmNlID0gT2JqZWN0KG5leHRTb3VyY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhuZXh0U291cmNlKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG5leHRJbmRleCA9IDAsIGxlbiA9IGtleXNBcnJheS5sZW5ndGg7IG5leHRJbmRleCA8IGxlbjsgbmV4dEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dEtleSA9IGtleXNBcnJheVtuZXh0SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLCBuZXh0S2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzYyAhPT0gdW5kZWZpbmVkICYmIGRlc2MuZW51bWVyYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0bztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
