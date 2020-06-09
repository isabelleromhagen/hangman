
const wordList = ['hej', 'tjena', 'snål', 'päron', 'pyramid', 'fiol', 'bark', 'julgran', 'hemsökt', 'kanin', 'morot', 'grus', 'fotbad'];

function getWord() {
    let randy = Math.floor(Math.random() * Math.floor(wordList.length));
    return wordList[randy];
}

export default getWord;