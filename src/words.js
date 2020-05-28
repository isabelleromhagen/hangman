

/*# Övning 11

1. Skapa en ny fil som heter **words.js**. Lägg in några slumpgenerade
   ord i en array. Bygg sedan en funktion som returnera ett av orden
   ifrån arrayen. 
   
2. Importera sedan in denna fil i vår **App.js** fil och ersätt ditt
   hårdkodade ord du gjorde i *övning 6* med ordet som funktionen
   returnerar. Antal horisontella streck ska också stämma överens med
   ordets längd.
   
3. När man trycker på "återställ"-knappen så ska ett nytt ord väljas.*/

//import React from 'react';

const wordList = ['hej', 'tjena', 'goddag'];

function getWord() {
    let randy = Math.floor(Math.random() * Math.floor(wordList.length));
    return wordList[randy];
}

export default getWord;