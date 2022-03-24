const userInput = document.querySelector(".userInput");
const wordBtn = document.querySelector(".wordBtn");
const checkbox = document.querySelector(".checkbox");
const message = document.querySelector(".message");
const messagee = document.querySelector(".messagee");
const messages = document.querySelector(".messages");
const avrg = document.querySelector(".avrg");
const av = document.querySelector(".av");
const longestBtn = document.querySelector(".longestBtn");
const trackBtn = document.querySelector(".trackBtn");
const list = document.querySelector(".list");
const avBtn = document.querySelector(".avBtn");

let arrSent = [];

getSentance = () => {
    let arrSent = (localStorage.getItem("sentence") === null)
        ? []
        : JSON.parse(localStorage.getItem("sentence"))
    const userSentence = userInput.value;

    if (arrSent.length === 5) {
        arrSent.shift();
        // arrSent.push(userSentence);
    }
    arrSent.push(userSentence);
    localStorage.setItem("sentence", JSON.stringify(arrSent));


}


highlightLongWords = (userInput) => {

    const words = userInput.split(" ");
    let sent = '';

    for (let i = 0; i < words.length; i++) {

        if (words[i].length > 4) {

            sent += `<mark  class="and">${words[i]}</mark> `

        } else {
            sent += words[i] + " ";
        }
    }

    message.innerHTML = sent;

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
    // const hidenWords = userInput.value;
    const words = userInput.split(" ");
    let sent = '';
    for (let i = 0; i < words.length; i++) {
        if ((checkbox.checked == true) && (words[i].length >= 5)) {
            // console.log(words[i].length > 4);
            sent += `<mark  class="and">${words[i]}</mark> `

        } else {
            sent += " ";

        }
    }

    messagee.innerHTML = sent;
}


longestWord = (userInput) => {
    // const hidenWords = userInput.value;
    const words = userInput.split(" ");
    let sent = '';
    let longest = [0];
    for (let i = 0; i < words.length; i++) {
        if ((checkbox.checked == true) && (longest.length < words[i].length)) {

            longest = words[i];
            sent += `<mark  class="and"> ${longest} </mark> `

        } else {
            sent += " ";

        }
        messages.innerHTML = sent;
        messages.innerHTML = `The longest word in the sentance is <mark  class="dd"> ${longest} </mark>`;
    }
}


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


clickSentence = (event) => {
    console.log(event.target.innerHTML);
    highlightLongWords(event.target.innerHTML);
    countWords(event.target.innerHTML);
    hideWords(event.target.innerHTML);
    longestWord(event.target.innerHTML);
    avLastSent(event.target.innerHTML);
}


const sentenceAvgWordLength = (sentence) => {
    const words = sentence.split(" ");
    let total = 0;

    words.forEach(word => {
        total += word.length
    });

    return Math.round(total / words.length)
}

const averageWordLength = () => {
    console.log(arrSent);

    let total = 0;
    for (let i = 0; i < arrSent.length; i++) {
        const sentence = arrSent[i];
        const wordAvg = sentenceAvgWordLength(sentence);
        total += wordAvg
        // if (sentence) {
        //     average = arrSent.length / i;
        // }
        // console.log(element);
    }

    const avg = Math.round(total / arrSent.length)
    //

    avrg.innerHTML = `The average word length of the sentences is ${avg}`;
};


const avLastSent = (userInput) => {


    if (!userInput === (" ")) {
        return userInput.length;
    };
    const { length: strLen } = userInput;
    const { length: numWords } = userInput.split(" ");
    const arvge = (strLen - numWords + 1) / numWords;

    console.log(arvge);
    av.innerHTML = `The average of the last sentence is ${arvge} `;
}

const avDifference = () => {

    if (avLastSent > averageWordLength) {
        console.log(avLastSent > averageWordLength);
        return "green";

    }
    else if (avLastSent < averageWordLength) {
        console.log(avLastSent < averageWordLength);
        return "warning"
    }

}


wordBtn.addEventListener('click', function () {

    message.innerHTML = getSentance();
    highlightLongWords(userInput.value);
    messages.innerHTML = countWords(userInput.value);
    countWords(userInput.value);
})


checkbox.addEventListener('click', function () {
    hideWords(userInput.value);
    longestWord(userInput.value);
})


trackBtn.addEventListener('click', keepTrack);


list.addEventListener('click', clickSentence);


avBtn.addEventListener('click', function () {
    averageWordLength();
    avLastSent(userInput.value);
    avDifference();
});