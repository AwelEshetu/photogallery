//defing server and port to listen to
var connect = require('connect'),
  serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("./galleryproject"));
app.listen(5000);
