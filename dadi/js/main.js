let humanNumber;
let computerNumber;

humanNumber = Math.floor(Math.random() * 6 + 1);
console.log('The number drawn for the human player is ' + humanNumber);

computerNumber = Math.floor(Math.random() * 6 + 1);
console.log('The number drawn for the human player is ' + computerNumber);

if (humanNumber > computerNumber) {
    console.log('Human is the winner!');
} else if (humanNumber < computerNumber) {
    console.log('Computer is the winner! ...Skynet is not far away');
} else if (humanNumber == computerNumber) {
    console.log('It is a draw! Reload the page to test your luck again!');
}