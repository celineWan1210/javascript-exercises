const fibonacci = function(input) {
    // first and second of fibonanci is 1, 1
    fibonacciArray = [1, 1];

    if (input == 0) {
        return 0;
    } else if (input < 0) {
        return "OOPS";
    }

    if (input > 2) {
        for (let i = 2; i < input; i++) {
            fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2]);
        }
    }

    return fibonacciArray[input-1];
};

// Do not edit below this line
module.exports = fibonacci;
