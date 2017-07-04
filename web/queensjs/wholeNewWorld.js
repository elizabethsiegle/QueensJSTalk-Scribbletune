const scribble = require('scribbletune');
// console.log(scribble.listChords());
smarr = [
    'F#maj', 'Emaj', 'Gmaj', 'F#maj', 'Dmaj', 'A#maj', 
    'F#maj', 'Emaj', 'Gmaj', 'F#maj', 'Dmaj', 'F#maj', 'Emaj',
    'Emaj', 'D#maj', 'F#maj', 'Emaj', 'C#maj', 'Emaj', 'Dmaj',
    'C#maj', 'Dmaj', 'Bmaj', 'C#maj', 'Emaj', 'Dmaj', 'Amaj',
    'F#maj', 'Emaj', 'Gmaj', 'F#maj', 'Dmaj', 'Amaj',
    'F#maj', 'Emaj', 'Gmaj', 'F#maj', 'Dmaj', 'F#maj', 'Emaj',
    'Emaj', 'D#maj', 'F#maj', 'Emaj', 'C#maj', 'Emaj', 'Dmaj',
    'C#maj', 'Dmaj', 'Bmaj', 'C#maj', 'Emaj', 'Dmaj', 'F#maj',
    'F#maj', 'Gmaj', 'Bmaj', 'Amaj', 'Emaj', 'Gmaj', 'F#maj', 'F#maj',
    'F#maj', 'Gmaj', 'Amaj', 'C#maj', 'Bmaj', 'Amaj', 'Dmaj', 'C#maj', 'Dmaj', 'Amaj',
    'Dmaj', 'F#maj', 'Emaj', 'Dmaj', 'Emaj', 'Dmaj', 'Bmaj', 'Dmaj', 'Emaj',
    'F#maj', 'Gmaj', 'Bmaj', 'Amaj',
    'F#maj', 'Gmaj', 'Bmaj', 'Amaj', 'Emaj', 'Gmaj', 'F#maj', 'F#maj',
    'F#maj', 'Gmaj', 'Amaj', 'C#maj', 'Bmaj', 'Amaj', 'Dmaj', 'C#maj', 'Amaj','Dmaj', 'C#maj', 'Dmaj', 'Amaj',
    'Dmaj', 'F#maj', 'Emaj', 'Dmaj', 'Emaj', 'Gmaj', 'F#maj', 'Dmaj', 'C#maj', 'Dmaj',
    'Dmaj', 'Emaj', 'Gmaj', 'F#maj', 'Bmaj', 'Amaj', 'Emaj', 'Dmaj', 'C#maj'

]
let chords = scribble.clip({
	notes: smarr,
	pattern: 'x________'.repeat(124),
	// accentMap: 'x_____________'

});  
scribble.midi(chords, 'extra.mid');

 // 'A#maj', 'Bmaj', 'C#maj',
    // 'A#maj', 'Bmaj', 'Cmaj', 'C#maj', 'F#maj', 'A#maj', 'C#maj', 'Bmaj', 'A#maj', 'G#maj'