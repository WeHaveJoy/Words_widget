const userInput = document.querySelector(".userInput");
const wordBtn = document.querySelector(".wordBtn");
const hideHighlightBtn= document.querySelector(".hideHighlightBtn");
const message = document.querySelector(".message");
const highlighted = document.querySelector(".highlighted");
   

    

function getSentance(){
    const userSentance = userInput.value;
    if(userSentance){
        return ` ${userSentance}`;
    }

}


    function highlightLongWords(userInput){

        let longestWord = "abcde";
      
        const words = userInput.split(" ");


        for(let i = 0 ; i < words.length; i++){

            if(words[i].length > longestWord.length){

                userInput.innerHTML = userInput.innerHTML.replace(words[i],`<mark>${words[i]}</mark>`)

            }
        }  

    }

    
  wordBtn.addEventListener('click', function () {
    message.innerText = getSentance();
    highlightLongWords(userInput.value);
    })

