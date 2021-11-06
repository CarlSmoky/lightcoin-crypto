let balance = 500.00;

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {

  // Update the balance in the account
  // commit() {
  //   this.account.balance += this.amount;
  // }

  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {

  // Update the balance in the account
  // commit() {
  //   this.account.balance -= this.amount;
  // }

  get value() {
    return -this.amount;
  }

}


class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }

}


const myAccount = new Account("Danny");

t1 = new Deposit(120.00, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(50.25, myAccount);
t2.commit();
console.log('Transaction 2:', t2);
console.log(myAccount);

t3 = new Withdrawal(9.99, myAccount);
t3.commit();
console.log('Transaction 3:', t3);



console.log('Balance:', myAccount.balance);
