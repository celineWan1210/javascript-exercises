const sumAll = function(startNum, endNum) {
    // make sure no negative number
    if (startNum < 0 || endNum < 0 || !Number.isInteger(startNum) || !Number.isInteger(endNum)) {
        return "ERROR";
    }

    // make sure endNum is the largest
    if (endNum < startNum) {
        [startNum, endNum] = [endNum, startNum]
    }
    let total = 0;

    for (let i = endNum; i >= startNum; i--) {
        total += endNum;
        endNum--;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
