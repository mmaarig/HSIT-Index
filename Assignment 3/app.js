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
