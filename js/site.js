function reverseString() {
    //Get the User's Word
    let regex = /[\W_]/g;
    let userWord = document.getElementById("tacoCat").value;
    let cleanedWord = userWord.replaceAll(" ", "");
    cleanedWord = cleanedWord.toLowerCase().replace(regex, "");
    let start = cleanedWord.length - 1;
    let reverseWord = "";
    //Frank
    //[F,r,a,n,k
    //[0,1,2,3.4]-1
    //For Loop
    for (let i = start; i >= 0; i--) {
        reverseWord = reverseWord + cleanedWord[i];
        //Better Code: reverseWord += cleanedWord[i}]
    }

    let output = document.getElementById("tacoOutput");
    output.innerText = reverseWord

    //Compare userWord to reverseWord
    let resultOutput = document.getElementById("palindromeOutput");

    if (cleanedWord == reverseWord) {
        resultOutput.innerText = "It's a Palindrome!";


    } else {
        resultOutput.innerText = "Sorry, Not a Palindrome!";
    }

}