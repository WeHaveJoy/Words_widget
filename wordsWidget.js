const userInput = document.querySelector(".userInput");
const wordBtn = document.querySelector(".wordBtn");
const hideHighlightBtn = document.querySelector(".hideHighlightBtn");
const message = document.querySelector(".message");
const countBtn = document.querySelector(".countBtn");




function getSentance() {
    const userSentance = userInput.value;
    if (userSentance) {
        return ` ${userSentance}`;
    }

}


function highlightLongWords(userInput) {

    // let longestWord = "abcde";

    const words = userInput.split(" ");
    let sent = ''

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
    return count;

}

wordBtn.addEventListener('click', function () {
    message.innerText = getSentance();
    highlightLongWords(userInput.value);
    countWords(userInput.value);
})

countBtn.addEventListener('click', function () {

    message.innerHTML = countWords(userInput.value);
})
