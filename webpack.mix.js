var mix = require('laravel-mix');
var SourceMapDevToolPlugin = require("webpack").SourceMapDevToolPlugin;
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

mix.webpackConfig({
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, 'app/assets/'),
      "~" : path.resolve(__dirname),
    }
  },
  output: {
    chunkFilename: mix.inProduction() ? 'js/chunks/[name].[chunkhash].js' : 'js/chunks/[name].js',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // use 'server' to start webserver instead of open file 
      openAnalyzer: false, // open generated webpage automatically upon every bundle
      reportFilename: './../bundle-analyzer.html'
    }),
    new SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: [
        /node_modules/,
      ],
      include: [], // disable all sourcemaps
    }),
  ]
})

mix
  .setPublicPath('public/')

  .disableSuccessNotifications()

  .options({
    clearConsole: false
  })

  /*
  // You probably shouldnt use this
  .autoload({
    //jquery: ['window.$', 'window.jQuery', 'jQuery', '$'],
    //moment: ['window.moment'],
  })
  */

  /* Shared Assets */
  .js('app/assets/shared/javascripts/app.js', 'public/javascripts/shared/app.js')
  .sass('app/assets/shared/stylesheets/app.scss', 'public/stylesheets/shared/app.css')

  .copy('app/assets/vendor/javascripts/*', 'public/javascripts/vendor/')
  .copy('app/assets/vendor/stylesheets/*', 'public/stylesheets/vendor/')
  .copyDirectory('app/assets/vendor/stylesheets/fonts/', 'public/stylesheets/vendor/fonts/')
  /* END Shared Assets */

  /* Theme Assets */
  .js('app/assets/main/javascripts/app.js', 'public/javascripts/main/app.js')
  .sass('app/assets/main/stylesheets/app.scss', 'public/stylesheets/main/app.css')

  .js('app/assets/pluton/javascripts/app.js', 'public/javascripts/pluton/app.js')
  .sass('app/assets/pluton/stylesheets/app.scss', 'public/stylesheets/pluton/app.css')

  .js('app/assets/foodee/javascripts/app.js', 'public/javascripts/foodee/app.js')
  .sass('app/assets/foodee/stylesheets/app.scss', 'public/stylesheets/foodee/app.css')

  .js('app/assets/cube/javascripts/app.js', 'public/javascripts/cube/app.js')
  .sass('app/assets/cube/stylesheets/app.scss', 'public/stylesheets/cube/app.css')

  .js('app/assets/fresh/javascripts/app.js', 'public/javascripts/fresh/app.js')
  .sass('app/assets/fresh/stylesheets/app.scss', 'public/stylesheets/fresh/app.css')

  .js('app/assets/shards/javascripts/app.js', 'public/javascripts/shards/app.js')
  .sass('app/assets/shards/stylesheets/app.scss', 'public/stylesheets/shards/app.css')

  .js('app/assets/now-ui-kit/javascripts/app.js', 'public/javascripts/now-ui-kit/app.js')
  .sass('app/assets/now-ui-kit/stylesheets/app.scss', 'public/stylesheets/now-ui-kit/app.css')

  .js('app/assets/design-blocks/javascripts/app.js', 'public/javascripts/design-blocks/app.js')
  .sass('app/assets/design-blocks/stylesheets/app.scss', 'public/stylesheets/design-blocks/app.css')
  /* END Theme Assets */

  // .combine([
  //   'node_modules/jquery/dist/jquery.js',
  //   'node_modules/bootstrap/dist/js/bootstrap.js',
  //   'node_modules/chosen-js/chosen.jquery.js',
  //   'node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
  //   'node_modules/rearmed-js/dist/array.js',
  //   'node_modules/rearmed-js/dist/string.js',
  //   'node_modules/turbolinks/dist/turbolinks.js',
  //   'node_modules/rails-ujs/dist/rails-ujs.js',
  //   'src/assets/javascripts/application.js'
  // ], 'public/dist/application.bundle.js')

if(mix.inProduction()) {
  mix.version();
} else {
  //mix.sourceMaps(); // Makes dev bundle size massive
}
