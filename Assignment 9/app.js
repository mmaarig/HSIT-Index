// 1. Declare an empty array using JS literal notation to store student names in future.
// Declare an empty array to store student names
var studentNames = [];


// 2. Declare an empty array using JS object notation to store student names in future.
// Declare an empty array using the Array constructor (object notation)
var studentNames = new Array();


// 3. Declare and initialize a strings array.
// Declare and initialize a strings array
var studentNames = ["Alice", "Bob", "Charlie", "David"];

// Display the array elements using document.write
document.write("Student Names: <br>");
document.write(studentNames.join("<br>")); // Join array elements with line breaks




























// // 01 Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// // Prompt the user for a character input
// var input = prompt("Enter a character:");

// // Check if the input is a single character
// if (input.length === 1) {
//     var asciiCode = input.charCodeAt(0); // Get the ASCII code of the input

//     if (asciiCode >= 48 && asciiCode <= 57) {
//         // Check if it's a number (ASCII code for 0-9 is 48-57)
//         document.write(input + " is a number.");
//     } else if (asciiCode >= 65 && asciiCode <= 90) {
//         // Check if it's an uppercase letter (ASCII code for A-Z is 65-90)
//         document.write(input + " is an uppercase letter.");
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//         // Check if it's a lowercase letter (ASCII code for a-z is 97-122)
//         document.write(input + " is a lowercase letter.");
//     } else {
//         // If it's neither a number nor a letter
//         document.write(input + " is neither a number nor a letter.");
//     }
// } else {
//     document.write("Please enter a single character.");
// }


// // 02 Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// // Prompt the user to enter two integers
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// // Check if the inputs are valid integers
// if (!isNaN(num1) && !isNaN(num2)) {
//     // Compare the two integers
//     if (num1 > num2) {
//         document.write(num1 + " is larger than " + num2);
//     } else if (num2 > num1) {
//         document.write(num2 + " is larger than " + num1);
//     } else {
//         document.write("Both integers are equal.");
//     }
// } else {
//     document.write("Please enter valid integers.");
// }


// // 03 Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// // Prompt the user to enter a number
// var number = parseFloat(prompt("Enter a number:"));

// // Check if the input is a valid number
// if (!isNaN(number)) {
//     // Check if the number is positive, negative, or zero
//     if (number > 0) {
//         document.write(number + " is a positive number.");
//     } else if (number < 0) {
//         document.write(number + " is a negative number.");
//     } else {
//         document.write("The number is zero.");
//     }
// } else {
//     document.write("Please enter a valid number.");
// }


// // 04 Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// // Prompt the user to enter a single character
// var char = prompt("Enter a single character:");

// // Convert the character to lowercase to handle both uppercase and lowercase inputs
// char = char.toLowerCase();

// // Check if the input is a single character and whether it's a vowel
// if (char.length === 1) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         document.write("True, " + char + " is a vowel.");
//     } else {
//         document.write("False, " + char + " is not a vowel.");
//     }
// } else {
//     document.write("Please enter only one character.");
// }


// // 05 Write a program that
// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:

// // i. Check if user has entered password. If not, then
// // give message “ Please enter your password”

// // ii. Check if both passwords are same. If they are
// // same, show message “Correct! The password you
// // entered matches the original password”. Show
// // “Incorrect password” otherwise.

// // a. Store the correct password in a variable
// var correctPassword = "mySecret123";

// // b. Ask the user to enter their password
// var userPassword = prompt("Enter your password:");

// // c. Validate the two passwords
// if (userPassword === "") {
//     // i. Check if the user has entered a password
//     document.write("Please enter your password.");
// } else {
//     // ii. Check if both passwords are the same
//     if (userPassword === correctPassword) {
//         document.write("Correct! The password you entered matches the original password.");
//     } else {
//         document.write("Incorrect password.");
//     }
// }


// // 06 This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// // Display the greeting
// document.write(greeting);


// // 07 Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// // Prompt the user to enter time in 24-hour format
// var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7:00 PM):"));

// // Check if the input is a valid time (0000 to 2359)
// if (time >= 0 && time <= 2359) {
//     if (time >= 0 && time < 1200) {
//         document.write("Good morning!");
//     } else if (time >= 1200 && time < 1700) {
//         document.write("Good afternoon!");
//     } else if (time >= 1700 && time < 2100) {
//         document.write("Good evening!");
//     } else {
//         document.write("Good night!");
//     }
// } else {
//     document.write("Please enter a valid time in 24-hour format (0000 to 2359).");
// }






// document.write("<b>Rules for naming JS variables</b><br><br>");

// document.write("Variable names can only contain letters (a-z, A-Z), numbers (0-9), underscores (_), and dollar signs ($) but cannot begin with a number.<br>");

// document.write("Variable names must start with a letter, underscore, or dollar sign.<br>");

// document.write("Variable names are case sensitive, meaning myVariable and myvariable are treated as two different variables.<br>");

// document.write("Variable names should not be JS reserved keywords (like var, function, return, etc.).");























// let age = 37;
// alert(age);

// // Initialize visit count
// let visitCount = localStorage.getItem('visitCount') || 0;

// // Increment visit count
// visitCount++;

// // Store the updated count
// localStorage.setItem('visitCount', visitCount);

// // Display the count in an alert box
// alert(`You have visited this site ${visitCount} times.`);


// // Declare the variable
// var birthYear = 1990;

// // Display the message
// document.write("My birth year is " + birthYear + ". Data type of my declared variable is " + typeof birthYear);



// let visitorName = "John Doe", product = "T-Shirt(s)", qty = 5;

// document.write("<br><br>"+visitorName+" ordered "+ qty + " "+product+" on XYZ Clothing store");



// let username;
// let myName = "Muhammad Maarig";
// // alert(myName);

// let message = "Hello World";
// alert(message);

// let bio = "John Doe\n15 Years Old\nCertified Mobile Application Developer";
// alert(bio);

// let pizza = "Pizza\nPizz\nPiz\nPi\nP";
// alert(pizza);

// let email = "example@example.com";
// alert("My email address is "+ email);

// let book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+ book);

// document.write("Yah! I can write HTML content through JavaScript");

// let symbol = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(symbol);


// alert("Error! Please enter a valid password");
// alert("Welcome to JS Land...\nHappy Coding!");
// alert("Welcome to JS Land...");
// alert("Happy Coding!");