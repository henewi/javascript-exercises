// Take 2 numbers
// Fill in the gaps
// Add up the new array 
// log the answer

const arr = Array.from({
    length: 5 
}, (v,k) => k + 1)

console.log(arr)

const sumAll = arr.reduce(add,0);
    function add(accumulator, a) {
        return accumulator + a;
    }

console.log(sumAll)

// Do not edit below this line
module.exports = sumAll;
