// user input.
const userMail = prompt('Please, enter your email address.');

// declare variable (array).
const mailList = ['user1@google.com', 'user2@apple.com', 'user3@microsoft.com', 'user4@boolean.com']

// for loop to cycle through the array to check if the mail address is inside the array.
for (i=0; i<mailList.length; i++) {
    if (userMail == mailList[i]) {
        alert('Access granted! Your profile page will load shortly.')
        i = mailList.length;
    }
}