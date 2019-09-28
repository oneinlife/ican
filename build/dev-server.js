const path = require('path');
var fs = require('fs');
var http = require('http');
var https = require('https');
const express = require('express');
const webpack = require('webpack');
const config = require('../config');
// var proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('../webpack.config.babel');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port || 8080;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
// var proxyTable = config.dev.proxyTable;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

const hotMiddleware = require('webpack-hot-middleware')(compiler);

// proxy api requests
// Object.keys(proxyTable).forEach(function (context) {
//   var options = proxyTable[context];
//   if (typeof options === 'string') {
//     options = { target: options };
//   }
//   app.use(proxyMiddleware(context, options));
// });

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
const staticPath = path.posix.join('/', 'static');
app.use('/static', express.static('static'));
app.use('/ssl', express.static('ssl'));
/*
app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port + '\n');
});*/



// your express configuration here
var key = path.join(__dirname, '../ssl/key.pem');
var cert = path.join(__dirname, '../ssl/server.crt');

var httpServer = http.createServer(app);
var httpsServer = https.createServer(
  {
    key: fs.readFileSync(key, 'utf8'),
    cert: fs.readFileSync(cert, 'utf8'),
  },
  app
);

httpServer.listen(8080);
httpsServer.listen(8443);
