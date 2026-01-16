const palindromes = function (stringInput) {
    const stringArray = Array.from(stringInput);
    const filteredArray =  stringArray
    .map(letter => letter.toLowerCase())
    .filter(letter => /^[a-z0-9]$/.test(letter));


    // create a copy then reversed
    const reversedArray = filteredArray.slice().reverse();

    // return true if two array are same
    const arrayEqual = filteredArray.every((letter, index) => 
        reversedArray[index] === letter
    )

    return arrayEqual ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
