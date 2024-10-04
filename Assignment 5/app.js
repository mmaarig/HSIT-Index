var num1 = 3;
var num2 = 5;
var sum = num1+num2;
var sub = num1-num2;
var mul = num1*num2;
var div = num1/num2;
var modu = num1%num2;

document.write("1: Sum of " +num1+" and "+num2+" is "+sum);
document.write("<br><br>2: Subtraction of " +num1+" from "+num2+" is "+sub);
document.write("<br> Multiply of " +num1+" and "+num2+" is "+mul);
document.write("<br>Division of " +num1+" by "+num2+" is "+div);
document.write("<br>Modulas of " +num1+" by "+num2+" is "+modu);


var decl;
document.write("<br><br> 3: Value after variable declaration is "+decl);
var decl = 5;
document.write("<br>Initial value: "+decl);
decl++;
document.write("<br>Value after increment is: "+decl);
decl = decl+7;
document.write("<br>Value after addition is: "+decl);
decl--;
document.write("<br>Value after decrement is: "+decl);
decl = decl%3;
document.write("<br>The remainder is: "+decl);


cost = 600, qty = 5;
output = cost*qty;
document.write("<br><br>4: Total cost to buy "+qty+" tickets to a movie is "+output+"PKR");

table = 4;
document.write("<br><br>5: Table of "+table+"<br>");
document.write(table+"x"+"1"+"="+table*1+"<br>");
document.write(table+"x"+"2"+"="+table*2+"<br>");
document.write(table+"x"+"3"+"="+table*3+"<br>");
document.write(table+"x"+"4"+"="+table*4+"<br>");
document.write(table+"x"+"5"+"="+table*5+"<br>");
document.write(table+"x"+"6"+"="+table*6+"<br>");
document.write(table+"x"+"7"+"="+table*7+"<br>");
document.write(table+"x"+"8"+"="+table*8+"<br>");
document.write(table+"x"+"9"+"="+table*9+"<br>");
document.write(table+"x"+"10"+"="+table*10+"<br><br>");


celsius = 25;
fahrenheit = 70;

c = (70-32)*5/9;
f = (25*9/5)+32;

document.write("6: The Temperature Converter<br> "+celsius+"°C is "+f+"°F<br>");
document.write(fahrenheit+"°F is "+c+"°C<br>");


// Store prices of items
var priceItem1 = 650; // Price of item 1
var priceItem2 = 100; // Price of item 2

// Store ordered quantities of items
var qtyItem1 = 3; // Quantity of item 1
var qtyItem2 = 7; // Quantity of item 2

// Store shipping charges
var shippingCharges = 100;

// Compute total cost
var totalItem1 = priceItem1 * qtyItem1;
var totalItem2 = priceItem2 * qtyItem2;
var subTotal = totalItem1 + totalItem2;
var totalCost = subTotal + shippingCharges;

// Display the receipt
document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "<br>Quantity of item 1 is " + qtyItem1+"<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>Quantity of item 2 is " + qtyItem2+"<br>");
document.write("Shipping Charges: " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);
































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