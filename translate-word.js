const emojis = require('./emojis.js')

const translateWord = function(word){
    for(let i = 0; i < emojis.length; i++){
        // console.log(emojis[i].name)
        return console.log(word === emojis[i].name ? emojis[i].symbol : word)
    //     if(word.length === word.length){
    //        return console.log('word')//?
        }
    // }
    // return console.log('here')//?
}

module.exports = translateWord;