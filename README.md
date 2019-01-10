# JavaScript Template [![Build Status](https://travis-ci.org/paulambanks/JS-Dev-Env-Docker-starter-kit.svg?branch=develop)](https://travis-ci.org/paulambanks/JS-Dev-Env-Docker-starter-kit)

NodeJs development with Docker (Webpack 4 + ES6 + Babel 7)

## Layout

* Dockerfile (Describes how to build the Docker image)
* docker-compose.yml (Launches the apache webserver on port 80 and the 'src' directory is mapped to '/var/www/html')
* xdebug-custom.ini (Allows XDebug to connect to the host on port 9000, so IDE's can use XDebug)
* src (JS application sources go here)
* src/index.html (Prints "Hello World")
* Express.js (Web application framework for Node.js)
* ES6+ based JavaScript.
* Babel 7 and babel-loader (transpiling the ES6+ source code into ES5 style code; babel-loader has been used with webpack for compiling/transpiling purpose)
* Webpack 4 (for executing babel transpiler and bundling JavaScript  files into a single file)

### Quick Commands

Starts the server in the foreground.

```bash
docker-compose up
```

Start the server in the background.
```bash
docker-compose up -d
```

Stop the server.
```bash
docker-compose down
```

Stop the server, and remove volumes, etc.
```bash
docker-compose down -f
```

Update / rebuild the docker image.

```bash
docker-compose build
```
