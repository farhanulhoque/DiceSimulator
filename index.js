//For first dice
var randNum1 = Math.random();
randNum1 = Math.floor(randNum1 * 6) + 1; // gives number between 1 and 6

var imageSrc1 = "Images/dice" + randNum1 + ".png"; // image based on random number generated

var image1 = document.querySelectorAll("img")[0].setAttribute("src", imageSrc1);


//For second dice
var randNum2 = Math.random();
randNum2 = Math.floor(randNum2 * 6) + 1;

var imageSrc2 = "Images/dice" + randNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageSrc2);

//Display winner
if(randNum1 > randNum2){
  document.querySelector("h2").innerHTML = "Player 1 wins!";
}
else if (randNum1 === randNum2) {
  document.querySelector("h2").innerHTML = "Draw!";
}
else{
  document.querySelector("h2").innerHTML = "Player 2 wins!";
}
