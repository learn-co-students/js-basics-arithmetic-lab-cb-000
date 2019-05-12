/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// converts IDs from the old style to the new style
const newID = 1000000000 + oldID;

// contains 'true' when the value in 'currentAge' is a valid integer
// invokes 'Number.isInteger()'
const ageIsValid = Number.isInteger(currentAge);

// contains a random number greater than or equal to 0 and less than 20
// invokes 'Math.random()'
const randomNumber = Math.random() * 20;

// contains the value of 'randomNumber' rounded down to the nearest integer
const randomInteger = Math.floor(randomNumber);

// contains the value of 'randomNumber' rounded down to the nearest integer
const randomUserID = randomInteger + 1000000001;
