// Luhn algorithm to validate a credit card number
function validateCred(creditCardNumber) {
  let sum = 0;
  const cardLength = creditCardNumber.length;
  const isEvenLength = cardLength % 2 === 0;

  for (let i = 0; i < cardLength; i++) {
    let currDigit = creditCardNumber[i];
    if ((i % 2 === 0) === isEvenLength) {
      currDigit *= 2;
      if (currDigit > 9) currDigit -= 9;
    }

    sum += currDigit;
  }

  return sum % 10 === 0;
}

// Convert invalid card number to a valid one
function makeCardValid(invalidCard) {
  let sum = 0;
  let card = [...invalidCard];
  let isEvenLength = card.length % 2 === 0;

  for (let i = 0; i < card.length; i++) {
    let currDigit = card[i];
    if ((i % 2 === 0) === isEvenLength) {
      currDigit *= 2;
      if (currDigit > 9) currDigit -= 9;
    }
    sum += currDigit;
  }

  let remainder = sum % 10;

  if (remainder !== 0) {
    card[card.length - 1] = (card[card.length - 1] + (10 - remainder)) % 10;
  }
  return card;
}


// Exporting the functions for use in other files
module.exports = {validateCred, makeCardValid}