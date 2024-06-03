
class Bank {
    #ammount;
    #balance;
    constructor(name, AccNo, addres, balance) {

        this.name = name;
        this.AccNo = AccNo;
        this.#ammount = ammount
        this.balance = 1000;
    }
    //deposit

    getammount() {
        return this.#ammount
    }
    setammount(ammount) {
        this.#ammount = this.#ammount;
    }

    deposit(amount) {
        this.balance += amount;
        return `Deposited $${amount}, ammount: $${this.balance}`;
    }

    displayDetails() {
        return `Nmae:${this.name},AccNo:${this.AccNo},ammount:${this.ammount}`
    }
 

    // Wiyhdraw ammount
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return `Withdraw $${amount} from account. New balance: $${this.balance}`;
        } else {
            return "entire fund is not valid";
        }
    }
}
// check
// console.log(Bank);

//display entire data 

let BankAccount = [];

const Display = () => {
    document.getElementById('tbody').innerHTML = "";
    BankAccount.forEach((ele, index) => {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = ele.name;
        let td2 = document.createElement('td');
        td2.innerHTML = ele.AccNo;
        let td3 = document.createElement('td');
        td3.innerHTML = ele.Addres;

    });
    tr.append(td1, td2, td3,);
    document.getElementById("tbody").appendChild(tr);
};

const handleBnakAccount = (e) => {
    e.preventDefault();
    let data = {
        name: document.querySelector('#name').value,
        AccNo: document.querySelector('#AccNo').value,
        addres: document.querySelector('#addres').value
    };
    BankAccount.push(data);
    // Display();
}; 

document.querySelector("#BankData").addEventListener("submit", handleBnakAccount); 


