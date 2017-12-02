var AssociativeIndex = [];
AssociativeIndex["Code"] = 1001;
AssociativeIndex["Name"] = "Jenny Gold";
AssociativeIndex["StartDate"] = new Date().toLocaleDateString();
AssociativeIndex["Salary"] = 4000;
AssociativeIndex["SalaryUnit"] = "USD";

var numIndex = [];
numIndex[3] = "Hello";

var mixIndex = [];
mixIndex[3] = "Hello";
mixIndex["Name"] = "My name";

function Display() {
    alert("Associative array length: " + AssociativeIndex.length + ", Number index length: " + numIndex.length + ", Mix index length: " + mixIndex.length);
}