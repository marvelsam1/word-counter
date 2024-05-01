function getWords() {
    let getText = document.getElementById('text-box').value

    // get number of words
    const getWordsLength = getText.split(' ').length;
    document.getElementById('words').innerHTML = getWordsLength

    const getWordsPerLine = getText.split('/n')
    console.log(getWordsPerLine.length)

    // get length of characters
    const getCharactersLength = getText.length
    document.getElementById('characters').innerHTML = getCharactersLength
}
