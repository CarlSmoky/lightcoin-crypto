let balance = 500.00;

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
}

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    // Calculate the balance using the transaction objects.
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}


const myAccount = new Account("Danny");

t1 = new Deposit(120.00, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(50.25, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Withdrawal(9.99, myAccount);
t3.commit();
console.log('Transaction 3:', t3);



console.log('Balance:', myAccount.balance);
