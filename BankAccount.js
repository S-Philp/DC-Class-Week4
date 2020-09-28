class BankAccount {
    constructor(firstName, middleName, lastName = "", balance = 0, accountType) {
        this.balance = balance 
        this.accountType = accountType
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        if(this.balance >= 100) {
            this.status = "Open"
        } else {
            status = "Closed"
        }
    }

    deposit(amount) {
        this.balance += amount
        console.log(amount)
    }

    withdraw(amount) {
        this.balance -= amount
        console.log(amount)
    }

    overdraft(balance) {
        if(balance < 0) {
            balance -= 35
        }
    }

    statusUpdate(status) {
        this.status = status
    }

    transfer(amount, targetAcct) {
        this.balance -= amount
        targetAcct += amount
    }

}

let account = new BankAccount("Mary", "Sue", "Ross", 100, "checking") 
console.log(account)
account.deposit(75) 
console.log(account)