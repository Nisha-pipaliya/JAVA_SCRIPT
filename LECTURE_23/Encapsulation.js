
class BankAccount1 {
    constructor(acNo, username, num, amount) {
        this.acNo = acNo;
        this.username = username;
        this.num = num;
        this.amount = amount;
    }
}

let ac = new BankAccount1("1", "nisha", "001", 0);
console.log(ac);


class BankAccount2 {
    #username;
    #AcNo;
    #Num;
    #amount;
    
    constructor(acNo, username, num) {
        this.#AcNo = acNo;
        this.#username = username;
        this.#Num = num;
        this.#amount = 0;
    }

    // ACCOUNT [getter setter]
    getAccountNo() {
        return this.#AcNo;
    }

    setAccountNo(acNo) {
        this.#AcNo = acNo;
    }
     // AMMOUNT [getter setter]
    getAmount() {
        return this.#amount;
    }

    setAmount(amount) {
        this.#amount = amount;
    }

    // depositAmount
     depositAmount(amount){
        if (amount<1) {
            throw new Error("not able to do!")
        }
        else{
            this.#amount += amount
        }
     }
    //  CanWithdraw 

     #canwithdrow(reqAmt){
        if (this.#amount >= reqAmt) {
            true
        } else {
            false
        }
     }

     //withdraw 
     withdrowAmt(amount){
        if (amount<1) {
            throw new error("greater than 0");
        } else {
            if (this.#canwithdrow(amount)) {
                this.#amount-=amount
                console.log("success !!");
            } else {
                console.log("not success !!");
            }
        }
     }
}
let ac3=new BankAccount2("2", "NISHA", "00023")
try 
    {
        ac3.depositAmount(10)   
    }
 catch (error)
    {
        console.log("error",error);
    }

console.log(ac3.getAccountNo());
let ac2 = new BankAccount2("2", "NISHA", "0023");


console.log(ac2.getAmount()); 
ac2.setAmount(500);
console.log(ac2.getAmount()); 


console.log(ac2.getAccountNo()); 
ac2.setAccountNo("567");
console.log(ac2.getAccountNo()); 