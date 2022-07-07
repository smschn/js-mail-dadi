// user mail taken from input.
const userMail = document.getElementById('mail');

// debug - user has not typed yet: now <input> is empty with no value.
console.log(userMail.value);

// declare variable (array).
const mailList = ['user1@google.com', 'user2@apple.com', 'user3@microsoft.com', 'user4@boolean.com']

// variable to show the for loop result on html page
let outputDom = document.getElementById('output');

// click on button
const buttonClick = document.getElementById('sentMail');
buttonClick.addEventListener('click',
function() {

    // debug - user has typed the mail and clicking the button made the <input> .value visible to javascript (now <input> .value is the mail address). I can use the .value in the for loop.
    console.log(userMail.value);

    // for loop to cycle through the array to check if the mail address is inside the array.
    for (i=0; i<mailList.length; i++) {
        if (userMail.value == mailList[i]) {
            // alert('Access granted! Your profile page will load shortly.')
            i = mailList.length; // to stop the for loop.
            outputDom.innerHTML = 'Access granted! Your profile page will load shortly.'; // to show the result on html page.
            outputDom.className = 'container outputClass_1'; // to remove the classes outputDom already has && to add these new classes.
        } else if (i == (mailList.length-1)) { // only after we have cycled through all the for loop, it is the moment to show the error message.
            // alert('Access not allowed! Please, type a valid email address.');
            outputDom.innerHTML = 'Access not allowed! Please, type a valid email address.'; // to show the result on html page.
            outputDom.className = 'container outputClass_2'; // to remove the classes outputDom already has && to add these new classes.
        }
    }
})

// show result on page
