# JS Credit Card Checker

A simple and efficient JavaScript utility for validating credit card number using Luhn algorithm. The project includes sample valid and invalid card data, a function to validate card numbers, a function to transform invalid card into valid card, comprehensive unit tests for both the functions. I built the project as a part of Codecademy's front end engineer path's challenge projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

To use the project locally, clone the repository and install necessary dependencies:

```bash
git clone https://github.com/hasantohidul/js-credit-card-checker.git
cd js-credit-card-checker
npm install
```

## Usage

### Validate a Credit Card

```javascript
const { validateCred } = require("./cardValidator");
const cardNumber = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
console.log(validateCred(cardNumber)); // true or false
```

### Convert an Invalid Card

```javascript
const { makeCardValid } = require("./cardValidator");
const invalidCard = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
console.log(makeCardValid(invalidCard)); // returns valid card
```

## Features

- **Luhn Algorithm:** Validates card numbes using the widely accepted Luhn algorithm.
- **Invalid Card Fixer:** Converts invalid card numbers into valid ones.
- **Test Coverage:** Includes unit tests for both valid and invalid card numbers.
- **Error Handling:** Handles invalid input types, such as non-array inputes or empty arrays, by throwing errors.
## Testing

Run unit tests using Jest

```bash
npm test
```

## Project Structure
```markdown
js-credit-card-checker/
├── .gitignore             # Specifies files to ignore in version control
├── LICENSE                # Project's MIT license
├── README.md              # Project documentation
├── src/
│   ├── cardData.js        # Contains sample valid and invalid card numbers
│   ├── cardValidator.js   # Implements the Luhn algorithm for validating credit card numbers
│   └── index.js           # Main entry point for running the validation logic
├── test/
│   └── cardValidator.test.js  # Unit tests for card validation functions using Jest
├── package.json           # Project metadata, dependencies, and scripts
├── package-lock.json      # Lock file for npm dependencies

```

## License

This project is licensed under the MIT License.
