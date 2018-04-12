const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
// var http = require('http').Server(app);
var socket = require('socket.io');

var arr = ["What if another advanced species existed?", "What if Earth were twice as big?", "What if a giant asteroid hadn't wiped out the dinosaurs?",
           "What if everyone on Earth jumped at once?", "What if humans were twice as intelligent?", "What if all the cats in the world suddenly died?",
           "What if there were no gravity?", "What if you only ate one type of food?", "What if the sun were half as big?"]

console.log(arr)

function shuffle(a) {
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    return a;
}

// view engine setup
app.set('view engine', 'ejs');

app.use(express.static('public'))


app.get("/", function(req, res) {
  // console.log(req.session.ingelogd);
  res.render("index")
  // shuffle(arr);
})

var server = app.listen(4000, function(){
  console.log('port 4000')
})

var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection', socket.id);

  socket.on('chat', function(data){
    data.arr = shuffle(arr);
    console.log('chat');
    io.sockets.emit('chat', data);
  });

  socket.on('whatif', function(data){
    console.log('chat');
    io.sockets.emit('whatif', data);
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data)
  });
})
