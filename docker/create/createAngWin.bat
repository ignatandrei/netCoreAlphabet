cls
REM todo modify nameapp parameter
docker build --no-cache --build-arg nameapp=NetCoreAlphabet --tag newang_image --file createAng.txt .
REM TODO: exists newang image
docker run -d -it  -p 4200:4200 -p 49153:49153 --name newang_container newang_image 
REM TODO: verify localhost 4200
REM docker exec <containerid> ls -l -a -m -1
REM Take output and docker cp <container>:/files <new folder>

