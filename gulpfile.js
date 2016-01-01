var gulp = require('gulp');
var git = require('gulp-git');
var express = require('express');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var typedoc = require("gulp-typedoc");
var Rsync = require('rsync');


gulp.task('LiveServer', ['_watchSource'], function () {
    server = express();
    server.use(express.static('./'));
    server.listen(8003);
    browserSync({
        proxy: 'localhost:8003'
    });
});

/** *** Dangerous, this will wipe your current source and sync with GitHub **/
gulp.task('XGitSync', function (done) {
    var c = 8;
    console.log('Starting in ' + c + '  seconds');
    var handler = setInterval(function () {
        c--;
        console.log('syncing in ---> ' + c);
        if (c==0){
            clearInterval(handler);
            console.log('sync');
            runSequence('____gitReset', '____gitPull', done);
        }
    }, 1000)
});

gulp.task('_watchSource', function () {
    console.log('watching source files');
    gulp.watch("./src/**").on('change', browserSync.reload);
    gulp.watch("*.css").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('____gitReset', function () {
    git.exec({args: '-c core.quotepath=false reset --hard HEAD --'}, function (err, stdout) {
        if (err) throw err;
    });
});

gulp.task('____gitPull', function () {
    git.exec({args: '-c core.quotepath=false pull --progress --no-stat -v --progress origin master'}, function (err, stdout) {
        if (err) throw err;
    });
});


gulp.task("GenDocs", function () {
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

gulp.task('Rsync', function () {
    var rsync = Rsync.build({
        source: '/cygdrive/c/msweb/ng2Boilerplate/',
        destination: 'Sean@digitalsignage.com:/var/www/sites/javascriptninja.io/ng2/htdocs',
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
