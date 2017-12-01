var employee1 = [];
employee1["Code"] = 1001;
employee1["Name"] = "Using array to define an object";
employee1["Salary"] = 4000;
employee1["DepartmentNo"] = 9;

var employee2 = new Object();
employee2.Code = 1002;
employee2.Name = "Declare by using new Object()";
employee2.Salary = 5000;
employee2.DepartmentNo = 9;

var employee3 = {};
employee3.Code = 1003;
employee3.Name = "Declare by using brace(Obejct Literal)";
employee3.Salary = 6000;
employee3.DepartmentNo = 9;

var employee4 = {
    Code: 1004,
    Name: "Declare by using object Initializer",
    Salary: 7000,
    DepartmentNo: 10
};

function GetEmployeeInfo(obj) {
    var divEmployeeInfo = document.createElement('div');

    function createElement(field, value) {
        var div = document.createElement("div");
        div.innerHTML = field + " : " + value;
        return div;
    }

    for (var field in obj) {
        divEmployeeInfo.appendChild(createElement(field, obj[field]));
    }

    return divEmployeeInfo;
};

function NewLine() {
    return document.createElement("br");
};

function HorizentalLine() {
    return document.createElement("hr");
};

function H1(text) {
    var div = document.createElement("h1");
    div.innerHTML = text;
    return div;
}

function DisplayKeys(obj) {
    var divNew = document.createElement("div");
    divNew.innerHTML = "Display keys : " + Object.keys(obj);
    return divNew;
};

function GetObjectInfo(obj) {
    var output = "{ ";
    for (var field in obj) {
        var line = field + " : " + obj[field] + ", ";
        output = output + line;
    }
    output = output.substring(0, output.length - 2) + " }";
    return output;
}

var Departments = [
    "Academic Affairs Information Technology",
    "Academic Personnel",
    "Academic Program Review",
    "Academic Senate",
    "Accounting / Payroll",
    "Accounting Aux & Serv",
    "Accounting Services",
    "Activities Planning Center",
    "Administrative & Residential Information Technology",
    "Admissions Office",
    "Advancement Services",
    "Alumni Affairs Office",
    "Anthropology",
    "Art Museum",
    "Art Studio",
    "Arts & Lectures",
    "Arts Admin Support Center"
];

var Employee = function (vCode, vName, vSalary, vDepartmentNo) {
    this.Code = vCode;
    this.Name = vName;
    this.Salary = vSalary;
    this.DepartmentNo = vDepartmentNo;
    this.Description = "Initialize from constructor.";
    this.QuarterSalary = GetQuaterSalary();
    this.AnnualSalary = GetAnnualSalary();
    this.Department = GetObjectInfo(GetDepartmentInfo());

    function GetAnnualSalary() {
        return Number(vSalary) * 12;
    };

    function GetQuaterSalary() {
        return Number(vSalary) * 4;
    };

    function GetDepartmentInfo() {
        return {
            Name: Departments[vDepartmentNo],
            Director: vName
        }
    }

    this.GetHumanDepartment = function (vName, vDirector) {
        var Human = function (vName, vDirector) {
            this.Name = vName,
                this.Director = vDirector
        };
        return new Human(vName, vDirector);
    }
};

var ArrayEmployees = [];
ArrayEmployees[0] = new Employee(10, "Johny Depp", 5000, 1);
ArrayEmployees[1] = new Employee(11, "AI Pacino", 6000, 2);
ArrayEmployees[2] = new Employee(12, "Robert De Niro", 7000, 3);
ArrayEmployees[3] = new Employee(13, "Kevin Spacey", 8000, 4);
ArrayEmployees[4] = new Employee(14, "Denzel Washington", 9000, 5);
ArrayEmployees[5] = new Employee(15, "Russell Crowe", 9100, 6);
ArrayEmployees[6] = new Employee(16, "Brad Pitt", 9200, 7);
ArrayEmployees[7] = new Employee(17, "Angelina Jolie", 9300, 8);

var ChainObject = function (vName, vPrice) {
    this.Name = vName;
    this.Price = vPrice;

    this.IncreasePrice = function (addPrice) {
        this.Price += addPrice;
        return this;
    };
};

// This is for static object
var NestedObject = {
    FirstName: "Angella",
    LastName: "Joie",
    Company: {
        Name: "JavaScript Company",
        Employees: 500
    }
};

// Dynamic object
var Customer = function (vFirstName, vLastName, vCompanyName, vSize, vDepartmentName) {
    this.FirstName = vFirstName;
    this.LastName = vLastName;
    this.Company = new Company(vCompanyName, vSize);
    this.Department = new Department(vDepartmentName);
};

var Company = function (vCompanyName, vSize) {
    this.Name = vCompanyName;
    this.Size = vSize;
};

var Department = function (vDepartmentName) {
    this.Name = vDepartmentName;
};

(
    function () {
        var divDisplay = document.getElementById('display');
        divDisplay.innerHTML = "Employee Info";

        divDisplay.appendChild(GetEmployeeInfo(employee1));
        divDisplay.appendChild(NewLine());
        divDisplay.appendChild(GetEmployeeInfo(employee2));
        divDisplay.appendChild(NewLine());
        divDisplay.appendChild(GetEmployeeInfo(employee3));
        divDisplay.appendChild(NewLine());
        divDisplay.appendChild(GetEmployeeInfo(employee4));
        divDisplay.appendChild(NewLine());
        divDisplay.appendChild(DisplayKeys(employee1));
        divDisplay.appendChild(HorizentalLine());
        divDisplay.appendChild(H1("Constructor and Initialize"));
        var newEmployee = new Employee(2001, "Created by a contructor !", 4000, 8);
        divDisplay.appendChild(GetEmployeeInfo(newEmployee));

        var human = newEmployee.GetHumanDepartment("Human Resource Management", "Amanda Seyfried");
        divDisplay.appendChild(HorizentalLine());
        divDisplay.appendChild(GetEmployeeInfo(human));

        divDisplay.appendChild(HorizentalLine());
        divDisplay.appendChild(H1("JavaScript Object in Array"));
        ArrayEmployees.forEach(element => {
            divDisplay.appendChild(GetEmployeeInfo(element));
            divDisplay.appendChild(NewLine());
        });

        // var chain = new ChainObject("Apple", 1000);
        // alert("Apple Price 0 : " + chain.Price);
        // chain.IncreasePrice(1000);
        // alert("Apple Price 1 : " + chain.Price);
        // chain.IncreasePrice(1000).IncreasePrice(1000);
        // alert("Apple Price 2 : " + chain.Price);

        // var doubleChain = chain.IncreasePrice(1000).IncreasePrice(1000);
        // alert("Apple price of double Chain object : " + doubleChain.Price);

        alert(NestedObject.FirstName + "\n" + NestedObject.Company.Name);

        var customer = new Customer("Angella", "Joie", "JavaScript Company", 500, "R&D Department");
        alert(customer.FirstName + "\n" + customer.Company.Name + "\n" + customer.Department.Name);
    }
)();