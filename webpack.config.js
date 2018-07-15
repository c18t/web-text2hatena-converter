'use strict'
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // // フロントエンドのルートディレクトリ(却って分かりづらいので指定しない)
  // context: path.resolve(__dirname, './lib/js'),
  // ソースマップのスタイル(webpack-commandのdevtoolオプションで指定する)
  // devtool: isProduction ? '' : 'cheap-eval-source-map', //'hidden-source-map' : 'inline-source-map',
  // // ビルドモード(webpack-commandのmodeオプションで指定する)
  // mode: isProduction ? 'production' : 'development',
  
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    index: path.resolve(__dirname, './src/index.ts'),
  },
  
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, './dist/js'),
    // 出力ファイル名
    filename: '[name].js',
  },

  resolve: {
    // import時に探す拡張子
    extensions: [ '.js', '.ts', '.vue', '.json' ],
    alias: {
      // Vueのビルドバージョンを明示的に指定
      'vue$': 'vue/dist/vue.esm.js',
    },
  },

  // モジュール設定
  module: {
    rules: [
      {
        // SFCの設定
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        // TypeScriptの設定
        test: /\.tsx?$/, // lang=ts
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        // stylusの設定
        test: /\.styl(?:us)?$/, // lang=stylus
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },

  // プラグイン設定
  plugins: [
    new VueLoaderPlugin(),
  ],
};
