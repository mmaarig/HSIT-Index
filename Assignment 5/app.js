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
document.write("<h2>7: Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "<br>Quantity of item 1 is " + qtyItem1+"<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>Quantity of item 2 is " + qtyItem2+"<br>");
document.write("Shipping Charges: " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);


// Store total marks and marks obtained by the student
var totalMarks = 980 // Example: total marks
var marksObtained = 804; // Example: marks obtained

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result
document.write("<h2>8: Mark Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");



        // Store the amount in USD and Saudi Riyals
        var dollars = 10;
        var riyals = 25;

        // Perform the conversion in a single expression
        var totalInPKR = (dollars * 104.80) + (riyals * 28);

        // Display the result
        document.write("<h2>9: Currency in PKR</h2>");
        document.write("Total Currency in PKR: " + totalInPKR);



// Initialize a variable with a number
var number = 10; // Example: initial number

// Perform all calculations in a single expression
var result = ((number + 5) * 10) / 2;

// Display the result
document.write("<h2>10: Arithmetic Sequence</h2>");
document.write("Initial Number: " + number + "<br>");
document.write("Result after operations: " + result);


// Store the current year and birth year
var currentYear = 2016; // Example: current year
var birthYear = 1992;   // Example: birth year

// Calculate the two possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;  // This accounts for the possibility of not having had their birthday yet this year

// Display the result
document.write("<h2>11: Age Calculator</h2>");
document.write("Current Year: " +currentYear+"<br>");
document.write("Birth Year: " +birthYear+"<br>");
document.write("Your Age is: "+age1);


// Store the radius of the circle
var radius = 20; // Example: radius of the circle

// Constants
var pi = 3.142;

// Calculate the circumference (C = 2 * π * r)
var circumference = 2 * pi * radius;

// Calculate the area (A = π * r^2)
var area = pi * radius * radius;

// Display the results
document.write("<h2>12: The Geometrizer</h2>");
document.write("The radius is: " + radius + "<br>");
document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
document.write("The area is: " + area.toFixed(2));


// Store the favorite snack, current age, maximum age, and amount per day
var favoriteSnack = "chocolate chip";  // Example: favorite snack
var currentAge = 15;                  // Example: current age
var maxAge = 65;                      // Example: maximum age
var amountPerDay = 3;                 // Example: estimated amount per day

// Calculate the total number of snacks for the rest of life
var yearsRemaining = maxAge - currentAge;
var totalSnacks = yearsRemaining * 365 * amountPerDay;

// Display the result
document.write("<h2>13: The Lifetime Supply Calculator</h2><br><br>");
document.write("Favourite Snack: "+favoriteSnack+"<br>");
document.write("Current age: "+currentAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of snacks per day: "+amountPerDay+"<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");



// alert("Error! Please enter a valid password");
// alert("Welcome to JS Land...\nHappy Coding!");
// alert("Welcome to JS Land...");
// alert("Happy Coding!");
