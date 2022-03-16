const userInput = document.querySelector(".userInput");
const wordBtn = document.querySelector(".wordBtn");
const hideHighlightBtn = document.querySelector(".hideHighlightBtn");
const message = document.querySelector(".message");
const messages = document.querySelector(".messages");
// const countBtn = document.querySelector(".countBtn");




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

wordBtn.addEventListener('click', function () {
    
    message.innerText = getSentance();
    highlightLongWords(userInput.value);
     messages.innerHTML = countWords(userInput.value);
      countWords(userInput.value);
})

// Hi Sino, are you good today?

