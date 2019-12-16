function changeClock() {
    let divElement = document.getElementById("myClock"); //get the div element, html element
    let secondsCount = Number(divElement.innerHTML); //get the html contents and transform into a number
    secondsCount--; //decrease the seconds
    divElement.innerHTML = secondsCount; //
}


setTimeout(changeClock, 1000);