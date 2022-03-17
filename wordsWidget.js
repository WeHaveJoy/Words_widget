const userInput = document.querySelector(".userInput");
const wordBtn = document.querySelector(".wordBtn");
const checkbox = document.querySelector(".checkbox");
const message = document.querySelector(".message");
const messagee = document.querySelector(".messagee");
const messages = document.querySelector(".messages");
const longestBtn = document.querySelector(".longestBtn");
const trackBtn = document.querySelector(".trackBtn");
const list = document.querySelector(".list");


getSentance = () => {
    let arrSent = (localStorage.getItem("sentence") === null)
        ? [] 
        : JSON.parse(localStorage.getItem("sentence"))
    const userSentence = userInput.value;
    // console.log(arrSent);
    arrSent.push(userSentence);
    localStorage.setItem("sentence", JSON.stringify(arrSent));

    // if (localStorage.getItem("sentence") === null) {
        
    // }/
    // else {
    //     console.log(arrSent);
    //     arrSent = JSON.parse(localStorage.getItem("sentence"))
    // }
    // if (userSentence) {
    //     arrSent.push(userSentence)
    //     localStorage.setItem("sentence", arrSent)
    //     return ` ${userSentence}`;
    // }

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
    // console.log(userInput);
    const words = userInput.split(" ");
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        // console.log(words[i]);
        if (words[i] === " ") {
            count = +1;
        }
        count++;
    }
    return `There are ${count} words in the sentence`;


}


hideWords = () => {
    const hidenWords = userInput.value;
    const words = hidenWords.split(" ");
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


longestWord = () => {
    const hidenWords = userInput.value;
    const words = hidenWords.split(" ");
    let sent = '';
    let longest = [0];
    for (let i = 0; i < words.length; i++) {
        if ((checkbox.checked == true) && (longest.length < words[i].length)) {
            // console.log(longest.length < words[i].length);
            longest = words[i];

            // console.log(longest);
            sent += `<mark  class="and"> ${longest} </mark> `
            // console.log(sent);
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
    let arrSent = [];

    if (localStorage.getItem("sentence") === null) {

        arrSent.push(userSentence);
        localStorage.setItem("sentence", JSON.stringify(arrSent));
    }
    else {
        arrSent =  JSON.parse(localStorage.getItem("sentence"))
    }
        console.log(arrSent);
    for (let i = 0; i < arrSent.length; i++) {
        const element = arrSent[i];
        // console.log(element);

        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(element));
        list.appendChild(entry);
       
    }
}


wordBtn.addEventListener('click', function () {

    message.innerHTML = getSentance();
    highlightLongWords(userInput.value);
    messages.innerHTML = countWords(userInput.value);
    countWords(userInput.value);
})

checkbox.addEventListener('click', function () {
    hideWords();
    longestWord();
})

trackBtn.addEventListener('click', keepTrack);

