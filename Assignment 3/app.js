let age = 37;
alert(age);

// Initialize visit count
let visitCount = localStorage.getItem('visitCount') || 0;

// Increment visit count
visitCount++;

// Store the updated count
localStorage.setItem('visitCount', visitCount);

// Display the count in an alert box
alert(`You have visited this site ${visitCount} times.`);


// Declare the variable
var birthYear = 1990;

// Display the message
document.write("My birth year is " + birthYear + ". Data type of my declared variable is " + typeof birthYear);



let visitorName = "John Doe", product = "T-Shirt(s)", qty = 5;

document.write("<br><br>"+visitorName+" ordered "+ qty + " "+product+" on XYZ Clothing store");



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