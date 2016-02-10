/** Common Library **/

import {Injectable} from 'angular2/core';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import * as thunkMiddleware from 'redux-thunk';
import {AppStore} from "angular2-redux-util";

import {LoggerMiddleware} from "angular2-redux-util";

@Injectable()
export class Lib {

    static StoreFactory(reducerList:Object) {
        return () => {
            const reducers = combineReducers(reducerList);
            //const middlewareEnhancer = applyMiddleware(<any>thunkMiddleware, LoggerMiddleware); // to enable logger
            const middlewareEnhancer = applyMiddleware(<any>thunkMiddleware);
            const isDebug = window.devToolsExtension;
            const applyDevTools = () => isDebug ? window.devToolsExtension() : f => f;
            const enhancers = compose(middlewareEnhancer, applyDevTools());
            const createStoreWithEnhancers = enhancers(createStore);
            const reduxAppStore = createStoreWithEnhancers(reducers);
            return new AppStore(reduxAppStore);
        };
    }

    static LoadComponentAsync(name:string, path:string) {

        return System.import(path).then(c => c[name]);

        //return System.import('/dist/public/out.js')
        //    .catch(function (e) {
        //        alert('prob loading out.js ' + e);
        //    }).then(function (e) {
        //        alert(e);
        //        alert(e[name]);
        //        alert(JSON.stringify(e));
        //        return System.import('App1').then(c => c[name]);
        //    });
    }

    static log(msg) {
        console.log(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") + ': ' + msg);
    }

    static guid():string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    static ReduxLoggerMiddleware = store => next => action => {
        // console.log("dispatching", action.type);
        let result = next(action);
        //console.log("next state", store.getState());
        return result
    };

    static Xml2Json() {
        //https://github.com/metatribal/xmlToJSON
        var xmlToJSON = (function () {

            this.version = "1.3";

            var options = { // set up the default options
                mergeCDATA: true, // extract cdata and merge with text
                grokAttr: true, // convert truthy attributes to boolean, etc
                grokText: true, // convert truthy text/attr to boolean, etc
                normalize: true, // collapse multiple spaces to single space
                xmlns: true, // include namespaces as attribute in output
                namespaceKey: '_ns', // tag name for namespace objects
                textKey: '_text', // tag name for text nodes
                valueKey: '_value', // tag name for attribute values
                attrKey: '_attr', // tag for attr groups
                cdataKey: '_cdata', // tag for cdata nodes (ignored if mergeCDATA is true)
                attrsAsObject: true, // if false, key is used as prefix to name, set prefix to '' to merge children and attrs.
                stripAttrPrefix: true, // remove namespace prefixes from attributes
                stripElemPrefix: true, // for elements of same name in diff namespaces, you can enable namespaces and access the nskey property
                childrenAsArray: true // force children into arrays
            };

            var prefixMatch:any = new RegExp('(?!xmlns)^.*:/');
            var trimMatch:any = new RegExp('^\s+|\s+$g');

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
            }

            this.parseXML = function (oXMLParent, opt) {

                // initialize options
                for (var key in opt) {
                    options[key] = opt[key];
                }

                var vResult = {},
                    nLength = 0,
                    sCollectedTxt = "";

                // parse namespace information
                if (options.xmlns && oXMLParent.namespaceURI) {
                    vResult[options.namespaceKey] = oXMLParent.namespaceURI;
                }

                // parse attributes
                // using attributes property instead of hasAttributes method to support older browsers
                if (oXMLParent.attributes && oXMLParent.attributes.length > 0) {
                    var vAttribs = {};

                    for (nLength; nLength < oXMLParent.attributes.length; nLength++) {
                        var oAttrib = oXMLParent.attributes.item(nLength);
                        vContent = {};
                        var attribName = '';

                        if (options.stripAttrPrefix) {
                            attribName = oAttrib.name.replace(prefixMatch, '');

                        } else {
                            attribName = oAttrib.name;
                        }

                        if (options.grokAttr) {
                            vContent[options.valueKey] = this.grokType(oAttrib.value.replace(trimMatch, ''));
                        } else {
                            vContent[options.valueKey] = oAttrib.value.replace(trimMatch, '');
                        }

                        if (options.xmlns && oAttrib.namespaceURI) {
                            vContent[options.namespaceKey] = oAttrib.namespaceURI;
                        }

                        if (options.attrsAsObject) { // attributes with same local name must enable prefixes
                            vAttribs[attribName] = vContent;
                        } else {
                            vResult[options.attrKey + attribName] = vContent;
                        }
                    }

                    if (options.attrsAsObject) {
                        vResult[options.attrKey] = vAttribs;
                    } else {
                    }
                }

                // iterate over the children
                if (oXMLParent.hasChildNodes()) {
                    for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
                        oNode = oXMLParent.childNodes.item(nItem);

                        if (oNode.nodeType === 4) {
                            if (options.mergeCDATA) {
                                sCollectedTxt += oNode.nodeValue;
                            } else {
                                if (vResult.hasOwnProperty(options.cdataKey)) {
                                    if (vResult[options.cdataKey].constructor !== Array) {
                                        vResult[options.cdataKey] = [vResult[options.cdataKey]];
                                    }
                                    vResult[options.cdataKey].push(oNode.nodeValue);

                                } else {
                                    if (options.childrenAsArray) {
                                        vResult[options.cdataKey] = [];
                                        vResult[options.cdataKey].push(oNode.nodeValue);
                                    } else {
                                        vResult[options.cdataKey] = oNode.nodeValue;
                                    }
                                }
                            }
                        } /* nodeType is "CDATASection" (4) */
                        else if (oNode.nodeType === 3) {
                            sCollectedTxt += oNode.nodeValue;
                        } /* nodeType is "Text" (3) */
                        else if (oNode.nodeType === 1) { /* nodeType is "Element" (1) */

                            if (nLength === 0) {
                                vResult = {};
                            }

                            // using nodeName to support browser (IE) implementation with no 'localName' property
                            if (options.stripElemPrefix) {
                                sProp = oNode.nodeName.replace(prefixMatch, '');
                            } else {
                                sProp = oNode.nodeName;
                            }

                            vContent = xmlToJSON.parseXML(oNode);

                            if (vResult.hasOwnProperty(sProp)) {
                                if (vResult[sProp].constructor !== Array) {
                                    vResult[sProp] = [vResult[sProp]];
                                }
                                vResult[sProp].push(vContent);

                            } else {
                                if (options.childrenAsArray) {
                                    vResult[sProp] = [];
                                    vResult[sProp].push(vContent);
                                } else {
                                    vResult[sProp] = vContent;
                                }
                                nLength++;
                            }
                        }
                    }
                } else if (!sCollectedTxt) { // no children and no text, return null
                    if (options.childrenAsArray) {
                        vResult[options.textKey] = [];
                        vResult[options.textKey].push(null);
                    } else {
                        vResult[options.textKey] = null;
                    }
                }

                if (sCollectedTxt) {
                    if (options.grokText) {
                        var value = this.grokType(sCollectedTxt.replace(trimMatch, ''));
                        if (value !== null && value !== undefined) {
                            vResult[options.textKey] = value;
                        }
                    } else if (options.normalize) {
                        vResult[options.textKey] = sCollectedTxt.replace(trimMatch, '').replace(/\s+/g, " ");
                    } else {
                        vResult[options.textKey] = sCollectedTxt.replace(trimMatch, '');
                    }
                }

                return vResult;
            }


            // Convert xmlDocument to a string
            // Returns null on failure
            this.xmlToString = function (xmlDoc) {
                try {
                    var xmlString = xmlDoc.xml ? xmlDoc.xml : (new XMLSerializer()).serializeToString(xmlDoc);
                    return xmlString;
                } catch (err) {
                    return null;
                }
            }

            // Convert a string to XML Node Structure
            // Returns null on failure
            this.stringToXML = function (xmlString) {
                try {
                    var xmlDoc = null;

                    if (window.DOMParser) {

                        var parser = new DOMParser();
                        xmlDoc = parser.parseFromString(xmlString, "text/xml");

                        return xmlDoc;
                    } else {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(xmlString);

                        return xmlDoc;
                    }
                } catch (e) {
                    return null;
                }
            }

            return this;
        }).call({});
        return xmlToJSON;
    }


}


/* tslint:disable */
// polyfill for Object.assign (not part of TS yet)
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
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