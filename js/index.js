//  making random numbers between 1 and 6
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

//  Left image
var leftImg = document.querySelector(".p1");
leftImg.setAttribute("src", `images/dice${randomNumber1}.png`);

//  Right image
var leftImg = document.querySelector(".p2");
leftImg.setAttribute("src", `images/dice${randomNumber2}.png`);

//  Changing the h1 inner text
var pageH1 = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    pageH1.textContent = "🎲 Player 1 Wins";

}else if(randomNumber1 < randomNumber2){
    pageH1.textContent = "Player 2 Wins 🎲";
    
}else{
    pageH1.textContent = "🎲 Draw 🎲";
}