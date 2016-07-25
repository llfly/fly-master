var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    vendor: ['jquery'],
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    //还可以通过CommonsChunkPlugin取出单一的库
    //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')


    //如果想每个模块都可以获取到对象或变量，像在任何模块中都可以不通过require('jquery')就能使用$或jQuery变量
    //可以使用ProvidePlugin http://webpack.github.io/docs/shimming-modules.html
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
