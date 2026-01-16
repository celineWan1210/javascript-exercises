const findTheOldest = function(people) {
    const sortOldest = people
    // x ?? y -> return y if x is undefined
    .sort(function(a,b){return ((b.yearOfDeath ?? new Date().getFullYear()) - b.yearOfBirth) - ((a.yearOfDeath ?? new Date().getFullYear()) - a.yearOfBirth)});

    return sortOldest[0];
};  

// Do not edit below this line
module.exports = findTheOldest;
