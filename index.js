let balance = 500.00;

class Withdrawal {

  constructor(amount) {
    this.amount = amount;
  }

  commit() {
    balance -= this.amount;
  }

}

// t1 = new Withdrawal(50.25);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', balance);

class Deposit {

  constructor(amount) {
    this.amount = amount;
  }

  commit() {
    balance += this.amount;
  }

}

t3 = new Deposit(120.00);
t3.commit();
console.log('Transaction 3:', t3);
