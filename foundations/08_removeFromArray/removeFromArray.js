const removeFromArray = function(...argv) {
    // turn argument into array
    argvArray = Array.from(argv);

    // first argument is the orginal array
    array = argvArray[0];

    numbersToRemove = argvArray.slice(1);

    // filter out any number that includes in the numberToRemove array
    return array
        .filter(number => !numbersToRemove.includes(number));
};

console.log((removeFromArray([1, 2, 3, 4], 3, 2)))

// Do not edit below this line
module.exports = removeFromArray;
