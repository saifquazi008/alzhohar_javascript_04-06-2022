let shopItems = [
    { id: 101, item: "iphone", stock: 5, company: "apple", Dealer: "Tony", phone: "789224228" },
    { id: 102, item: "Mi 10 ultra", stock: 10, company: "Xiaomi", Dealer: "Rehzam", phone: "985251128" },
    { id: 103, item: "Mi 10 note pro", stock: 4, company: "Xiaomi", Dealer: "Haris", phone: "892524228" },
    { id: 104, item: "ViVO 9 pro max", stock: 7, company: "Vivo", Dealer: "Shahid", phone: "98887228" },
    { id: 105, item: "Samsung note 9", stock: 10, company: "Samsung", Dealer: "Asfar", phone: "795224228" },
]
function findItem(id) {
    let match = false;
    for (const item of shopItems) {
        if (item.id == id) {
            console.log(`The item id : '${item.id}',
                Item Name : '${item.item}',
                Available Stock : '${item.stock}',
                Company Name : '${item.company}',
                The Dealer : '${item.Dealer}',
            Contact Number : '${item.phone}'
            `);
            match = true;
            return item;
        }
    }
    if (!match) {
        console.log("account not found !");
        return null;
    }
}
function showItem() {
    alert("Wellcome To Shopwala Shop ! ");
    let id = prompt("Enter Shop Id : ");
    let stock = findItem(id);

}
function showStock() {
    let match = false;
    let id = prompt("Enter Item id for Stock :");
    for (const stock of shopItems) {
        if (stock.id == id) {
            console.log(`The item '${stock.item}'  Available Stock is :'${stock.stock}'`);
            match = true;
            return stock;
        }

    }
    if (!match) {
        console.log("Out Of Stocks !");
        return null;
    }
}
function sellItem() {
    alert("Wellcome To ShopWala Shop !");
    let id = prompt("Enter Item Id  for sale:");
    let stock = prompt(" Enter item  Quantity :");
    let sale = findItem(id);
    if (sale != null) {
        sale.stock -= stock;
        console.log(`The Sold item is '${sale.item}' and current stock is '${sale.stock}'`);
    }
}

function addStock() {
    alert("Wellcome to  ShopWala Shop !");
    let id = prompt("Enter id for add Stock :");
    let stock = prompt("Enter stock Quantity");
    let add = findItem(id);
    if (add != null) {
        add.stock += stock;
        console.log(`The item ${add.item} current stock is : ${add.stock}`);


    }
}


// findItem(103);
// showItem();
// showStock();
sellItem();
// addStock();


