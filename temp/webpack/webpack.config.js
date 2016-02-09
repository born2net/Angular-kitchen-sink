// Helper: root(), and rootDir() are defined at the bottom
var path = require('path');
var webpack = require('webpack');
var args = process.argv.slice(2);

// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var autoprefixer = require('autoprefixer'); // add css prefixes such as --webkit
var HtmlWebpackPlugin = require('html-webpack-plugin'); // Inject the main file paths into index.html and give unique ?xxxxx name
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (function makeWebpackConfig() {

    var BUILD = args.indexOf('--webpack-build') !== -1 || process.env['webpack-build'];
    console.log('Running in build mode: ' + BUILD);
    var DEBUG_MEM = args.indexOf('--debug_mem') !== -1 || process.env['debug_mem'];
    if (DEBUG_MEM)
        console.log('Debug ' + DEBUG_MEM);

    /**
     * Config
     * Reference: http://webpack.github.io/docs/configuration.html
     * This is the object where all configuration gets set
     */
    var config = {};

    /**
     * Devtool
     * Reference: http://webpack.github.io/docs/configuration.html#devtool
     * Type of sourcemap to use per build type
     */

    config.devtool = 'source-map';
    //config.devtool = 'inline-source-map';
    // config.devtool = 'eval-source-map';

    /**
     * Entry
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     */
    config.entry = {
        'vendor': './src/vendor.ts',
        'app': './src/App.ts'
    };

    /**
     * Output, run in memory debug server or to dist directory
     * Reference: http://webpack.github.io/docs/configuration.html#output
     */
    config.output = DEBUG_MEM ? {} : {
        path: root('dist'),
        publicPath: './',
        filename: 'js/[name].js',
        chunkFilename: '[id].chunk.js?[hash]'
    };

    /**
     * Resolve
     * Reference: http://webpack.github.io/docs/configuration.html#resolve
     */
    config.resolve = {
        cache: true,
        root: root(),
        // only discover files that have those extensions
        extensions: ['', '.ts', '.js', '.json', '.css', '.html'],
        alias: {
            'app': 'src/app',
            'common': 'src/common'
        }

    };

    /**
     * Loaders
     * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
     * List: http://webpack.github.io/docs/list-of-loaders.html
     * This handles most of the magic responsible for converting modules
     */
    config.module = {
        //preLoaders: [{test: /\.ts$/, loader: 'tslint'}], // no need since I am using WebStorm to lint
        loaders: [
            // Support for .ts files.
            {
                test: /\.ts$/,
                loader: 'ts',
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 -> Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375  // 2375 -> Duplicate string index signature
                    ]
                },
                exclude: [/\.(spec|e2e)\.ts$/, /jspm_packages/, /node_modules\/(?!(ng2-.+))/]
            },

            // font awesome
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},

            // copy those assets to output
            //{test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=[path][name].[ext]?[hash]'},
            {test: /\.(png|jpe?g|gif|svg|ico)$/, loader: 'file?name=[path][name].[ext]?[hash]'},

            // Support for *.json files.
            {test: /\.json$/, loader: 'json'},

            // load and process main css file
            {test: /\.css$/, loader: "style-loader!css-loader"},

            // load inline inside components
            {test: /\.scss$/, loader: 'raw!postcss'},

            // support for .html as raw text
            // todo: change the loader to something that adds a hash to images
            {test: /\.html$/, loader: 'raw'}

            // Other options for CSS Support
            //use 'null' loader in test mode (https://github.com/webpack/null-loader)
            //all css in src/style will be bundled in an external css file
            //{test: /\.css$/, include: root('src','app'), loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')},
            //all css required in src/app files will be merged in js files
            //{test: /\.css$/, include: root('src', 'app'), loader: 'raw!postcss'},
            //Support for CSS as raw text
            //use 'null' loader in test mode (https://github.com/webpack/null-loader)
            //all css in src/style will be bundled in an external css file
            //{test: /\.css$/, exclude: root('src', 'app'), loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss') },
            //all css required in src/app files will be merged in js files
            //{test: /\.css$/, exclude: root('src', 'style'), loader: 'raw!postcss'},
            //{test: /\.css$/, loader: 'raw!postcss'},
            //{ test: /\.css$/, loader: "style-loader!css-loader" },
        ],
        postLoaders: [],
        noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/]
    };

    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    config.plugins = [];
    config.plugins.push(
        // Generate common chunks if necessary
        // Reference: https://webpack.github.io/docs/code-splitting.html
        // Reference: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/[name].js',
            minChunks: Infinity
        }),
        new CommonsChunkPlugin({
            name: 'common',
            filename: 'js/[name].js',
            minChunks: 2,
            chunks: ['app', 'vendor']
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            bootbox: "bootbox",
            "window.jQuery": "jquery",
            "Highcharts": "highcharts",
            "window.bootbox": "bootbox",
            _: "underscore",
            "Immutable": "Immutable",
            "window.Immutable": "Immutable"
        }),
        // Inject paths into index.html file
        // Reference: https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            inject: 'body',
            hash: true, // inject ?hash at the end of the files
            chunksSortMode: function compare(a, b) {
                // common always first
                if (a.names[0] === 'common') {
                    return -1;
                }
                // app always last
                if (a.names[0] === 'app') {
                    return 1;
                }
                // vendor before app
                if (a.names[0] === 'vendor' && b.names[0] === 'app') {
                    return -1;
                } else {
                    return 1;
                }
                // a must be equal to b
                return 0;
            }
        }),

        // Extract css files
        // Reference: https://github.com/webpack/extract-text-webpack-plugin
        new ExtractTextPlugin('css/[name].css', {disable: false})
    );

    // Add build specific plugins
    config.plugins.push(
        // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
        // Only emit files when there are no errors
        new webpack.NoErrorsPlugin(),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
        // Dedupe modules in the output
        new webpack.optimize.DedupePlugin(),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
        // Assign the module and chunk ids by occurrence count.
        new webpack.optimize.OccurenceOrderPlugin(),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
        // Minify all javascript, switch loaders to minimizing mode
        //new webpack.optimize.UglifyJsPlugin({
        //    // disabled for beta.1 because it was breaking the build, todo: remove this once fixed
        //    // reference: https://github.com/angular/angular/issues/6366
        //    // reference: https://github.com/angular/angular/issues/6380
        //    mangle: false
        //}),

        // Copy assets from the public folder
        // Reference: https://github.com/kevlened/copy-webpack-plugin
        new CopyWebpackPlugin([{
            from: root('src/public')
        }, {
            from: root('src/styles/style_dark.css'),
            toType: 'file'
        }])
    );

    /**
     * PostCSS
     * Reference: https://github.com/postcss/autoprefixer-core
     * Add vendor prefixes like --webkit to your css
     */
    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];

    /**
     * Apply the tslint loader as pre/postLoader
     * Reference: https://github.com/wbuchwalter/tslint-loader
     * I disabled since I use WebStorm, no need to duplicate effort
     */
    //config.tslint = {
    //    emitErrors: false,
    //    failOnHint: false
    //};

    /**
     * Dev server configuration
     * Reference: http://webpack.github.io/docs/configuration.html#devserver
     * Reference: http://webpack.github.io/docs/webpack-dev-server.html
     */
    config.devServer = {
        historyApiFallback: true,
        contentBase: './src/public'
    };

    return config;
})();

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return root.apply(path, ['node_modules'].concat(args));
}