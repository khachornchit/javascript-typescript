var Arr1 = ["Jan"];
var Arr2 = ["Jan", "Feb"];
var Arr3 = ["Jan", "Feb", "Mar"];
var Arr4 = ["Jan", "Feb", "Mar", "Apr"];

function DisplayArray(Arr) {
    var resultDiv = document.getElementById("displayArea");
    ClearDiv(resultDiv);
    Arr.forEach(element => {
        var childDiv = document.createElement("div");
        childDiv.innerHTML = element;
        resultDiv.appendChild(childDiv);
    });
}

function ClearDiv(div) {
    div.innerHTML = "";
}

