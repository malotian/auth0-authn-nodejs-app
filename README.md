# auth0-authn-nodejs-app

## Build
Command `docker-compose build`

#### Sample Build Console output

    WARNING: Some networks were defined but are not used by any service: docker.local
    Building com-6ix-auth0-user-prov
    Step 1/5 : FROM node:4.3
     ---> 3538b8c69182
    Step 2/5 : COPY . /src
     ---> 49e9ecaa1b4f
    Step 3/5 : RUN cd /src && npm install
     ---> Running in d07b5900b940
    npm info it worked if it ends with ok
    npm info using npm@2.14.12
    npm info using node@v4.3.2
    npm WARN package.json auth0-authn-nodejs-app@1.0.0 No repository field.
    npm WARN package.json auth0-authn-nodejs-app@1.0.0 No license field.
    npm info preinstall auth0-authn-nodejs-app@1.0.0
    npm info build /src
    npm info linkStuff auth0-authn-nodejs-app@1.0.0
    npm info install auth0-authn-nodejs-app@1.0.0
    npm info postinstall auth0-authn-nodejs-app@1.0.0
    npm info prepublish auth0-authn-nodejs-app@1.0.0
    npm info ok
    Removing intermediate container d07b5900b940
     ---> 09d6de1f188f
    Step 4/5 : EXPOSE 8088
     ---> Running in be6480dbd3c9
    Removing intermediate container be6480dbd3c9
     ---> 684168e79936
    Step 5/5 : CMD ["node", "/src/server.js"]
     ---> Running in 453cc4cda13f
    Removing intermediate container 453cc4cda13f
     ---> c0d1e8381992
    
    Successfully built c0d1e8381992
    Successfully tagged malotian/auth0-authn-nodejs-app:latest

## Run
Command `docker-compose up`

#### Sample Run Console output

    WARNING: Some networks were defined but are not used by any service: docker.local
    Recreating auth0-authn-nodejs-app ... done
    Attaching to auth0-authn-nodejs-app
    auth0-authn-nodejs-app     | Server running at http://localhost:8088


# Test
Browse http://localhost:8088
