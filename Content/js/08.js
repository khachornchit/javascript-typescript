function Display() {
    var divDisplay = document.getElementById("display");
    divDisplay.innerHTML = "";
    for (let index = 0; index < arguments.length; index++) {
        var value = arguments[index];
        var divNew = document.createElement("div");
        divNew.innerHTML = value.toString();
        divDisplay.appendChild(divNew);
    }
}