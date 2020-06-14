var userName = prompt("What is your name?");
var userLastName = prompt("What is your last name?");
var userAge = prompt("What is your age?");

var userFullName = userName + " " + userLastName;
document.write("Hello, " + userFullName + "! " +
  "Welcome to the site! " + "You told me you are " + userAge + " years old. ");

// if age is a negative number
if (userAge <=0){
  alert("This is not a valid age. Try again!");
}
if (userAge === "21"){
  document.write("Happy Birthday! ");
}
// if age is an odd number: this means that if you divide it by 2, the rest
// should be not zero
if (userAge % 2 !==0) {
  document.write("Your age is odd. ");
}
// If age is a perfect square
if(userAge % Math.sqrt(userAge) === 0) {
  document.write("Your age is a perfect square!");
}
