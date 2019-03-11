call ng build --prod --build-optimizer
cd ..
REM TODO: read https://angular.io/guide/deployment
REM TODO: make a copy of docs/index.html and name it docs/404.html.
REM TODO: https://github.com/angular-schule/angular-cli-ghpages

copy /Y angularCards\404GitHub.txt + angularCards\dist\NetCoreAlphabet\index.html angularCards\dist\NetCoreAlphabet\404.html
node angularCards/node_modules/gh-pages/bin/gh-pages -d angularCards/dist/NetCoreAlphabet
rem robocopy angularCards/dist/NetCoreAlphabet angularCards/www/dist  /MIR /XD