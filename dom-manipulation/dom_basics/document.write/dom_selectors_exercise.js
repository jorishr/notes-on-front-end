/* 
EXERCISE

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Title</title>
</head>
<body>
    <h1>I am an h1!</h1>
    <p id="first" class="special">Hello</p>
    <p class="special">Goodbye</p>
    <p>Hi Again</p>
    <p id="last">Goodbye Again</p>
</body>
</html>

    All different ways to select the first p using DOM SELECTORS
*/
//  GET BY
document.getElementById("first");

document.getElementsByClassName("special")[0];

document.getElementsByTagName("p")[0];
document.getElementsByTagName("h1 + p")[0]; //adjecent CSS selector

//  QUERY
document.querySelector("p");
document.querySelector(".special");
document.querySelector("#first");

document.querySelectorAll(".special")[0];
document.querySelectorAll("p")[0];