function BankAccount (accountNumber, Name, Type, balance){
    this.accountNumber = accountNumber;
    this.Name = Name;
    this.Type = Type;
    this.balance = balance;

    this.deposit = function(amount) {
        if (this.balance >= 0){
            this.balance += amount;
            console.log(this.balance)
        }
        else{
            console.log("account")
        }
      }

      this.withdraw = function(amount){
        if(amount <= this.balance){
            this.balance -= amount;


            console.log(this.balance)
        }
        else{
            console.log("balance is insufficient")
        }

        
      }

      this.checkBalance = function() {
        console.log("Account balance for " + this.name + " (" + this.accountNumber + "): " + this.balance);
    };

      
    this.isActive = function() {
        return this.balance > 0;
    };
}

function getTotalBalance(accounts) {
    let totalBalance = 0;
    accounts.forEach(function(account) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    });
    return totalBalance;
}

let account1 = new BankAccount("0101","chetan","saving",100)
let account2 = new BankAccount("0202", "Alice", "Checking", 200);
let account3 = new BankAccount("0303", "Bob", "Saving", 300);
console.log(account1)
account1.deposit(50);
console.log(account1.isActive());
account2.deposit(200);
account3.deposit(300);


let totalActiveBalance = getTotalBalance([account1, account2, account3]);
console.log(totalActiveBalance)

