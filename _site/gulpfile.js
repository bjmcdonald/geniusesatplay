/**
 * Elixir Asset Management
 * ==============================================================================
 *
 * Elixir provides a clean, fluent API for defining some basic Gulp tasks for your
 * Laravel application. By default, we are compiling the Sass file for our application,
 * as well as publishing vendor resources.
 *
 * @link [Gulp](gulpjs.com)
 * @link [Elixir](https://laravel.com/docs/master/elixir)
 * @link [Elixir Vueify](https://github.com/JeffreyWay/laravel-elixir-vueify)
 * @link [Elixir Webpack](https://github.com/JeffreyWay/laravel-elixir-webpack-official)
 *
 * @author    Alexander Bösch - <sirthxalot.dev@gmail.com>
 * @copyright (c) 2016, Alexander Bösch - All rights reserved.
 * @license   The code is available under the MIT license.
 */


/**
 * Setup Asset Workflow
 * ------------------------------------------------------------------------------
 *
 * Lets begin to initialize elixir and everything we will need, in order to
 * manage our assets. From here we are going to customize and tweak into our
 * assets workflow.
 *
 */

const elixir = require('laravel-elixir');
require('laravel-elixir-vue');

// set relative path to root directory from resources directory
var root           = "../../../";

// elixir configuration
elixir.config.assetsPath = "_resources/assets";  // set path to resources directory
elixir.config.publicPath = "assets";             // set path to public directory
elixir.config.sourcemaps = true;                 // set source map generation




/**
 * Copy Assets
 * ------------------------------------------------------------------------------
 *
 * An Elixir-Task, in order to copy assets from their path into their destination
 * path. Often these copied files or directories will be needed within other assets
 * and will therefore be handled first.
 *
 */
elixir(function(mix) {
    mix.copy('node_modules/font-awesome/fonts',                                 "assets/fonts/font-awesome")            // copy Font-Awesome web fonts
        .copy('node_modules/simple-jekyll-search/dest/jekyll-search.min.js',    "assets/js/search/search.js")           // copy Search plugin
        .copy('node_modules/jquery/dist/jquery.min.js',                         "assets/js/jquery/jquery-2.2.4.js")     // copy jQuery javascript framework
        .copy('node_modules/what-input/dist/lte-IE8.js',                        "assets/js/ie/lte-IE8.js");             // copy Internet-Explorer script
});


/**
 * Common Stylesheet
 * ------------------------------------------------------------------------
 *
 * Compiles the SASS stylesheets into the public css directory, in order to
 * lay down the basic site design. This task will scan the `_resources/assets/sass/`
 * directory for defined SASS files and compiles them into the `assets/css/`
 * directory.
 *
 */
elixir(function(mix) {
    mix.sass('common.sass');
});


/**
 * Common JavaScript
 * ------------------------------------------------------------------------------
 *
 * Compile Webpack scripts into the public javascript directory, in order to lay
 * down the basic sites' interaction. This task will scan the `_resources/assets/js/`
 * directory for defined javascript files and compiles them into the `assets/js/`
 * directory.
 *
 */
elixir(function(mix) {
    mix.webpack('common.js');
});
