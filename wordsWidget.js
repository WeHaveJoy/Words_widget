const userInput = document.querySelector(".userInput");
const analyzeBtn = document.querySelector(".analyzeBtn");
const checkbox = document.querySelector(".checkbox");
const message = document.querySelector(".message");
// const wordCount = document.querySelector(".wordCount");
const messages = document.querySelector(".messages");
const messaging = document.querySelector(".messaging");
const wordsElem = document.querySelector(".words");
// const sentElem = document.querySelector(".sentElem");
// const avrg = document.querySelector(".avrg");
// const av = document.querySelector(".av");
const longestBtn = document.querySelector(".longestBtn");
// const trackBtn = document.querySelector(".trackBtn");
const list = document.querySelector(".list");
// const avBtn = document.querySelector(".avBtn");

let arrSent = [];

getSentance = () => {
    let arrSent = (localStorage.getItem("sentence") === null)
        ? []
        : JSON.parse(localStorage.getItem("sentence"))
    const userSentence = userInput.value;

    if (arrSent.length === 5) {
        arrSent.shift();
    }
    arrSent.push(userSentence);
    localStorage.setItem("sentence", JSON.stringify(arrSent));

    if (userInput.value.trim().length === 0) {
        wordsElem.innerHTML = "";
        wordCount.innerHTML = 0;
        return;
    }
}


highlightLongWords = (userInput) => {

    const words = userInput.split(" ");
    console.log(words);
    // let sent = '';

    // for (let i = 0; i < words.length; i++) {

    //     if (words[i].length > 4) {

    //         sent += `<mark  class="and">${words[i]}</mark> `

    //     } else {
    //         sent += words[i] + " ";
    //     }
    // }

    // message.innerHTML = sent;

    const wordList = words.map(word => {
        console.log(word);
        return {
            word,
            length: word.length,
            type: word.length > 4 ? "longer" : ""
        }

    });

    let longestW = {
        length: 0
    }


    wordList.forEach((word, index) => {
        if (word.length > longestW.length) {
            longestW = { ...word, index }
        }
    });

    // console.log(longestW);

    wordList[longestW.index].type = "longest";

    const longestWords = wordList.filter(word => word.length === longestW.length);

    console.log(longestWords);

    longestWords.forEach(word => word.type = "longest");


    const wordElement = wordList.map(word => {
        return `<span class="word ${word.type}" > ${word.word}
        <span class="small"> (${word.length})</span>
        </span>`
    });

     message.innerHTML = wordElement.join("");
    if (message.innerHTML.length === 0) {
        wordCount.innerHTML = 0
    } else {
        wordCount.innerHTML = words.length;
    }

}


countWords = (userInput) => {

    const words = userInput.split(" ");
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i] === " ") {
            count = +1;
        }
        count++;
    }
    return `There are ${count} words in the sentence`;


}



hideWords = (userInput) => {
    const words = userInput.split(" ");
    let sent = '';
    for (let i = 0; i < words.length; i++) {
        if ((checkbox.checked == true) && (words[i].length >= 5)) {
            sent += `<mark  class="and">${words[i]}</mark> `

        } if (checkbox.checked == false) {
            // sent += " ";
            message.innerHTML = getSentance();
        }
    }

    message.innerHTML = sent;
}


// longestWord = (userInput) => {
//      const words = userInput.split(" ");
// let sent = '';
// let longest = [];
// for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (words[i].length > 5) {

//         longest.push(word)
//         sent += `<mark  class="and"> ${longest} </mark>`

//     } else {
//         sent += " ";

//     }
//     messages.innerHTML = sent;
//     messages.innerHTML = `<mark  class="dd"> ${longest} </mark>`;
// }

//     let longest = {
//         length : 0
//     };


// }



keepTrack = () => {
    list.innerHTML = ''
    const userSentence = userInput.value;

    if (localStorage.getItem("sentence") === null) {

        arrSent.push(userSentence);
        localStorage.setItem("sentence", JSON.stringify(arrSent));
    }


    else {
        arrSent = JSON.parse(localStorage.getItem("sentence"))
    }

    console.log(arrSent);
    for (let i = 0; i < arrSent.length; i++) {
        const element = arrSent[i];

        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(element));

        list.appendChild(entry);

    }

    // Where can i ge the chicken pie?
    // Hi Sino, are you good today?
    // The color of my ball is green.
    // What is the color of your skirt?
    // which animal do you like the most?
    // What is the most dengerous animal?

}

console.log(keepTrack());

clickSentence = (event) => {
    // console.log(event.target.innerHTML);
     highlightLongWords(event.target.innerHTML);
    // countWords(event.target.innerHTML);
    hideWords(event.target.innerHTML);
    // longestWord(event.target.innerHTML);
    // avLastSent(event.target.innerHTML);
}


// const sentenceAvgWordLength = (sentence) => {
//     const words = sentence.split(" ");
//     let total = 0;

//     words.forEach(word => {
//         total += word.length
//     });

//     return Math.round(total / words.length)
// }

// const averageWordLength = () => {
//     console.log(arrSent);

//     let total = 0;
//     for (let i = 0; i < arrSent.length; i++) {
//         const sentence = arrSent[i];
//         const wordAvg = sentenceAvgWordLength(sentence);
//         total += wordAvg
//         // if (sentence) {
//         //     average = arrSent.length / i;
//         // }
//         // console.log(element);
//     }

//     const avg = Math.round(total / arrSent.length)
//     //

//     avrg.innerHTML = `The average word length of the sentences is ${avg}`;
// };


// const avLastSent = (userInput) => {


//     if (!userInput === (" ")) {
//         return userInput.length;
//     };
//     const { length: strLen } = userInput;
//     const { length: numWords } = userInput.split(" ");
//     const arvge = (strLen - numWords + 1) / numWords;

//     console.log(arvge);
//     av.innerHTML = `The average of the last sentence is ${arvge} `;
// }


// const changeColor = () => {
//     var higher= "green";
//     var lower= "orange";

//     // if (higher) {
//     //     display = green;
//     // }
//     // else if(lower){
//     //     display = orange;
//     // }
//     if (avLastSent > averageWordLength) {
//         console.log(avLastSent > averageWordLength);
//         return higher;

//     }
//     else if (avLastSent < averageWordLength) {
//         console.log(avLastSent < averageWordLength);
//         return lower;
//     }

// }

// console.log(getSentance());

analyzeBtn.addEventListener('click', function () {

    message.innerHTML = getSentance();
    message.innerHTML = highlightLongWords(userInput.value);
    messages.innerHTML = countWords(userInput.value);
    // countWords(userInput.value);
    // longestWord(userInput.value);
    messaging.innerHTML = keepTrack();
    averageWordLength();
})


checkbox.addEventListener('click', function () {
    hideWords(userInput.value);
})


// trackBtn.addEventListener('click', keepTrack);


list.addEventListener('click', clickSentence);


// avBtn.addEventListener('click', function () {
//     averageWordLength();
//     avLastSent(userInput.value);
//     // changeColor();
// });