cls
REM todo: modify name of the image
REM docker build --no-cache --tag angular_modify_image --file runAng.txt ../../myproject
rem docker build --no-cache --tag angular_modify_image --file runAng.txt .
docker build --tag angular_modify_image --file runAng.txt .
rem docker run -d   -p 4200:4200 -p 49153:49153 --mount type=bind,source=../../angularCards,target=/usr/app --name angular_modify_container angular_modify_image
docker run -d   -p 4200:4200 -p 49153:49153 --mount type=bind,source=/E/ignatandrei/netCoreAlphabet/angularCards,target=/usr/app --name angular_modify_container angular_modify_image
REM TODO see container id
REM docker exec 766 npm i
REM docker exec -it 766  ng serve  --host 0.0.0.0 --poll 10
REM docker exec -it 3fa ng add @angular/material

REM TESTING
REM create image
docker build --tag angular_test --file testAng.txt .
REM Create container
REM docker run -d   -p 9876:9876 --name angular_test_container angular_test
REM copy files
REM docker cp E:/ignatandrei/netCoreAlphabet/angularCards/. angular_test_container:/usr/app
REM testing
REM docker exec -it angular_test_container ng test