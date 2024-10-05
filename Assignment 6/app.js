// Initialize a variable
var a = 10;

// Display the initial value of a
document.write("<b>1:</b> <br>The value of a is: " + a + "<br><br>");

// Pre-increment: ++a
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment: a++
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement: --a
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement: a--
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");



var a = 2, b = 1;
var result = --a;
document.write("<br><br><b>2:</b> <br>(i) --a;<br>Ans:"+--a);

var result2 = --a - --b;
document.write("<br>(ii) --a - --b;<br>Ans:"+ result2);

var result3 = --a - --b + ++b;
document.write("<br>(iii) --a - --b;<br>Ans:"+ result3);

var result4 = --a - --b + ++b + b--;
document.write("<br>(iii) --a - --b;<br>Ans:"+ result4);


// Take input from the user
var userName = prompt("Please enter your name:");

// Greet the user
document.write("<br><br><br><b>3: </b><h2>Hello, " + userName + "! Welcome to JavaScript Classes.</h2>");



// Take input from the user for the number
var number = prompt("Enter a number to display its multiplication table (default is 5):");

// If the user doesn't enter a number, default to 5
if (number === "" || number === null) {
    number = 5;
}

// Convert the input to a number
number = parseInt(number);

// Display the multiplication table
document.write("<br><br><b>5</b>:<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}


// a) Take three subjects' names from the user
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

// b) Total marks for each subject is 100
var totalMarksPerSubject = 100;
var totalMarks = totalMarksPerSubject * 3;  // Total marks for all three subjects

// c) Take obtained marks for each subject
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// d) Calculate total obtained marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / totalMarks) * 100;

// e) Display the result in a table
document.write("<br><br><b>7: </b><h2>Result Sheet:</h2>");
document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td><strong>Total</strong></td><td>" + totalMarks + "</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td colspan='3'><strong>Percentage: </strong>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");








































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