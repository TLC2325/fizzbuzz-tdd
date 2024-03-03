const fizzbuzz = require('./src/index.js'); // importing the module to test:

describe("fizzBuzz tests", () => {
    test("Given a number, num, as input, it returns an array from 1 to the num", () => {
        // arrange (setup)
        const num = 2;
        // ACT - call function
        let result = fizzbuzz(num);
        // Asset
        expect(result).toEqual([1, 2]);
    });

    test("Given a number that is divisble by 3, it prints 'Fizz'", () => {
        // arrange (setup)
        const num = 3;
        // ACT - call function
        let result = fizzbuzz(num);
        // Asset
        expect(result).toEqual([1, 2, "Fizz"]);
    });

    test("Given a number that is divisble by 5, it prints 'Buzz'", () => {
        // arrange (setup)
        const num = 5;
        // ACT - call function
        let result = fizzbuzz(num);
        // Asset
        expect(result).toEqual([1, 2, "Fizz", 4, "Buzz"]);
    });

    test("Given a number that is divisble by 3 and 5, it prints 'FizzBuzz'", () => {
        // arrange (setup)
        const num = 15;
        // ACT - call function
        let result = fizzbuzz(num);
        // Asset
        expect(result).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    });


});
