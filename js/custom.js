jQuery(document).ready(function($) {
    "use strict";

//Array for making color code
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

//varialbe for Get Colde color
const hexBtn = document.querySelector(".btn-color_code");
const bodyColor = document.querySelector(".body_hexwrap");
const hexCode = document.querySelector(".hexCode");


//Button Function
hexBtn.addEventListener("click",getHex);

// btnColor.addEventListener("click",changeColor);
function getHex() {
  // varialbe for Color ID
  let hexColId = '#';

  //Loop for getting Random color code
  for(let i = 0; i<6; i++){
    //varialbe for randomColor
    let randomColor = Math.floor(Math.random()*hexNumbers.length);
    hexColId +=hexNumbers[randomColor];
  }

  // Body Color
  bodyColor.style.backgroundColor = hexColId;
  //Adding Color Code into Span tag
  hexCode.innerHTML = hexColId;

}

});
