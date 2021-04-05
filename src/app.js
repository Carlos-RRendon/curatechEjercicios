const app = require ('./server');

//Iniciar el server
var server = app.listen( app.get('port'), ()=> {
    console.log(`Listening on http://localhost:${app.get('port')}`);
})