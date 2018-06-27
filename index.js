const teoria = require('teoria')
const Tone = require('tone')

synth = new Tone.PolySynth(8, Tone.Synth)
        .toMaster()

const play = () => {
    stop()

    let input = document
        .getElementById('chord').value
    
    let chords = 
        input.split('|')
        .map(x => x.trim())
        .map(x => teoria.chord(x))
        .map(x => x.notes()
            .map(n => n.name().toUpperCase()
            + n.accidental() 
            + n.octave()))
        .reduce((a, x, i) => {
            a.push([i, x]); 
            return a 
        }, [])
   
    let progression = new Tone.Part((time, chord) => {
        document.getElementById('current').innerText = chord
        synth.triggerAttackRelease(chord, "2n", time)
    }, chords).start(0)

    progression.loop = true;
	progression.loopEnd = chords.length;

    Tone.Transport.bpm.value = 140;   
    Tone.Transport.start("+0.1");
}

const stop = () => {
    Tone.Transport.cancel();
    document.getElementById('current').innerText = null
}

document.getElementById('player')
    .onclick = play

document.getElementById('stop')
    .onclick = stop