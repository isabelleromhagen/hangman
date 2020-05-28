
const wordList = ['hej', 'tjena', 'stolpskott', 'päron', 'pyramid', 'fiol', 'bark', 'julgran', 'hembakat'];

function getWord() {
    let randy = Math.floor(Math.random() * Math.floor(wordList.length));
    return wordList[randy];
}

export default getWord;