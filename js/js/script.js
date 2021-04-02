
/********* example 1

 var value = prompt("Enter your number:");
        if (value > 0) {
          document.write("The number is positive");
        } 
        else if (value < 0) {
          document.write("The number is negative");
        } 
        else if(value==0) {
          document.write(
            "The number is neither positive nor negative. It is zero."
          );
        }
        else{
        	document.write("Enter a valid number. Thank you!!");
        }
***************************/


/************************ example 2
    
    var side1 = parseInt(prompt("Enter the value of the first side of the triangle:"));
        var side2 = parseInt(prompt("Enter the value of the second side of the triangle:"));
        var side3 = parseInt(prompt("Enter the value of the third side of the triangle:"));

         if(side1==side2 && side2==side3) 
    {
        
        document.write("Equilateral triangle.");
    }
    else if(side1==side2 || side1==side3 || side2==side3) 
    {
        
        document.write("Isosceles triangle.");
    }
    else 
    {
        
        document.write("Scalene triangle.");
    }

***********************************************/

/********** example 3
  
   var value1 = parseInt( prompt("Enter the value of the first side of the triangle:"));
        var value2 = parseInt( prompt("Enter the value of the second side of the triangle:"));
        var value3 = parseInt( prompt("Enter the value of the third side of the triangle:"));

        if (value1 + value2 <= value3 || value2 + value3 <= value1 || value1 + value3 <= value2 ) 
        {
          document.write("It is impossible to draw the triangle");
        } 
        else {
          document.write("It is possible to draw the triangle");
        }

 *****************************/

/************************** example 4

     var physics = parseFloat(prompt("Enter numbers obtained in physics:"));
        var chemistry = parseFloat(prompt("Enter numbers obtained in Chemistry:"));
        var biology = parseFloat(prompt("Enter numbers obtained in biology:"));
        var mathematics = parseFloat(
          prompt("Enter numbers obtained in mathematics:")
        );
        var computer = parseFloat(prompt("Enter numbers obtained in computer:"));
        var total = parseFloat (physics + chemistry + biology + mathematics + computer);

        var avg = parseFloat (total / 5);

        if ( physics < 33 || chemistry < 33 || biology < 33 || mathematics < 33 ||computer < 33) 
        {
          document.write("You have FAILED! Try Hard");
        } 
        else {
          if (avg >= 90) {
            document.write("You've got grade A");
          } else if (avg >= 80 && avg < 90) {
            document.write("You've got grade B");
          } else if (avg >= 70 && avg < 80) {
            document.write("You've got grade C");
          } else if (avg >= 60 && avg < 70) {
            document.write("You've got grade D");
          } else if (avg >= 40 && avg < 60) {
            document.write("You've got grade E");
          } else {
            document.write("You have FAILED! Try Hard");
          }
        }

*************************/

/************** example 5


  var units = parseFloat(prompt("Enter how many units consumed:"));
        var bill = 0;
        if (units > 0 && units <= 50) {
          bill = units * 0.5;
        } else if (units > 50 && units <= 150) {
          bill = 50 * 0.5 + (units - 50) * 0.75;
        } else if (units > 150 && units <= 250) {
          bill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
        } else if (units > 250) {
          bill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
        } else {
          document.write("please provide a valid value for units.");
        }

        var total = bill + bill * 0.2;
        document.write("Your total bill including vat is " + total + " taka");


*********************/

/**************** example 6

  
   
        var number = parseInt(prompt("Enter the number:"));
        var sum = 0;
        while (number > 0) {
          var reminder = number % 10;
          sum = sum + reminder;
          number = Math.floor(number / 10);
        }
        document.write(" The sum of the digits of the given number is " + sum);

******************************/

/******************* example 7

   
        var num = parseInt(prompt("Enter the number:"));
        var lastDigit = num % 10;

        while (num >= 10) {
          num = Math.floor(num / 10);
        }
        var result = lastDigit + num;
        document.write("The sum of  first and last digit is: " + result);

*****************************/

/*************** example 8

   var number = prompt("Enter number: ");

for(var i=2; i<=number ;i++){

        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
            document.write(i);
        }
    }

***********************/

/***************** example 9

   var number = parseInt(prompt('Enter a positive number: '));
var n1 = 0, n2 = 1, nextTerm;

document.write('Fibonacci Series:');
document.write(n1); 
document.write(n2); 

nextTerm = n1 + n2;

while (nextTerm <= number) {


    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
    document.write( nextTerm );

}

****************************************/

// example 10

  var num = parseInt(
          prompt("Enter the number upto which you wanna see the sum:")
        );
        var sum = 0;
        for (let i = 0; i <= num; i++) {
          sum = sum + i;
        }
        document.write("The sum of numbers upto " + num + " is: " + sum);

