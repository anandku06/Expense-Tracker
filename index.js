class BudgetTracker{
    constructor(){
        this.transactions = this.loadTransactions()
        this.form = document.getElementById('transactionForm')
        this.transactionList = document.getElementById('transactionList')
        this.balanceElement = document.getElementById('balance')
    }
}

const budgetTracker = new BudgetTracker()