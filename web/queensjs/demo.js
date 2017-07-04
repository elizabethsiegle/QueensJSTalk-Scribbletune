const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse; 
const bodyParser = require('body-parser');
const scribble = require('scribbletune');
//https://github.com/walmik/scribbletune
const app = express(); 
var textarr = []
app.use(bodyParser());
app.post('/', (req, res) => {
  const twiml = new MessagingResponse();
  var msg = req.body.Body.toLowerCase()
  if(msg == 'amaj') {
  	twiml.message('You sent an A major');
  	textarr.push('Amaj');
  }
  else if(msg == 'bmaj') {
  	twiml.message('You sent a B major');
  	textarr.push('Bmaj');
  }
  else if(msg == 'cmaj') {
  	twiml.message('You sent a C major');
  	textarr.push('Cmaj');
  }
  else if (msg == 'dmaj') {
  	twiml.message('You sent a D major');
  	textarr.push('Dmaj');
  }
  else if (msg == 'emaj') {
  	twiml.message('You sent a E major');
  	textarr.push('Emaj');
  }
  else if (msg == 'fmaj') {
  	twiml.message('You sent a F major');
  	textarr.push('Fmaj');
  }
  else if (msg == 'gmaj') {
  	twiml.message('You sent a G major');
  	textarr.push('Gmaj');
  }
  else if(msg == 'amin') {
    twiml.message('You sent a A minor');
    textarr.push('Amin');
  }
  else if(msg == 'bmin') {
    twiml.message('You sent a B minor');
    textarr.push('Bmin');
  }
  else if(msg == 'cmin') {
    twiml.message('You sent a C minor');
    textarr.push('Cmin');
  }
  else if(msg == 'dmin') {
    twiml.message('You sent a D minor');
    textarr.push('Dmin');
  }
  else if(msg == 'Emin') {
    twiml.message('You sent a E minor');
    textarr.push('Emin');
  }
  else if(msg == 'Fmin') {
    twiml.message('You sent a F minor');
    textarr.push('Fmin');
  }
  else if(msg == 'Gmin') {
    twiml.message('You sent a G minor');
    textarr.push('Gmin');
  }
  else {
    twiml.message('Try a different note: A-G, Amin is A minor + Bmaj is B major');
  }
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
  console.log(textarr)
  let chords = scribble.clip({
	notes: textarr,
	pattern: 'x_x_x_--'.repeat(4),
	// sizzle: true
});  

 // console.log(chords);
scribble.midi(chords, 'chords.mid');
});

//extra bass
// bass = scribble.clip({
//   notes: scribble.scale('a', 'minor', 2).slice(0, 3),
//   pattern: '--x-'.repeat(4),
//   //'x_x_x_--'.repeat(8),
//   shuffle: true
// });
// scribble.midi(bass, 'bass.mid');

http.createServer(app).listen(4040, () => {
  console.log('Express server listening on port 4040');
});
