(
    function (a, b, callFunction) {
        MainFunction(a, b, callFunction);
    }
)(5, 8, alert('Start itself function !'));

function MainFunction(a, b, callFunction) {
    var display = document.getElementById("display");
    display.innerHTML = "I came in Display function and (" + a.toString() + "," + b.toString() + ") : " + callFunction(a, b).toString();
}

function Sum(a, b) {
    return a + b;
}

function Multiply(a, b) {
    return a * b;
}