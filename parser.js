const teoria = require('teoria')

module.exports = (input) =>
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