var MainFunction = function (a, b) {
    var divDisplay = document.createElement("div");
    var divNew = document.createElement('div');
    divNew.innerHTML = "I came from MainFunction() and a + b = " + (a + b);
    divDisplay.appendChild(divNew);

    function doLocalFunction1(a) {
        var divNew = document.createElement('div');
        divNew.innerHTML = "I came from doLocalFunction1() and a = " + a.toString();
        divDisplay.appendChild(divNew);
    }

    function doLocalFunction2(b) {
        var divNew = document.createElement('div');
        divNew.innerHTML = "I came from doLocalFunction2() and b = " + b;
        divDisplay.appendChild(divNew);
    }

    doLocalFunction1(a);
    doLocalFunction2(b);
    return divDisplay;
};

var months = [];
months[0] = function () {
    var divNew = document.createElement('div');
    divNew.innerHTML = "Array can contain function also. This is an month[0]() = Jan";
    return divNew;
};

months[1] = function () {
    var divNew = document.createElement('div');
    divNew.innerHTML = "Array can contain function also. This is an month[1]() = Feb";
    return divNew;
};

months[2] = function() {
    alert("I'm a function in array and this month is Mar");
};

months[3] = function() {
    alert("I'm a function in array and this month is Apr");
};

var Display = function (a, b) {
    var divDisplay = document.getElementById('display');
    divDisplay.innerHTML = "";
    divDisplay.appendChild(MainFunction(a, b));
    divDisplay.appendChild(months[0]());
    divDisplay.appendChild(months[1]());
};

function InnerToOuterFunction(a, b) {
    function Inner(a, b) {
        alert("Hi, I came from Inner Function! a + b = " + (a + b));
    };

    Inner(a,b);

    InnerToOuterFunction = function(a, b) {
        alert("Hi, I'm a function defining! a - b = " + (a-b));
    }
};

function ArrayAsFunction() {
    months.forEach(element => {
        element();
    });
};

function EventHandlerTest() {
    var btn = document.getElementById('btnEvent');
    btn.onclick = function () {
        alert('This is an Even Handlers function, is attached the button !');
    }
    btn.value = "Event Handler Button";
};

(
    function () {
        Display(7, 9);
        EventHandlerTest();
        InnerToOuterFunction(10,20);
        InnerToOuterFunction(10,20);
        InnerToOuterFunction(20,25);
        InnerToOuterFunction(40,60);
    }
)();