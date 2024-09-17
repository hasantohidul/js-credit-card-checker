const {validateCred, makeCardValid} = require('../src/cardValidator');
const {validCards, invalidCards} = require("../src/cardData");

// Test cases for validateCred
describe("validateCred", () => {
    test('should return true for a valid card nubmer', () => {
        const validCard = validCards[0]; // A valid card from the dataset
        expect(validateCred(validCard)).toBe(true);
    })

    test('should return false for an invalid card number', () => {
        const invalidCard = invalidCards[0]; // An invalid card from the dataset
        expect(validateCred(invalidCard)).toBe(false);
    })

    test('should throw an error for empty input', () => {
        expect(() => validateCred([])).toThrow('Invalid input: credit card number must be a non-empty array of digits');
    })

    test('should throw an error for non-array input', () => {
        expect(() => validateCred('')).toThrow('Invalid input: credit card number must be a non-empty array of digits');
        expect(() => validateCred(null)).toThrow('Invalid input: credit card number must be a non-empty array of digits');
        expect(() => validateCred(undefined)).toThrow('Invalid input: credit card number must be a non-empty array of digits');
    })

    test('should throw an error for non-numeric input', () => {
        const nonNumericCard = [a, f, d, l];
        expect(() => validateCred(nonNumericCard)).toThrow('Invalid input: credit card number must be a non-empty array of digits');
    })
})


// Test cases for makeCardValid
describe('makeCardValid', () => {
    test('should convert an invalid card to a valid one', () => {
        const invalidCard = invalidCards[0];
        const validCard = makeCardValid(invalidCard);

        expect(validateCred(validCard)).toBe(true) // the card should be valid after conversion
    })

    test('should not change a valid card', () => {
         const validCard = validCards[0];
         const newCard = makeCardValid(validCard);

         expect(validateCred(newCard)).toBe(true); // It should still be valid
         expect(newCard).toEqual(validCard) // Its should still be identical to original one
    })
})