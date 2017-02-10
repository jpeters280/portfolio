var express  = require( 'express' ), // this loads the express code from node-modules folder
    path     = require( 'path' ), // this should come as a default from express
    root     = __dirname, // this sets up my root variable as my current directory name
    port     = process.env.PORT || 8000, // this sets up my local host server port to 8000
    bp       = require('body-parser'), // loaded from node-modules folder so that I can parse http requests
    app      = express(); // creates an express application object, with all the methods and attributes attached.

app.use( express.static( path.join( root, 'client' ))); // this tells the application that the static files are in ./client
app.use( express.static( path.join( root, 'bower_components' ))); // other static files in ./bower_components
app.use( express.static( path.join( root, 'node_modules' ))); // other static files in ./node_modules
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));
require('./server/config/routes.js')(app); // this loads and runs the routes files for backend route set up.

// app.route('/*').get(function(req, res) { // this removes the hash from the routes
//     return res.sendFile(path.join(__dirname, 'client/index.html')); 
// });

app.listen( port, function() {
	console.log( 'server running on port ' + port );
});