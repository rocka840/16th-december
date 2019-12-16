"use strict";

function changeClock() {
    let divElement = document.getElementById("myClock"); //get the div element, html element
    let secondsCount = Number(divElement.innerHTML); //get the html contents and transform into a number
    secondsCount--; //decrease the seconds
    divElement.innerHTML = secondsCount; //puts the values into the clock html
    if (secondsCount > 55) {

    };
    setTimeout(changeClock, 1000);
}


setTimeout(changeClock, 1000);