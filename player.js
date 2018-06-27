const Tone = require('tone')

synth = new Tone.PolySynth(8, Tone.Synth)
    .toMaster()

module.exports = {
    play: chords => {
        module.exports.stop()

        let progression = new Tone.Part((time, chord) => {
            document.getElementById('current').innerText = chord
            synth.triggerAttackRelease(chord, 
                Number.isInteger(time) ? '1n' : '2n', 
                time)
        }, chords).start(0)

        progression.loop = true;
        progression.loopEnd = parseInt(
            chords[chords.length - 1][0] + 1);

        Tone.Transport.bpm.value = 140;   
        Tone.Transport.start("+0.1");
    },
    stop: () => {
        Tone.Transport.cancel();
        Tone.Transport.stop();
        
        document.getElementById('current')
            .innerText = null
    }
}