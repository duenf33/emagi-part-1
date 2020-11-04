const emojis = require('./emojis.js')

const translateWord = function(word){
    const words = ''
    for(let i = 0; i < emojis.length; i++){
        if(word === emojis[i].name){
            return emojis[i].symbol;
        }
    // word === emojis[i].name ? emojis[i].symbol : word
    }
    return word;
}

module.exports = translateWord;