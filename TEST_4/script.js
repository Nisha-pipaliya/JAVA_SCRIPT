
// class
class BankAccount {
    constructor(Uname, Acnumber, DepositAmount) {
        this.Acnumber = Acnumber;
        this.Uname = Uname;
        this.DepositAmount = DepositAmount;
    }
}


// array::store data of this array
const bankAccounts = [];

const Display = () => {
    document.getElementById('tbody').innerHTML = "";
    bankAccounts.forEach((ele, index) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = ele.Acnumber;
        let td2 = document.createElement('td');
        td2.innerHTML = ele.Uname;
        let td3 = document.createElement('td');
        td3.innerHTML = ele.DepositAmount;
        tr.append(td1, td2, td3);
        document.getElementById("tbody").appendChild(tr);
    });
};

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    let data = new BankAccount(
        document.querySelector("#username").value,
        document.querySelector("#AcNo").value,
        parseFloat(document.querySelector("#amount").value)
    );
    bankAccounts.push(data);
    Display();
});



// work click to buy and ammout has DEBIT

const DebitAmount = (index, price) => {
    if (bankAccounts[index].DepositAmount >= price) {
        bankAccounts[index].DepositAmount -= price;
        Display();
        alert(`Purchase successful! ${price}.`);
    } else {
        alert('You cannot purchase the item'); //ammount available nahin hoga toh ae work karga ...
    }
};
// main attach in HTML and click to buy
document.querySelectorAll(".buy-button").forEach((button, index) => {
    button.addEventListener("click", () => {
        //..
        let price = parseFloat(button.previousElementSibling.querySelector(".price").innerText.replace('$', ''));
        // HTML mein me button ke andar div me H3 ko call karta hai 
        let accountIndex = 0;
        if (bankAccounts.length > 0) {
            DebitAmount (accountIndex, price);
        } else {
            alert('No accounts available.'); // account available nahin hoga tab ae work karga..
        }
    });
});
