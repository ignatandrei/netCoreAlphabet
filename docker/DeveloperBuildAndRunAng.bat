cls
ECHO please be aware of absolute path here %cd%
docker build --tag netcorealphabet_angular_image --file DeveloperBuildAndRunAng.txt ..\angularcards
docker run --rm -d -p 4200:4200 -p 49153:49153 --mount type=bind,source=%cd%\..\angularcards,target=/usr/app --name netCoreAlphabetAngularContainer netcorealphabet_angular_image
docker exec -it netCoreAlphabetAngularContainer  npm i
docker exec -it netCoreAlphabetAngularContainer  bash ./runDocker.bat