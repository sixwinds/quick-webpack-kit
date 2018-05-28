## Quick Overview
```sh
mkdir my-app
cd my-app
npm init
...
npx quick-webpck
npm run start
```
Then webpack4 script files with configuration of react rule and postcss(with precss and autoprefixer) rule are created in my-app dir.

## Synopsis

`npx quick-webpack -v|--version`

`npx quick-webpack -u|--use-version '<version-number>'`

`npx quick-webpack -j|--js-processors '<processors>'`

`npx quick-webpack -s|--style-processors '<processors>'`

`npx quick-webpack --no-install`

## Usage

* `-u, --use-version <version-number>` - Specify Webpack version, currrently only support '4'.

* `-j, --js-processors <processors>` - Specify javascript processors such as 'react', 'typescript-react', 'vue', currently only support 'react'.

* `-s, --style-processors <processors>` - Specify style(css,image,fonts) processors such as 'postcss', 'sass', 'less', currently only support 'postcss'.

* `--no-install` - Do not install devDependncies package, users can install by themselves.

