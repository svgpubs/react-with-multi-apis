## create-react-app fetches 3 different APIs using http-proxy-middleware

### Connect a create-react-app to multiple different ports on the localhost as well as to other webistes.

This is a demo App for those who had as much trouble as I did trying to transition from package.json proxy, to http-proxy-middleware. 

This repository is an answer to my own question on stackoverflow:

https://stackoverflow.com/questions/63892664/how-to-make-http-proxy-middleware-connect-to-localhost-server-from-create-react

## To use this app

You must have Node.js installed.

This is what the successful connections look like from the front end. If any don't work, they will say 'no response' or nothing at all.


![](image_app.png)


```
git clone https://github.com/svgpubs/react-with-multi-apis.git
```

Open three different mac/linux terminals, or windows powershell/command line

terminal 1: run the first localhost server
```
cd api1/
npm install
node server1.js
```
terminal 2: run the second localhost server
```
cd api2/
npm install
node server2.js
```

terminal 3: run the reactapp react app
```
cd reactapp/
npm install
npm start
```

A browser should popup. If not, go to localhost:3000

