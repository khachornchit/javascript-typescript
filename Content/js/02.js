var list=[];

function AddItemToExistingList() {
    var NoOfItems = list.length;

    list[NoOfItems] = document.getElementById("txtValue").value;
    DisplayResults();
}

function DisplayResults() {
    var n = list.length;
    document.getElementById("ItemCount").innerHTML = "Count of items added: " + n.toString();

    var ItemListDiv = document.getElementById("ItemList");
    var addDiv = document.createElement("div");
    addDiv.innerHTML = "Added new item " + (n).toString() + " : " + list[n-1];
    ItemListDiv.appendChild(addDiv);

    // while(ItemListDiv.hasChildNodes()) {
    //     ItemListDiv.removeChild(ItemListDiv.lastChild);
    // }
}