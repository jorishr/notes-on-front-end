var userName = prompt("What is your name?");
var userLastName = prompt("What is your last name?");
var userAge = prompt("What is your age?");
// document.write("Hello, " + userName + " " + userLastName + "! " +
//   "Welcome to the site! " + "You told me you are " + userAge + " years old.");

// this looks clunky so you can group the userName, space and userLastname into a
// variable as well!
var userFullName = userName + " " + userLastName;
document.write("Hello, " + userFullName + "! " +
  "Welcome to the site! " + "You told me you are " + userAge + " years old. ");
document.write("That means you have been -roughly- " + (userAge*365) +" days on this planet.");

if (userAge < 18){
  document.write(" Sorry, you should leave this page now.");
}
// else if (userAge >=18 && userAge <21){
//   document.write(" You are welcome on the site, but you must be 21 or older to enjoy the full site.");
// }
// The above statement is redundant because it will only run IF the first statement
// was FALSE, thus:
else if (userAge <21){
  document.write(" You are welcome on the site, but you must be 21 or older to enjoy the full site.");
}
else {
  document.write(" Enjoy the site!");
}
// the last ELSE will only run if the former statements were FALSE
