'use strict'
const assert = require('assert')

// The class should have the following fields:

// accountNumber - String representing the account number--
// owner - String representing the owner of the account--
// transactions - An array of transactions representing the history of all transactions associated with this account--
// The constructor should take in the following input:--

// accountNumber - The account Number--
// owner - The name of the person who owns this account--
// NOTE: When an account is created, you should initialize the transactions array to be an empty array--

// The class should have the following 3 methods:

// balance() - This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array.
// deposit(amt) - This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.
// NOTE: You should not be able to deposit a negative amount

// charge(payee, amt) - This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.

class BankAccount {
    constructor (accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }

    balance = () => {
        let currentBalance = 0
        for(let i=0; i < this.transactions.length; i++){
            currentBalance += this.transactions[i].amount
        }
        return currentBalance
    }

    deposit = (amt) => {

       let newDeposit = new Transaction (amt, 'Deposit', this.date)

        if(amt >= 0){
            this.transactions.push(newDeposit)
        }
        else {
            console.log("You have to deposit at least a penny")
        }
    }

    charge = (payee, amt) => {

        let newCharge = new Transaction (amt, payee, this.date)
        
        if(this.balance() > newCharge.amount){
        this.transactions.push(newCharge)
        }
        else{
            console.log("Insufficient funds")
        }
    }

}



// The class should have the following fields:

// date - The date of the transaction
// amount - The amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
// payee - The description or payee on the transaction
// The constructor should take in the following input:

// amount - The amount on the transaction
// payee - The payee or description on the transaction

class Transaction {
    constructor (amount, payee) {
        this.payee = payee
        this.amount = amount
        this.date = new Date()
    }
}

if (typeof describe === 'function'){
    describe('BankAccount', function(){
      it('bank account should have an account number, owner\'s name, and a transaction list', function(){
        const bankAccount1 = new BankAccount('1234567', 'Luke');
        assert.equal(bankAccount1.accountNumber, '1234567');
        assert.equal(bankAccount1.owner, 'Luke');
        assert.equal(bankAccount1.transactions.length, 0);
      }); // End of first test
    }); // End of testing BankAccount
    describe('Transaction', function(){
        it('should create transaction correctly for a deposit', function(){
          const newDeposit1 = new Transaction(100, 'Deposit');
          assert.equal(newDeposit1.amount, 100);
          assert.equal(newDeposit1.payee, 'Deposit');
        }); // End of second test
        it('should create transaction correctly for a charge', function(){
          const newCharge1 = new Transaction(50, 'Pizza');
          assert.equal(newCharge1.amount, 50);
          assert.equal(newCharge1.payee, 'Pizza');
        }); // End of third test
    }) // End of testing Transaction
} //End of all test
