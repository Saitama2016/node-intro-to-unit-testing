const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return fizz-buzz if number is divisible by 15', function() {
        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 30, expected: 'fizz-buzz'},
            {num: 45, expected: 'fizz-buzz'}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should return buzz if number is divisible by 5 but not 3', function() {
        const normalCases = [
            {num: 5, expected: 'buzz'},
            {num: 10, expected: 'buzz'},
            {num: 20, expected: 'buzz'}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should return fizz if number is divisible by 3 but not 5', function() {
        const normalCases = [
            {num: 6, expected: 'fizz'},
            {num: 9, expected: 'fizz'},
            {num: 12, expected: 'fizz'}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should throw an error if args are not numbers', function() {
        const badInputs = [
            [true],
            ['15'],
            [undefined]
        ];
        badInputs.forEach(function(input) {
            expect(function () {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});