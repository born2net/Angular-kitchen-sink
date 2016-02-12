System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "module": "commonjs",
    "emitDecoratorMetadata": true,
    "tsconfig": true,
    "sourceMap": true
  },
  paths: {
    "src/*": "src/*",
    "rxjs/*": "node_modules/rxjs/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "ng2-bs3-modal/dist/ng2-bs3-modal": {
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

  map: {
    "angular2": "npm:angular2@2.0.0-beta.6",
    "angular2-polyfill": "npm:angular2-polyfill@0.0.2",
    "angular2-redux-util": "npm:angular2-redux-util@0.5.38",
    "angular2-uuid": "npm:angular2-uuid@1.0.6",
    "bootbox": "npm:bootbox@4.4.0",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "born2net/ng2-bs3-modal": "github:born2net/ng2-bs3-modal@0.1.0",
    "clean-css": "npm:clean-css@3.4.9",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "gulp-util": "npm:gulp-util@3.0.7",
    "highcharts": "npm:highcharts@4.2.2",
    "immutable": "npm:immutable@3.7.6",
    "is-equal": "npm:is-equal@1.4.2",
    "jquery": "npm:jquery@2.2.0",
    "lodash": "npm:lodash@4.2.1",
    "moment": "npm:moment@2.11.2",
    "ng2-bootstrap": "npm:ng2-bootstrap@1.0.3",
    "ng2-bs3-modal/dist/ng2-bs3-modal": "github:born2net/ng2-bs3-modal@0.1.0",
    "plugin-typescript": "github:frankwallis/plugin-typescript@2.5.6",
    "redux": "npm:redux@3.2.1",
    "redux-thunk": "npm:redux-thunk@1.0.3",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "reselect": "npm:reselect@2.0.3",
    "rxjs": "npm:rxjs@5.0.0-beta.0",
    "text": "github:systemjs/plugin-text@0.0.4",
    "ts": "github:frankwallis/plugin-typescript@2.6.0",
    "twbs/bootstrap": "github:twbs/bootstrap@3.3.6",
    "typescript": "npm:typescript@1.8.0",
    "underscore": "npm:underscore@1.8.3",
    "zone.js": "npm:zone.js@0.5.14",
    "github:frankwallis/plugin-typescript@2.5.6": {
      "typescript": "npm:typescript@1.7.5"
    },
    "github:frankwallis/plugin-typescript@2.6.0": {
      "typescript": "npm:typescript@1.7.5"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular2-polyfill@0.0.2": {
      "angular": "npm:angular@1.5.0",
      "camelcase": "npm:camelcase@2.1.0",
      "dot-prop": "npm:dot-prop@2.2.0"
    },
    "npm:angular2-redux-util@0.5.38": {
      "is-equal": "npm:is-equal@1.4.2",
      "object-path": "npm:object-path@0.9.2",
      "redux": "npm:redux@3.2.1"
    },
    "npm:angular2@2.0.0-beta.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "es6-promise": "npm:es6-promise@3.0.2",
      "es6-shim": "npm:es6-shim@0.33.13",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "reflect-metadata": "npm:reflect-metadata@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.0",
      "zone.js": "npm:zone.js@0.5.14"
    },
    "npm:asn1.js@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:beeper@1.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.10.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:bootbox@4.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:builtin-modules@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:camelcase-keys@2.0.0": {
      "camelcase": "npm:camelcase@2.1.0",
      "map-obj": "npm:map-obj@1.0.1"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:clone-stats@0.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:dateformat@1.0.12": {
      "get-stdin": "npm:get-stdin@4.0.1",
      "meow": "npm:meow@3.7.0"
    },
    "npm:decamelize@1.1.2": {
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4"
    },
    "npm:define-properties@1.1.2": {
      "foreach": "npm:foreach@2.0.5",
      "object-keys": "npm:object-keys@1.0.9"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.10.3",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:error-ex@1.3.0": {
      "is-arrayish": "npm:is-arrayish@0.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:es-abstract@1.5.0": {
      "es-to-primitive": "npm:es-to-primitive@1.1.1",
      "function-bind": "npm:function-bind@1.0.2",
      "is-callable": "npm:is-callable@1.1.2",
      "is-regex": "npm:is-regex@1.0.3"
    },
    "npm:es-to-primitive@1.1.1": {
      "is-callable": "npm:is-callable@1.1.2",
      "is-date-object": "npm:is-date-object@1.0.1",
      "is-symbol": "npm:is-symbol@1.0.1"
    },
    "npm:es6-promise@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-shim@0.33.13": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fancy-log@1.2.0": {
      "chalk": "npm:chalk@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "time-stamp": "npm:time-stamp@1.0.0"
    },
    "npm:find-up@1.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@2.1.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:glogg@1.0.0": {
      "sparkles": "npm:sparkles@1.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:gulp-util@3.0.7": {
      "array-differ": "npm:array-differ@1.0.0",
      "array-uniq": "npm:array-uniq@1.0.2",
      "beeper": "npm:beeper@1.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
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
      "process": "github:jspm/nodelibs-process@0.1.2",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@2.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl": "npm:vinyl@0.5.3"
    },
    "npm:gulplog@1.0.0": {
      "glogg": "npm:glogg@1.0.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-gulplog@0.1.0": {
      "sparkles": "npm:sparkles@1.0.0"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.0.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:highcharts@4.2.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hosted-git-info@2.1.4": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:indent-string@2.1.0": {
      "repeating": "npm:repeating@2.0.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-arrow-function@2.0.3": {
      "is-callable": "npm:is-callable@1.1.2"
    },
    "npm:is-builtin-module@1.0.0": {
      "builtin-modules": "npm:builtin-modules@1.1.1"
    },
    "npm:is-equal@1.4.2": {
      "has": "npm:has@1.0.1",
      "is-arrow-function": "npm:is-arrow-function@2.0.3",
      "is-boolean-object": "npm:is-boolean-object@1.0.0",
      "is-callable": "npm:is-callable@1.1.2",
      "is-date-object": "npm:is-date-object@1.0.1",
      "is-generator-function": "npm:is-generator-function@1.0.3",
      "is-number-object": "npm:is-number-object@1.0.3",
      "is-regex": "npm:is-regex@1.0.3",
      "is-string": "npm:is-string@1.0.4",
      "is-symbol": "npm:is-symbol@1.0.1",
      "object.entries": "npm:object.entries@1.0.3"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:load-json-file@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "parse-json": "npm:parse-json@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-bom": "npm:strip-bom@2.0.0"
    },
    "npm:lodash._basetostring@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.escape@3.2.0": {
      "lodash._root": "npm:lodash._root@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.template@3.6.2": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.2.0",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.restparam": "npm:lodash.restparam@3.6.1",
      "lodash.templatesettings": "npm:lodash.templatesettings@3.1.1"
    },
    "npm:lodash.templatesettings@3.1.1": {
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.2.0"
    },
    "npm:lodash@4.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:loud-rejection@1.2.1": {
      "array-find-index": "npm:array-find-index@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@2.1.2"
    },
    "npm:meow@3.7.0": {
      "camelcase-keys": "npm:camelcase-keys@2.0.0",
      "decamelize": "npm:decamelize@1.1.2",
      "loud-rejection": "npm:loud-rejection@1.2.1",
      "map-obj": "npm:map-obj@1.0.1",
      "minimist": "npm:minimist@1.2.0",
      "normalize-package-data": "npm:normalize-package-data@2.3.5",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "read-pkg-up": "npm:read-pkg-up@1.0.1",
      "redent": "npm:redent@1.0.0",
      "trim-newlines": "npm:trim-newlines@1.0.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:moment@2.11.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:multipipe@0.1.2": {
      "duplexer2": "npm:duplexer2@0.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:ng2-bootstrap@1.0.3": {
      "angular2": "npm:angular2@2.0.0-beta.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "moment": "npm:moment@2.11.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:normalize-package-data@2.3.5": {
      "hosted-git-info": "npm:hosted-git-info@2.1.4",
      "is-builtin-module": "npm:is-builtin-module@1.0.0",
      "semver": "npm:semver@5.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
    },
    "npm:object.entries@1.0.3": {
      "define-properties": "npm:define-properties@1.1.2",
      "es-abstract": "npm:es-abstract@1.5.0",
      "function-bind": "npm:function-bind@1.0.2",
      "has": "npm:has@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.4.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-json@2.2.0": {
      "error-ex": "npm:error-ex@1.3.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-exists@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:path-type@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pify@2.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pinkie-promise@2.0.0": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:read-pkg-up@1.0.1": {
      "find-up": "npm:find-up@1.1.0",
      "read-pkg": "npm:read-pkg@1.1.0"
    },
    "npm:read-pkg@1.1.0": {
      "load-json-file": "npm:load-json-file@1.1.0",
      "normalize-package-data": "npm:normalize-package-data@2.3.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-type": "npm:path-type@1.1.0"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:redent@1.0.0": {
      "indent-string": "npm:indent-string@2.1.0",
      "strip-indent": "npm:strip-indent@1.0.1"
    },
    "npm:redux@3.2.1": {
      "lodash": "npm:lodash@4.2.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:reflect-metadata@0.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:repeating@2.0.0": {
      "is-finite": "npm:is-finite@1.0.1"
    },
    "npm:replace-ext@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rxjs@5.0.0-beta.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@5.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:signal-exit@2.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sparkles@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:spdx-correct@1.0.2": {
      "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
    },
    "npm:spdx-expression-parse@1.0.2": {
      "spdx-exceptions": "npm:spdx-exceptions@1.0.4",
      "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
    },
    "npm:spdx-license-ids@1.2.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:strip-bom@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-utf8": "npm:is-utf8@0.2.1"
    },
    "npm:strip-indent@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through2@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:validate-npm-package-license@3.0.1": {
      "spdx-correct": "npm:spdx-correct@1.0.2",
      "spdx-expression-parse": "npm:spdx-expression-parse@1.0.2"
    },
    "npm:vinyl@0.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone": "npm:clone@1.0.2",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:zone.js@0.5.14": {
      "es6-promise": "npm:es6-promise@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
