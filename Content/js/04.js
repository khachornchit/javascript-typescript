var employee1 = [];
employee1["Code"] = 1001;
employee1["Name"] = "Jenny Gold";
employee1["StartDate"] = new Date().toLocaleDateString();
employee1["Salary"] = 4000;
employee1["SalaryUnit"] = "USD";

function Display() {
    var divDisplay = document.getElementById("display");
    divDisplay.innerHTML = "";
    
    for(key in employee1) {
        var divNew = document.createElement("div");
        divNew.innerHTML = key + " : " + employee1[key];
        divDisplay.appendChild(divNew);
    }
}