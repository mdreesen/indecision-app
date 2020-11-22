Using babel:
yarn init
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2 --watch

switching babel to look at a file 
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
or
babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch
We should only change out where the file is located and where babel needs to look


console.log('app.js is running');