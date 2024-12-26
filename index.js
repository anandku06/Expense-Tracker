class BudgetTracker{
    constructor(){
        this.transactions = this.loadTransactions()
        this.form = document.getElementById('transactionForm')
        this.transactionList = document.getElementById('transactionList')
        this.balanceElement = document.getElementById('balance')

        this.initEventListeners()
        this.renderTransactions()
        this.updateBalance()
    }

    loadTransactions(){
        return []
    }

    initEventListeners(){}

    renderTransactions(){}

    deleteTransaction(id){}

    updateBalance(){}
}

const budgetTracker = new BudgetTracker()