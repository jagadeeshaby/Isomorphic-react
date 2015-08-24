var routes = require('./routes/post.routes');
var React = require('react/addons');
var alt = require('./src/alt');
var Iso = require('iso');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Router = require('react-router');
var app = express();
var posts = require('./routes/post.routes');
var routes = require('./src/routes.jsx')
// where views are located
app.set('views', __dirname+'/views');
// using jade templating
app.set('view engine', 'jade');
// serving static files with help of a built-in middleware in Express - express.static.
app.use(express.static(path.join(__dirname, 'public')));
// body-parser is a piece of express middleware that 
// reads a form's input and stores it as a javascript
// object accessible through `req.body`
// bodyParser.json() Returns middleware that only parses json.
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json 
app.use(bodyParser.json({limit : '50mb'}));
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names
// app.use(cookieParser())
// app.get('/', function(req, res) {
// console.log("Cookies: ", req.cookies)
// })
app.use(cookieParser());


//use Routes here
app.use('/',posts);

//middleware that is run at the last
app.use(function(req,res){
  // initial the flux store state based on res.locals.data	
  alt.bootstrap(JSON.stringify(res.locals.data || {}));
  //Iso is a class. You instantiate it, 
  //add your markup, add some data to go with it, and render it. 
  //On the client side Iso picks up what you sent down and gives it back to you so you can bring your content to life.
  var iso = new Iso();
  //Router.run()  React Router checks the routes and decides the appropriate Handler and calls the supplied callback.
  Router.run(routes,req.url,function(handler){
   // content for the component based on the handler
   var content = React.renderToString(React.createElement(handler));
   // Provide html ( content )  and  Store data to ISO which will be retrieved on client side.    
   // alt.flush() gives you the state and clears the Flux Stores immediately so that you can use them for the next request.
   iso.add(content,alt.flush());
   //send the markup to the client
   res.render('index',{content:iso.render()});
  });
});

//listen at 3011
app.listen(3011, function () {
    console.log('Listening on localhost:3011');
});