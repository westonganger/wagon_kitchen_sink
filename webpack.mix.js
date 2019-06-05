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

  .autoload({
    jquery: ['window.$', 'window.jQuery', 'jQuery', '$'],
    //moment: ['window.moment'],
  })

  /* Shared Assets */
  .js('app/assets/shared/javascripts/app.js', 'public/javascripts/shared/app.js')
  .sass('app/assets/shared/stylesheets/app.scss', 'public/stylesheets/shared/app.css')

  .sass('app/assets/shared/stylesheets/icomoon.scss', 'public/stylesheets/shared/icomoon.css')
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

  .js('app/assets/sb-landing/javascripts/app.js', 'public/javascripts/sb-landing/app.js')
  .sass('app/assets/sb-landing/stylesheets/app.scss', 'public/stylesheets/sb-landing/app.css')

  .js('app/assets/sb-new-age/javascripts/app.js', 'public/javascripts/sb-new-age/app.js')
  .sass('app/assets/sb-new-age/stylesheets/app.scss', 'public/stylesheets/sb-new-age/app.css')

  .js('app/assets/sb-business-casual/javascripts/app.js', 'public/javascripts/sb-business-casual/app.js')
  .sass('app/assets/sb-business-casual/stylesheets/app.scss', 'public/stylesheets/sb-business-casual/app.css')

  .js('app/assets/sb-stylish-portfolio/javascripts/app.js', 'public/javascripts/sb-stylish-portfolio/app.js')
  .sass('app/assets/sb-stylish-portfolio/stylesheets/app.scss', 'public/stylesheets/sb-stylish-portfolio/app.css')

  .js('app/assets/sb-clean-blog/javascripts/app.js', 'public/javascripts/sb-clean-blog/app.js')
  .sass('app/assets/sb-clean-blog/stylesheets/app.scss', 'public/stylesheets/sb-clean-blog/app.css')

  .js('app/assets/sb-resume/javascripts/app.js', 'public/javascripts/sb-resume/app.js')
  .sass('app/assets/sb-resume/stylesheets/app.scss', 'public/stylesheets/sb-resume/app.css')

  .js('app/assets/sb-grayscale/javascripts/app.js', 'public/javascripts/sb-grayscale/app.js')
  .sass('app/assets/sb-grayscale/stylesheets/app.scss', 'public/stylesheets/sb-grayscale/app.css')

  .js('app/assets/sb-agency/javascripts/app.js', 'public/javascripts/sb-agency/app.js')
  .sass('app/assets/sb-agency/stylesheets/app.scss', 'public/stylesheets/sb-agency/app.css')

  .js('app/assets/sb-creative/javascripts/app.js', 'public/javascripts/sb-creative/app.js')
  .sass('app/assets/sb-creative/stylesheets/app.scss', 'public/stylesheets/sb-creative/app.css')
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
