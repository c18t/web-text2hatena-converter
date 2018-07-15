# Text to Hatena Notation Converter
はてな記法変換機です。MarkdownまたはAsciiDocをはてな記法に変換します。

## Project Making
```
yarn init
touch README.md
touch LICENSE
gitignore code node macos windows
echo dist/js/ >> .gitignore
yarn add -D typescript stylus
yarn add -D webpack webpack-command browser-sync npm-run-all
yarn add -D vue vue-loader ts-loader css-loader stylus-loader vue-template-compiler
yarn tsc --init
touch webpack.config.js
mkdir src dist
touch dist/index.html
touch src/index.ts
```