// javascript for test.html
var pics =[
        "img/bellisland1.jpg",
        "img/2.jpg",
        "img/1.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg",
        ]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if ( counter === 6){
        counter = 0;
        }
    img.src = pics[counter]
    counter = counter + 1;
});
