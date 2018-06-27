const teoria = require('teoria')

module.exports = (input) =>
    input.split('|')
        .map(x => x.trim())
        .map(x => x.split(' '))
        .map(x => x.map(y => teoria.chord(y)))
        .map(x => x.map(y => y.notes()
            .map(n => n.name().toUpperCase()
                + n.accidental() 
                + n.octave())))
        .reduce((a, x, i) => {
            if(x.length == 1){
                a.push([i, x[0]]); 
            }
            else if(x.length > 1){
                x.forEach((y, j) => 
                    a.push([i + j * 0.5, y]))
            }
            return a 
        }, [])