exports.devDependencies = [
  'style-loader',
  'css-loader',
  'postcss-loader',
  'postcss-import',
  'precss',
  'autoprefixer',
  'file-loader'
];

exports.jsonString = 
    `{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { importLoaders: 1 } 
        },
        'postcss-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: '/images/',
        outputPath: 'images/'
      }
    }`;