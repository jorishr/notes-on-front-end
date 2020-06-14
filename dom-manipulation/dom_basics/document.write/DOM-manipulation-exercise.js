let btn = document.getElementsByClassName("btn");
var divSelect = document.querySelector(".btnArea");

// var isColored = false;
// btnSelect[0].addEventListener("click", function(){
//   if(isColored){
//     divSelect.style.background = "#fff";
//   }else {
//     divSelect.style.background = "yellow";
//   }
//   isColored = !isColored;
// })
//
btnSelect[0].addEventListener("click", function(){
  divSelect.classList.toggle("clickedBtn");
  document.body.classList.toggle("clickedBtn");
})

// // NOTE: document.body is a shortcut built in to JS.
// // otherwise:
// var bodySelect = getElementsByTagName("body");
// // Plus inside the addEventListener function:
// bodySelect.classList.toggle("clickedBtn");
