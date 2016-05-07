SystemJS.config({
    transpiler: "plugin-typescript",
    typescriptOptions: {
        "module": "commonjs",
        "defaultExtension": "ts",
        "emitDecoratorMetadata": true,
        "tsconfig": true,
        "sourceMap": true
    },
    packages: {
        "ng2Boilerplater": {
            "main": "ng2Boilerplater.js"
        },
        "ng2-bs3-modal/ng2-bs3-modal": {
            "main": "src/ng2-bs3-modal.ts",
            "defaultExtension": "ts",
            "meta": {
                "*.js": {
                    "loader": "ts"
                },
                "*.ts": {
                    "loader": "ts"
                }
            }
        },
        "npm:beeper@1.1.0": {
            "map": {}
        },
        "npm:builtin-modules@1.1.1": {
            "map": {
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:camelcase-keys@2.0.0": {
            "map": {
                "camelcase": "npm:camelcase@2.1.0",
                "map-obj": "npm:map-obj@1.0.1"
            }
        },
        "npm:chalk@1.1.1": {
            "map": {
                "ansi-styles": "npm:ansi-styles@2.1.0",
                "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
                "has-ansi": "npm:has-ansi@2.0.0",
                "strip-ansi": "npm:strip-ansi@3.0.0",
                "supports-color": "npm:supports-color@2.0.0"
            }
        },
        "npm:clone-stats@0.0.1": {
            "map": {}
        },
        "npm:clone@1.0.2": {
            "map": {}
        },
        "npm:core-js@1.2.6": {
            "map": {
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:dateformat@1.0.12": {
            "map": {
                "get-stdin": "npm:get-stdin@4.0.1",
                "meow": "npm:meow@3.7.0"
            }
        },
        "npm:decamelize@1.1.2": {
            "map": {
                "escape-string-regexp": "npm:escape-string-regexp@1.0.4"
            }
        },
        "npm:duplexer2@0.0.2": {
            "map": {
                "readable-stream": "npm:readable-stream@1.1.13"
            }
        },
        "npm:error-ex@1.3.0": {
            "map": {
                "is-arrayish": "npm:is-arrayish@0.2.1"
            }
        },
        "npm:fancy-log@1.2.0": {
            "map": {
                "chalk": "npm:chalk@1.1.1",
                "time-stamp": "npm:time-stamp@1.0.0"
            }
        },
        "npm:find-up@1.1.0": {
            "map": {
                "path-exists": "npm:path-exists@2.1.0",
                "pinkie-promise": "npm:pinkie-promise@2.0.0"
            }
        },
        "npm:get-stdin@4.0.1": {
            "map": {}
        },
        "npm:glogg@1.0.0": {
            "map": {
                "sparkles": "npm:sparkles@1.0.0"
            }
        },
        "npm:graceful-fs@4.1.3": {
            "map": {}
        },
        "npm:gulp-util@3.0.7": {
            "map": {
                "array-differ": "npm:array-differ@1.0.0",
                "array-uniq": "npm:array-uniq@1.0.2",
                "beeper": "npm:beeper@1.1.0",
                "chalk": "npm:chalk@1.1.1",
                "dateformat": "npm:dateformat@1.0.12",
                "fancy-log": "npm:fancy-log@1.2.0",
                "gulplog": "npm:gulplog@1.0.0",
                "has-gulplog": "npm:has-gulplog@0.1.0",
                "lodash._reescape": "npm:lodash._reescape@3.0.0",
                "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
                "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
                "lodash.template": "npm:lodash.template@3.6.2",
                "minimist": "npm:minimist@1.2.0",
                "multipipe": "npm:multipipe@0.1.2",
                "object-assign": "npm:object-assign@3.0.0",
                "replace-ext": "npm:replace-ext@0.0.1",
                "through2": "npm:through2@2.0.1",
                "vinyl": "npm:vinyl@0.5.3"
            }
        },
        "npm:gulplog@1.0.0": {
            "map": {
                "glogg": "npm:glogg@1.0.0"
            }
        },
        "npm:has-ansi@2.0.0": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:has-gulplog@0.1.0": {
            "map": {
                "sparkles": "npm:sparkles@1.0.0"
            }
        },
        "npm:hosted-git-info@2.1.4": {
            "map": {}
        },
        "npm:indent-string@2.1.0": {
            "map": {
                "repeating": "npm:repeating@2.0.0"
            }
        },
        "npm:is-builtin-module@1.0.0": {
            "map": {
                "builtin-modules": "npm:builtin-modules@1.1.1"
            }
        },
        "npm:is-finite@1.0.1": {
            "map": {
                "number-is-nan": "npm:number-is-nan@1.0.0"
            }
        },
        "npm:load-json-file@1.1.0": {
            "map": {
                "graceful-fs": "npm:graceful-fs@4.1.3",
                "parse-json": "npm:parse-json@2.2.0",
                "pify": "npm:pify@2.3.0",
                "pinkie-promise": "npm:pinkie-promise@2.0.0",
                "strip-bom": "npm:strip-bom@2.0.0"
            }
        },
        "npm:lodash._basetostring@3.0.1": {
            "map": {}
        },
        "npm:lodash.escape@3.2.0": {
            "map": {
                "lodash._root": "npm:lodash._root@3.0.0"
            }
        },
        "npm:lodash.keys@3.1.2": {
            "map": {
                "lodash._getnative": "npm:lodash._getnative@3.9.1",
                "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
                "lodash.isarray": "npm:lodash.isarray@3.0.4"
            }
        },
        "npm:lodash.template@3.6.2": {
            "map": {
                "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
                "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
                "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
                "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
                "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
                "lodash.escape": "npm:lodash.escape@3.2.0",
                "lodash.keys": "npm:lodash.keys@3.1.2",
                "lodash.restparam": "npm:lodash.restparam@3.6.1",
                "lodash.templatesettings": "npm:lodash.templatesettings@3.1.1"
            }
        },
        "npm:lodash.templatesettings@3.1.1": {
            "map": {
                "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
                "lodash.escape": "npm:lodash.escape@3.2.0"
            }
        },
        "npm:loud-rejection@1.2.1": {
            "map": {
                "array-find-index": "npm:array-find-index@1.0.1",
                "signal-exit": "npm:signal-exit@2.1.2"
            }
        },
        "npm:meow@3.7.0": {
            "map": {
                "camelcase-keys": "npm:camelcase-keys@2.0.0",
                "decamelize": "npm:decamelize@1.1.2",
                "loud-rejection": "npm:loud-rejection@1.2.1",
                "map-obj": "npm:map-obj@1.0.1",
                "minimist": "npm:minimist@1.2.0",
                "normalize-package-data": "npm:normalize-package-data@2.3.5",
                "object-assign": "npm:object-assign@4.0.1",
                "read-pkg-up": "npm:read-pkg-up@1.0.1",
                "redent": "npm:redent@1.0.0",
                "trim-newlines": "npm:trim-newlines@1.0.0"
            }
        },
        "npm:multipipe@0.1.2": {
            "map": {
                "duplexer2": "npm:duplexer2@0.0.2"
            }
        },
        "npm:normalize-package-data@2.3.5": {
            "map": {
                "hosted-git-info": "npm:hosted-git-info@2.1.4",
                "is-builtin-module": "npm:is-builtin-module@1.0.0",
                "semver": "npm:semver@5.1.0",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0",
                "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
            }
        },
        "npm:parse-json@2.2.0": {
            "map": {
                "error-ex": "npm:error-ex@1.3.0"
            }
        },
        "npm:path-exists@2.1.0": {
            "map": {
                "pinkie-promise": "npm:pinkie-promise@2.0.0"
            }
        },
        "npm:path-type@1.1.0": {
            "map": {
                "graceful-fs": "npm:graceful-fs@4.1.3",
                "pify": "npm:pify@2.3.0",
                "pinkie-promise": "npm:pinkie-promise@2.0.0"
            }
        },
        "npm:pify@2.3.0": {
            "map": {}
        },
        "npm:pinkie-promise@2.0.0": {
            "map": {
                "pinkie": "npm:pinkie@2.0.4"
            }
        },
        "npm:read-pkg-up@1.0.1": {
            "map": {
                "find-up": "npm:find-up@1.1.0",
                "read-pkg": "npm:read-pkg@1.1.0"
            }
        },
        "npm:read-pkg@1.1.0": {
            "map": {
                "load-json-file": "npm:load-json-file@1.1.0",
                "normalize-package-data": "npm:normalize-package-data@2.3.5",
                "path-type": "npm:path-type@1.1.0"
            }
        },
        "npm:readable-stream@1.1.13": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@0.0.1",
                "stream-browserify": "npm:stream-browserify@1.0.0",
                "string_decoder": "npm:string_decoder@0.10.31"
            }
        },
        "npm:redent@1.0.0": {
            "map": {
                "indent-string": "npm:indent-string@2.1.0",
                "strip-indent": "npm:strip-indent@1.0.1"
            }
        },
        "npm:repeating@2.0.0": {
            "map": {
                "is-finite": "npm:is-finite@1.0.1"
            }
        },
        "npm:replace-ext@0.0.1": {
            "map": {}
        },
        "npm:semver@5.1.0": {
            "map": {}
        },
        "npm:signal-exit@2.1.2": {
            "map": {
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:sparkles@1.0.0": {
            "map": {}
        },
        "npm:spdx-correct@1.0.2": {
            "map": {
                "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
            }
        },
        "npm:spdx-expression-parse@1.0.2": {
            "map": {
                "spdx-exceptions": "npm:spdx-exceptions@1.0.4",
                "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
            }
        },
        "npm:spdx-license-ids@1.2.0": {
            "map": {
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:stream-browserify@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@1.1.13"
            }
        },
        "npm:strip-ansi@3.0.0": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:strip-bom@2.0.0": {
            "map": {
                "is-utf8": "npm:is-utf8@0.2.1"
            }
        },
        "npm:strip-indent@1.0.1": {
            "map": {
                "get-stdin": "npm:get-stdin@4.0.1",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:supports-color@2.0.0": {
            "map": {}
        },
        "npm:through2@2.0.1": {
            "map": {
                "readable-stream": "npm:readable-stream@2.0.5",
                "xtend": "npm:xtend@4.0.1"
            }
        },
        "npm:validate-npm-package-license@3.0.1": {
            "map": {
                "spdx-correct": "npm:spdx-correct@1.0.2",
                "spdx-expression-parse": "npm:spdx-expression-parse@1.0.2"
            }
        },
        "npm:vinyl@0.5.3": {
            "map": {
                "clone": "npm:clone@1.0.2",
                "clone-stats": "npm:clone-stats@0.0.1",
                "replace-ext": "npm:replace-ext@0.0.1"
            }
        },
        "src": {
            "main": "App",
            "defaultExtension": "ts",
            "meta": {
                "*.js": {
                    "loader": "ts"
                },
                "*.ts": {
                    "loader": "ts"
                },
                "*.css": {
                    "loader": "css"
                }
            }
        }
    },
    meta: {
        "angular2/core.js": {
            "deps": []
        }
    },
    map: {
        "core-js": "npm:core-js@1.2.6",
        "@angular": "node_modules/@angular",
        "gulp-util": "npm:gulp-util@3.0.7",
        "ng2-bs3-modal/ng2-bs3-modal": "github:born2net/ng2-bs3-modal@0.1.0",
        "twbs/bootstrap": "github:twbs/bootstrap@3.3.6"
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "router": "npm:@angular/router@2.0.0-rc.1",
        "@angular/common": "npm:@angular/common@2.0.0-rc.1",
        "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
        "@angular/core": "npm:@angular/core@2.0.0-rc.1",
        "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1",
        "angular-common": "npm:@angular/common@2.0.0-rc.1",
        "angular-compiler": "npm:@angular/compiler@2.0.0-rc.1",
        "angular-core": "npm:@angular/core@2.0.0-rc.1",
        "angular-platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1",
        "angular-platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.1",
        "angular2": "npm:angular2@2.0.0-beta.17",
        "angular2-polyfill": "npm:angular2-polyfill@0.0.2",
        "angular2-redux-util": "npm:angular2-redux-util@0.5.51",
        "angular2-uuid": "npm:angular2-uuid@1.0.6",
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "bootbox": "npm:bootbox@4.4.0",
        "bootstrap": "github:twbs/bootstrap@3.3.6",
        "born2net/ng2-bs3-modal": "github:born2net/ng2-bs3-modal@0.1.0",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "clean-css": "npm:clean-css@3.4.10",
        "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
        "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
        "css": "github:systemjs/plugin-css@0.1.20",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "highcharts": "npm:highcharts@4.2.3",
        "http": "npm:@angular/http@2.0.0-rc.1",
        "https": "github:jspm/nodelibs-https@0.2.0-alpha",
        "immutable": "npm:immutable@3.7.6",
        "is-equal": "npm:is-equal@1.5.1",
        "jquery": "npm:jquery@2.2.1",
        "lodash": "npm:lodash@4.2.1",
        "module": "github:jspm/nodelibs-module@0.2.0-alpha",
        "moment": "npm:moment@2.11.2",
        "ng2-bootstrap": "npm:ng2-bootstrap@1.0.5",
        "os": "github:jspm/nodelibs-os@0.2.0-alpha",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.9",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "readline": "github:jspm/nodelibs-readline@0.2.0-alpha",
        "redux": "npm:redux@3.3.1",
        "redux-thunk": "npm:redux-thunk@1.0.3",
        "reflect-metadata": "npm:reflect-metadata@0.1.2",
        "reselect": "npm:reselect@2.1.0",
        "rxjs": "npm:rxjs@5.0.0-beta.6",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
        "text": "github:systemjs/plugin-text@0.0.4",
        "ts": "github:frankwallis/plugin-typescript@4.0.2",
        "typescript": "npm:typescript@1.8.7",
        "underscore": "npm:underscore@1.8.3",
        "url": "github:jspm/nodelibs-url@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
        "zone.js": "npm:zone.js@0.6.12"
    },
    packages: {
        '@angular/common': {main: 'index.js', defaultExtension: 'js'},
        '@angular/compiler': {main: 'index.js', defaultExtension: 'js'},
        '@angular/core': {main: 'index.js', defaultExtension: 'js'},
        '@angular/http': {main: 'index.js', defaultExtension: 'js'},
        '@angular/platform-browser': {main: 'index.js', defaultExtension: 'js'},
        '@angular/platform-browser-dynamic': {main: 'index.js', defaultExtension: 'js'},
        '@angular/router': {main: 'index.js', defaultExtension: 'js'},

        "github:frankwallis/plugin-typescript@4.0.2": {
            "map": {
                "typescript": "npm:typescript@1.8.7"
            }
        },
        "github:frankwallis/plugin-typescript@4.0.9": {
            "map": {
                "typescript": "npm:typescript@1.8.7"
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.6.0"
            }
        },
        "github:jspm/nodelibs-crypto@0.2.0-alpha": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "github:jspm/nodelibs-events@0.1.1": {
            "map": {
                "events": "npm:events@1.0.2"
            }
        },
        "github:jspm/nodelibs-os@0.2.0-alpha": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.1"
            }
        },
        "github:jspm/nodelibs-path@0.1.0": {
            "map": {
                "path-browserify": "npm:path-browserify@0.0.0"
            }
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "map": {
                "process": "npm:process@0.11.2"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
            "map": {
                "string_decoder-browserify": "npm:string_decoder@0.10.31"
            }
        },
        "github:jspm/nodelibs-url@0.2.0-alpha": {
            "map": {
                "url-browserify": "npm:url@0.11.0"
            }
        },
        "github:twbs/bootstrap@3.3.6": {
            "map": {
                "jquery": "github:components/jquery@2.2.1"
            }
        },
        "npm:@angular/common@2.0.0-rc.1": {
            "map": {
                "@angular/core": "npm:@angular/core@2.0.0-rc.1"
            }
        },
        "npm:@angular/compiler@2.0.0-rc.1": {
            "map": {
                "@angular/core": "npm:@angular/core@2.0.0-rc.1"
            }
        },
        "npm:@angular/core@2.0.0-rc.1": {
            "map": {
                "rxjs": "npm:rxjs@5.0.0-beta.6",
                "zone.js": "npm:zone.js@0.6.12"
            }
        },
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.1": {
            "map": {
                "@angular/common": "npm:@angular/common@2.0.0-rc.1",
                "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
                "@angular/core": "npm:@angular/core@2.0.0-rc.1",
                "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1"
            }
        },
        "npm:@angular/platform-browser@2.0.0-rc.1": {
            "map": {
                "@angular/common": "npm:@angular/common@2.0.0-rc.1",
                "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
                "@angular/core": "npm:@angular/core@2.0.0-rc.1"
            }
        },
        "npm:amdefine@1.0.0": {
            "map": {}
        },
        "npm:angular2-polyfill@0.0.2": {
            "map": {
                "angular": "npm:angular@1.5.0",
                "camelcase": "npm:camelcase@2.1.0",
                "dot-prop": "npm:dot-prop@2.4.0"
            }
        },
        "npm:angular2-redux-util@0.5.51": {
            "map": {
                "is-equal": "npm:is-equal@1.5.1",
                "object-path": "npm:object-path@0.9.2",
                "redux": "npm:redux@3.3.1"
            }
        },
        "npm:angular2@2.0.0-beta.17": {
            "map": {
                "reflect-metadata": "npm:reflect-metadata@0.1.2",
                "rxjs": "npm:rxjs@5.0.0-beta.6",
                "zone.js": "npm:zone.js@0.6.12"
            }
        },
        "npm:asn1.js@4.5.2": {
            "map": {
                "bn.js": "npm:bn.js@4.11.1",
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:bn.js@4.11.1": {
            "map": {}
        },
        "npm:bootbox@4.4.0": {
            "map": {}
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "buffer-xor": "npm:buffer-xor@1.0.3",
                "cipher-base": "npm:cipher-base@1.0.2",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "inherits": "npm:inherits@2.0.1",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "browserify-des": "npm:browserify-des@1.0.0",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.2",
                "des.js": "npm:des.js@1.0.0",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.1",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.1",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "elliptic": "npm:elliptic@6.2.3",
                "inherits": "npm:inherits@2.0.1",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:buffer-xor@1.0.3": {
            "map": {
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:buffer@4.6.0": {
            "map": {
                "base64-js": "npm:base64-js@1.1.2",
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0"
            }
        },
        "npm:cipher-base@1.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:clean-css@3.4.10": {
            "map": {
                "commander": "npm:commander@2.8.1",
                "source-map": "npm:source-map@0.4.4"
            }
        },
        "npm:commander@2.8.1": {
            "map": {
                "child_process": "github:jspm/nodelibs-child_process@0.1.0",
                "events": "github:jspm/nodelibs-events@0.1.1",
                "fs": "github:jspm/nodelibs-fs@0.1.2",
                "graceful-readlink": "npm:graceful-readlink@1.0.1",
                "path": "github:jspm/nodelibs-path@0.1.0",
                "process": "github:jspm/nodelibs-process@0.1.2"
            }
        },
        "npm:core-util-is@1.0.2": {
            "map": {}
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.1",
                "elliptic": "npm:elliptic@6.2.3"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "ripemd160": "npm:ripemd160@1.0.1",
                "sha.js": "npm:sha.js@2.4.5"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "browserify-sign": "npm:browserify-sign@4.0.0",
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "inherits": "npm:inherits@2.0.1",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:define-properties@1.1.2": {
            "map": {
                "foreach": "npm:foreach@2.0.5",
                "object-keys": "npm:object-keys@1.0.9"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "bn.js": "npm:bn.js@4.11.1",
                "miller-rabin": "npm:miller-rabin@4.0.0",
                "randombytes": "npm:randombytes@2.0.3",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:dot-prop@2.4.0": {
            "map": {
                "is-obj": "npm:is-obj@1.0.0"
            }
        },
        "npm:elliptic@6.2.3": {
            "map": {
                "bn.js": "npm:bn.js@4.11.1",
                "brorand": "npm:brorand@1.0.5",
                "hash.js": "npm:hash.js@1.0.3",
                "inherits": "npm:inherits@2.0.1",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:es-abstract@1.5.0": {
            "map": {
                "es-to-primitive": "npm:es-to-primitive@1.1.1",
                "function-bind": "npm:function-bind@1.1.0",
                "is-callable": "npm:is-callable@1.1.3",
                "is-regex": "npm:is-regex@1.0.3"
            }
        },
        "npm:es-to-primitive@1.1.1": {
            "map": {
                "is-callable": "npm:is-callable@1.1.3",
                "is-date-object": "npm:is-date-object@1.0.1",
                "is-symbol": "npm:is-symbol@1.0.1"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:graceful-readlink@1.0.1": {
            "map": {}
        },
        "npm:has@1.0.1": {
            "map": {
                "function-bind": "npm:function-bind@1.1.0"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:highcharts@4.2.3": {
            "map": {}
        },
        "npm:inherits@2.0.1": {
            "map": {}
        },
        "npm:is-arrow-function@2.0.3": {
            "map": {
                "is-callable": "npm:is-callable@1.1.3"
            }
        },
        "npm:is-equal@1.5.1": {
            "map": {
                "has": "npm:has@1.0.1",
                "is-arrow-function": "npm:is-arrow-function@2.0.3",
                "is-boolean-object": "npm:is-boolean-object@1.0.0",
                "is-callable": "npm:is-callable@1.1.3",
                "is-date-object": "npm:is-date-object@1.0.1",
                "is-generator-function": "npm:is-generator-function@1.0.3",
                "is-number-object": "npm:is-number-object@1.0.3",
                "is-regex": "npm:is-regex@1.0.3",
                "is-string": "npm:is-string@1.0.4",
                "is-symbol": "npm:is-symbol@1.0.1",
                "object.entries": "npm:object.entries@1.0.3"
            }
        },
        "npm:lodash@4.2.1": {
            "map": {}
        },
        "npm:loose-envify@1.1.0": {
            "map": {
                "js-tokens": "npm:js-tokens@1.0.2"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.1",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:moment@2.11.2": {
            "map": {}
        },
        "npm:ng2-bootstrap@1.0.5": {
            "map": {
                "angular2": "npm:angular2@2.0.0-beta.17",
                "moment": "npm:moment@2.11.2",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:object.entries@1.0.3": {
            "map": {
                "define-properties": "npm:define-properties@1.1.2",
                "es-abstract": "npm:es-abstract@1.5.0",
                "function-bind": "npm:function-bind@1.1.0",
                "has": "npm:has@1.0.1"
            }
        },
        "npm:parse-asn1@5.0.0": {
            "map": {
                "asn1.js": "npm:asn1.js@4.5.2",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:path-browserify@0.0.0": {
            "map": {}
        },
        "npm:pbkdf2@3.0.4": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
            }
        },
        "npm:process-nextick-args@1.0.6": {
            "map": {}
        },
        "npm:process@0.11.2": {
            "map": {}
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.1",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "parse-asn1": "npm:parse-asn1@5.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:punycode@1.3.2": {
            "map": {}
        },
        "npm:randombytes@2.0.3": {
            "map": {}
        },
        "npm:readable-stream@2.0.5": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@0.0.1",
                "process-nextick-args": "npm:process-nextick-args@1.0.6",
                "string_decoder": "npm:string_decoder@0.10.31",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "npm:redux@3.3.1": {
            "map": {
                "lodash": "npm:lodash@4.2.1",
                "lodash-es": "npm:lodash-es@4.6.1",
                "loose-envify": "npm:loose-envify@1.1.0"
            }
        },
        "npm:reflect-metadata@0.1.2": {
            "map": {}
        },
        "npm:ripemd160@1.0.1": {
            "map": {}
        },
        "npm:rxjs@5.0.0-beta.6": {
            "map": {}
        },
        "npm:sha.js@2.4.5": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:source-map@0.4.4": {
            "map": {
                "amdefine": "npm:amdefine@1.0.0"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.0.5"
            }
        },
        "npm:string_decoder@0.10.31": {
            "map": {}
        },
        "npm:url@0.11.0": {
            "map": {
                "punycode": "npm:punycode@1.3.2",
                "querystring": "npm:querystring@0.2.0"
            }
        },
        "npm:util-deprecate@1.0.2": {
            "map": {}
        },
        "npm:zone.js@0.6.12": {
            "map": {}
        },
        "npm:typescript@1.8.7": {
            "map": {}
        }
    }
});
