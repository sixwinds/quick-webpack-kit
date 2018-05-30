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

* `-u, --use-version <version-number>` **Default:** 4 - Specify Webpack version, currrently only support '4'.

* `-j, --js-processors <processors>` **Default:** react - Specify javascript processors such as 'react', 'typescript', 'vue', currently only support 'react'. `<processors>` support multip values like 'react,typescript'

* `-s, --style-processors <processors>` **Default:** sasslike - Specify style(css,image,fonts) processors such as 'sasslike', 'lesslike', 'cssinjs' currently only support 'sasslike'. `<processors>` support multip values like 'sasslike,csslint'

* `--no-install` - Do not install devDependncies package, users can install by themselves.

