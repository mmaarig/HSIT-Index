var city = prompt("Enter your city name:");
        
        if (city.toLowerCase() === "karachi") {
            document.write("<b>1:</b><h2>Welcome to the city of lights!</h2>");
        } else {
            document.write("<b>1:</b><h2>Welcome to " + city + "!</h2>");
        }


        var gender = prompt("Enter your gender (male/female):");

        if (gender.toLowerCase() === "male") {
            document.write("<b>2:</b><h2>Good Morning Sir.</h2>");
        } else if (gender.toLowerCase() === "female") {
            document.write("<b>2:</b><h2>Good Morning Ma’am.</h2>");
        } else {
            document.write("<b>2:</b><h2>Good Morning!</h2>"); 
        }
        

        var signalColor = prompt("Enter the color of the traffic signal (red, yellow, green):");

        signalColor = signalColor.toLowerCase();

        if (signalColor === "red") {
            document.write("<b>3:</b><h2>Red: Must Stop</h2>");
        } else if (signalColor === "yellow") {
            document.write("<b>3:</b><h2>Yellow: Ready to move</h2>");
        } else if (signalColor === "green") {
            document.write("<b>3:</b><h2>Green: Move now</h2>");
        } else {
            document.write("<b>3:</b><h2>Invalid signal color entered!</h2>");
        }



        var remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");

        remainingFuel = parseFloat(remainingFuel);

        if (remainingFuel < 0.25) {
            document.write("<b>4:</b><h2>Please refill the fuel in your car.</h2>");
        } else {
            document.write("<b>4:</b><h2>Your fuel level is sufficient.</h2>");
        }



        var a = 4;
        if (++a === 5) {
            alert("given condition for variable a is true");
        }

        var b = 82;
        if (b++ === 83) {
            alert("given condition for variable b is true");
        }

        var c = 12;
        if (c++ === 13) {
            alert("condition 1 is true");
        }
        if (c === 13) {
            alert("condition 2 is true");
        }
        if (++c < 14) {
            alert("condition 3 is true");
        }
        if (c === 14) {
            alert("condition 4 is true");
        }
                        
        var materialCost = 20000;
        var laborCost = 2000;
        var totalCost = materialCost + laborCost;
        if (totalCost === laborCost + materialCost) {
            alert("The cost equals");
        }

        if (true) {
            alert("True");
        }
        if (false) {
            alert("False");
        }

        if ("car" < "cat") {
            alert("car is smaller than cat");
        }



        var totalMarks = 300;

        var marksSubject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
        var marksSubject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
        var marksSubject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));

        
        var marksObtained = marksSubject1 + marksSubject2 + marksSubject3;

        
        var percentage = (marksObtained / totalMarks) * 100;

        var grade, remarks;
        if (percentage >= 80) {
            grade = 'A';
            remarks = 'Excellent';
        } else if (percentage >= 60) {
            grade = 'B';
            remarks = 'Good Job';
        } else if (percentage >= 40) {
            grade = 'C';
            remarks = 'You need to improve';
        } else {
            grade = 'D';
            remarks = 'Fail';
        }


        document.write("<b>6:</b><br>Total Marks: " + totalMarks);
        document.write("<br>Marks Obtained: " + marksObtained);
        document.write("<br>Percentage: " + percentage.toFixed(2) + "%");
        document.write("<br>Grade: " + grade);
        document.write("<br>Remarks: " + remarks);




        var secretNumber = 7;

        var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

        if (userGuess === secretNumber) {
            alert("Bingo! Correct answer");
        } else if (userGuess + 1 === secretNumber) {
            alert("Close enough to the correct answer");
        } else {
            alert("Sorry, that's not correct. Try again!");
        }


        var number = parseInt(prompt("Enter a number to check whether its divisible by 3 or Not:"));

        if (number % 3 === 0) {
            alert(number + " is divisible by 3.");
        } else {
            alert(number + " is not divisible by 3.");
        }


        var number = parseInt(prompt("Enter a number to check whether its Even or Odd:"));

        if (number % 2 === 0) {
            alert(number + " is an even number.");
        } else {
            alert(number + " is an odd number.");
        }


        var temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

        if (temperature > 40) {
            alert("It is too hot outside.");
        } else if (temperature > 30) {
            alert("The Weather today is Normal.");
        } else if (temperature > 20) {
            alert("Today’s Weather is cool.");
        } else if (temperature > 10) {
            alert("OMG! Today’s weather is so Cool.");
        } else {
            alert("It's quite cold outside.");
        }



        var firstNumber = parseFloat(prompt("Enter the first number:"));
        
        var secondNumber = parseFloat(prompt("Enter the second number:"));
        
        var operation = prompt("Enter the operation (+, -, *, /, %):");

        var result; 
        
        if (operation === "+") {
            result = firstNumber + secondNumber;
        } else if (operation === "-") {
            result = firstNumber - secondNumber;
        } else if (operation === "*") {
            result = firstNumber * secondNumber;
        } else if (operation === "/") {
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                alert("Error: Division by zero is not allowed.");
            }
        } else if (operation === "%") {
            result = firstNumber % secondNumber;
        } else {
            alert("Invalid operation. Please enter one of the following: +, -, *, /, %.");
        }

        if (result !== undefined) {
            alert("The result is: " + result);
        }







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