cls
REM todo: modify name of the image
docker build --tag cordova_create_image --file makeCordova.txt .
REM docker run -d --name=cordova_create_container cordova_create_image
REM docker exec -it cordova_create_container cordova create netcorealphabet com.github.ignatandrei.netcorealphabet NetCoreAlphabet
REM docker cp cordova_create_container:/usr/app/netcorealphabet .