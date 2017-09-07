### Introduction
Text a Twilio number a music note (A-G), and make music with Node.JS! Check out the Node module [ScribbleTune](https://github.com/walmik/scribbletune).
To get started with Twilio in Node.js, check out the [documentation](https://www.twilio.com/docs/guides/how-to-receive-and-reply-in-node-js#what-is-a-webhook).
For full list of talks, check out my [talks repo](https://github.com/elizabethsiegle/talks).

### Developer Environment
Twilio needs to send requests to your Node app and Ngrok lets us do this. Install <a href = "https://ngrok.com/">it</a> if you haven’t already. Once that’s done, run the following command in your terminal in the directory you’ll put your code in.
```ngrok http 4040```
This gives us a publicly-accessible URL to the Flask app so we can configure our Twilio phone number.

If you don't have a Twilio number already, visit the documentation here and check out the gif below.
<img src = "https://user-images.githubusercontent.com/8932430/27795492-5fb4989a-5fd4-11e7-89ce-6886e6940190.gif">

### Code
First, let's install all the Node.js helper libraries, including Twilio, Express, and the body-parser middleware to handle parsing the body of the POST request. On the command line in your directory, type
<br>
```npm install twilio http express body-parser```


Make a new file called <em>demo.js</em>. At the top, include the following lines:
<br>
```const http = require('http');```
<br>
```const express = require('express');```
<br>
```const MessagingResponse = require('twilio').twiml.MessagingResponse; ```
<br>
```const bodyParser = require('body-parser');```
<br>
```const scribble = require('scribbletune'); ```

Next, we'll want to make our Express app and an array to hold each incoming SMS we receive which should be a single letter representing a music chord. We'll also want to tell our app to use body-parser.
<br>
```const app = express(); ```
<br>
```var textarr = []```
<br>
```app.use(bodyParser());```

Next, we'll want to receive the incoming SMS messages and check if they're a single chord.

```app.post('/', (req, res) => {
  const twiml = new MessagingResponse();
  var msg = req.body.Body.toLowerCase()
  if(msg == 'a') {
  	twiml.message('You sent an A major');
  	textarr.push('Amaj');
  }
  else if(msg == 'b') {
  	twiml.message('You sent a B major');
  	textarr.push('Bmaj');
  }
  else if(msg == 'c') {
  	twiml.message('You sent a C major');
  	textarr.push('Cmaj');
  }
  else if (msg == 'd') {
  	twiml.message('You sent a D major');
  	textarr.push('Dmaj');
  }
  else if (msg == 'e') {
  	twiml.message('You sent a E major');
  	textarr.push('Emaj');
  }
  else if (msg == 'f') {
  	twiml.message('You sent a F major');
  	textarr.push('Fmaj');
  }
  else if (msg == 'g') {
  	twiml.message('You sent a G major');
  	textarr.push('Gmaj');
  }
  else {
        twiml.message('Try a different note: A-G');
  }
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
  console.log(textarr);
  let chords = scribble.clip({
	 notes: textarr,
	 pattern: 'x_x_x_--'.repeat(4),
	 // sizzle: true
});  
```

Check out <a href = "https://github.com/walmik/scribbletune">Scribbletune</a> for more information on making your music.

Now in your terminal type ```node demo.js```.

This will create a <em>midi</em> file which you can drop into Garage Band to hear and edit your music, like this:
<img src = "https://user-images.githubusercontent.com/8932430/27797036-1b167644-5fda-11e7-8439-732608a7817a.gif">

Turn up the volume, and have fun making music with Node.js. 
