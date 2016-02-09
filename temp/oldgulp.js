///**  watch changed files **/
//gulp.task('x_watch', function () {
//    console.log('watching source files');
//    gulp.watch("./src/**").on('change', browserSync.reload);
//    gulp.watch("*.css").on('change', browserSync.reload);
//    gulp.watch("*.html").on('change', browserSync.reload);
//});

///** launch the systemjs server (no files are bundled, used for development mode) **/
//gulp.task('x_systemjs_server_no_bundle', function () {
//    server = express();
//    server.use(express.static('./'));
//    server.listen(8003);
//    browserSync({
//        open: false,
//        port: 8080,
//        proxy: 'localhost:8003',
//        reloadDelay: '5000'
//    });
//    opn('http://localhost:8080/src/public/index_sys.html');
//});

///**
// * Wait 1/2 a sec
// */
//gulp.task('x_sleep', function (done) {
//    setTimeout(function () {
//        done();
//    }, 500)
//});

///** Remove dir */
//gulp.task("x_rimraf",
//    shell.task(["rimraf dist"])
//);

///**handle Gulp errors **/
//function handleError(err) {
//    console.log(err.toString());
//    this.emit('end');
//}

///**
// * Generates the app.d.ts references file dynamically from all application *.ts files.
// */
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

///**
// * Lint all custom TypeScript files.
// */
//gulp.task('x_ts-x_lint', function () {
//    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('verbose'));
//});


//gulp.task('x_open_server_development_old', ['x_ts-compile', 'x_watch2'], function () {
//    process.stdout.write('Starting browserSync and superstatic...\n');
//    browserSync({
//        port: 8003,
//        open: false,
//        files: ['index.html', '**/*.js'],
//        injectChanges: true,
//        logFileChanges: true,
//        logLevel: 'info',
//        logSnippet: true,
//        logPrefix: 'log:',
//        notify: true,
//        reloadDebounce: 4000,
//        server: {
//            baseDir: './',
//            directory: true,
//            middleware: superstatic({debug: false})
//        }
//    });
//    opn('http://localhost:8003/src/public/index_sys.html')
//});

///**Compile TypeScript and include references to library and app .d.ts files. */
//gulp.task('x_ts-compile', function () {
//    var sourceTsFiles = [config.allTypeScript, //path to typescript files
//        config.libraryTypeScriptDefinitions]; //reference to library .d.ts files
//
//    var tsResult = gulp.src(sourceTsFiles)
//        .pipe(sourcemaps.init())
//        .pipe(tsc(tsProject, undefined, testReporter));
//
//    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
//    return tsResult.js
//        .pipe(sourcemaps.write('.'))
//        .pipe(gulp.dest(config.tsOutputPath));
//});

//var testReporter = function (output, file, options) {
//    // file is a reference to the vinyl File object
//    console.log("Found " + output.length + " errors in " + file.path);
//    // options is a reference to the reporter options, e.g. options.emitError
//};

///**
// * Remove all generated JavaScript files from TypeScript compilation.
// */
//gulp.task('x_clean-ts', function (cb) {
//    var typeScriptGenFiles = [
//        config.tsOutputPath + '/**/*.js',    // path to all JS files auto gen'd by editor
//        config.tsOutputPath + '/**/*.js.map', // path to all sourcemap files auto gen'd by editor
//        '!' + config.tsOutputPath + '/lib'
//    ];
//
//    // delete the files
//    del(typeScriptGenFiles, cb);
//});

///** launch the systemjs server (no files are bundled, used for development mode) **/
//gulp.task('x_open_server_development4', ['x_watch3'], function () {
//    server = express();
//    server.use(express.static('./'));
//    server.listen(8003);
//});
//
////gulp.task('scripts-watch', browserSync.reload());
//
//gulp.task('good', ['x_open_server_development4'], function () {
//    browserSync.init(null, {
//        proxy: "http://localhost:8003",
//        open: false,
//        files: ['index.html', '**/*.ts'],
//        browser: "google chrome",
//        reloadDebounce: 500,
//        port: 8080
//    });
//    //gulp.watch('*.ts', ['scripts-watch']);
//    setTimeout(function () {
//        opn('http://localhost:8080/src/public/index_sys.html#/EntryPanelNoId/Login');
//    }, 4000);
//
//});

//var Config = (function () {
//    function gulpConfig() {
//        this.source = './src/';
//        this.sourceApp = this.source + 'src/';
//        this.tsOutputPath = this.source + '/js';
//        this.allTypeScript = this.sourceApp + '/**/*.js';
//        this.allTypeScript2 = this.sourceApp + '/**/*.ts';
//        this.typings = './typings/';
//        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
//    }
//    return gulpConfig;
//})();
//var config = new Config();

//// entry point - run tasks in a sequence
//gulp.task("dist", function (callback) {
//    runSequence(
//        "x_lint",
//        "x_copy_css",
//        "x_clean",
//        "x_copy",
//        "x_bundle",
//        "x_minify",
//        "x_target",
//        function (error) {
//            if (error) {
//                console.log(error.message);
//            } else {
//                console.log("FINISHED SUCCESSFULLY");
//            }
//            callback(error);
//        });
//});

///** Bundle project to a single bundle.js file which is loaded via src/public/index_sys_bundle.html **/
//gulp.task("x_bundler",
//    shell.task(["jspm bundle-sfx src/App.js ./src/public/bundle.js  --skip-source-maps"])
//);

///** create distribution system.js bundle.js which is hosted by src/public/index_sys_bundle.html **/
//gulp.task('distribute', function (done) {
//    runSequence('x_build-ts', 'x_bundler', 'x_open_server_bundle', done);
//});

// disable default
//gulp.task('default', ['x_ts-x_lint', 'x_ts-compile']);