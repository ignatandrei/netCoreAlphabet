ng build --prod --build-optimizer
cd ..
REM TODO: read https://angular.io/guide/deployment
REM TODO: make a copy of docs/index.html and name it docs/404.html.
REM TODO: https://github.com/angular-schule/angular-cli-ghpages
node angularCards/node_modules/gh-pages/bin/gh-pages -d angularCards/dist/NetCoreAlphabet
