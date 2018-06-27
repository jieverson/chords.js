const parser = require('./parser')
const player = require('./player')

document.getElementById('player')
    .onclick = () => {
        let input = document
            .getElementById('chord').value
        
        let chords = parser(input)
    
        player.play(chords)
    }

document.getElementById('stop')
    .onclick = player.stop