var AssociativeIndex = [];
AssociativeIndex["Code"] = 1001;
AssociativeIndex["Name"] = "Jenny Gold";
AssociativeIndex["StartDate"] = new Date().toLocaleDateString();
AssociativeIndex["Salary"] = 4000;
AssociativeIndex["SalaryUnit"] = "USD";

var employee2 = [];
employee2["Code"] = 1002;
employee2["Name"] = "Jenny Gold 2";
employee2["StartDate"] = new Date().toLocaleDateString();
employee2["Salary"] = 5000;
employee2["SalaryUnit"] = "USD";

var employee3 = [];
employee3["Code"] = 1003;
employee3["Name"] = "Jenny Gold 3";
employee3["StartDate"] = new Date().toLocaleDateString();
employee3["Salary"] = 6000;
employee3["SalaryUnit"] = "USD";

var employee4 = [];
employee4["Code"] = 1004;
employee4["Name"] = "Jenny Gold 4";
employee4["StartDate"] = new Date().toLocaleDateString();
employee4["Salary"] = 7000;
employee4["SalaryUnit"] = "USD";

var employees = [AssociativeIndex, employee2, employee3, employee4];

function Display() {
    var divDisplay = document.getElementById("display");
    divDisplay.innerHTML = "";
    employees.forEach(element => {
        divDisplay.appendChild(DisplayEmployee(element));
    });
}

function DisplayEmployee(employee) {
    var divEmployee = document.createElement("div");
    for (key in employee) {
        var divNew = document.createElement("div");
        divNew.innerHTML = key + " : " + employee[key];
        divEmployee.appendChild(divNew);
    }
    divEmployee.appendChild(document.createElement("br"));
    return divEmployee;
}