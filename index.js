// Câu 1
// 1. What are var and const in JavaScript?
// - var is the keyword used to declare variables. Programmers can declare multiple variable lists of different data types by separating the variable names with commas. With var, we can declare various types of variables such as number, string, boolean, etc. 
// - Variables declared with the const maintain constant values
// 2. What are the differences between let and var?
// - The main difference between var and let is that instead of being function scoped, let is block scoped. What that means is that a variable created with the let keyword is available inside the “block” that it was created in as well as any nested blocks. When I say “block”, I mean anything surrounded by a curly brace {} like in a for loop or an if statement.
// - var variables are hoisted to the top of its scope and initialized with a value of undefined.
//   just like var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.
// - var variables can be re-declared and updated
//   let can be updated but not re-declared
// 3. What are the differences between let and const?
// - variables declared with let can be re-assigned, but variables declared with const can’t be
// 4. What to use in what cases?
// to declare variables



// Câu 2
// 1. What is Boolean?
// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
// 2. What results in Boolean?
//  the or operator checks the first operand. If this is true or truthy, it returns it immediately. If it is not true or truthy, it returns the second operand 



// Câu 3 Write a program to print out
// a. 7 numbers, starting from 0 (no user input)
// let i =0;
// for (; i<7; i++){
//     console.log(i);
// }
// b. n numbers, starting from 0, n entered by user
// let x = prompt('Enter a number:');

// for (let i=0; i<x; i++){
//     console.log(i);
// }
// c. A sequence of numbers, starting from 3, ending before n, n entered by user
// let n = prompt('Enter n');
// for(let i=3; i<n; i++){
//     console.log(i);
// }
// d. A sequence of numbers, starting from c, ending before n, c and n entered by user
// let n = prompt('Enter ending n');
// let c = prompt('Enter starting c');
// for (; c<n; c++){
//     console.log(c);
// }
// e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
// let c = Number(prompt('Enter starting c'));
// let n = prompt('Enter ending n');
// for(c; c<n; c+=3){
//     console.log(c);
// }
// f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
// let c = Number(prompt('Enter starting c'));
// let n = Number(prompt('Enter ending n'));
// let s = Number(prompt('Enter stepping s'));
// for(c; c<n; c+=s ){
//     console.log(c);
// }




// Câu 4: Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
// let n = Number(prompt('Enter a number'));
// let factorial = 1;
// for(let i=1; i<=n; i++){
    
//     factorial *= i;
    
// }
// alert(`The factorial of ${n} is ${factorial}`);



// Câu 5: Write a program asking users their age, and then decide if they are old enough to view a 14+ content
// while(true){
//     let old = prompt('How old are you?');
//     if( old < 14 ){
//         alert('You are not old enough to view this content');
//     } else{
//         alert('Enjoy me :)');
//         break
//     }
// }


// Câu 6: Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
// while(true){
//     let x = prompt('Enter a number from 0-9')
//     if( x < 4.5){
//     alert('Lower half of 9');
//     } else{
//     alert('Higher half of 9');
//     }    
// }



// Câu 7: Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
// let x = prompt('Enter x');
// let n = prompt('Enter n');
// if( x > n/2){
//     alert(`${x} is in higher half of ${n}`);
// } else{
//     alert(`${x} is in lower half of ${n}`);
// }



// Câu 8: Write a script to check if a number is even (divisible by 2) or odd number
// let x = prompt('Enter a number');
// if( x % 2 == 0){
//     alert(`${x} is an even number`);
// } else{
//     alert(`${x} is odd number`);
// }



// Câu 9: Write a program to print out
// a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
// for (let i=1; i<=3; i++){
//     console.log("L");
// }
// for (let i=1; i<=3; i++){
//     console.log("H");
// }
//b. n L’s and H’s in total, n entered by user
// let x = Number(prompt("Enter the total number of L's and H's"));
// for(let i = 0; i < Math.ceil(x/2); i++){
//     console.log('L');
// }
// for(let i = 0; i < Math.floor(x/2); i++){
//     console.log('H');

// }
// c. 8 1’s and 0’s in total, consecutively
// for( let i = 0 ; i <=3 ; i++){
//     console.log(0);
//     console.log(1)
// }
// d. n 1’s and 0’s in total, consecutively, n entered by user
// let n= Number(prompt("Enter the total of 1's and 0's"));
// for(let i=0; i<n; i++){
//     if(i % 2 == 0){
//         console.log(0);
//     } else{
//         console.log(1);
//     }

// }
    




// Câu 10: Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows

// BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m))
// Note: you must do the conversion from cm to m before calculation

// And then based on the calculated BMI, tell them that they are:
// Severely underweight if BMI < 16
// Underweight if BMI is between 16 and 18.5
// Normal if BMI is between 18.5 and 25 
// Overweight if BMI is between 25 and 30
// Obese if BMI is more than 30

let weight = Number(prompt('Your weight in kg?'));
height = Number(prompt('Your height in cm?'));

m = height / 100;
BMI = weight/(m*m);

if(BMI < 16){
    alert(`Your BMI is ${BMI}`);
    alert('You are severely underweight')
} else if(BMI < 18.5){
    alert(`Your BMI is ${BMI}`);
    alert('You are underweight')
} else if(BMI < 25){
    alert(`Your BMI is ${BMI}`);
    alert('You are normal');
} else if(BMI < 30){
    alert(`Your BMI is ${BMI}`);
    alert('You are overweight');
} else{
    alert(`Your BMI is ${BMI}`);
    alert('You are obese');
}









    
