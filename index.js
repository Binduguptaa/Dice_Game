var randomnum1 = Math.floor(Math.random() * 6)+ 1;
var imagesrc = "images/dice"+randomnum1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", imagesrc);

var randomnum2 = Math.floor(Math.random() * 6) + 1;
var imagesrc2 ="images/dice"+randomnum2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imagesrc2);


// announcement

if(randomnum1>randomnum2)
{
    document.querySelector("h1").innerHTML ="🚩 player 1 wins!"
}
else if(randomnum2>randomnum1)
{
    document.querySelector("h1").innerHTML ="player 2 wins 🚩"
}
else
{
    document.querySelector("h1").innerHTML ="Draw!!"
}