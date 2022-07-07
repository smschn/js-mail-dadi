// define variables (without value which is given next).
let humanNumber;
let computerNumber;

// generate a random number for the human player and assign it to its variable, then write in console.
humanNumber = Math.floor(Math.random() * 6 + 1);
console.log('The number drawn for the human player is ' + humanNumber);

// generate a random number for the omputer and assign it to its variable, then write in console.
computerNumber = Math.floor(Math.random() * 6 + 1);
console.log('The number drawn for the computer player is ' + computerNumber);

// if statement to check who is the winner, then print in console a message. 
if (humanNumber > computerNumber) {
    console.log('Human is the winner!');
} else if (humanNumber < computerNumber) {
    console.log('Computer is the winner! ...Skynet is not far away');
} else if (humanNumber == computerNumber) {
    console.log('It is a draw! Reload the page to test your luck again!');
}