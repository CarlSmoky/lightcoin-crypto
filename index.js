let balance = 500.00;

class Withdrawal {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  // Update the balance in the account
  commit() {
    this.account.balance -= this.amount;
  }

}

class Deposit {

  // Pass in the account that the deposit this for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  // Update the balance in the account
  commit() {
    this.account.balance += this.amount;
  }
}

class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }

}


const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
console.log(myAccount);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', balance);
// t3 = new Deposit(120.00);
// t3.commit();
// console.log('Transaction 3:', t3);
