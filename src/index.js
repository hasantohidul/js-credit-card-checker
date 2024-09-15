const {validCards, invalidCards} = require('./cardData');
const {validateCred, makeCardValid} = require('./cardValidator');

// Test a valid card
console.log("Testing a valid card:", validateCred(validCards[0])); // true

// Test an invalid card
console.log("Testing an invalid card:", validateCred(invalidCards[0])); // false

// Convert an invalid card to a valid card
const validCardFromInvalid = makeCardValid(invalidCards[0]);
console.log("Validation result after conversion:", validateCred(validCardFromInvalid));  // true