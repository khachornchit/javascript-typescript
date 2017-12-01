var month = Array(4);
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";

function Displayy() {
    var n=month.length;
    var result = document.getElementById("display");
    for(i=0; i<n; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "item " + (i+1) + " of " + n.toString() + " is " + month[i];
        result.appendChild(newDiv);
    }
}