const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.js('resources/assets/js/app.js', 'public/js')
  	.scripts([ "node_modules/materialize-css/js/initial.js",
          "node_modules/materialize-css/js/jquery.easing.1.4.js",
          "node_modules/materialize-css/js/animation.js",
          "node_modules/materialize-css/js/velocity.min.js",
          "node_modules/materialize-css/js/hammer.min.js",
          "node_modules/materialize-css/js/jquery.hammer.js",
          "node_modules/materialize-css/js/global.js",
          "node_modules/materialize-css/js/collapsible.js",
          "node_modules/materialize-css/js/dropdown.js",
          "node_modules/materialize-css/js/modal.js",
          "node_modules/materialize-css/js/materialbox.js",
          "node_modules/materialize-css/js/parallax.js",
          "node_modules/materialize-css/js/tabs.js",
          "node_modules/materialize-css/js/tooltip.js",
          "node_modules/materialize-css/js/waves.js",
          "node_modules/materialize-css/js/toasts.js",
          "node_modules/materialize-css/js/sideNav.js",
          "node_modules/materialize-css/js/scrollspy.js",
          "node_modules/materialize-css/js/forms.js",
          "node_modules/materialize-css/js/slider.js",
          "node_modules/materialize-css/js/cards.js",
          "node_modules/materialize-css/js/chips.js",
          "node_modules/materialize-css/js/pushpin.js",
          "node_modules/materialize-css/js/buttons.js",
          "node_modules/materialize-css/js/transitions.js",
          "node_modules/materialize-css/js/scrollFire.js",
          "node_modules/materialize-css/js/date_picker/picker.js",
          "node_modules/materialize-css/js/date_picker/picker.date.js",
          "node_modules/materialize-css/js/date_picker/picker.time.js",
          "node_modules/materialize-css/js/character_counter.js",
          "node_modules/materialize-css/js/carousel.js",
          "node_modules/materialize-css/js/tapTarget.js",
        ], 'public/js/material.js')
    .sass('node_modules/materialize-css/sass/materialize.scss', 'public/css/')
   	//.sass('resources/assets/sass/app.scss', 'public/css')
   	.combine([
       //'public/css/app.css',
       'public/css/materialize.css',
   ], 'public/css/all.css');

