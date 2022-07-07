const userMail = prompt('Please, enter your email address.');

const mailList = ['user1@google.com', 'user2@apple.com', 'user3@microsoft.com', 'user4@boolean.com']

for (i=0; i<mailList.length; i++) {
    if (userMail == mailList[i]) {
        alert('Access granted! Your profile page will load shortly.')
        i = mailList.length;
    } else {
        alert('Access not allawed! Please, enter a correct email address.')
        i = mailList.length;
    }
}

// debug
console.log(userMail);
console.log(mailList);