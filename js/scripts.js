function Bank() {
  this.accounts = {};
  this.id = 0;
}
//test
function Account(name, initialDeposit) {
  this.name = name;
  this.amount = initialDeposit;
}

Bank.prototype.assignId = function() {
  this.id += 1;
  return this.id;
}

Bank.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts[account.id] = account;
}


Account.prototype.deposit = function(money) {
  this.amount += money;
}

Account.prototype.withdraw = function(money) {
  if (this.amount - money < 0) {
    alert("Insufficient amount");
  } else {
    this.amount -= money;
  }
}

let bank = new Bank();
$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();
    const name = $("#newName").val();
    const initialDeposit = parseInt($("#initialDeposit").val());
    let newAccount = new Account(name, initialDeposit);
    bank.addAccount(newAccount);
    // alert(bank[1]);
  });
  $("#move-money").submit(function(event) {
    event.preventDefault();
    const id = parseInt($("#id").val());
    const deposit = parseInt($("#deposit").val());
    const withdraw = parseInt($("#withdraw").val());
    bank.accounts[id].deposit(deposit);
    bank.accounts[id].withdraw(withdraw);
    $("#output").text("$" + bank.accounts[id].amount);
  });
});