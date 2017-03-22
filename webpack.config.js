/**
 * Created by orlandoadeyemi on 22/03/2017.
 */

module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' },
      {
        test: /\.(jpe?g|gif|png)$/, loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
      }
    ]
  }
};
