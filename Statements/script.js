// Answer 1-----
let age = +prompt("Enter Your Age");
if( age > 18){
    console.log("You are eligible for vote");
}
else{
    console.log("You are not eligible to vote yet");
}
// Answer 2-----
let degree = +prompt("Enter Temperature");
if( degree > 25){
    console.log("It's hot today!");
}
else{
    console.log("It's a normal today!");
}
// Answer 3-----
let score = +prompt("Enter Your Score");
if( score >= 60){
    console.log("You passed the test!");
} 
else{
    console.log("You failed the test!");
} 
// Answer 4-----
let is_raining = true; // or false, depending on the scenario

if (is_raining) {
    console.log('Remember to bring an umbrella.');
} else {
    console.log('Enjoy the sunny weather!');
}
// Answer 5-----
let person_age = +prompt("Enter Your Age");
if( person_age >= 18){
    console.log("You are an adult!");
}
else{
    console.log("You are a minor!");
}
// Answer 6-----
let number = +prompt("Please enter a number:");

// Check if the number is positive, negative, or zero
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

