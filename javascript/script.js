var a1 = document.getElementById("number1");
var a2 = document.getElementById("number2");
var a3 = document.getElementById("number3");
var a4 = document.getElementById("number4");
var a5 = document.getElementById("number5");

var seconds = 0;

function incrementSeconds() {
   if(seconds < 481){
      seconds += 1
      a1.innerHTML = seconds;
   }
    
   if(a2.innerText <= 1800){
      a2.innerText = seconds += 1;
   }
    
   if(a3.innerText <= 1250){
      a3.innerText = seconds += 1;
   }
    
   if(a4.innerText <= 493){
      a4.innerText = seconds += 1;
   }
    
   if(a5.innerText <= 8){
      a5.innerText = seconds += 1;
   }
}
setInterval(incrementSeconds, .5);

// function snow() {
//    var header = document.getElementsByTagName("header");
//    var high = header.style.height;
//    var scro =  
//    if(scrollY > high) {
//             header.style.position = "fixed";
//    }
//    else {
//       header.style.position = "absolute";
//    }
//  }