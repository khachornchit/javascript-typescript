var month = Array(4);
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

function Display() {
    var divDisplay = document.getElementById('display');
    divDisplay.innerHTML = "";
    month.forEach(element => {
        var divNew = document.createElement("div");
        divNew.innerHTML = element;
        divDisplay.appendChild(divNew);
    });
}

function PushTest() {
    var inputText = document.getElementById("inputText").value;
    month.push(inputText);
    Display();
}

function PopTest() {
    month.pop();
    Display();
}

function ShiftTest() {
    month.shift();
    Display();
}

function UnshiftTest() {
    var inputText = document.getElementById("inputText").value;
    month.unshift(inputText);
    Display();
}