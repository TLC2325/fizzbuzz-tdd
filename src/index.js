'use strict';

// Print integers (numbers) 1 to N (e.g. N could be… 100)
// Print “Fizz” if an integer is divisible by 3
// Print “Buzz” if an integer is divisible by 5
// And print “FizzBuzz” if an integer is divisible by both 3 and 5.

function fizzbuzz(num) {
    let result = [];
    for (let counter = 1; counter <= num; counter++) {
        if (counter % 3 === 0 && counter % 5 === 0) {
            result.push("FizzBuzz");
        } else if (counter % 3 === 0) {
            result.push("Fizz");
        } else if (counter % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(counter);
        }
    }
    return result;
}

module.exports = fizzbuzz;
