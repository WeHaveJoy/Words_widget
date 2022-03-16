const userInput = document.querySelector(".userInput");
const wordBtn = document.querySelector(".wordBtn");
const checkbox = document.querySelector(".checkbox");
const message = document.querySelector(".message");
const messages = document.querySelector(".messages");
const longestBtn = document.querySelector(".longestBtn");




function getSentance() {
    const userSentance = userInput.value;
    if (userSentance) {
        return ` ${userSentance}`;
    }

}


function highlightLongWords(userInput) {

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


function countWords(userInput) {
    console.log(userInput);
    const words = userInput.split(" ");
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        console.log(words[i]);
        if (words[i] === " ") {
            count = +1;
        }
        count++;
    }
    return `There are ${count} words in the sentence`;


}


function hideWords() {
    const hidenWords = userInput.value;
    const words = hidenWords.split(" ");
    let sent = '';
    for (let i = 0; i < words.length; i++) {
        if ((checkbox.checked == true) && (words[i].length >= 5)) {
            console.log(words[i].length > 4);

            sent += `<mark  class="and">${words[i]}</mark> `

        } else {
            sent += " ";

        }
        console.log(i, sent);

    }

    message.innerHTML = sent;
}


function longestWord() {
    const hidenWords = userInput.value;
    const words = hidenWords.split(" ");
    let sent = '';
    let longest = [0];
    for (let i = 0; i < words.length; i++) {
        if ((checkbox.checked == true) && (longest.length < words[i].length)) {
            console.log(longest.length < words[i].length);
            longest = words[i];
            console.log(longest);
            sent += `<mark  class="and">${longest}</mark> `

        } else {
            sent += " ";

        }
        messages.innerHTML = `The longest word in the sentance is ${longest}`;
        message.innerHTML = sent;
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

    // Hi Sino, are you good today?

