exports.devDependencies = [
  'style-loader',
  'css-loader',
  'postcss-loader',
  'precss',
  'autoprefixer'
];

exports.jsonString = 
    `{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 1 } 
        },
        'postcss-loader'
      ]
    }`;