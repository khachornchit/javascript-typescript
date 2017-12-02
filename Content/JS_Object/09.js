(
    function (a, b) {
        Display(10, 20, 30, 40, 50);

        // For itselft arguments
        var divDisplay = document.getElementById("display");
        divDisplay.appendChild(document.createElement("hr"));
        for (let index = 0; index < arguments.length; index++) {
            var value = arguments[index];
            var divNew = document.createElement("div");
            divNew.innerHTML = value.toString();
            divDisplay.appendChild(divNew);
        }
        
        var sum = function (num1, num2) {
            return num1 + num2;
        };

        // For itselft arguments
        divDisplay.appendChild(document.createElement("hr"));
        var divNew = document.createElement("div");
        divNew.innerHTML = "Test a, b arguments a+b = " + sum(a, b).toString();
        divDisplay.appendChild(divNew);
    }
)
    (50, 100);

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