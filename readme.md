## assignment 1
For the assignment I had to make a chat by implementing sockets. In the beginning I was struggling, because I didn't know where to start. I went on Google and was searching for a good tutorial. The tutorial on the website of sockets.io was something I didn't really understood. Eventually, I ended up in a really good YouTube tutorial who explained everything in great detail.

![whatifpreview]
![whatifchat]

## Progression
I started with a basic Node.js setup with the modules I basically need: "express", "ejs" and "bodyparser". I than started installing the sockets packages with "npm install socket.io". With the module now implemented it was time to make a basic chat.

I saved the server in a variable and connected the server to the socket. The moment the server has been connected a callback function will be activated. The callback function contains all the information from the chat. In chat.js I defined what must happen when the actions has been completed. I also added a broadcast, so the "user is typing..." will be deleted the moment the user has send the message.

## Tools used
* Express server
* EJS templates
* Socket.io
* JavaScript

## The game
In the end I made a "whatif" game. When the user begins the chat with "/whatif" there will come a random question for the whole chat to discuss. The questions are being saved in a array on the server. The array will be randomized every time the server is started.


[whatifpreview]: whatifpreview.jpg
[whatifchat]: whatifchat.jpg
