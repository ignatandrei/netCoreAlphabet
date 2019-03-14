call ng build --prod --build-optimizer
cd ..
REM from read https://angular.io/guide/deployment
copy /Y angularCards\404GitHub.txt + angularCards\dist\NetCoreAlphabet\index.html angularCards\dist\NetCoreAlphabet\404.html
node angularCards/node_modules/gh-pages/bin/gh-pages -d angularCards/dist/NetCoreAlphabet
rem robocopy angularCards/dist/NetCoreAlphabet cordovaCards/www/dist  /MIR /XD
