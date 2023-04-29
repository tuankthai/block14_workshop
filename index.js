function rtnOddNbr(arr) {
    const newArr = [];
    //loop thru the array
    //if the element is odd, push it in new array
    //out side of loop, return the new array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            newArr.push(arr[i]);      
        }

    }
    return newArr;
}

console.log("\nTAB 1: RETURN ODD NUMBERS ONLY\n");
console.log(rtnOddNbr([2, 4, 6, 8, 11, 20, 15, 22]));
console.log(rtnOddNbr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(rtnOddNbr([70, 42, 55, 81, 21, 91, 34]));
console.log(rtnOddNbr([2, 4, 6, 8, 10, 11, 12]));
console.log(rtnOddNbr([]));
console.log(rtnOddNbr([99]));

function rtnVowelConsonant(word) {

    //loop thru every char of the word
    //if the element is a vowel, count vowels
    //
    //outside of loop, print the word followed by numbers of vowels 
    // and number of consonants(equal to word lenth - numbers of vowels) it has

    const vowels  = [ "a", "e", "i", "o", "u"];
    
    let vowelCnt = 0;

    for (let i = 0; i < word.length; i++) {
        for (let k = 0; k < vowels.length; k++){
            if (word[i] === vowels[k]) {
                               
                vowelCnt++;

                // console.log("vowel is " + word[i]);
                // console.log(vowelCnt);
                break;
            } 
            
        }
                
    }
    let result = word + " has " + (word.length - vowelCnt) + " consonants and " + vowelCnt + " vowels";
    return result
}

console.log("\nTAB 2: RETURN NUMBERS OF CONSONANTS AND VOWELS OF A WORD\n");
console.log(rtnVowelConsonant("hello"));
console.log(rtnVowelConsonant("ukelele"));
console.log(rtnVowelConsonant("awesome"));
console.log(rtnVowelConsonant("onomonopia"));
console.log(rtnVowelConsonant("textbook"));

function reverseArr(arr) {
    //loop thru array starting from the end of the array backward
    //for every element, push the element  into new array
    //outside of loop, return the new array
    const newArr = [];

    console.log("\ninput: ", arr)
    for (let i = arr.length-1; i >= 0; i--) {
        
        newArr.push(arr[i]);        
        // console.log(newArr);
        
    }
    return newArr;
    
}

console.log("\nTAB 3: REVERSE THE ARRAY");
console.log( reverseArr([1, 2, 3]) );
console.log(reverseArr([1, 3, 5, 7, 9, 11]) );
console.log(reverseArr([20, 50, 30, 60, 200]) );
console.log(reverseArr([1, -1, 2, -3, 5, -8, 13]));

function fizzBuzz() {
    //for each number from 1 to 100
    //if the number is multiple of 15, print fizz buzz
    //else if the number if multiple of 3, print fizz
    //if the number is multiple of 5, print buzz
    //if none of the above, print the number

    for (let i = 1; i <= 100; i++){

        if(i % 15 === 0) {
            console.log("fizz buzz\n");
        } else if (i % 3 === 0) {
            console.log("fizz\n");

        } else if (i % 5 === 0) {
            console.log("buzz\n");

        } else {
            console.log(i, "\n");
        }

    }
}

console.log("\nTAB 4: FIZZ BUZZ\n");
fizzBuzz();

