var gulp = require('gulp');
var git = require('gulp-git');
var express = require('express');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var tslint = require('gulp-tslint');
var typedoc = require("gulp-typedoc");
var superstatic = require('superstatic');
var shell = require("gulp-shell");
var Rsync = require('rsync');
var opn = require('opn');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var rimraf = require("gulp-rimraf");
var replace = require("gulp-replace");
var insert = require("gulp-insert");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var tslintStylish = require('gulp-tslint-stylish');
var util = require('gulp-util');

//var commentSwap = require('gulp-comment-swap');
//var tsc = require('gulp-typescript');

// current version jspm@0.16.32
// jspm bundle src/App.js ./dist/index.js --skip-source-maps
// jspm bundle App.ts dev-bundle.js --watch
// https://github.com/jspm/jspm.io/pull/43/files?short_path=4cea63c#diff-4cea63c9d39d3e90a68b25b0030e90aa


/** Typescript configuration **/
var paths = {
    dist: "./dist",
    assets: "./dist/public/assets",
    jspm: "./dist/jspm_packages",
    sources: "./src/**/*.ts",
    sourcesToCopy: ["index.html"],
    appTsFile: "./src/App.ts",
    src: "./src/",
    targetHTML: "./src/public/index.html",
    bundleHTML: "./dist/public",
    targetJS: "index.js",
    targetMinifiedJS: "index.min.js",
    server: "digitalsignage.com"
};

/**********************
 * public commands
 *********************/

gulp.task("production", function (callback) {
    runSequence(
        "x_removeOffline",
        "x_clean",
        "x_assets",
        "x_jspm",
        "x_copy_files",
        "x_build-ts",
        "x_copy",
        "x_bundle",
        "x_minify",
        "x_target",
        "x_clear_remote",
        "x_rsync",
        "x_rsync",
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log("FINISHED SUCCESSFULLY");
            }
            callback(error);
        });
});

////'x_open_server_bundle',

/** launch the systemjs development server, files are kept raw
 * run it from the command line via:
 *
 * gulp development (will launch browser)
 * gulp development --restart (will not launch browser and restart daemon every 10min for best performance)
 *
 **/

gulp.task('development', function (done) {
    console.log(util.env.restart)
    if (util.env.restart) {
        runSequence('x_open_server_development_auto', done);
    } else {
        runSequence('x_open_server_development', done);
    }
});

gulp.task('typedocs', function (done) {
    runSequence('x_typedocs', 'x_docs_rsync', 'x_docs_chown1', 'x_docs_chown2', done);
});

gulp.task('x_rsync', function () {
    var rsync = Rsync.build({
        source: '/cygdrive/c/msweb/ng2Boilerplate/dist/',
        destination: 'Sean@' + paths.server + ':/var/www/sites/dynasite/htdocs/_msportal/_js/_node/_boiler/',
        exclude: ['*.bat', '*.iml', '.gitignore', '.git', 'node_modules/', '.idea/']
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


/** Dangerous, this will wipe your current source and sync with GitHub **/
gulp.task('vanish***', function (done) {
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

/**********************
 * private commands x_...
 *********************/

/**  Generate project documentation **/
gulp.task("x_typedocs", function () {
    return gulp
        .src(["./src/*.ts"])
        .pipe(typedoc({
            module: "system",
            target: "es5",
            theme: "default",
            experimentalDecorators: true,
            ignoreCompilerErrors: true,
            includeDeclarations: false,
            out: "docs",
            name: "ng2Boilerplate",
            version: true
        }))
});

/** Transpile TypeScript files **/
gulp.task('x_build-ts', function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./src'));
});

/** bundle the app with jspm **/
// 0.16 jspm: bundle-sfx src/App.js ./dist/index.js --skip-source-maps
// 0.17 jspm: bundle src/App.js ./dist/index.js --skip-source-maps
// 0.17 rollup: shell.task(["jspm build src/App.js " + paths.dist + "/" + paths.targetJS + ' --format global --skip-source-maps'])

gulp.task("x_bundle",
    shell.task(["jspm bundle src/App.js " + paths.dist + "/" + paths.targetJS + ' --skip-source-maps'])
);

gulp.task("x_clear_remote",
    shell.task(["ssh root@" + paths.server + " rm -r -f /var/www/sites/dynasite/htdocs/_msportal/_js/_node/_boiler/src"])
);


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

gulp.task('x_open_server_bundle', function () {
    opn('http://monstersignage.com/public/index.html');
});


// gulp.task('x_open_server_bundle', function () {
//     server = express();
//     server.use(express.static('./'));
//     server.listen(8003);
//     browserSync({
//         open: false,
//         port: 8080,
//         proxy: 'localhost:8003',
//         reloadDelay: '1000'
//     });
//     opn('https://secure.example.com/_boiler...');
// });

// , '**/*.ts','**/*.html','**/*.css'
gulp.task('x_open_server_development', ['x_watch_source'], function () {
    process.stdout.write('Starting browserSync and superstatic...\n');
    browserSync({
        port: 8080,
        open: false,
        files: ['index.html'],
        notify: true,
        reloadDebounce: 400,
        server: {
            baseDir: './',
            directory: true
        }
    });
    opn('http://localhost:8080/src/public/index.html')
});

/**
 * to get a fresh server every x minutes for better dev performance run:
 * forever stop 0 ; forever start -a -l f.log node_modules/gulp/bin/gulp.js development_auto ; tail -f ~/.forever/f.log
 **/
//files: ['index.html', '**/*.ts','**/*.html','**/*.css'],
gulp.task('x_open_server_development_auto', ['x_watch_source'], function () {
    process.stdout.write('Starting browserSync and superstatic...\n');
    browserSync({
        port: 8080,
        open: false,
        files: ['index.html', '**/*.ts'],
        notify: true,
        reloadDebounce: 400,
        server: {
            baseDir: './',
            directory: true
        },
        middleware: [
            function (req, res, next) {
                console.log('url: ' + req.url);
                if (/\/src\/public\/App[0-9]+\/?/.test(req.url)) {
                    var match = req.url.match(/\/src\/public\/(.*)/);
                    var redirect = '/src/public/index.html#/' + match[1];
                    console.log('RedirectTo:: ' + redirect);
                    res.writeHead(302, {'Location': redirect});
                    res.end();
                }
                next();
            }
        ]

    });
    // exit every 20 minutes so forever will restart it
    setTimeout(function () {
        process.exit()
    }, 3200000);
});

gulp.task('x_assets', function () {
    return gulp.src([
        './src/public/assets/**/*'
    ]).pipe(gulp.dest(paths.assets));
});

gulp.task('x_jspm', function () {
    return gulp.src([
        './jspm_packages/sys*'
    ]).pipe(gulp.dest(paths.jspm));
});

gulp.task('x_copy_files', function () {
    gulp.src(['./src/**/*.html', './src/**/*.woff2', './src/**/*.css'
    ]).pipe(gulp.dest(paths.dist));

    gulp.src([
        './src/public/world_data.js',
        './jspm.config.js',
        './jspm.browser.js',
    ]).pipe(gulp.dest(paths.bundleHTML));

    return gulp.src(['./**/*.html', './**/*.woff2', './**/*.css'
    ]).pipe(gulp.dest(paths.dist));
});

gulp.task("x_lint", function () {
    return gulp.src(paths.sources)
        .pipe(tslint())
        .pipe(tslint.report(tslintStylish, {
            emitError: true,
            sort: true,
            bell: true
        }));
});

gulp.task('x_watch_source', function () {
    gulp.watch([paths.sources]);
});

// Delete the dist directory
gulp.task("x_setProd", function () {
    return gulp.src(paths.dist, {read: false}).pipe(rimraf({force: true}));
});

// Delete the dist directory
gulp.task("x_clean", function () {
    return gulp.src(paths.dist, {read: false}).pipe(rimraf({force: true}));
});

// copy required sources to the dist folder
gulp.task("x_copy", function () {
    gulp.src(paths.sourcesToCopy).pipe(gulp.dest(paths.dist));
});


gulp.task("x_minify", function () {
    gulp.src(paths.targetJS, {cwd: paths.dist})
        .pipe(concat("index.min.js"))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(paths.bundleHTML));
});

var finalIndex = '' +
    '<script src="../jspm_packages/system.js"></script>' +
    '<script src="jspm.browser.js"></script>' +
    '<script src="jspm.config.js"></script>' +
    '<script src="./index.min.js"></script>' +
    '<script>' +
    'SystemJS.import("src/App.js")' +
    '.catch(function (e) { console.error(e,"error system.js " + e); }) ' +
    '</script>'

// update index.html to point to the minified bundle
gulp.task("x_target", function () {
    gulp.src([paths.targetHTML])
    // remove script tags
        .pipe(replace(/<!-- sys_import_start -->[^]+<!-- sys_import_end -->/, ""))
        .pipe(replace(/<!-- sys_import_start -->[^]+<!-- sys_import_end -->/, ""))
        .pipe(replace(/<!-- config_start -->[^]+<!-- config_end -->/, ""))
        .pipe(replace(/<!-- sys_jspm_start -->[^]+<!-- sys_jspm_end -->/, finalIndex))
        //.pipe(replace(/<script.*\n.*\n<\/script>/g, ""))
        //.pipe(replace(/\n\n/g, "\n"))
        //.pipe(insert.append("\n<script src='" + paths.targetMinifiedJS + "'></script>"))
        .pipe(gulp.dest(paths.bundleHTML))
});

// make sure we set to production in online mode
gulp.task('x_removeOffline', function () {
    gulp.src([paths.appTsFile])
        .pipe(replace(/\{provide: "OFFLINE_ENV", useValue: true},/, "{provide: \"OFFLINE_ENV\", useValue: false},"))
        .pipe(gulp.dest(paths.src))

});

