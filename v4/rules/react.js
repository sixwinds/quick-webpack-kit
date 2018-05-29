exports.devDependencies = [
  'babel-loader',
  'babel-core',
  'babel-preset-env',
  'babel-preset-react'
]

exports.jsonString = 
    `{
      test: /.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          [ 'env', {"modules": false} ],
          'react'
        ]
      }
    }`;
