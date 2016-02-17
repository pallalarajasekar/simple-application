/**
 * Created by harinaths on 17/2/16.
 */

var config = {
    port: 8966,
    viewPath: __dirname + '/views', //Template Engine
    publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
}

var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;


app.get('/', function(req, res){
    res.render("index")
})

app.post('/servertime',function(req,res) {


        var result=new Date();
    console.log(result)
    res.send(result)

})



