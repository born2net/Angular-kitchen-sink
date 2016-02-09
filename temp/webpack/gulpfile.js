var gulp = require('gulp');
var git = require('gulp-git');
var express = require('express');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var tslint = require('gulp-tslint');
var typedoc = require("gulp-typedoc");
var tsc = require('gulp-typescript');
var superstatic = require('superstatic');
var shell = require("gulp-shell");
var commentSwap = require('gulp-comment-swap');
var Rsync = require('rsync');
var opn = require('opn');
var typescript = require('gulp-typescript');
var tsProject = typescript.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');


var testReporter = function (output, file, options) {
    // file is a reference to the vinyl File object
    console.log("Found " + output.length + " errors in " + file.path);
    // options is a reference to the reporter options, e.g. options.emitError
};


/** Typescript configuration **/
var Config = (function () {
    function gulpConfig() {
        this.source = './src/';
        this.sourceApp = this.source + 'src/';
        this.tsOutputPath = this.source + '/js';
        this.allTypeScript = this.sourceApp + '/**/*.ts';
        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
    }

    return gulpConfig;
})();
var config = new Config();


/** create distribution system.js bundle.js which is hosted by src/public/index_sys_bundle.html **/
gulp.task('systemjs_bundle', function (done) {
    runSequence('x_systemjs_swap', 'x_sleep', 'x_systemjs_swap2', 'x_sleep', 'x_systemjs_swap3', 'x_sleep', 'x_build-ts', 'x_systemjs_bundler', 'x_systemjs_server_bundled', done);
});

/** launch the systemjs development server, files are kept raw **/
gulp.task('systemjs_development', function (done) {
    // prev version
    // runSequence('x_systemjs_swap', 'x_build-ts', 'x_systemjs_server_no_bundle', done);
    runSequence('x_systemjs_swap', 'x_server_systemjs', done);
});

/** launch webpack dev server and related utilities, used in development **/
gulp.task('webpack_development', function (done) {
    runSequence('x_webpack_swap', 'x_webpack_memory', done);
});

/** launch webpack dev server and related utilities, used in development **/
gulp.task('webpack_startup', function (done) {
    runSequence('x_webpack_swap', 'x_webpack_server_mem', 'x_webpack_memory', done);
});

/** create the final webpack distribution directory and open server to view result **/
gulp.task('webpack_bundle', function (done) {
    runSequence('x_webpack_swap', 'x_rimraf', 'x_webpack_dist', 'x_webpack_server', done);
});

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

/**  watch changed files **/
gulp.task('x_watch', function () {
    console.log('watching source files');
    gulp.watch("./src/**").on('change', browserSync.reload);
    gulp.watch("*.css").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

/** execute a hard reset on git head to latest **/
gulp.task('x_gitReset', function () {
    git.exec({args: '-c core.quotepath=false reset --hard HEAD --'}, function (err, stdout) {
        if (err) throw err;
    });
});

/** execute a git pull **/
gulp.task('x_gitPull', function () {
    git.exec({args: '-c core.quotepath=false pull --progress --no-stat -v --progress origin master'}, function (err, stdout) {
        if (err) throw err;
    });
});

/** Transpile TypeScript files **/
gulp.task('x_build-ts', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src'));
});

/** server to load webpack distribution project dir **/
gulp.task('x_webpack_server', ['x_watch'], function () {
    server = express();
    server.use(express.static('./dist'));
    server.listen(8003);
    browserSync({
        port: 8080,
        proxy: 'localhost:8003',
        reloadDelay: '5000'
    });
});

/** server to load webpack from memory **/
gulp.task('x_webpack_server_mem', ['x_watch'], function () {
    server = express();
    server.use(express.static('./'));
    server.listen(8003);
    browserSync({
        open: false,
        port: 8080,
        proxy: 'localhost:8003',
        reloadDelay: '5000'
    });
    opn('http://localhost:8085');
});

/**
 * Wait 1/2 a sec
 */
gulp.task('x_sleep', function (done) {
    setTimeout(function () {
        done();
    }, 500)
});

/**
 * Remove dir
 */
gulp.task("x_rimraf",
    shell.task(["rimraf dist"])
);

/**Remove comments to enable and disable specific features per packaging platform **/
gulp.task('x_webpack_swap', function (done) {
    return done();
    gulp.src('./src/**/*.ts')
        .pipe(commentSwap(new RegExp('/\\*systemjs\\*/'), new RegExp('/\\*webpack\\*/'))).on('error', handleError)
        .pipe(gulp.dest('./src'));
    done()
});
gulp.task('x_systemjs_swap', function (done) {
    return done();
    gulp.src('./src/**/*.ts')
        .pipe(commentSwap(new RegExp('/\\*webpack\\*/'), new RegExp('/\\*systemjs\\*/'))).on('error', handleError)
        .pipe(gulp.dest('./src'));
    done()
});
gulp.task('x_systemjs_swap2', function (done) {
    return done();
    gulp.src('./src/**/*.ts')
        .pipe(commentSwap(new RegExp('/\\*systemjs2\\*/'), new RegExp('/\\*systemjs\\*/'))).on('error', handleError)
        .pipe(gulp.dest('./src'));
    done()
});
gulp.task('x_systemjs_swap3', function (done) {
    return done();
    gulp.src('./src/**/*.ts')
        .pipe(commentSwap(new RegExp('/\\*webpack\\*/'), new RegExp('/\\*systemjs3\\*/'))).on('error', handleError)
        .pipe(gulp.dest('./src'));
    done()
});

/**  Generate project documentation **/
gulp.task("x_gendocs", function () {
    return gulp
        .src(["./src/*.ts"])
        .pipe(typedoc({
            module: "system",
            target: "es5",
            theme: "default",
            experimentalDecorators: true,
            includeDeclarations: false,
            out: "docs",
            name: "ng2Boilerplate",
            version: true
        }))
});

/** Bundle project to a single bundle.js file which is loaded via src/public/index_sys_bundle.html **/
gulp.task("x_systemjs_bundler",
    shell.task(["jspm bundle-sfx src/App.js ./src/public/bundle.js  --skip-source-maps"])
);

/** *** Dangerous, this will wipe your current source and sync with GitHub **/
gulp.task('z_force gitsync', function (done) {
    var c = 8;
    console.log('Starting in ' + c + '  seconds');
    var handler = setInterval(function () {
        c--;
        console.log('syncing in ---> ' + c);
        if (c == 0) {
            clearInterval(handler);
            console.log('sync');
            runSequence('x_gitReset', 'x_gitPull', done);
        }
    }, 1000)
});

/**  launch the webpack dev server in memory  **/
gulp.task("x_webpack_memory",
    shell.task(["webpack-dev-server --nolazy --debug_mem --inline --progress --colors --display-error-details --display-cached --port=8085 --watch"])
);

/** webpack file packer for distribution  **/
gulp.task("x_webpack_dist",
    shell.task(["webpack --webpack-build --progress --profile --colors --display-error-details --display-cached"])
);


/** launch the systemjs server (no files are bundled, used for development mode) **/
gulp.task('x_systemjs_server_no_bundle', function () {
    server = express();
    server.use(express.static('./'));
    server.listen(8003);
    browserSync({
        open: false,
        port: 8080,
        proxy: 'localhost:8003',
        reloadDelay: '5000'
    });
    opn('http://localhost:8080/src/public/index_sys.html');
});

/** launch the systemjs server to view the bundled final output  **/
gulp.task('x_systemjs_server_bundled', function () {
    server = express();
    server.use(express.static('./'));
    server.listen(8003);
    browserSync({
        open: false,
        port: 8080,
        proxy: 'localhost:8003',
        reloadDelay: '5000'
    });
    opn('http://localhost:8080/src/public/index_sys_bundle.html');
});

/** upload files to remote server for distribution **/
gulp.task('yield_rsync', function () {
    var rsync = Rsync.build({
        source: '/cygdrive/c/msweb/ng2Boilerplate/dist',
        destination: 'Sean@digitalsignage.com:/var/www/sites/javascriptninja.io/ng2/htdocs/',
        exclude: ['*.bat', '*.iml', '.gitignore', '.git', '.idea/']
    });
    rsync.set('progress');
    rsync.flags('avzp');
    console.log('running the command ' + rsync.command());
    rsync.output(
        function (data) {
            console.log('sync: ' + data);
        }, function (data) {
            console.log('sync: ' + data);
        }
    );
    rsync.execute(function (error, stdout, stderr) {
        console.log('completed ' + error + ' ' + stdout + ' ' + stderr)
    });
});

/**handle Gulp errors **/
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}


/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
// gulp.task('gen-ts-refs', function () {
//     var target = gulp.src(config.appTypeScriptReferences);
//     var sources = gulp.src([config.allTypeScript], {read: false});
//     return target.pipe(inject(sources, {
//         starttag: '//{',
//         endtag: '//}',
//         transform: function (filepath) {
//             return '/// <reference path="../..' + filepath + '" />';
//         }
//     })).pipe(gulp.dest(config.typings));
// });

/**
 * Lint all custom TypeScript files.
 */
gulp.task('x_ts-lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('verbose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('x_ts-compile', function () {
    var sourceTsFiles = [config.allTypeScript, //path to typescript files
        config.libraryTypeScriptDefinitions]; //reference to library .d.ts files

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject, undefined, testReporter));

    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('x_clean-ts', function (cb) {
    var typeScriptGenFiles = [
        config.tsOutputPath + '/**/*.js',    // path to all JS files auto gen'd by editor
        config.tsOutputPath + '/**/*.js.map', // path to all sourcemap files auto gen'd by editor
        '!' + config.tsOutputPath + '/lib'
    ];

    // delete the files
    del(typeScriptGenFiles, cb);
});

gulp.task('x_watch2', function () {
    gulp.watch([config.allTypeScript], ['x_ts-compile']);
});

gulp.task('x_server_systemjs', ['x_ts-compile', 'x_watch2'], function () {
    process.stdout.write('Starting browserSync and superstatic...\n');
    browserSync({
        port: 8003,
        open: false,
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'info',
        logSnippet: true,
        logPrefix: 'log:',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: './',
            directory: true,
            middleware: superstatic({debug: false})
        }
    });
    opn('http://localhost:8003/src/public/index_sys.html')
});

// disable default
//gulp.task('default', ['x_ts-lint', 'x_ts-compile']);