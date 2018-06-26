const teoria = require('teoria')
const Tone = require('tone')

const synth = new Tone.PolySynth(8, Tone.Synth)
        .toMaster()

const play = () => {
    let chordStr = document
        .getElementById('chord').value

    let chord = teoria.chord(chordStr)
    console.log(chord.toString())
    
    let notes = chord.notes()
        .map(x => x.name() 
            + x.accidental() 
            + x.octave())
    
    console.log(notes)

    synth.triggerAttackRelease(notes, "2n")
}

document.getElementById('player')
    .onclick = play