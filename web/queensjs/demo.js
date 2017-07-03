const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();
const bodyParser = require('body-parser');
const scribble = require('scribbletune');
var textarr = []
app.use(bodyParser());
app.post('/', (req, res) => {
  const twiml = new MessagingResponse();
  var msg = req.body.Body.toLowerCase()
  if(msg == 'a') {
  	twiml.message('You sent an a major');
  	textarr.push('Amaj');
  }
  else if(msg == 'b') {
  	twiml.message('You sent a b major');
  	textarr.push('Bmaj');
  }
  else if(msg == 'c') {
  	twiml.message('You sent a c major');
  	textarr.push('Cmaj');
  }
  else if (msg == 'd') {
  	twiml.message('You sent a d major');
  	textarr.push('Dmaj');
  }
  else if (msg == 'e') {
  	twiml.message('You sent a e major');
  	textarr.push('Emaj');
  }
  else if (msg == 'f') {
  	twiml.message('You sent a f major');
  	textarr.push('Fmaj');
  }
  else if (msg == 'g') {
  	twiml.message('You sent a g major');
  	textarr.push('Gmaj');
  }
  else {
    twiml.message('Try a different note: a-g');
  }
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
  console.log(textarr)
  let chords = scribble.clip({
	notes: textarr,
	pattern: 'x_x_x_--'.repeat(2),
	sizzle: true
});  
 // console.log(chords);

scribble.midi(chords, 'chords.mid');
});
bass = scribble.clip({
  notes: scribble.scale('a', 'minor', 2).slice(0, 3),
  pattern: '--x-'.repeat(4),
  shuffle: true
});
scribble.midi(bass, 'bass.mid');

http.createServer(app).listen(4040, () => {
  console.log('Express server listening on port 4040');
});
